function handleClick(event){
    event.preventDefault()
    let userInput=document.getElementsByTagName('input')[0].value;
    let passwordInput=document.getElementsByTagName('input')[1].value;
    document.getElementById('message').innerHTML = '';
    if(userInput==="admin" && passwordInput==="Dolphin"){
        document.getElementById("message").innerHTML="Login Successfull";
    }
    else{
        if(userInput!="admin"){
            document.getElementById('usernameMessage').innerHTML="Username is incorrect!";
            document.getElementById('usernameMessage').style.display = 'block';
        }
        if(passwordInput!="Dolphin"){
            document.getElementById('passwordMessage').innerHTML="Password is incorrect!";
            document.getElementById('passwordMessage').style.display = 'block';
        }
    }
}