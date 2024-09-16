let dayNumber = prompt("Enter a number between 1 and 7");

dayNumber = parseInt(dayNumber);


switch (dayNumber) {


    case 1: 
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesdays");
    case 4:
        console.log("Wednesdays");
    case 5: 
        console.log("Thursdays");
    case 6:
        console.log("Friday");
    case 7:
        console.log("Saturday");
    default:
        console.log("Invalid Input, Please input a number between 1 and 7")
}