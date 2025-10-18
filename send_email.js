let nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    //service: 'Outlook365',
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    secure: false,
    auth: {
        user: 'e2b2c98227628c',
        pass: '837482374hdsjf'
    }
})
let mailOptions = {
    from: 'youremailid@gmail.com',
    to: 'Received@outlook.com',
    subject: 'Test Email from nodemailer',
    text: 'This is a test email sent using Node.js!'
};
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log('Error occurred: ' + error.message);
    } else {
        console.log('Email sent successfully: ' + info.response);
    }
}); 

