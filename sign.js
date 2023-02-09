const regbtn = document.querySelector('#regbtn'); 
const signbtn = document.querySelector('#signbtn'); 
const formcover = document.querySelector('.formcover'); 
const body = document.querySelector('body'); 
const signinbox = document.querySelector('.signinbox'); 
const signupbox = document.querySelector('.signupbox'); 
const loginbtn = document.querySelector('#loginbtn'); 
const submitbtn = document.querySelector('#submitbtn');  

const username = document.querySelector('#username'); 
const password = document.querySelector('#password'); 
const firstname = document.querySelector('#firstname');  
const lastname = document.querySelector("#lastname"); 
const mail = document.querySelector('#mail'); 
const get_password = document.querySelector('#get_password'); 
const confirm_password = document.querySelector('#confirm_password'); 


regbtn.addEventListener('click',()=>{
    formcover.classList.add('active'); 
    body.classList.add('active'); 
    signinbox.classList.add('active'); 
    signupbox.classList.add('active'); 
}); 

signbtn.addEventListener('click',()=>{
    formcover.classList.remove('active');  
    body.classList.remove('active'); 
    signinbox.classList.remove('active'); 
    signupbox.classList.remove('active');  
}); 

loginbtn.addEventListener('click',()=>{ 
    if(username.value && password.value){
        open("Home.html");     
    }
}); 


submitbtn.addEventListener('click',()=>{ 
    if(get_password.value!==confirm_password.value){  
        alert("Passwords Don't match!!"); 
        get_password.value = confirm_password.value = '';  
    }if(lastname.value && firstname.value && mail.value && get_password.value){ 
        open('Home.html');  
    }else{
        alert('Invalid Credentials!!');  
    }
});