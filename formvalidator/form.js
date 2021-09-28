function validation(){
    var user=document.getElementById("user").value;
    var email=document.getElementById('email').value;
    var pass=document.getElementById('pass').value;
    var conpass=document.getElementById('conpass').value;

    // Validation for the username part
    if(user==""){
        document.getElementById('username').innerHTML="**Please enter your username";
        return false;
    }
    if((user.length <= 2)||(user.length > 15)){
        document.getElementById('username').innerHTML="**Username must be between 2 to 15 characters.";
        return false;
    }
    if(!isNaN(user)){
        document.getElementById('username').innerHTML="**Only characters are allowed.";
        return false;
    }
// validation for Email part

    if(email==""){
        document.getElementById('e-mail').innerHTML="**Please enter your registered email Id";
        return false;
    }
    if(email.indexOf('@') <= 0){
        document.getElementById('e-mail').innerHTML="**Please enter valid email Id";
        return false;
    }
    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
        document.getElementById('e-mail').innerHTML="**Please enter valid email Id";
        return false;
    }
    // Validation for password
    if(pass==""){
        document.getElementById('pass1').innerHTML="**Please enter your password";
        return false;
    }
    if((pass.length < 5)||(pass.length > 20)){
        document.getElementById('pass1').innerHTML="**Password must be between 5 to 20 characters";
        return false;
    }

    // Validation for confirm password
    if(conpass==""){
        document.getElementById('conpass1').innerHTML="**Please enter your password to confirm";
        return false;
    }
    if(pass!=conpass){
        document.getElementById('conpass1').innerHTML="**Passwords do not match.";
        return false;
    }
    
    

}