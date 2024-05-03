let arr1 =[[],[],[]];
let arr2 =[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
for(let i=1; i<=10; i++){
document.write(i)
} document.write("<br>")
let tablenum = 9
let tableStopPoint = 10
for(let i=1; i<=tableStopPoint; i++){
   
    document.write(tablenum,"x",i,"=",tablenum*i,"<br>")

}

let fruits = ['apple', 'banana', 'mango', 'orange','strawberry'];
for(let i=0; i<fruits.length; i++){
    document.write(`elements at index [${i}] is ${fruits[i]}<br>`)
}
let num =[1,2,3,4,5,6,7,8,9,10];
for(let i=0;  i<num.length; i++){
   if(num[i]%2==0){
    document.write(num[i])
   }
}
for(let i=0;  i<num.length; i++){
   if(num[i]%2==0){
   
   }
   else{
    document.write(num[i])
   }
}

//
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let found = "cake"
let nums =0
let it =0
for(let i=0; i<A.length; i++){
    if(found.toLowerCase() === A[i]){
nums=1
it=it+i
break
    }
}

if(nums === 1){
    document.write(`${found} is available at index ${it}  in our bakery`)
}
else{
    document.write("not found")
}
let large =[10,5,55,100]
let max= large[0]
for(let i=0; i<large.length; i++){
   
    if(large[i] > max){
       max=large[i]
    }
}
console.log(max);
for(let i=5; i<=40; i+=5){
    console.log(i)
}
let first = "Anus"
let Last = "Shahid"
let fullName= first+" "+Last
console.log(fullName)
document.write("<br>")
let mobileModel ="Samsung galaxy s6 edge plus"
document.write(mobileModel.length)
document.write("<br>")
let text ="Pakistani"
let char =text.indexOf("n")
document.write(char)
document.write("<br>")
let text1 ="hello world"
let char1 =text1.lastIndexOf("l")
document.write(char1)
document.write("<br>")
let text2 ="Pakistani"
let char2 =text2.indexOf("i")
document.write(char2)
let city = "Hyderabad"
city = city.replace("Hyder","Islam")
console.log(city)
var message = "Ali and Sami are best friends. They play cricket and football together.";
message=message.replaceAll("and","&")
console.log(message)
var strings ="24"
strings=Number(strings)
document.write("<br>")
let userInput ="peanut"
document.write(userInput.toUpperCase())
document.write("<br>")
let userinput = "javascript"
document.write(userinput.toUpperCase().slice(0,1)+userinput.slice(1))
document.write("<br>")
var userNumber=35.36;
var convert = userNumber.toString();
document.write(convert.replace(".",""))
document.write("<br>")
let userName = "Anus@"
for(let i=0; i<userName.length; i++){
if(userName[i]=== "@" || userName[i]=== "!" || userName[i]=== "."){
 document.write("Plz Enter a valid username")
}
}

let password ="bfgggg44"


if (password.length < 6 || parseInt(password[0]) >= 0 || password.indexOf("!")===-2 || password.indexOf("@")===-2 || password.indexOf(".")===-2) {
console.log("plz enter a valid password")
}
else{
    console.log("correct password;",password)
}
//
document.write("<br>")
var university = "University of Karachi";
university =university.split("")
document.write(university)
document.write("<br></br>")
for (let i=0 ; i<university.length; i++){
document.write(university[i],"<br>")
}
let country ="pakistan"
let last = country.charAt(country.length-1)
console.log(last)


let find ="The quick brown fox jumps over the lazy dog"
let findConvert =find.split(" ")
console.log(findConvert)
let targetword ='the'.toLowerCase()
let sum =0;
for(let i=0; i<findConvert.length; i++){
if(targetword==findConvert[i].toLowerCase()){
    sum++
}}
console.log(`there are ${sum} occurence's of word ${targetword}`)
/////
let enterNum =3.3
if (enterNum<0 || Number.isInteger(enterNum)) {
    console.log("invalid");
} 
else{
    console.log(Math.round(enterNum))
    console.log(Math.ceil(enterNum))
    console.log(Math.floor(enterNum))
}
let enterNum1 =-3.2
if (enterNum1>0 || Number.isInteger(enterNum1)) {
    console.log("invalid");
} 
else{
    console.log(Math.round(enterNum1))
    console.log(Math.ceil(enterNum1))
    console.log(Math.floor(enterNum1))
}
let number = -7;
let absoluteValue = Math.abs(number);
console.log("The absolute value of", number, "is", absoluteValue);
console.log(Math.ceil(Math.random()*6))
let nums1=Math.round(Math.random()*2)
if(nums1==1){
    console.log("head")
}else{
    console.log("tail")
}
console.log(Math.ceil(Math.random()*100))

let secret = Math.round(Math.random()*10)
let compare = 5
if(secret===compare){
    console.log("congrats your number will be matched")
}
else{
    console.log("not found")
}