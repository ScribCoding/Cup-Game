let boxes = document.getElementsByClassName("box");
let hovers = document.getElementsByClassName("hover");
let choices = document.getElementsByClassName("choice");
let reset_button = document.getElementById("reset_button");
let isSelected = false;
let winOrLoss = false;
let winStreak = 0;
let result_label = document.getElementById("result_display");
let win_streak_label = document.getElementById("win_streak_label")

currentSelection = 0;

//creating results boxes to track which box is the winner box
function result(winner){
    this.isWinner = false;
};

let results = [];

for(let i = 0; i<boxes.length; i++){
    results.push(new result(false));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function bonbonCreate(){
    newbonbon = document.createElement("img");
    newbonbon.setAttribute("src", "game_elements/bonbon.png");
    newbonbon.setAttribute("id", "bonbon");
    newbonbon.classList.add("bonbon")
    newbonbon.setAttribute("value", 1);
    return newbonbon;
  }

let bonbon = bonbonCreate();

function bonbonhide(bonbon, results){

    let choices = document.getElementsByClassName("choice");
    let choice_number = getRandomInt(3);

    results[choice_number].isWinner = true;//selects which result to be the winner based on bonbon position
    
    choice = document.getElementById(choices[choice_number].id)
    bonbon.value = choice_number;
    choice.appendChild(bonbon);
    isSelected = false; //resets selection after making new bon bon
}

bonbonhide(bonbon,results);

function reset_game(){
    document.getElementById("after_screen").classList.add("after_screen_hide");
    document.getElementById("after_screen").classList.remove("after_screen_show");
    let boxes = document.getElementsByClassName("box");
    for(let i = 0; i<boxes.length; i++){
            document.getElementById(boxes[i].id).classList.remove("lift");
        };
    setTimeout(function(){
        let bonbon = document.getElementById("bonbon");
        bonbon.remove();
    },200);
    setTimeout(function(){
        let bonbon = bonbonCreate();
        bonbonhide(bonbon,results);
    },200);

}



//BOX ANIMATIONS-------------------------------------------------
for(let i = 0; i<boxes.length; i++){
    (document.getElementById(hovers[i].id)).addEventListener("mouseenter", function (){
        if(isSelected==false){
            document.getElementById(boxes[i].id).classList.add("shake");
        } else {
            document.getElementById(boxes[i].id).classList.remove("shake"); 
        }
    });
}

for(let i = 0; i<boxes.length; i++){
    (document.getElementById(hovers[i].id)).addEventListener("mouseleave", function (){
        document.getElementById(boxes[i].id).classList.remove("shake");
    });
}


//RESET BUTTONS--------------------------------------------------
reset_button.addEventListener("click", reset_game);



//didtheywinfunction
function didWin(bonbon, currentSelection){
bonbon_position = bonbon.value;
selected_position = currentSelection;
if (bonbon_position == selected_position){
    document.getElementById("result_display").style.color = "#047bfb";
    document.getElementById("result_display").innerHTML = "YOU WON";
    winStreak++;
} else{
    document.getElementById("result_display").style.color = "#e5395d";
    document.getElementById("result_display").innerHTML = "YOU LOST";
    winStreak = 0;
}
}

const boxclick = () =>{
    for(let i = 0; i<boxes.length; i++){
        (document.getElementById(hovers[i].id)).addEventListener("click", function (){
            let bonbon = document.getElementById("bonbon");

        if(isSelected==false){
                document.getElementById(boxes[i].id).classList.add("lift");
                currentSelection = i;
               
                didWin(bonbon, currentSelection);
                setTimeout(() => {
                    document.getElementById(boxes[0].id).classList.add("lift");
                    document.getElementById(boxes[1].id).classList.add("lift"); 
                    document.getElementById(boxes[2].id).classList.add("lift");
                    document.getElementById("win_streak_label").innerHTML = "win streak: " + winStreak;
                    
                    setTimeout(() => {
                        document.getElementById("after_screen").classList.remove("after_screen_hide");
                        document.getElementById("after_screen").classList.add("after_screen_show");
                    }, 500);
                }, 1000);
            }
                document.getElementById(boxes[i].id).classList.remove("shake");
                isSelected = true;
        });
    }
}





boxclick();