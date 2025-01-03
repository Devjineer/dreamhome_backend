const craftHTMLDoc = ({
  firstname,
  lastname,
  phone,
  email,
  subject,
  message,
  name,
  isBotMail,
}) => {
  let html;
  
  if (isBotMail) {
    html = `
    <div class="container"> 
      <div class="header">New Bot Form Submission</div> 
  
      <div class="content"> 
        <p><strong>Name:</strong> ${name}</p> 
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p> 
      </div>

      <div class="footer"> 
        <p>Best regards,<br> ${name}</p> 
      </div> 
    </div>
    `;
  } else {
    html = `
    <div class="container"> 
      <div class="header">New Contact Form Submission</div> 
  
      <div class="content"> 
        <p><strong>Name:</strong> ${firstname} ${lastname}</p> 
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p> 
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p> <p>${message}</p>
      </div> 
      <div class="footer"> 
      <p>Best regards,<br> ${firstname} ${lastname}</p> </div> </div>
    `;
  }

  return html;
};

module.exports = craftHTMLDoc;
