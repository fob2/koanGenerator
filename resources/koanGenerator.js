function koanGenerator(){
    let randomNum = Math.floor(Math.random() * 10);
    switch(randomNum){
        case 0:
            return "What was your original face before you were born?";
            break;
        case 1:
            return "What is the sound of one hand clapping?";
            break;
        case 2:
            return "When you do nothing, what can you do?";
            break;
        case 3:
            return "When the many are reduced to one, to what is the one reduced?";
            break;
        case 4:
            return "What is the colour of wind?";
            break;
        case 5:
            return "Why has a dog no Buddha nature?";
            break;
        case 6:
            return "If you meet the Buddha, kill the Buddha.";
            break;
        case 7:
            return "If you have a staff, I will give you a staff. If you have no staff, I will take it from you.";
            break;
        case 8:
            return "Mind is not the Buddha, reason is not the way.";
            break;
        case 9:
            return "A buffalo passes by the window. His head, horns, and four legs all go past. But why can't the tail pass too?";
            break;
    }
}

console.log(koanGenerator())