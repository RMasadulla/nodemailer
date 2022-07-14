const dotenv = require("dotenv");
dotenv.config({path:"./config.env"});

const express = require("express");
const app = express();
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 3001

//middleware
app.use(express.static("public"))
app.use(express.json())

app.get("/", (req, res) => {
    res.render("index")
})
app.post("/", (req, res) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        secure: true,
        auth: {
            user: process.env.UserMail,
            pass: process.env.UserPass
        }
    })
    const mailOptions = {
        from: `${req.body.name} <${req.body.email}>`,
        to: process.env.To,
        subject: req.body.subject,
        text: req.body.message
    }
    transporter.sendMail(mailOptions, (err, info)=>{
        if(err){
            console.log(err.message)
            res.send(err.message)
        }else{
            console.log("Email Sent :" + info.response)
            res.send("success")
        }
    })
})

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
})