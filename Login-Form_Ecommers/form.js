document.getElementById("formcontiner").addEventListener("submit",function data(e){
    e.preventDefault();
    let name=document.getElementById("name").value;
    let mail=document.getElementById("mail").value;
    let password=document.getElementById("password").value;
    let phno=document.getElementById("phno").value;
    // console.log(name);
    // console.log(mail);
    // console.log(password);
    // console.log(phno);
    let errormail=document.getElementById("errormail")
    let emailpattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailpattern.test(mail)){
        // alert("invalid mail")
        errormail.textContent="invalid email"
        return;
    }

    let errorpwd=document.getElementById("errorpwd")
    let errorpassword=/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/
    if(!errorpassword.test(password)){
        // alert("invalid password")
        errorpwd.textContent="invalid passwprd"
        return;

    }

    
    let userdata={
        name:name,
        mail:mail,
        password:password,
        phno:phno
    }
    console.log(userdata);
    localStorage.setItem("userdata",JSON.stringify(userdata))
    alert("registation succesfull!!!")
    window.location.href="./login.html"
})