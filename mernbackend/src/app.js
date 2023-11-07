const express = require("express");
const app = express();
const path = require("path");

require("./db/conn");
const Student = require("./models/signup");

const port = 3000;

app.use(express.static(path.join(__dirname, "../public")));  // to access public folder

// to access views folder
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// Landing page
app.get('/', (req,res)=>{
    res.render("index");
});

// Login page
app.get('/login', (req,res)=>{
    res.render("login");
});

app.post('/login', async(req,res)=>{
    try {
        const regNo = req.body.regNo;
        const password = req.body.password;
        const userInfo = await Student.findOne({regNo:regNo});
        if(userInfo.password === password) {
            res.status(201).render("home");
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
        if(password === Cpassword) {
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
            res.status(201).render("home"); 
        } else {
            res.send("password are not matching")
        }
    } catch (error){
        res.status(400).send(error);
    }
});

// Home page
app.get("/home", (req,res)=>{
    res.render("home");
});



app.listen(port, ()=>{
    console.log("Server is running at port ", port);
});