/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
const votingAge = 18;
console.log(votingAge > 18 ? true : false);

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let canDrink;
let age = 18;

if (age < 21) {
	canDrink = false;
} else {
	canDrink = true;
}

console.log(canDrink);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let str = '1999';
let modifiedStr = Number(str);

console.log(`Data Type: ${typeof modifiedStr} - Value: ${modifiedStr}`);

//Task d: Write a function to multiply a*b

const multiplyNums = (a, b) => {
	return a * b;
};

// function multiplyNums(a,b) {
//     return a * b;
// }

console.log(multiplyNums(2, 2));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

const toDogYears = (age) => {
	return age * 7;
};

console.log(toDogYears(10));

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

const dogFeeder = (age, pounds) => {
	if (age >= 1) {
		if (pounds <= 5) {
			return pounds * 0.05;
		} else if (pounds >= 6 && pounds <= 10) {
			return pounds * 0.04;
		} else if (pounds >= 11 && pounds <= 15) {
			return pounds * 0.03;
		} else {
			return pounds * 0.02;
		}
	}

	if (age < 1 && age >= 7 / 12) {
		return pounds * 0.04;
	} else if (age < 7 / 12 && age >= 4 / 12) {
		return pounds * 0.05;
	} else if (age < 4 / 12 && age >= 2 / 12) {
		return pounds * 0.1;
	} else if (age <= 1 / 12) {
		return 'mother';
	}
};

console.log(dogFeeder(1, 15));
console.log(dogFeeder(1 / 12, 1));

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

const rps = (choice) => {
	// Generates a random number between 0 - 2
	// 0 === rock , 1 === paper , 2 === scissors
	let computerChoice = Math.floor(Math.random() * 3);
	let playerChoiceString = choice.toLowerCase();
	let playerChoice = choice.toLowerCase();

	if (playerChoice === 'rock') {
		playerChoice = 0;
	} else if (playerChoice === 'paper') {
		playerChoice = 1;
	} else if (playerChoice === 'scissors') {
		playerChoice = 2;
	} else {
		return 'Please enter rock, paper, or scissors!';
	}

	let result;

	if (playerChoice === 0 && computerChoice === 0) {
		// Rock vs Rock
		result = 'Draw!';
	} else if (playerChoice === 0 && computerChoice === 1) {
		// Rock vs Paper
		result = 'Computer Wins!';
	} else if (playerChoice === 0 && computerChoice === 2) {
		// Rock vs Scissors
		result = 'You win!';
	} else if (playerChoice === 1 && computerChoice === 0) {
		// Paper vs Rock
		result = 'You win!';
	} else if (playerChoice === 1 && computerChoice === 1) {
		// Paper vs Paper
		result = 'Draw!';
	} else if (playerChoice === 1 && computerChoice === 2) {
		// Paper vs Scissors
		result = 'Computer Wins!';
	} else if (playerChoice === 2 && computerChoice === 0) {
		// Scissors vs Rock
		result = 'Computer wins!';
	} else if (playerChoice === 2 && computerChoice === 1) {
		// Scissors vs Paper
		result = 'You win!';
	} else {
		// Scissors vs Scissors
		result = 'Draw!';
	}

	// Int to string for computer's choice
	if (computerChoice === 0) {
		computerChoice = 'rock';
	} else if (computerChoice === 1) {
		computerChoice = 'paper';
	} else if (computerChoice === 2) {
		computerChoice = 'scissors';
	}

	return `
    Your Choice: ${playerChoiceString}
    Computer's Choice: ${computerChoice}
    ******* ${result} ********
    `;
};

console.log(rps('RoCk'));

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmToMiles(km) {
	return km * 0.621371;
}
console.log(kmToMiles(2));

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function feetToCm(ft) {
	return ft * 30.48;
}

console.log(feetToCm(2));

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(num) {
	for (i = num; i > 0; i--) {
		console.log(
			`${i} bottles of soda on the wall, ${i} bottles of soda, take one down pass it around. ${
				i - 1
			} bottles of soda on the wall.`
		);
	}
}

annoyingSong(10);

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

function gradeCalc(grade) {
	if (grade < 0 || grade > 100) {
		return 'Enter a grade between 0 and 100';
	}

	switch (true) {
		case grade >= 90 && grade <= 100:
			return 'A';
			break;
		case grade >= 80 && grade <= 89:
			return 'B';
			break;
		case grade >= 70 && grade <= 79:
			return 'C';
			break;
		case grade >= 60 && grade <= 69:
			return 'D';
		case grade < 60:
			return 'F';
			break;
		default:
			break;
	}
}

console.log(gradeCalc(90));
console.log(gradeCalc(80));
console.log(gradeCalc(70));
console.log(gradeCalc(60));
console.log(gradeCalc(50));
console.log(gradeCalc(-10));
console.log(gradeCalc(110));

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method
function countVowels(word) {
	const array = Array.from(word.toLowerCase());
	console.log(array);

	let count = 0;

	array.forEach((letter) => {
		console.log(count);
		if (
			letter == 'a' ||
			letter == 'e' ||
			letter == 'i' ||
			letter == 'o' ||
			letter == 'u'
		) {
			count = count + 1;
		}
	});

	return count;
}

console.log(countVowels('AEIOU'));
console.log(countVowels('aeiou'));
console.log(countVowels('eddie'));
/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
