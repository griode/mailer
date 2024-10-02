const nodemailer = require("nodemailer")

exports.sendMail = async (toEmail, subject, otpText, from, authPass, service) => {
    var transporter = nodemailer.createTransport({
        service: service,
        auth: {
            user: from,
            pass: authPass,
        },
    });

    var mailOptions = {
        from: from,
        to: toEmail,
        subject: subject,
        text: otpText,
    };
    result = await transporter.sendMail(mailOptions);
    return result
}