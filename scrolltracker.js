
let current = 0;
let previous = 0;
let currentsection = 0;

document.addEventListener('wheel', (e) => {

    current = getYPosition();
    numberofsection = document.querySelectorAll(".section").length - 1 ;
    heightofsection = window.innerHeight;

    quadrantsize = 100/numberofsection;

    for(i=0; i<=numberofsection;i++){
        if((((quadrantsize*i)+(quadrantsize/2))-current) >= 0) {
            currentsection =  i;
            console.log(currentsection);
            break
        }
    }

    if(current > previous){
        g = document.querySelectorAll(".hideoritillscroll");
        g.forEach(fadeoutall);
        gotonextsection();
    }
    else if ( previous > current){
        gotoprevioussection();
    }

    previous = current;
})

function getYPosition() {
    let fullheight = document.documentElement.scrollHeight;
    let top = window.pageYOffset || document.documentElement.scrollTop;
    let currentpos = (top / (fullheight - (window.innerHeight))) * 100;
    return currentpos;
}

function gotonextsection(){

    nextsection = (currentsection + 1)* window.innerHeight;
    window.scrollTo(0,nextsection);
    document.querySelectorAll(".hideoritillscroll")[currentsection + 1].classList.remove("fadeout");
    document.querySelectorAll(".hideoritillscroll")[currentsection + 1].classList.add("fadein");
}

function gotoprevioussection(){
    nextsection = (currentsection - 1)* window.innerHeight;
    window.scrollTo(0,nextsection);
}

function fadeoutall(item,index){
    if(item.classList.contains("fadein") == true){item.classList.remove("fadein");}
    else if(item.classList.contains("fadefromtop1") == true){item.classList.remove("fadefromtop1");}
    item.classList.add("fadeout");
}