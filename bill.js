var iPhone = 139900, onePlus = 69999, samsung = 105999, sony = 101490 ,samsaungTV=89990;
var iPhone_q=0, onePlus_q=0, samsung_q=0, sony_q=0, samsaungTV_q=0;
var name = "", email="";
var iPhoneBill="",onePlusBill="",samsungBill="",sonyBill="",samsaungTVBill;
var total_amount=0;

// function saveData(){
// let name,email,contactNumber,iPhone,onePlus,samsung,sony,samsaungTV
// name=document.getElementById("name").value;
// email=document.getElementById("email").value;
// contactNumber=document.getElementById("contactNumber").value;
// iPhone=document.getElementById("iPhone").value;
// samsaung=document.getElementById("samsung").value;
// sony=document.getElementById("sony").value;
// samsaungTV=document.getElementById("samsungTV").value;

// localStorage.setItem("name" ,name);
// localStorage.setItem("email" ,email);
// localStorage.setItem("contactNumber" ,contactNumber);
// localStorage.setItem("iPhone" ,iPhone);
// localStorage.setItem("samsung" ,samsung);
// localStorage.setItem("sony" ,sony);
// localStorage.setItem("samsungTV" ,samsaungTV);
// }


const form =document.getElementById("form");
form.addEventListener("submit", (e) =>{
e.preventDefault();

alert("Successfully Saved");
})

document.getElementById("name").addEventListener("keyup",function(){    
    document.getElementById("name2").innerHTML=this.value;
});

document.getElementById("email").addEventListener("keyup",function(){    
    document.getElementById("email2").innerHTML=this.value;
});

document.getElementById("contactNumber").addEventListener("keyup",function(){    
    document.getElementById("contactNumber2").innerHTML=this.value;
});

document.getElementById("iPhone").addEventListener("keyup",function(){
if(this.value==""||this.value==0){
    iPhoneBill="";
    iPhone_q=0;
    showBill();
}else{
    iPhone_q=this.value;
    iPhoneBill="<tr><td>iPhone</td><td>Rs. "+iPhone+"</td><td>"+iPhone_q+"</td><td>"+iPhone+"x"+iPhone_q+" = "+iPhone*iPhone_q+"</td></tr>";
    showBill();
}
});

document.getElementById("onePlus").addEventListener("keyup",function(){
if(this.value==""||this.value==0){
    onePlusBill="";
    onePlusq=0;
    showBill();
}else{
    onePlus_q=this.value;
    onePlusBill="<tr><td>onePlus</td><td>Rs. "+onePlus+"</td><td>"+onePlus_q+"</td><td>"+onePlus+"x"+onePlus_q+" = "+onePlus*onePlus_q+"</td></tr>";
    showBill();
}
});

document.getElementById("samsung").addEventListener("keyup",function(){
if(this.value==""||this.value==0){
    samsungBill="";
    samsung_q=0;
    showBill();
}else{
    samsung_q=this.value;
    samsungBill="<tr><td>samsung</td><td>Rs. "+samsung+"</td><td>"+samsung_q+"</td><td>"+samsung+"x"+samsung_q+" = "+samsung*samsung_q+"</td></tr>";
    showBill();
}
});

document.getElementById("sony").addEventListener("keyup",function(){
if(this.value==""||this.value==0){
    sonyBill="";
    sony_q=0;
    showBill();
}else{
    sony_q=this.value;
    sonyBill="<tr><td>sony</td><td>Rs. "+sony+"</td><td>"+sony_q+"</td><td>"+sony+"x"+sony_q+" = "+sony*sony_q+"</td></tr>";
    showBill();
}
});

document.getElementById("samsaungTV").addEventListener("keyup",function(){
    if(this.value==""||this.value==0){
        samsaungTVBill="";
        samsaungTV_q=0;
        showBill();
    }else{
        samsaungTV_q=this.value;
        samsaungTVBill="<tr><td>samsaungTV</td><td>Rs. "+samsaungTV+"</td><td>"+samsaungTV_q+"</td><td>"+samsaungTV+"x"+samsaungTV_q+" = "+samsaungTV*samsaungTV_q+"</td></tr>";
        showBill();
    }
    });


function showBill(){
    document.getElementById("bill").innerHTML=iPhoneBill+onePlusBill+samsungBill+sonyBill+samsaungTVBill; 
    document.getElementById("amount").innerHTML = iPhone*iPhone_q+onePlus*onePlus_q+samsung*samsung_q+sony*sony_q+samsaungTV*samsaungTV_q; 
}
