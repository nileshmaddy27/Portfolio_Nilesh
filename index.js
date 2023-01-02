console.log("asdhfjkh0");
document.querySelector('.ham').style.display='none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    console.log("12");
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.cross').style.display='none';
    }
    else{
        document.querySelector('.cross').style.display='inline';
        document.querySelector('.ham').style.display='none';
    }
})