const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'hitanshshah123@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'hitanshshah123@gmail.com',
        subject: `Goodbye, ${name}`,
        text: `Is there anything we could have done to improve?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}