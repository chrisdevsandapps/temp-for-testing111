
window.addEventListener('load', () => {
    console.log("hello");

    const canvas = document.querySelector("#canvas111");
    
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth - 50;
    canvas.height = window.innerHeight - 50;

    context.fillRect(10, 10, canvas.width - 10, canvas.clientHeight - 10)
})