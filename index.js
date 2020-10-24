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


const email = document.querySelector('.email');
const password = document.querySelector('.password');
const signInButton = document.getElementById('signInBtn');
const signUpButton = document.getElementById('singnUpBtn');
const msg = document.querySelector('.msg');
const success = document.getElementById('success');
const enterName = document.querySelector('.name');
let emailValid=false;
let passwordValid=false;
let nameValid = false;
const passwordRegEx =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;
//(?-.*[a-z]) password should contain atleast one lowercase letter
//(?=.*[A-Z]) password should contain atleast one uppercase letter
//(?=.*[0-9]) password should contain atleast one number
//(?=.*[!@#\$%\^&\*]) password should contain atleast one special charcter
//(?=.{6,}) string must be 8 chracter or longer
const wrongEmail = document.querySelector('.wrong-email');
const wrongPassword = document.querySelector('.wrong-password');
const wrongName = document.querySelector('.wrong-name');

enterName.addEventListener('blur',()=>{
 if(enterName.value){
   enterName.classList.add('outline');
   enterName.classList.remove('red-outline');
   nameValid=true;
   wrongName.innerHTML='';
 }
 else{
   enterName.classList.add('outline-red');
   enterName.classList.remove('outline');
   nameValid=false;
   wrongName.innerHTML='Please enter name';
 }
});

email.addEventListener('blur',()=>{
 const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 if(email.value.match(emailRegEx)){
   email.classList.add('outline');
   email.classList.remove('outline-red');
   wrongEmail.innerHTML='';
   emailValid=true;
 }
 else{
   console.log('flase');
   email.classList.add('outline-red');
   email.classList.remove('outline');
   wrongEmail.innerHTML='please fill correct email';
   emailValid=false;
 }
});

password.addEventListener('blur',()=>{
  const passwordRegEx =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;

if(password.value.match(passwordRegEx)){
  password.classList.add('outline');
   password.classList.remove('outline-red');
   wrongPassword.innerHTML='';
   passwordValid=true;
}
else{
  password.classList.add('outline-red');
  password.classList.remove('outline');
  wrongPassword.innerHTML='Password should have at least 1 uppercase letter, lowercase and special charcter'
  passwordValid=false;
}
})

signUpButton.addEventListener('click',(e)=>{
  e.preventDefault();
  if(passwordValid==false || emailValid==false || nameValid==false){
    if(passwordValid==false){
      wrongPassword.innerHTML='Please enter Password';
    }
    if(emailValid==false){
      wrongEmail.innerHTML='Please enter Email';
    }
    if(nameValid==false){
      wrongName.innerHTML='Please enter name';
    }
    
    console.log(passwordValid,emailValid);
  }
  else{
    wrongName.innerHTML='';
    console.log('suceesfully singned up');
    msg.classList.add('show');
    success.innerHTML=`<strong>Successfully</strong> singned up`;
    console.log(passwordValid,emailValid);
    setTimeout(()=>{
       msg.classList.remove('show');
    },1500)
  }
   
});



