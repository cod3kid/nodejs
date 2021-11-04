const nodemailer = require('nodemailer')


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "sufailnode@gmail.com",
    pass: "auth123admin@"
  },

})

var mailOptions = {
  from: 'nodeboy@gmail.com',
  to: 'muhamedsufail777@gmail.com',
  subject: 'testing',
  text: "Hello this is a testing mail ... do not reply"
}

transporter.sendMail(mailOptions, (err, info) => {

  if (err) {
    console.log("Error" + err)
  }
  else {
    console.log(info.response)
  }
});