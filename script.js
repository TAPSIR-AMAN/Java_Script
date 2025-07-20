// console.log("hello");
// function add_three_no(a, b, c) {
//     return a +b+c;
// }
// let sum=add_three_no(1,4,8)
// console.log(sum)

// let a =22;
// let b=null;
// let c = true;
// let d=BigInt(333)
// let e=Symbol("this is symbol")
// let f="aman"
// let g=undefined;
// console.log(a,b,c,d,e,f,g)
// console.log(typeof a,typeof b,typeof c,typeof d,typeof e,typeof f,typeof g)


// let items ={
//     "name":"aman",
//     "phone_no":8627,
//     "gen":"M",
//     "bool":true
// }
// console.log(items["name"])

// let age=prompt("hey whats your age");
// age=Number.parseInt(age);
// console.log(typeof age)
// console.log(age)
// if(age>=16 && age<18){
//     alert("you can drive a car but with learning licence");
// }
// else if(age>=18){
//     alert("you can drive a car");

// }
// else{
//     alert("you cannot drive a car");
// }
// let a=prompt("enter your age");
// a=Number.parseInt(a);
// console.log("you can ",(a<18? "not drive a car":"drive a cars") );
// let age = prompt("enter you age");
// age=Number.parseInt(age);
// switch (age) {
//     case 12:
//         console.log("you age is 12");
//         break;
//     case 13:
//         console.log("you age is 13");
//         break;
//     case 14:
//         console.log("you age is 14");
//         break;
//     case 15:
//         console.log("you age is 15");
//         break;
//     case 16:
//         console.log("you age is 16");
//         break;
//     case 17:
//         console.log("you age is 17");
//         break;
//     default:
//         console.log("you age is not special");

// }

// let num=prompt("enter a number");
// num=Number.parseInt(num);
// // if(num%2==0 && num%3==0){
// //     console.log("the number is divisible by a and 3");
// // }
// // else{
// //     console.log("the number is not divisible by a and 3");
// // }

// console.log("your can",(num>18? "drive":"not drive"))


// let a=7;
// let b=8;
// function sum2(x,y) {
//     return x+ y;   
// }
// console.log(sum2(a,b))
// // console.log(sum2(45,76))

// // arrow function
// const hello=()=>{
//     console.log("hi,how high are you ")
// }
// hello();


// let obj={
//     "aman":34,
//     "yash":22,
//     "ashu":43,
//     "sumit":23,

// }
// for(key in obj){
//     console.log(obj[key])
// }




// let num = 45;
// let i;
// i=prompt("enter a number")
// while (i!=num) {
//     i=prompt("enter a number")
//     console.log("try again")
//     i=Number.parseInt(i)
// }
// console.log("done")

// let name ="Mr tapsir amana\'s"
// console.log(name);

// let you="Tapsir"
// let score=44;
// console.log(`${you} have score ${score} out of 100`)
// console.log(you.length)
// console.log(you.toUpperCase())
// console.log(you.toLowerCase())
// console.log(you.slice(2,5))
// console.log(you.replace("p","f"))
// console.log(you)
// let last=" aman"
// console.log(you.concat(last))

// let s="this is my name "
// for(let i=0;i<s.length;i++){
//     console.log(s[i])

// }


// let sen="this is a sentence that contain fox"
// let word ="fox"
// console.log(`the word ${word} ${sen.includes(word)?"is":"is not"} in the sentence`)
// console.log(sen.startsWith('is'))
// console.log(sen.endsWith("fox"))

// let arr=[1,2,4,5,5,7]
// console.log(typeof arr)
// let b=arr.toString()
// console.log(b)
// let c=arr.join("-")
// console.log(c)
// arr.pop()

// console.log(arr)
// arr.push(89)
// console.log(arr)

// arr.push(78)
// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.unshift(88)
// console.log(arr)

// delete arr[4]
// console.log(arr)

// let arrr=[2,4,1,8,1,9,7]
// arrr.sort()//it is used for shoting the element with the help of string like one two ->  1 3 33 4 5 55
// // console.log(arrr)

// let new_arr=[36,5,8,86,8,986]
// new_arr.sort((a,b)=>a-b)
// console.log(new_arr)

// new_arr.forEach((vlaue)=>{
//     console.log(vlaue)
// })


// let b=new_arr.map((value)=>{
//     return value +20
// })
// console.log(b)

// let c=b.filter((value)=>{
//     return value>40
// })

// console.log(c)

// let arr=[1,2,3]
// let b;
// do{
//     b=prompt("enter a number")
//     b= Number.parseInt(b)
//     arr.push(b)
// }while (b!=0) 
// arr.filter((value)=>{
//     return value%2==0
// })
// console.log(arr)
// let arr=[1,2,3,4,4,5,6,7,9]
// console.log(arr)
// let new_arr=arr.map((value)=>{
//     return value*value
// })
// console.log(new_arr)
// console.time("for_loop")
// for(let i=0;i<1000;i++)
// {
//     console.log(i+10)
// }
// console.timeEnd("for_loop")

// let output = ""; // Initialize an empty string to store the output

// for (let i = 1; i <= 100; i++) {
//     output += i + " "; // Append each number followed by a space
// }

// console.log(output); // Print the final string

// the={a:2,b:4,c:5}
// console.log(the)
// console.table(the)
// alert("Enter the value of a")
// let a =prompt("enter a here ")
// a=Number.parseInt(a)
// console.log(typeof a)
// document.write(a)
// console.log(document.body)
// let c =confirm("can i write")
// if(c)
// {
//     document.write("this is the document text")
// }
// else
// {
//     document.write("this is the document text")
// }
// document.body.style.color='red'
// let age = prompt("enter you age")
// age=Number.parseInt(age)
// if(age>18){
//     alert("you can drive")
// }
// else{
//     alert("you cannot drive")
// }
// let check=true
// do {
//     let age = prompt("enter you age")
//     age=Number.parseInt(age)
//     if(age>18 &&age <150){
//         alert("you can drive")
//         console.log("you can drive")
//     }
//     else if(age<0 || age>150){
//         console.error(`the given age ${age} is a invalid age`)
//         break;
//     }
//     else{
//         alert("you cannot drive")
//     }
    
//     check=confirm("do you what to paly again")
//  } while (check)


// let num =prompt("enter a number")
// num=Number.parseInt(num)
// if(num>4){
//     location.href="https://youtube.com"
// }

// color=prompt("enter a color")
// document.body.style.background=color
