function change(){
    if(document.getElementById("login_form").style.display=='none') {
        document.getElementById("login_form").style.display='flex';
        document.getElementById("to_register").style.display='block';
        document.getElementById("register_form").style.display='none';
        document.getElementById("to_login").style.display='none';
    }
    else {
        document.getElementById("login_form").style.display='none';
        document.getElementById("to_register").style.display='none';
        document.getElementById("register_form").style.display='flex';
        document.getElementById("to_login").style.display='block';
    }
    return 0;
}