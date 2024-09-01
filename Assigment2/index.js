 // 1. Variables and Data Types
 let personName = "Jonnny";
 let age = 25;
 let isStudent = true;
 console.log("Name:", personName, "- Type:", typeof personName);
 console.log("Age:", age, "- Type:", typeof age);
 console.log("Is Student:", isStudent, "- Type:", typeof isStudent);

 // 2. Basic Arithmetic Operations
 let num1 = 10;
 let num2 = 5;
 let addition = num1 + num2;
 let subtraction = num1 - num2;
 let multiplication = num1 * num2;
 let division = num1 / num2;
 console.log("Addition:", addition);
 console.log("Subtraction:", subtraction);
 console.log("Multiplication:", multiplication);
 console.log("Division:", division);

 // 3. Working with Strings
 let sentence = "Hello, welcome to the JavaScript world!";
 console.log("Length of the string:", sentence.length);
 console.log("First character:", sentence.charAt(0));
 console.log("Last character:", sentence.charAt(sentence.length - 1));

 // 4. Math Object
 let negativeNumber = -16;
 let squareRoot = Math.sqrt(Math.abs(negativeNumber));
 let squared = Math.pow(negativeNumber, 2);
 let absoluteValue = Math.abs(negativeNumber);
 console.log("Square Root:", squareRoot);
 console.log("Squared:", squared);
 console.log("Absolute Value:", absoluteValue);

 // 5. Boolean Logic and Comparison Operators
 let number1 = 15;
 let number2 = 20;
 console.log("Is number1 greater than number2?", number1 > number2);
 console.log("Is number1 less than number2?", number1 < number2);
 console.log("Is number1 equal to number2?", number1 === number2);

 // 6. Logical Operators
 let isSunny = true;
 let isWeekend = false;
 console.log("Logical AND:", isSunny && isWeekend);
 console.log("Logical OR:", isSunny || isWeekend);
 console.log("Logical NOT (isSunny):", !isSunny);





 // 7. Using Template Literals
 let firstName = "Otra";
 let lastName = "Sealong";
 let greetingMessage = `Hello, ${firstName} ${lastName}! NIce to mmeet youuu`;
 console.log(greetingMessage);