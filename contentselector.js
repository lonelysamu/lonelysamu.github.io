document.querySelector('body').addEventListener('click', (e) => {

    if (e.target.classList.contains("navbutton") == true) {
        y = Array.from(document.querySelector('body').getElementsByClassName("navbutton")).indexOf(e.target);
        console.log(y);
        if(y == 3){
            window.open(
                "https://drive.google.com/file/d/1K7560WOMEV8POp5gpodTiaG3H3CMWJMC/view?usp=sharing", "_blank");
        }
        else{
            document.querySelectorAll(".section")[y].classList.remove("d-none","fadetoright1");
            document.querySelectorAll(".section")[y].classList.add("fadefromleft1");
        }
    }
    if (e.target.classList.contains("backbutton") == true) {
        y = Array.from(document.querySelector('body').getElementsByClassName("backbutton")).indexOf(e.target);
        console.log(y);
        document.querySelectorAll(".section")[y].classList.add("fadetoright1");
        document.querySelectorAll(".section")[y].classList.remove("fadefromleft1");
    }
})


