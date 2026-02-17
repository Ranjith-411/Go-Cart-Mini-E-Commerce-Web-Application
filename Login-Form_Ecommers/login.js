
document.getElementById("formcontiner").addEventListener("submit",function data(e){
    e.preventDefault();
     let phno=document.getElementById("phno").value;
    let password=document.getElementById("password").value;
    let storedata=JSON.parse(localStorage.getItem("userdata"))
    console.log(storedata);
    console.log(phno);
    console.log(password);

    if(storedata.phno===phno && storedata.password===password){
        alert("log in successfully")
        window.location.href="../ECOMMERS/HOME.HTML"

    }else{
       alert("enter invalid credential")
    }
})