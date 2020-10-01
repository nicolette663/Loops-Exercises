//Write a for loop that will iterate from 0 to 10,
//it will multiply the number by 9
//and log the result (e.g. "2 * 9 = 18")
//Bonus: Use a nested for loop to show the tables for every
//multiplier from 1 to 10 (100 results total)

let multiply = 9;
for (let i = 1; 1 <= 10; i++) {
	let result = multiply * i;
	console.log(multiply + '*' + i '=' + result);
}



//Write a while loop that starts counting from 5.
//Count up to (including) 50 and count only every fifth number
//Don' forget to log it

let i = 5;
while (i = 5; i <= 50; i+5;) {
console.log([i]);
}

//Write a function that takes an array of numbers as an argument.
//This function should return the first duplicate number in the array:
// For example: [2,7,5,9,8,7] should return 7;


function numbers(5, 10, 15, 20, 15);
	 const duplicate = arr.filter((x, index) =>{
	 	return arr.indexOf(x) != index;
	 })
	 
	 console.log(duplicate);


	 let testArr = [5, 10, 15, 20, 15];
	 function findDuplicate(arr)
	 {
	 	for (let i =0; i < arr.length -1; i++) {
	 		for (let j = i+1; j < arr.length; j++) {
	 			if (arr[i] == arr[j]) {
	 				return arr [i];
	 			}
	 		}
	 	}
	 }
      
      return -1; //if there's no duplicate 
// the condition we want the loop to only give out the repeating numbers


//Remembering the results from the conditionals exercise on Monday
// use the assignGrade function by logging every value from 60 to 100:
//your log should show "For 88, you got a B" "For 90 you got an A"etc..
