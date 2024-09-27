import nodemailer from "nodemailer";

const sendInviteEmail = async (data, token) => {
  //console.log(token);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.PASSWORD_USER,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const options = {
    from: process.env.EMAIL_USER,
    to: data.email,
    replyTo: process.env.EMAIL_USER,
    subject: "Message From Salone Prauge",
    html: `
    <body>
    <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
      <div style="max-width: 700px; background-color: white; margin: 0 auto">
        <div style="width: 100%; background-color: #00efbc; padding: 20px 0">
        <a ><img
            src="https://res.cloudinary.com/dkbk51c9j/image/upload/v1666175300/logo_black_copydsd_d3azq9.png"
            style="width: 100%; height: 100px; object-fit: contain"
          /></a>

        </div>
        <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
          <p style="font-weight: 800; font-size: 1.2rem; padding: 0 30px">
            Hello,
          </p>
          <P style="width: 100%; gap: 10px; padding: 0px 20px; display: grid;">You have been invited to join Admin portal. You can use it to raise requests and get help. To set up your account, simply click on your link

Hope you will find Admin portal useful!</P>
<div align="center" class="alignment">
                                    <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.example.com" style="height:42px;width:165px;v-text-anchor:middle;" arcsize="10%" stroke="false" fillcolor="#ffc600"><w:anchorlock/><v:textbox inset="0px,0px,5px,0px"><center style="color:#000000; font-family:Georgia, serif; font-size:16px"><![endif]-->
                                    <a
                                      href="http://localhost:3000/register/?token=${token}"
                                      style="
                                        text-decoration: none;
                                        display: inline-block;
                                        color: #FFFFFF;
                                        background-color: #047AFF;
                                        border-radius: 4px;
                                        width: auto;
                                        border-top: 0px solid transparent;
                                        font-weight: 400;
                                        border-right: 0px solid transparent;
                                        border-bottom: 0px solid transparent;
                                        border-left: 0px solid transparent;
                                        padding-top: 5px;
                                        padding-bottom: 5px;
                                        font-family: Merriwheater, Georgia,
                                          serif;
                                        text-align: center;
                                        mso-border-alt: none;
                                        word-break: keep-all;
                                      "
                                      target="_blank"
                                      ><span
                                        style="
                                          padding-left: 25px;
                                          padding-right: 30px;
                                          font-size: 16px;
                                          display: inline-block;
                                          letter-spacing: normal;
                                        "
                                        ><span
                                          dir="ltr"
                                          style="
                                            word-break: break-word;
                                            line-height: 32px;
                                          "
                                          >Register Now</span
                                        ></span
                                      ></a
                                    >
                                    <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                  </div>
          <div style="font-size: .8rem; margin: 0 30px">
          </div>

          <div style="width: 100%; gap: 10px; padding: 0px 20px; display: grid">Best regards,</div>
          <div style="width: 100%; gap: 10px; padding: 0px 20px; display: grid">Team Salone Prauge</div>
        </div>
      </div>
    </div>
  </body>
        `,
  };

  // Send Email
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
      return err;
    } else {
      console.log(info);
      return info;
    }
  });
};

export default sendInviteEmail;
