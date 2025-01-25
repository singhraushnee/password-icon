//  let cbtn=document.getElementById('close')

//  let formcon=document.getElementById('rf1')

//  cbtn.addEventListener('click',()=>{
//     formcon.style.display='none'
//  })

// let name="khusu"
// let age=22
// let height=5.1
// let langbage=["html","css","js"]
// let exp=[abc;"2020-2021",xyz;"2021-2022",qpr;"2022-2024"]

// document.write(typeof(name)+"<br>")
// document.write(typeof(age)+"<br>")
// document.write(typeof(height)+"<br>")
// document.write(typeof(langbage)+"<br>")
// document.write(typeof(abc)+"<br>")

// let user="Admin"
// let password="Admin@123"

// let u=prompt("Enter UserID")
// let p=prompt("Enter Your Password")

// if(user==u && password==p)
// {
//     alert('login')
// }
// else{
//     alert("login fail!!!")
// }
// num=Number(prompt("emter your name:"))
// for(let i=1; i<=n; i--)
// {
//     document.write("<br>")
// }
// 
// let num=parseInt(prompt("Enter a number :"))
// let temp=("%d", n)
// for(let i=1;i<=n;i++)
// {
//     if (n%i==0)
//     {
//         count++
//     }
// }
// if(count==2)
//     print("prime number")

//  else
//  print("not prime number")
// return 0

// if (num >=1){
//     alert ("return false")
// }
// for (let i =2; i <= (num); i++) {
//     if (num % i == 0)
//     {
//         return false;
//     }
// }
// return true;
// let num = prompt("Enter a number:");
// num = parseInt(num);
// if (checkprime(num))
// {
//     alert(num+"is a prime number");

// }
// else{
//     alert(num+"is not a prime number");
// }

// Function to check if a number is prime











// function isPrime(number) {
//     if (number <= 1) {
//         return false; // Numbers less than or equal to 1 are not prime
//     }

//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false; // If divisible by any number other than 1 and itself
//         }
//     }

//     return true; // Prime number
// }

// // Get input from user
// let number = prompt("Enter a number:");

// if (number !== null) {
//     number = parseInt(number); 

//     if (isNaN(number)) {
//         alert("Please enter a valid number.");
//     } else {
//         if (isPrime(number)) {
//             alert(number + " is a prime number.");
//         } else {
//             alert(number + " is not a prime number.");
//         }
//     }
// }









// function factorial(number) {
//     if (number < 0) {
//         return "Factorial is not defined for negative numbers.";
//     }
//     let result = 1;
//     for (let i = 1; i <= number; i++) {
//         result *= i;
//     }
//     return result;
// }


// let number = prompt("Enter a number:");

// if (number !== null) {
//     number = parseInt(number); 

//     if (isNaN(number)) {
//         alert("Please enter a valid number.");
//     } else {
//         let result = factorial(number);
//         alert("The factorial of " + number + " is " + result + ".");
//     }
// }














// function calculateSales() {

//     let n = parseInt(prompt("Enter the number of salesmen:"));

//     let totalSales = 0;
//     for (let i = 1; i <= n; i++) {
    
//         let sales = parseFloat(prompt(`Enter total sales for salesman ${i}:`));

//         totalSales += sales;

//         alert(`Salesman ${i} made total sales of: $${sales}`);
//     }

//     alert(`Total sales from all ${n} salesmen is: $${totalSales}`);
// }

// calculateSales();

