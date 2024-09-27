import nodemailer from "nodemailer";

const sendRemindEmail = async (data) => {
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
    to: data.client_email,
    replyTo: process.env.EMAIL_USER,
    subject: "Reminder From Salone Prauge",
    html: `
  <body
    style="
      background-color: #5f6571;
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: none;
      text-size-adjust: none;
    "
  >
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      class="nl-container"
      role="presentation"
      style="
        mso-table-lspace: 0;
        mso-table-rspace: 0;
        background-color: #5f6571;
      "
      width="100%"
    >
      <tbody>
        <tr>
          <td>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-1"
              role="presentation"
              style="mso-table-lspace: 0; mso-table-rspace: 0"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0;
                        mso-table-rspace: 0;
                        background-color: #ffc600;
                        color: #000;
                        width: 660px;
                      "
                      width="660"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                              padding-top: 0;
                              padding-bottom: 0;
                              border-top: 0;
                              border-right: 0;
                              border-bottom: 0;
                              border-left: 0;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="15"
                              cellspacing="0"
                              class="text_block block-1"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div style="font-family: sans-serif">
                                    <div
                                      class=""
                                      style="
                                        font-size: 12px;
                                        mso-line-height-alt: 14.399999999999999px;
                                        color: #000;
                                        line-height: 1.2;
                                        font-family: Merriwheater, Georgia,
                                          serif;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          font-size: 14px;
                                          text-align: center;
                                          mso-line-height-alt: 16.8px;
                                        "
                                      >
                                        <strong
                                          >$5 OFF YOUR NEXT CUT OR SHAVE — ALL
                                          SEASON LONG</strong
                                        >
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-2"
              role="presentation"
              style="mso-table-lspace: 0; mso-table-rspace: 0"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0;
                        mso-table-rspace: 0;
                        background-color: #26282c;
                        color: #000;
                        width: 660px;
                      "
                      width="660"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                              padding-top: 0;
                              padding-bottom: 0;
                              border-top: 0;
                              border-right: 0;
                              border-bottom: 0;
                              border-left: 0;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="image_block block-2"
                              role="presentation"
                              style="mso-table-lspace: 0; mso-table-rspace: 0"
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    width: 100%;
                                    padding-right: 0;
                                    padding-left: 0;
                                    padding-top: 55px;
                                  "
                                >
                                  <div
                                    align="center"
                                    class="alignment"
                                    style="line-height: 10px"
                                  >
                                    <img
                                      alt="Logo"
                                      src="https://res.cloudinary.com/dkbk51c9j/image/upload/v1666006649/logo_white_q2fopo.png"
                                      style="
                                        display: block;
                                        height: auto;
                                        border: 0;
                                        width: 297px;
                                        max-width: 100%;
                                      "
                                      title="Logo"
                                      width="297"
                                    />
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="image_block block-4"
                              role="presentation"
                              style="mso-table-lspace: 0; mso-table-rspace: 0"
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    width: 100%;
                                    padding-right: 0;
                                    padding-left: 0;
                                    padding-top: 55px;
                                  "
                                >
                                  <div
                                    align="center"
                                    class="alignment"
                                    style="line-height: 10px"
                                  >
                                    <img
                                      alt="Thank You. Here is your receipt."
                                      class="big"
                                      src="https://res.cloudinary.com/dkbk51c9j/image/upload/v1671374887/reminder_cover_jp5igl.jpg"
                                      style="
                                        display: block;
                                        height: auto;
                                        border: 0;
                                        width: 560px;
                                        max-width: 100%;
                                      "
                                      title="Thank You. Here is your booking."
                                      width="560"
                                    />
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="text_block block-6"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    padding-bottom: 10px;
                                    padding-left: 10px;
                                    padding-right: 10px;
                                    padding-top: 40px;
                                  "
                                >
                                  <div style="font-family: sans-serif">
                                    <div
                                      class=""
                                      style="
                                        font-size: 12px;
                                        mso-line-height-alt: 14.399999999999999px;
                                        color: #ffc600;
                                        line-height: 1.2;
                                        font-family: Merriwheater, Georgia,
                                          serif;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          font-size: 14px;
                                          text-align: center;
                                          mso-line-height-alt: 16.8px;
                                        "
                                      >
                                        We are glad to inform you that Your
                                        Booking is shaduled on tomorrow and
                                        will meet very soon
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="button_block block-7"
                              role="presentation"
                              style="mso-table-lspace: 0; mso-table-rspace: 0"
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    padding-bottom: 50px;
                                    padding-left: 10px;
                                    padding-right: 10px;
                                    padding-top: 10px;
                                    text-align: center;
                                  "
                                >
                                  <div align="center" class="alignment">
                                    <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.example.com" style="height:42px;width:165px;v-text-anchor:middle;" arcsize="10%" stroke="false" fillcolor="#ffc600"><w:anchorlock/><v:textbox inset="0px,0px,5px,0px"><center style="color:#000000; font-family:Georgia, serif; font-size:16px"><![endif]-->
                                    <a
                                      href="http://www.example.com"
                                      style="
                                        text-decoration: none;
                                        display: inline-block;
                                        color: #000000;
                                        background-color: #ffc600;
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
                                          >Heair Cut</span
                                        ></span
                                      ></a
                                    >
                                    <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-3"
              role="presentation"
              style="mso-table-lspace: 0; mso-table-rspace: 0"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0;
                        mso-table-rspace: 0;
                        background-color: #3e434d;
                        color: #000;
                        width: 660px;
                      "
                      width="660"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              border-left: 0 solid #26282c;
                              border-right: 0 solid #26282c;
                              vertical-align: top;
                              padding-top: 0;
                              padding-bottom: 0;
                              border-top: 0;
                              border-bottom: 0;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="5"
                              cellspacing="0"
                              class="divider_block block-1"
                              role="presentation"
                              style="mso-table-lspace: 0; mso-table-rspace: 0"
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div align="center" class="alignment">
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0;
                                        mso-table-rspace: 0;
                                      "
                                      width="100%"
                                    >
                                      <tr>
                                        <td
                                          class="divider_inner"
                                          style="
                                            font-size: 1px;
                                            line-height: 1px;
                                            border-top: 2px solid #5f6571;
                                          "
                                        >
                                          <span> </span>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-4"
              role="presentation"
              style="mso-table-lspace: 0; mso-table-rspace: 0"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0;
                        mso-table-rspace: 0;
                        background-color: #26282c;
                        color: #000;
                        width: 660px;
                      "
                      width="660"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                              padding-top: 0;
                              padding-bottom: 0;
                              border-top: 0;
                              border-right: 0;
                              border-bottom: 0;
                              border-left: 0;
                            "
                            width="100%"
                          >
                            <div
                              class="spacer_block"
                              style="
                                height: 30px;
                                line-height: 30px;
                                font-size: 1px;
                              "
                            >
                               
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-5"
              role="presentation"
              style="mso-table-lspace: 0; mso-table-rspace: 0"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content"
                      role="presentation"
                      style="
                        mso-table-lspace: 0;
                        mso-table-rspace: 0;
                        background-color: #3e434d;
                        color: #000;
                        width: 660px;
                      "
                      width="660"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              border-left: 30px solid #26282c;
                              padding-left: 60px;
                              padding-right: 60px;
                              vertical-align: top;
                              border-top: 0;
                              border-right: 0;
                              border-bottom: 0;
                            "
                            width="50%"
                          >
                            <table
                              border="0"
                              cellpadding="15"
                              cellspacing="0"
                              class="text_block block-2"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div style="font-family: Arial, sans-serif">
                                    <div
                                      class=""
                                      style="
                                        font-size: 12px;
                                        font-family: Arial, 'Helvetica Neue',
                                          Helvetica, sans-serif;
                                        mso-line-height-alt: 14.399999999999999px;
                                        color: #393d47;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          font-size: 14px;
                                          text-align: left;
                                          mso-line-height-alt: 16.8px;
                                        "
                                      >
                                        <span style="color: #ffffff"
                                          ><strong
                                            ><span style="font-size: 16px"
                                              >Full name</span
                                            ></strong
                                          ></span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td
                            class="column column-2"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              border-right: 30px solid #26282c;
                              padding-right: 60px;
                              vertical-align: top;
                              border-top: 0;
                              border-bottom: 0;
                              border-left: 0;
                            "
                            width="50%"
                          >
                            <table
                              border="0"
                              cellpadding="15"
                              cellspacing="0"
                              class="text_block block-2"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div style="font-family: Arial, sans-serif">
                                    <div
                                      class=""
                                      style="
                                        font-size: 12px;
                                        font-family: Arial, 'Helvetica Neue',
                                          Helvetica, sans-serif;
                                        mso-line-height-alt: 14.399999999999999px;
                                        color: #393d47;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          font-size: 14px;
                                          text-align: right;
                                          mso-line-height-alt: 16.8px;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 16px;
                                            color: #ffffff;
                                          "
                                          >${data.client_name}</span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-6"
              role="presentation"
              style="mso-table-lspace: 0; mso-table-rspace: 0"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0;
                        mso-table-rspace: 0;
                        background-color: #3e434d;
                        color: #000;
                        width: 660px;
                      "
                      width="660"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              border-left: 30px solid #26282c;
                              border-right: 30px solid #26282c;
                              vertical-align: top;
                              padding-top: 0;
                              padding-bottom: 0;
                              border-top: 0;
                              border-bottom: 0;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="5"
                              cellspacing="0"
                              class="divider_block block-1"
                              role="presentation"
                              style="mso-table-lspace: 0; mso-table-rspace: 0"
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div align="center" class="alignment">
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0;
                                        mso-table-rspace: 0;
                                      "
                                      width="100%"
                                    >
                                      <tr>
                                        <td
                                          class="divider_inner"
                                          style="
                                            font-size: 1px;
                                            line-height: 1px;
                                            border-top: 2px solid #5f6571;
                                          "
                                        >
                                          <span> </span>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-7"
              role="presentation"
              style="mso-table-lspace: 0; mso-table-rspace: 0"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content"
                      role="presentation"
                      style="
                        mso-table-lspace: 0;
                        mso-table-rspace: 0;
                        background-color: #3e434d;
                        color: #000;
                        width: 660px;
                      "
                      width="660"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              border-left: 30px solid #26282c;
                              padding-left: 60px;
                              vertical-align: top;
                              border-top: 0;
                              border-right: 0;
                              border-bottom: 0;
                            "
                            width="50%"
                          >
                            <table
                              border="0"
                              cellpadding="15"
                              cellspacing="0"
                              class="text_block block-2"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div style="font-family: Arial, sans-serif">
                                    <div
                                      class=""
                                      style="
                                        font-size: 12px;
                                        font-family: Arial, 'Helvetica Neue',
                                          Helvetica, sans-serif;
                                        mso-line-height-alt: 14.399999999999999px;
                                        color: #393d47;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          font-size: 14px;
                                          text-align: left;
                                          mso-line-height-alt: 16.8px;
                                        "
                                      >
                                        <span style="color: #ffffff"
                                          ><strong
                                            ><span style="font-size: 16px"
                                              >Email</span
                                            ></strong
                                          ></span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td
                            class="column column-2"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              border-right: 30px solid #26282c;
                              padding-right: 60px;
                              vertical-align: top;
                              border-top: 0;
                              border-bottom: 0;
                              border-left: 0;
                            "
                            width="50%"
                          >
                            <table
                              border="0"
                              cellpadding="15"
                              cellspacing="0"
                              class="text_block block-2"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div style="font-family: Arial, sans-serif">
                                    <div
                                      class=""
                                      style="
                                        font-size: 12px;
                                        font-family: Arial, 'Helvetica Neue',
                                          Helvetica, sans-serif;
                                        mso-line-height-alt: 14.399999999999999px;
                                        color: #393d47;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          font-size: 14px;
                                          text-align: right;
                                          mso-line-height-alt: 16.8px;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 16px;
                                            color: #ffffff;
                                          "
                                          >${data.client_email}</span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-8"
              role="presentation"
              style="mso-table-lspace: 0; mso-table-rspace: 0"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0;
                        mso-table-rspace: 0;
                        background-color: #3e434d;
                        color: #000;
                        width: 660px;
                      "
                      width="660"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              border-left: 30px solid #26282c;
                              border-right: 30px solid #26282c;
                              vertical-align: top;
                              padding-top: 0;
                              padding-bottom: 0;
                              border-top: 0;
                              border-bottom: 0;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="5"
                              cellspacing="0"
                              class="divider_block block-1"
                              role="presentation"
                              style="mso-table-lspace: 0; mso-table-rspace: 0"
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div align="center" class="alignment">
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0;
                                        mso-table-rspace: 0;
                                      "
                                      width="100%"
                                    >
                                      <tr>
                                        <td
                                          class="divider_inner"
                                          style="
                                            font-size: 1px;
                                            line-height: 1px;
                                            border-top: 2px solid #5f6571;
                                          "
                                        >
                                          <span> </span>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-9"
              role="presentation"
              style="mso-table-lspace: 0; mso-table-rspace: 0"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content"
                      role="presentation"
                      style="
                        mso-table-lspace: 0;
                        mso-table-rspace: 0;
                        background-color: #3e434d;
                        color: #000;
                        width: 660px;
                      "
                      width="660"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              border-left: 30px solid #26282c;
                              padding-left: 60px;
                              vertical-align: top;
                              border-top: 0;
                              border-right: 0;
                              border-bottom: 0;
                            "
                            width="50%"
                          >
                            <table
                              border="0"
                              cellpadding="15"
                              cellspacing="0"
                              class="text_block block-2"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div style="font-family: Arial, sans-serif">
                                    <div
                                      class=""
                                      style="
                                        font-size: 12px;
                                        font-family: Arial, 'Helvetica Neue',
                                          Helvetica, sans-serif;
                                        mso-line-height-alt: 14.399999999999999px;
                                        color: #393d47;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          font-size: 14px;
                                          text-align: left;
                                          mso-line-height-alt: 16.8px;
                                        "
                                      >
                                        <span style="color: #ffffff"
                                          ><strong
                                            ><span style="font-size: 16px"
                                              >Date/Time</span
                                            ></strong
                                          ></span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td
                            class="column column-2"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              border-right: 30px solid #26282c;
                              padding-right: 60px;
                              vertical-align: top;
                              border-top: 0;
                              border-bottom: 0;
                              border-left: 0;
                            "
                            width="50%"
                          >
                            <table
                              border="0"
                              cellpadding="15"
                              cellspacing="0"
                              class="text_block block-2"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div style="font-family: Arial, sans-serif">
                                    <div
                                      class=""
                                      style="
                                        font-size: 12px;
                                        font-family: Arial, 'Helvetica Neue',
                                          Helvetica, sans-serif;
                                        mso-line-height-alt: 14.399999999999999px;
                                        color: #393d47;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          font-size: 14px;
                                          text-align: right;
                                          mso-line-height-alt: 16.8px;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 16px;
                                            color: #ffffff;
                                          "
                                          >${data.date} ${data.time}</span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-10"
              role="presentation"
              style="mso-table-lspace: 0; mso-table-rspace: 0"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content"
                      role="presentation"
                      style="
                        mso-table-lspace: 0;
                        mso-table-rspace: 0;
                        background-color: #5f6571;
                        color: #000;
                        width: 660px;
                      "
                      width="660"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              border-left: 30px solid #26282c;
                              padding-left: 60px;
                              vertical-align: top;
                              border-top: 0;
                              border-right: 0;
                              border-bottom: 0;
                            "
                            width="50%"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="text_block block-2"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    padding-bottom: 20px;
                                    padding-left: 15px;
                                    padding-right: 15px;
                                    padding-top: 20px;
                                  "
                                >
                                  <div style="font-family: Arial, sans-serif">
                                    <div
                                      class=""
                                      style="
                                        font-size: 12px;
                                        font-family: Arial, 'Helvetica Neue',
                                          Helvetica, sans-serif;
                                        mso-line-height-alt: 14.399999999999999px;
                                        color: #393d47;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          font-size: 14px;
                                          text-align: left;
                                          mso-line-height-alt: 16.8px;
                                        "
                                      >
                                        <span style="color: #ffffff"
                                          ><strong
                                            ><span style="font-size: 16px"
                                              >Total</span
                                            ></strong
                                          ></span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td
                            class="column column-2"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              border-right: 30px solid #26282c;
                              padding-right: 60px;
                              vertical-align: top;
                              border-top: 0;
                              border-bottom: 0;
                              border-left: 0;
                            "
                            width="50%"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="text_block block-2"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    padding-bottom: 20px;
                                    padding-left: 15px;
                                    padding-right: 15px;
                                    padding-top: 20px;
                                  "
                                >
                                  <div style="font-family: Arial, sans-serif">
                                    <div
                                      class=""
                                      style="
                                        font-size: 12px;
                                        font-family: Arial, 'Helvetica Neue',
                                          Helvetica, sans-serif;
                                        mso-line-height-alt: 14.399999999999999px;
                                        color: #393d47;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          font-size: 14px;
                                          text-align: right;
                                          mso-line-height-alt: 16.8px;
                                        "
                                      >
                                        <strong
                                          ><span
                                            style="
                                              font-size: 16px;
                                              color: #ffffff;
                                            "
                                            >${data.price} LKR</span
                                          ></strong
                                        >
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-11"
              role="presentation"
              style="mso-table-lspace: 0; mso-table-rspace: 0"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0;
                        mso-table-rspace: 0;
                        background-color: #26282c;
                        color: #000;
                        width: 660px;
                      "
                      width="660"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                              padding-top: 0;
                              padding-bottom: 0;
                              border-top: 0;
                              border-right: 0;
                              border-bottom: 0;
                              border-left: 0;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="text_block block-1"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    padding-bottom: 15px;
                                    padding-left: 30px;
                                    padding-right: 30px;
                                    padding-top: 25px;
                                  "
                                >
                                  <div style="font-family: sans-serif">
                                    <div
                                      class=""
                                      style="
                                        font-size: 12px;
                                        mso-line-height-alt: 14.399999999999999px;
                                        color: #393d47;
                                        line-height: 1.2;
                                        font-family: Merriwheater, Georgia,
                                          serif;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          font-size: 14px;
                                          text-align: center;
                                          mso-line-height-alt: 16.8px;
                                        "
                                      >
                                        
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="social_block block-3"
                              role="presentation"
                              style="mso-table-lspace: 0; mso-table-rspace: 0"
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    padding-bottom: 15px;
                                    padding-left: 15px;
                                    padding-right: 15px;
                                    padding-top: 55px;
                                    text-align: center;
                                  "
                                >
                                  <div
                                    class="alignment"
                                    style="text-align: center"
                                  >
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="social-table"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0;
                                        mso-table-rspace: 0;
                                        display: inline-block;
                                      "
                                      width="184px"
                                    >
                                      <tr>
                                        <td style="padding: 0 7px 0 7px">
                                          <a
                                            href="https://www.facebook.com/"
                                            target="_blank"
                                            ><img
                                              alt="Facebook"
                                              height="32"
                                              src="https://res.cloudinary.com/dkbk51c9j/image/upload/v1666260744/facebook2x_vgtea0.png"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                              "
                                              title="facebook"
                                              width="32"
                                          /></a>
                                        </td>
                                        <td style="padding: 0 7px 0 7px">
                                          <a
                                            href="https://www.twitter.com/"
                                            target="_blank"
                                            ><img
                                              alt="Twitter"
                                              height="32"
                                              src="https://res.cloudinary.com/dkbk51c9j/image/upload/v1666260831/twitter2x_odu8sd.png"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                              "
                                              title="twitter"
                                              width="32"
                                          /></a>
                                        </td>
                                        <td style="padding: 0 7px 0 7px">
                                          <a
                                            href="https://www.linkedin.com/"
                                            target="_blank"
                                            ><img
                                              alt="Linkedin"
                                              height="32"
                                              src="https://res.cloudinary.com/dkbk51c9j/image/upload/v1666260813/linkedin2x_uimktg.png"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                              "
                                              title="linkedin"
                                              width="32"
                                          /></a>
                                        </td>
                                        <td style="padding: 0 7px 0 7px">
                                          <a
                                            href="https://www.instagram.com/"
                                            target="_blank"
                                            ><img
                                              alt="Instagram"
                                              height="32"
                                              src="https://res.cloudinary.com/dkbk51c9j/image/upload/v1666260794/instagram2x_kindfa.png"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                              "
                                              title="instagram"
                                              width="32"
                                          /></a>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="5"
                              cellspacing="0"
                              class="text_block block-4"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div style="font-family: sans-serif">
                                    <div
                                      class=""
                                      style="
                                        font-size: 12px;
                                        mso-line-height-alt: 14.399999999999999px;
                                        color: #393d47;
                                        line-height: 1.2;
                                        font-family: Merriwheater, Georgia,
                                          serif;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          font-size: 14px;
                                          text-align: center;
                                          mso-line-height-alt: 16.8px;
                                        "
                                      >
                                        <span style="color: #b6becf"
                                          >© 2022 Salon Prauge | All rights
                                          reserved.</span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="5"
                              cellspacing="0"
                              class="text_block block-5"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div style="font-family: sans-serif">
                                    <div
                                      class=""
                                      style="
                                        font-size: 12px;
                                        mso-line-height-alt: 14.399999999999999px;
                                        color: #393d47;
                                        line-height: 1.2;
                                        font-family: Merriwheater, Georgia,
                                          serif;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          font-size: 14px;
                                          text-align: center;
                                          mso-line-height-alt: 16.8px;
                                        "
                                      >
                                        <span style="color: #b6becf"
                                          >123 MAIN St. City Name, FL,
                                          34567</span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="text_block block-6"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    padding-bottom: 80px;
                                    padding-left: 20px;
                                    padding-right: 20px;
                                    padding-top: 20px;
                                  "
                                >
                                  <div style="font-family: sans-serif">
                                    <div
                                      class=""
                                      style="
                                        color: silver;
                                        font-size: 12px;
                                        mso-line-height-alt: 14.399999999999999px;
                                        line-height: 1.2;
                                        font-family: Merriwheater, Georgia,
                                          serif;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          font-size: 12px;
                                          text-align: center;
                                          mso-line-height-alt: 14.399999999999999px;
                                        "
                                      >
                                        <span style="color: #b6becf"
                                          >Changed your mind? You can
                                          <span style="font-size: 12px"
                                            ><a
                                              href="http://www.example.com"
                                              rel="noopener"
                                              style="
                                                text-decoration: underline;
                                                color: #b6becf;
                                              "
                                              target="_blank"
                                              >reshadule</a
                                            ></span
                                          >
                                          at any time.</span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-12"
              role="presentation"
              style="
                mso-table-lspace: 0;
                mso-table-rspace: 0;
                background-position: top center;
              "
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0;
                        mso-table-rspace: 0;
                        background-color: #231f20;
                        color: #000;
                        width: 660px;
                      "
                      width="660"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                              padding-top: 5px;
                              padding-bottom: 5px;
                              border-top: 0;
                              border-right: 0;
                              border-bottom: 0;
                              border-left: 0;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="html_block block-1"
                              role="presentation"
                              style="mso-table-lspace: 0; mso-table-rspace: 0"
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div
                                    align="center"
                                    style="
                                      font-family: Merriwheater, Georgia, serif;
                                      text-align: center;
                                    "
                                  >
                                    <div height="40"> </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-13"
              role="presentation"
              style="mso-table-lspace: 0; mso-table-rspace: 0"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0;
                        mso-table-rspace: 0;
                        color: #000;
                        width: 660px;
                      "
                      width="660"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                              padding-top: 5px;
                              padding-bottom: 5px;
                              border-top: 0;
                              border-right: 0;
                              border-bottom: 0;
                              border-left: 0;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="icons_block block-1"
                              role="presentation"
                              style="mso-table-lspace: 0; mso-table-rspace: 0"
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    vertical-align: middle;
                                    color: #9d9d9d;
                                    font-family: inherit;
                                    font-size: 15px;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    text-align: center;
                                  "
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0;
                                      mso-table-rspace: 0;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="alignment"
                                        style="
                                          vertical-align: middle;
                                          text-align: center;
                                        "
                                      >
                                        <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                        <!--[if !vml]><!--><table
                                          cellpadding="0"
                                          cellspacing="0"
                                          class="icons-inner"
                                          role="presentation"
                                          style="
                                            mso-table-lspace: 0;
                                            mso-table-rspace: 0;
                                            display: inline-block;
                                            margin-right: -4px;
                                            padding-left: 0;
                                            padding-right: 0;
                                          "
                                        ><!--<![endif]-->
                                          <tr>
                                            <td
                                              style="
                                                vertical-align: middle;
                                                text-align: center;
                                                padding-top: 5px;
                                                padding-bottom: 5px;
                                                padding-left: 5px;
                                                padding-right: 6px;
                                              "
                                            >
                                              <a
                                                href="https://www.designedwithbee.com/"
                                                style="text-decoration: none"
                                                target="_blank"
                                                ><img
                                                  align="center"
                                                  alt="Designed with BEE"
                                                  class="icon"
                                                  height="32"
                                                  src="https://res.cloudinary.com/dkbk51c9j/image/upload/v1666260877/bee_g3gzia.png"
                                                  style="
                                                    display: block;
                                                    height: auto;
                                                    margin: 0 auto;
                                                    border: 0;
                                                  "
                                                  width="34"
                                              /></a>
                                            </td>
                                            <td
                                              style="
                                                font-family: Merriwheater,
                                                  Georgia, serif;
                                                font-size: 15px;
                                                color: #9d9d9d;
                                                vertical-align: middle;
                                                letter-spacing: undefined;
                                                text-align: center;
                                              "
                                            >
                                              <a
                                                href="https://www.designedwithbee.com/"
                                                style="
                                                  color: #9d9d9d;
                                                  text-decoration: none;
                                                "
                                                target="_blank"
                                                >Designed with BEE</a
                                              >
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- End -->
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

export default sendRemindEmail;
