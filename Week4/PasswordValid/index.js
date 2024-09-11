let correctPassword;
let inputPassword;

correctPassword = prompt("Please set your password")


do {

    inputPassword = prompt("Please enter your password:");

    if (inputPassword != correctPassword) {
        alert("incorrect password:");
    }

    if (inputPassword == correctPassword) {
        alert("Your password is correct!");

    }

}

while (inputPassword !== correctPassword) {
    alert("Password validate Success")

}

