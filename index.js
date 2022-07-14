const nodemailer = require("nodemailer")


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "asad0011239@gmail.com",
        pass: "tlvevvkzajsperog"
    }
})

const mailOption = {
    from: "asadullaahmedripon@gmail.com",
    to: "asad0011239@gmail.com",
    subject: "subject",
    text: "How funny"
}

transporter.sendMail(mailOption, (err)=>{
    if(err){
        console.log(err.message)
    }else{
        console.log(mailOption)
    }
})
