

computeroptions = ['Rock','Paper','Scissors','Rock','Paper','Scissors','Rock','Paper','Scissors'];
score = [0,0];
const win = true;
const rock = document.querySelector("#rock");
const paper =document.querySelector("#paper");
const scissors = document.querySelector("#scissors"); 
const reset = document.querySelector("#reset");

rock.addEventListener("click",function(){
    game("Rock")
});
scissors.addEventListener("click",function(){
    game("Scissors")
});
paper.addEventListener("click",function(){
    game("Paper")
});
reset.addEventListener("click",resetfunction);


function game(choice){
    console.log(choice);
    
    computer = computeroptions[Math.floor(Math.random()*computeroptions.length)];
    console.log(computer);
    console.log();
    if (choice === computer){
        Result(`${choice} can not beat ${computer}. No point!!`); 
    }  else if((choice==="Rock")&&(computer==="Scissors")){
        Result(`${choice} wins from ${computer}. You get a point!!`)
        Addone('player');
    }   else if((choice==="Paper")&&(computer==="Rock")){
        Result(`${choice} wins from ${computer}. You get a point!!`)
        Addone('player');
    }else if((choice==="Scissors")&&(computer==="Paper")){
        Result(`${choice} wins from ${computer}. You get a point!!`);
        Addone('player');
    }else{
        Result(`${choice} loses from ${computer}. Computer gets a point`);
        Addone('computer');


    }
    const ifwin = wins();
    if (ifwin){
        paper.disabled = true;
        rock.disabled = true;
        scissors.disabled=true;
        reset.classList.remove('hidden')
    }

}

function Result(text){
    document.querySelector("#text").textContent=text
}



function Addone(anyscore){
    if (anyscore ==='player'){
        score[0]=score[0]+1;
        console.log(score[0]);
        document.querySelector("#playerscore").textContent = score[0];
    }  else{
        score[1]=score[1]+1;
        console.log(score[1]);
        document.querySelector("#computerscore").textContent = score[1];
    }
}


function wins(){
    if (score[0]===3){
        Result("You win this game!!!");
        return win;
    }else if(score[1]===3){
        Result("Computer wins this game ");
        return win;
    }
}

function resetfunction(){
    score[0] = 0;
    score[1] = 0;
    document.querySelector("#playerscore").textContent = score[0];
    document.querySelector("#computerscore").textContent = score[1];
    paper.disabled = false;
    rock.disabled = false;
    scissors.disabled=false;
    Result("The game starts again")
    reset.classList.add('hidden')

}