const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const brypt=require('bcryptjs');

//database connection requiring models
require("./db/conn");
const Student = require("./models/signup");
const Complaint = require("./models/complaint");
const port = 8080;
const Professor = require("./models/professors");
const Manager = require("./models/managers");

//some middlewares
app.use(cors());
app.use(express.static(path.join(__dirname, "../public"))); 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// to access views folder
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "../views"));


//day
var today = new Date();
var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
};
let day = today.toDateString("en-US", options);


// Landing page
app.get('/', (req,res)=>{
    res.render("index");
});

// Login page
app.get('/login',(req,res)=>{
    res.render("login");
});

app.post('/login',async(req,res)=>{
    try {
        const regNo = req.body.regNo;
        const password = req.body.password;
        const userInfo = await Student.findOne({regNo:regNo});
        const check=await brypt.compare(password,userInfo.password)
        if(check) {
            res.redirect("/home?regNo="+regNo);
        } else {
            res.send("Invalid details");
        }
    } catch (error){
        res.status(400).send("Invalid details");
    }
});


// Signup page
app.get('/signup', (req,res)=>{
    res.render("signup");
});

app.post('/signup', async(req,res)=>{
    try {
        const password =req.body.password;
        const Cpassword = req.body.Cpassword;
       const existingUser= await Student.findOne({regNo:req.body.regNo})
        if(existingUser){
            res.status(409).json({msg:"Registration number already exists!"});
            res.redirect('/signup')
        }
        else if(password === Cpassword) {
            const student = new Student({
                Fname: req.body.Fname,
                Lname: req.body.Lname,
                regNo: req.body.regNo,
                hostel: req.body.hostel,
                branch: req.body.branch,
                roomNo: req.body.roomNo,
                password: req.body.password,
                Cpassword: req.body.Cpassword
            })
          
            const registered = await student.save();
            res.status(201).redirect('/login'); 
        } else {
            res.send("password are not matching")
        }
    } catch (error){
        res.status(400).send(error);
    }
});

//for complaints section
app.get("/:regNo/complaint",async function(req,res){
            try {
                await Complaint.find().sort({votes:-1})
                .then(allComplaints=>res.json(allComplaints))
                .catch(err=>res.json(err))
            } catch (err) {
                return res.json(err);
            }
     })
app.put("/:id/complaint/upvote",async function(req,res){
        try{
            const comp=await Complaint.findById(req.body.complaintId)
            await Complaint.findByIdAndUpdate(req.body.complaintId,{votes:comp.votes+1})
            await Complaint.find().sort({votes:-1})
            .then(allComplaints=>res.json(allComplaints))
            .catch(err=>res.json(err))
        }
        catch (err){
            return res.json(err);
        }
 })
 app.put("/:id/complaint/downvote",async function(req,res){
    try{
        const comp=await Complaint.findById(req.body.complaintId)
        await Complaint.findByIdAndUpdate(req.body.complaintId,{votes:comp.votes-1})
        await Complaint.find().sort({votes:-1})
        .then(allComplaints=>res.json(allComplaints))
        .catch(err=>res.json(err))
    }
    catch (err){
        return res.json(err);
    }
})

//Login-professor page

app.get('/login-professor', (req,res)=>{
    res.render("login-professor");
});

app.post('/login-professor', async (req,res)=>{
    try {
        const profId = req.body.profId;
        const password = req.body.password;
        const userInfo = await Professor.findOne({profId:profId});
        if(userInfo.password === password) {
            res.status(201).render("home" , {day: day});
        } else {
            res.send("Invalid details");
        }

    } catch (error){
        res.status(400).send("Invalid details");
    }
});

//Login-manager page

app.get('/login-manager', (req,res)=>{
    res.render("login-manager");
});

app.post('/login-manager', async (req,res)=>{
    try {
        const managerId = req.body.managerId;
        const password = req.body.password;
        const userInfo = await Manager.findOne({managerId:managerId});
        if(userInfo.password === password) {
            res.status(201).render("home" , {day: day});
        } else {
            res.send("Invalid details");
        }

    } catch (error){
        res.status(400).send("Invalid details");
    }
});

// Home page
app.get("/home",async(req,res)=>{
    const userInfo=await Student.findOne({regNo:req.query.regNo})
    res.render("home" , {day: day,userInfo:userInfo});
});

app.post('/:regNo/complaint/submit',async(req,res)=>{
  const newcomplaint=await new Complaint({regNo:req.body.regNo,complaint:req.body.complaintText})
  await newcomplaint.save();
  await Complaint.find().sort({votes:-1})
        .then(allComplaints=>res.json(allComplaints))
        .catch(err=>res.json(err))
})

app.listen(port, ()=>{
    console.log("Server is running at port ", port);
});
