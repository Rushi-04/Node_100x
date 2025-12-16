
// let x: number = 10;   // similar as doing --> int number = 10; in cpp // it does type inferencing

// x = 20;     // same type reassignment

// // x = "text"; // valid in JavaScript but not valid in TypeScript 

// console.log(x); // Error: Type 'string' is not assignable to type 'number'.


// let numbers: number[] = [];

// numbers.push(1);
// numbers.push(2);
// numbers.push(3);
// numbers.push(4);
// numbers.push(5);

// numbers.forEach((n) => {console.log(n.toFixed(2))});



// Assignment 1 

// function greet(name: string): string {
//     console.log("Hello "+ name)
//     return "Hello "+ name;
// }

// greet("Rushi");


// // Assignment 2

// function add(a: number, b: number): number {
//     return a + b;
// }

// console.log(add(21, 10));

// // Assignment 3

// function isLegal(age: number): boolean {
//     if (age < 18) {
//         return false;
//     }else{
//         return true;
//     }
// }

// console.log(isLegal(20));
// console.log(isLegal(17));

// // Assignment 4 

// function funcTaker(func: () => void){
//     setTimeout(func, 2000);
// }

// funcTaker(function(){
//     console.log("This is printed after 2 second")
// })


// function delayed3Call(fn: () => void) {
//     setTimeout(fn, 3000);
// }

// delayed3Call(function(){
//     console.log("This is printed after 3 seconds")
// })



// interface AdminType {
//     firstName: string,
//     lastName: string,
//     age: number,
//     isAdmin: boolean
// }

// type UserType = {
//     firstName: string,
//     lastName: string,
//     age: number,
//     isAdmin: boolean
// }

// function createUser(user: UserType){
//     console.log("User Created: ", user);
//     console.log("First Name: ", user.firstName);
// }


// // Interface Assignment

// interface UserA {
//     name: string,
//     age: number,
//     isActive: boolean
// }

// function issLegal(user: UserA){
//     if (user.age < 18){
//         return false;
//     }else{
//         return true;
//     }
// }


// Interfaces Relearning 

// const user = {
//     name: "Rushi",
//     age: 21,
//     address: {
//         street: "123 Main St",
//         city: "Mumbai",
//         country: "India",
//         pincode: 400001
//     }
// };

// interface Address {
//     street: string,
//     city: string,
//     country: string,
//     pincode: number
// }

// interface User {
//     name: string,
//     age: number,
//     address?: Address
// }

// // DRY - Don't Repeat Yourself

// interface Office {
//     address: Address
// } 


// const user2 = {
//     name: "Vaishnav",
//     age: 12,
// };

// function isLegal(user: User) {
//     return user.age >= 18;
// }

// const ans = isLegal(user2);

// if (ans){
//     console.log("User is Legal.");
// }else{
//     console.log("User is Illegal.")
// }



// // 

// interface People1 {
//     name: string,
//     age: number,
//     greet: () => void
// }

// interface People {
//     name: string,
//     age: number
// }

// const person: People1 = {
//     name: "Rushi",
//     age: 21,
//     greet: () => {
//         console.log("Hello !")
//     }
// }

// person.greet();

// // Classes

// class Manager implements People {
//     name: string;
//     age: number;

//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }
// }

// const mgr = new Manager("Rushi", 21);


// Interfaces and types :- 

// interface User {
//     name: string,
//     age?: number,
//     address: string
// }

// interface Admin {
//     name: string,
//     address: string,
//     isAdmin?: boolean
// }

// type UserOrAdmin = User | Admin;

// function greet(person: UserOrAdmin){
//     console.log("Hello "+ person.name);
// }

// const user1: User = {
//     name: "Rushi",
//     address: "123 Main St"
// }

// greet(user1);



// // Arrays
// const numbers : number[] = [1, 2, 3, 4, 5];

// Code

// interface User {
//     name: string,
//     age: number
// }

// function sumOfAges(user1: User, user2: User){
//     return user1.age + user2.age;
// }

// const result = sumOfAges(
// {
//   name: "Rushi",
//   age: 21
// }, 
// {
//   name: " Vaishnav",
//   age: 12
// });

// console.log(result)


// Advanced Typescript API's :- 

// interface User {
//     name: string, 
//     age: number,
//     address: string,
//     mob_no: string,
//     email: string
// };

// type updatedFields = Pick<User, 'address' | 'age' | 'email'>;

// const fieldsToUpdate: updatedFields = {
//     address: "456 New St",
//     age: 22,
//     email: "asd@gmail.com"
// }

// type updateFieldsOptional = Partial<updatedFields>;

// const optionalFieldsToUpdate: updateFieldsOptional = {
//     address: "789 Another St",
//     age: 23
// }

// function updateUser(updatedProps: updatedFields){
//     // logic to update user with new specific fields.
// }

// const user = {
//     name: "Rushi",
//     age: 21
// }

// user.name = "Rishi"; // changable although const used because object properties can be changed.

// // user = {  // not changable because we are trying to reassign the whole object itself. }

// // Readonly

// interface Config {
//     readonly endpoint: string,
//     apikey: string
// }

// const config: Readonly<Config> = {
//     endpoint: "https://api.example.com",
//     apikey: "1234567890"
// };

// config.apikey = "3922398132"; // Error: Cannot assign to 'apikey' because it is a read-only property.

// Record 

interface User {
    id: number,
    name: string, 
    age: number,
    email: string
}

type Users = Record<number, User>;

const users: Users = {
    1: {id: 1, name: "Rushi", age: 21, email: "abc@gmail.com"},
    2: {id: 2, name: "Vaishnav", age: 12, email: "bca@gmail.com"}
}

// Map 

const userMap: Map<number, User> = new Map();

userMap.set(1, {id: 1, name: "Rushi", age: 21, email: "abc@gmail.com"});
userMap.set(2, {id: 2, name: "Vaishnav", age: 12, email: "bca@gmail.com"});

console.log(userMap.get(1));
console.log(userMap.get(2));

// Exclude

type Eventer = "click" | "scroll" | "mousemove";

type newEventer = Exclude<Eventer, "scroll">;

function handleEvent(event: newEventer){
    console.log(`Handling event: ${event}`)
}

handleEvent("click"); // valid
handleEvent("mousemove"); // valid
// handleEvent("scroll"); // Error: Argument of type '"scroll"' is not assignable to parameter of type 'newEventer'.

