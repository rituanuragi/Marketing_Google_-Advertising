function sendMailGetLoan() {
  let parms = {
    getloan_name: document.getElementById("getLoanFormName").value,
    getloan_email: document.getElementById("getLoanFormEmail").value,
    getloan_contact: document.getElementById("getLoanFormContact").value,
  };

  emailjs.send("service_4p37zl4", "template_dqg2f3d", parms);
}

function sendMailPopUpForm() {
  let parms = {
    getloan_name: document.getElementById("popUpFormName").value,
    getloan_email: document.getElementById("popUpFormEmail").value,
    getloan_contact: document.getElementById("popUpFormContact").value,
  };

  emailjs.send("service_4p37zl4", "template_dqg2f3d", parms);
}

function sendMail() {
  let parms = {
    from_name: document.getElementById("contactFormName").value,
    from_email: document.getElementById("contactFormEmail").value,
    contactno: document.getElementById("contactFormContact").value,
  };
  emailjs.send("service_4p37zl4", "template_rc1wbg9", parms).then(() => {
    const alertMessage = alert("Email has been sent");
    setTimeout(() => {
      alertMessage.close();
    }, 1000);
  });
}
