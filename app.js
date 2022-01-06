const menu = document.querySelector(".menu_btn");

let MenuOpen = false;

menu.addEventListener("click",  () => {
    if(!MenuOpen)
    {
        menu.classList.add('active');
        MenuOpen = true;
    }
    else
    {
        menu.classList.remove('active');
        MenuOpen =  false
    }
})