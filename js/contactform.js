function sendMail() {
  var params = {
    from_name: document.getElementById("fullname").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value

  }
 
    emailjs.send("service_xy347wu", "template_z2976yk", params).then(function (res) {
      swal({
        title: "Thank You for contact me!",
        text: "Message sent Successfully!",
        icon: "success",
        button: "ok!",
      })
    })

}









// const btn = document.querySelector('button');
// const inputs = document.querySelector('form');

// btn.addEventListener('click',()=>{
//     Email.send({
//       Host:"smtp.gmail.com",
//       Username:"dhirajbhirud.rmdssoe.comp@gmail.com",
//       Password:"218122A9A6875799006B41E2A4A2908F66DC",
//       To:"dhirajbhirud2699@gmail.com",
//       From:inputs.elements["email"].value,
//       subject:"New Enquiry",
//       Body: inputs.elements['message'].value + "<br>" + inputs.elements['name'].value +"<br>" + inputs.elements['subject'].value
//     }).then(msg=>alert("Message has been sent Successfully"))
// })