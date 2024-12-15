document.addEventListener('DOMContentLoaded', function() {
    window.onload = function() {
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      };
  
      const aboutMeSection = document.querySelector('.about-me');
      const container3 = document.querySelector('.container3');
      const Dalee = document.querySelector('.Dalee');
  
      function checkScroll() {
          const sectionPosition = aboutMeSection.offsetTop;
          const windowBottom = window.scrollY + window.innerHeight;
  
          if (windowBottom >= sectionPosition + (aboutMeSection.offsetHeight / 2)) {
              container3.style.opacity = 1;
              container3.style.transform = 'translateY(0)';
              Dalee.style.opacity = 1;
              Dalee.style.transform = 'translateY(0)';
          }
      }
  
      window.addEventListener('scroll', checkScroll);
  
      const buttons = document.querySelectorAll('button');
      buttons.forEach(button => {
          button.addEventListener('mouseover', () => {
              button.style.backgroundColor = '#787878';
              button.style.transform = 'scale(1.05)';
              button.style.transition = 'all 0.3s ease';
          });
          button.addEventListener('mouseout', () => {
              button.style.backgroundColor = '';
              button.style.transform = 'scale(1)';
          });
      });
  
      const imageItems = document.querySelectorAll('.image-item img');
      imageItems.forEach(img => {
          img.addEventListener('mouseover', () => {
              img.style.opacity = 0.8;
              img.style.transform = 'scale(1.1)';
              img.style.transition = 'all 0.3s ease';
          });
          img.addEventListener('mouseout', () => {
              img.style.opacity = 1;
              img.style.transform = 'scale(1)';
          });
      });
  
       const navLinks = document.querySelectorAll('header nav a');
      
      navLinks.forEach(link => {
          link.addEventListener('click', function(event) {
              event.preventDefault();
              const targetId = this.getAttribute('href');
              const targetElement = document.querySelector(targetId);
              if(targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
          });
      });
      
    const registrationFormSection = document.getElementById('registration-form-section');
      const openFormButton = document.querySelector('.Dalee');
      const closeFormButton = document.querySelector('.form button');
      const headerRegistrationButton = document.querySelector('header button');
      
      headerRegistrationButton.addEventListener('click', function(event) {
          event.preventDefault();
              registrationFormSection.style.display = 'flex';
              registrationFormSection.style.opacity = 1;
              registrationFormSection.scrollIntoView({behavior: "smooth", block: "center"});
      });
      
          openFormButton.addEventListener('click', function(event) {
              event.preventDefault();
              registrationFormSection.style.display = 'flex';
              registrationFormSection.style.opacity = 1;
              registrationFormSection.scrollIntoView({behavior: "smooth", block: "center"});
          });
  
      closeFormButton.addEventListener('click', function(event){
          event.preventDefault();
          registrationFormSection.style.display = 'none';
          registrationFormSection.style.opacity = 0;
      });
  
      window.addEventListener('click', function(event){
        if (event.target == registrationFormSection) {
          registrationFormSection.style.display = 'none';
          registrationFormSection.style.opacity = 0;
         }
       });
  
      const form = document.querySelector('.registration-form form');
      const emailInput = document.querySelector('#email');
      const errorMessage = document.querySelector('.error-message');
      const submitButton = document.getElementById('form-submit')
  
       
        const modal = document.getElementById('confirmationModal');
        const confirmButton = document.getElementById('confirmButton');
        const cancelButton = document.getElementById('cancelButton');
         
     submitButton.addEventListener('click', function(event){
          console.log('Submit button clicked');
          if(!emailInput.value.trim()){
             console.log('Email is empty'); 
             errorMessage.style.display = 'block';
           } else {
              console.log('Email is not empty');
              errorMessage.style.display = 'none';
              modal.style.display = 'flex';
           }
      });
      
 
         confirmButton.addEventListener('click', function() {
              
              console.log('Confirm button clicked')
              form.submit();
              modal.style.display = 'none'; 
           });
  
          
         cancelButton.addEventListener('click', function() {
          console.log('Cancel button clicked')
            modal.style.display = 'none';
         });
  
         
        window.addEventListener('click', function(event) {
          if (event.target === modal) {
            console.log('Clicked outside of modal')
             modal.style.display = 'none';
          }
      });
  });
  const regButton = document.getElementById('reg-button');
    const aboutMeSection = document.getElementById('about-me');
    const registrationFormSection = document.getElementById('registration-form-section');
    const submitButton = document.getElementById('form-submit');
    const modal = document.getElementById('confirmationModal');
    const confirmButton = document.getElementById('confirmButton');
    const cancelButton = document.getElementById('cancelButton');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');

    if (regButton) {
        regButton.addEventListener('click', function () {
            if (registrationFormSection) {
                registrationFormSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    const daleeButton = document.getElementById('dalee-button');
    if (daleeButton) {
    daleeButton.addEventListener('click', function() {
        if (registrationFormSection) {
            registrationFormSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
    }


    if (submitButton) {
        submitButton.addEventListener('click', function () {
            modal.style.display = 'block';
        });
    }

    if(emailInput){
        emailInput.addEventListener('input', function () {
             if (emailInput.value.trim() === '') {
                 emailError.style.display = 'block';
             } else {
                  emailError.style.display = 'none';
             }
         });
    }

    if(confirmButton){
        confirmButton.addEventListener('click', function(){
           const email = emailInput.value.trim();
           if(email === ''){
             emailError.style.display = 'block';
           }else{
              modal.style.display = 'none';
             alert('Форма отправлена!');
           }
        });
    }
    if (cancelButton) {
        cancelButton.addEventListener('click', function () {
           modal.style.display = 'none';
        });
     }
