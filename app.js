const from = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const c_password = document.getElementById("c-password");
const data ={};


from.addEventListener('submit',(e)=>{
     e.preventDefault();
     cheakInput();
     getdata();
     cleanInputField();
   
})


//================================================================== 

function cheakInput(){
 
   // trim to remove the white spaces

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const c_passwordValue = c_password.value.trim();
    
    //==================================================
    
    
    // Write a logic which will not allow special characters in username

    if(usernameValue ===""){
        setErrorFor(username,"Username cannot be blank");
    }else if(usernameValue.length < 5){
        setErrorFor(username,"Username cannot be less than 5 characters");
    }else if(usernameValue.length > 12){
        setErrorFor(username,"Username cannot be more than 12 characters")
    }else{
        setSuccessFor(username,usernameValue);
    }

// =================================================================

if(emailValue === ""){
    setErrorFor(email,"Email cannot be blank")
}else if(!isEmail(emailValue)){
    setErrorFor(email, "Not a valid email" )
}else{
    setSuccessFor(email,emailValue)
}

//====================================================================

if(passwordValue === "" ){
    setErrorFor(password, "Password cannot be blank")
}else{
    setSuccessFor(password,passwordValue)
}


//=====================================================================

if(c_passwordValue === ""){
    setErrorFor(c_password, "Confirm password cannot be blank")
}else if(passwordValue !== c_passwordValue){
    setErrorFor(c_password, "Passwords does not match")
}else{
    setSuccessFor(c_password,c_passwordValue)
}


}



// ===================  SET ERROR Function ========================

function setErrorFor(Input,message){
    const formControl = Input.parentElement;
    const small = formControl.querySelector("small");
    Input.className="red";
    small.className = "show";
    small.innerText = message;
}

// ===================  SET SUCCESS Function ========================

function setSuccessFor(Input,v){
    const formControl = Input.parentElement;
    const small = formControl.querySelector("small");
    small.className = "show";
    small.innerText = '';
    Input.className="green";
    let id =Input.getAttribute("id");
    data[id]=v;

}




//===================  Regex ====================================


function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( email);
  }


// ===================== Get data ======================

function getdata(){
    console.log(data);
}


  // ====================== Clean Input Box ===============

  function cleanInputField(){

    username.value="";
    email.value="";
    password.value="";
    c_password.value="";

  }