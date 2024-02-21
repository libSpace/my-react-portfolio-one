import './Reach.css';
import emailjs from 'emailjs-com';
export default function Validation(values) {
    const errors = {};

    const email_pattern = /^[^\s@]+@[^\s@]+.[^\s@]{2,6}$/;
    
    if(values.name ===""){
        errors.name = "Name is Required";
    }
    
    if(values.message ===""){
        errors.message = "Message is Required";
    } 

    if(values.email ===""){
        errors.email ="Email is required";
    }else if(!email_pattern.test(values.email)){
        errors.email = "Email did not match";
    } 
   
    if (Object.keys(errors).length === 0) {
        // Send email using emailjs
        const serviceID = "service_8h7egp3";
        const templateID = "template_yjjp0mr";
        const publicKey = "9uh1U_4h3RWE2rxUd";
      
        emailjs.send(serviceID, templateID, values, publicKey)
          .then((response) => {
            console.log("Email sent successfully!", response);
            // Clear form values after successful submission
            
            window.alert("Email sent successfully!");
            // You may want to reset the form values here if needed
           
          })
          .catch((error) => {
            console.error("Error sending email:", error);
          });

        

      }
      



    
    
    
    return errors;   
}
