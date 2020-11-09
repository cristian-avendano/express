var cerrar = document.getElementById("cerrar");

cerrar.addEventListener('click', (event)=>{
    document.getElementById('form').style.visibility = "hidden";
    event.preventDefault();
})