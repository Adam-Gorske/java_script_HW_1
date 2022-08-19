//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords() {
    for (let i = 0; i < dog_names.length; i++) {
        if (dog_string.includes(dog_names[i])) {
            console.log(`Matched ${dog_names[i]}`)
        } else {
            console.log('No Matches') 
        }
    }
    return 'Harvesting complete'
}

console.log(findWords())



//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let givenArray = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens() {
    for (let i = 0; i < givenArray.length; i++) {
        if(i % 2 == 0) {
            givenArray.splice(i, 1, "even index");
        }
    }
    return givenArray
}

console.log(replaceEvens())

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



// CODE WARS PROBLEMS


/* 
EXERCISE #3

Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".*/

function greet(name) {
    return `Hello, ${name} how are you doing today?`
}

console.log(greet("Alex"))

// OUTCOME = Hello, Alex how are you doing today?

/* 
EXERCISE # 4

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.*/

const quarterOf = (month) => {
    if (month <= 3) {
        return 1 
    } if (month <= 6) {
        return 2
    } if (month <= 9) {
        return 3
    } else {
        return 4
    }
}

console.log(quarterOf(7))

// OUTCOME = 3


/* 
EXERCISE # 5

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.*/

function findShort(s) {
    let arr = s.split(' ');

    arr.sort((a, b) => a.length - b.length);

    return arr[0].length
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

// OUTCOME = 3



/* 
EXERCISE # 6

Simple, remove the spaces from the string, then return the resultant string.*/

function noSpace(x) {
    return x.split(" ").join("");
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))

// OUTCOME = 8j8mBliB8gimjB8B8jlB