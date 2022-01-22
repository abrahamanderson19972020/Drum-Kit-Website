const numOfDrums= document.querySelectorAll(".drum").length;
const audio_list = ["crash.mp3","kick-bass.mp3","snare.mp3","tom-1.mp3","tom-2.mp3","tom-3.mp3","tom-4.mp3"];
for(let i=0; i<numOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        let buttonText = this.innerHTML;
        makeSound(buttonText);
        buttonAnimation(buttonText);

        //const audio = new Audio(`./sounds/${audio_list[i]}`);
        //audio.play();
        //this.style.color="white";

});
}
document.addEventListener("keypress", function(event){
    makeSound(event.key)
    buttonAnimation(event.key);
});
function makeSound(key){
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    }
}

function buttonAnimation(currentKey){
    let activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function (){
        activeButton.classList.remove("pressed");
    },100);
};
// Creating a Consructive Function that can be applied to many objects as follows:
/*
function HouseKeeper(yearsOfExperience, name,cleaningResponsibilities){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningResponsibilities = cleaningResponsibilities;
    this.cleanRooms = function (){
        console.log("All the rooms are cleaned.");
        alert("Cleaning in progress");
    }
}
const newKeeper = new HouseKeeper(12,"Jane",["bderoom","bathroom"]);
console.log(newKeeper.yearsOfExperience);
console.log(newKeeper.name);
console.log(newKeeper.cleaningResponsibilities);
newKeeper.cleanRooms();*/