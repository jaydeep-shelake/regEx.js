const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');
const container = document.getElementById('container');

signUpBtn.addEventListener('click',()=>{
  container.classList.add('right-panel-active')
  
});

signInBtn.addEventListener('click',()=>{
  container.classList.remove('right-panel-active');

});

//regex

const email = document.querySelectorAll('.email');
const password = document.querySelectorAll('.password');
const signInButton = document.getElementById('signInBtn');
const signUpButton = document.getElementById('singnUpBtn');

const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegEx =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;
//(?-.*[a-z]) password should contain atleast one lowercase letter
//(?=.*[A-Z]) password should contain atleast one uppercase letter
//(?=.*[0-9]) password should contain atleast one number
//(?=.*[!@#\$%\^&\*]) password should contain atleast one special charcter
//(?=.{6,}) string must be 8 chracter or longer
const wrongEmail = document.querySelector('.wrong-email');
const wrongPassword = document.querySelector('.wrong-password');
email.forEach((email)=>{
    email.addEventListener('input',()=>{
        const inputValue=email.value;
            if(inputValue.match(emailRegEx)){
              email.classList.add('outline');
              email.classList.remove('outline-red');
              wrongEmail.innerHTML='';
              signUpButton.addEventListener('click',()=>{
                 wrongEmail.innerHTML='';
              });
            }
            else{
                email.classList.add('outline-red');
                email.classList.remove('outline');
                signUpButton.addEventListener('click',()=>{
                  wrongEmail.innerHTML=`wrong email`
                })
            }
    });  
})

password.forEach((password)=>{
    password.addEventListener('input',()=>{
      const passwordValue = password.value;
      if(passwordValue.match(passwordRegEx)){
          password.classList.add('outline');
          password.classList.remove('outline-red');
          wrongPassword.innerHTML='';
          signUpButton.addEventListener('click',()=>{
            wrongPassword.innerHTML='';
          })
          
      }
      else{
          password.classList.add('outline-red');
          password.classList.remove('outline');
          
            signUpButton.addEventListener('click',()=>{
                wrongPassword.innerHTML=`Password should have uppercase letter lowercase and special chactecter`
            });
          
          
      }

    });
});


