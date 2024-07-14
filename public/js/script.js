const nav = document.querySelector('#navbar')
fetch('../public/navigation/navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML = data
});


const footer = document.querySelector('#ftr-wrp')
fetch('../public/navigation/footer.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML = data
});
