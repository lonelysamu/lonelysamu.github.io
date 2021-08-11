document.querySelector('#skillselect').addEventListener('click', (e) => {
if(e.target.classList.contains("badge")==true){
    b = Array.from(document.querySelector('#skillselect').getElementsByClassName("badge")).indexOf(e.target);

    document.querySelectorAll(".contentcard").forEach(hideall);
    document.querySelectorAll(".selectable").forEach(unactivateall);
    if(b== 0){
        document.querySelectorAll(".contentcard").forEach(showall);
        document.querySelectorAll(".selectable").forEach(ununactivateall);
    }
    else if(b== 1){
        document.querySelectorAll(".HTML").forEach(showall);
        e.target.classList.remove("unactivated");
    }
    else if(b== 2){
        document.querySelectorAll(".CSS").forEach(showall);
        e.target.classList.remove("unactivated");
    }
    else if(b== 3){
        document.querySelectorAll(".JS").forEach(showall);
        e.target.classList.remove("unactivated");
    }
    else if(b== 4){
        document.querySelectorAll(".Cplusplus").forEach(showall);
        e.target.classList.remove("unactivated");
    }
    else if(b== 5){
        document.querySelectorAll(".Python").forEach(showall);
        e.target.classList.remove("unactivated");
    }
    else if(b== 6){
        document.querySelectorAll(".WP").forEach(showall);
        e.target.classList.remove("unactivated");
    }
    else if(b== 7){
        document.querySelectorAll(".PM").forEach(showall);
        e.target.classList.remove("unactivated");
    }
    else if(b== 8){
        document.querySelectorAll(".RA").forEach(showall);
        e.target.classList.remove("unactivated");
    }
}

})

function showall(item,index){
    if(item.parentElement.parentElement.classList.contains("d-none")==true){
        item.parentElement.parentElement.classList.remove("d-none");   
        item.parentElement.parentElement.classList.add("fadefromleft1");
        num = Array.from(document.querySelector('#portfoliocontainer').getElementsByClassName("badgecontent")).indexOf(item.parentElement.parentElement);
        document.querySelectorAll(".badgesection")[num].classList.remove("d-none");
        document.querySelectorAll(".badgesection")[num].classList.add("fadefromleft1");
    }
    item.classList.remove("d-none");
    item.classList.add("fadefromleft1");
}

function hideall(item,index){
    if(item.parentElement.parentElement.classList.contains("d-none")==false){
        item.parentElement.parentElement.classList.add("d-none");   
        item.parentElement.parentElement.classList.remove("fadefromleft1");
        num = Array.from(document.querySelector('#portfoliocontainer').getElementsByClassName("badgecontent")).indexOf(item.parentElement.parentElement);
        document.querySelectorAll(".badgesection")[num].classList.add("d-none");
        document.querySelectorAll(".badgesection")[num].classList.remove("fadefromleft1");
    }
    item.classList.add("d-none");
    item.classList.remove("fadefromleft1");

}

function ununactivateall(item,index){
    item.classList.remove("unactivated");

}

function unactivateall(item,index){
    if(item.classList.contains("unactivated")==false){
        item.classList.add("unactivated");
    }
}