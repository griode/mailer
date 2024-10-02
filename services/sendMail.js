const nodemailer = require("nodemailer")

exports.sendMail = async (toEmail, subject, otpText) => {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NODEMAILER_EMAIL || "mrisakd@gmail.com",
            pass: process.env.NODEMAILER_PW || "dehp kbkb kqhc nqjt",
        },
    });

    var mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: toEmail,
        subject: subject,
        text: otpText,
    };
    result = await transporter.sendMail(mailOptions);
    return result
}