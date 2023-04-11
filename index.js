var NumberofDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<NumberofDrumButtons; i++)

document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
});
        
    {}
    document.addEventListener('keypress',function(event){
        makeSound(event.key)
    });
    
    function makeSound (key){
        switch (key) {
            case "w":
                var Siren = new Audio('https://github.com/cstallworth3/clapout/blob/main/808Siren.wav?raw=true');
                Siren.play();
                break;
    
                case "a":
                    var Kick = new Audio("https://github.com/cstallworth3/clapout/blob/main/SouthsideKick.wav?raw=true");
                    Kick.play();
                    break;
                    
                    case 's':
                        var Snare = new Audio ("https://github.com/cstallworth3/clapout/blob/main/MetroSnare.wav?raw=true");
                        Snare.play();
                        break;
    
                        case 'd':
                    var Clap = new Audio("https://github.com/cstallworth3/clapout/blob/main/MetroClap.wav?raw=true");
                    Clap.play();
                    break;
    
                    case 'j':
                    var HiHat = new Audio("https://github.com/cstallworth3/clapout/blob/main/MetroHiHat.wav?raw=true");
                    HiHat.play();
                    break;
    
                    case 'k':
                    var Southside808 = new Audio("https://github.com/cstallworth3/clapout/blob/main/Southside808.wav?raw=true");
                    Southside808.play();
                    break; 
    
                    case 'l':
                    var Cymbol = new Audio("https://github.com/cstallworth3/clapout/blob/main/CartelCymbol.wav?raw=true");
                    Cymbol.play();
                    break;
    }}