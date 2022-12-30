let boxes = document.getElementsByClassName("box");
let hovers = document.getElementsByClassName("hover");
let choices = document.getElementsByClassName("choice");
let reset_button = document.getElementById("reset_button");

for(let i = 0; i<boxes.length; i++){
    console.log(document.getElementById(boxes[i].id));
    (document.getElementById(hovers[i].id)).addEventListener("click", function (){
        document.getElementById(boxes[i].id).classList.add("lift");
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function bonbonCreate(){
    newbonbon = document.createElement("img");
    newbonbon.setAttribute("src", "game_elements/bonbon.png");
    newbonbon.setAttribute("id", "bonbon");
    newbonbon.classList.add("bonbon")
    return newbonbon;
  }

let bonbon = bonbonCreate();

function bonbonhide(bonbon){

    let choices = document.getElementsByClassName("choice");
    let choice_number = getRandomInt(3);
    
    choice = document.getElementById(choices[choice_number].id)
    choice.appendChild(bonbon);
}

bonbonhide(bonbon);

const game_reset = (boxes) =>{
    console.log("lol");
    for(let i = 0; i<boxes.length; i++){
            document.getElementById(boxes[i].id).classList.remove("lift");
        };
}


function reset_game(){
    let boxes = document.getElementsByClassName("box");
    for(let i = 0; i<boxes.length; i++){
            document.getElementById(boxes[i].id).classList.remove("lift");
        };
    setTimeout(function(){
        let bonbon = document.getElementById("bonbon");
        bonbon.remove();
    },500);
    setTimeout(function(){
        let bonbon = bonbonCreate();
        bonbonhide(bonbon);
    },600);

}

reset_button.addEventListener("click", reset_game);