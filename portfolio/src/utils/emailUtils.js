import emailjs from 'emailjs-com';

export const sendEmail = (templateParams, onSuccess, onError) => {
  emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,   // EmailJS service ID
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,  // EmailJS template ID
    templateParams,
    process.env.REACT_APP_EMAILJS_USER_ID       // EmailJS user/public key
  )
  .then(response => onSuccess(response))
  .catch(error => onError(error));
};
