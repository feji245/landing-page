let Name  = "fejiro"
console.log(Name)


let firstName = "ISREAL";
let grade = 20;
let isStudent = false;

let empty;

//console.log(typeof firstName)
//console.log(typeof grade)
//console.log(typeof isStudent)
//console.log(typeof empty)

let Age = 18;
if (Age>=18){
    console.log("adult");
}else{
    console.log("minor");
}
 
for(let i = 1;i <=5;i++){
    console.log("Number"+ i);
}

document.getElementById("btn").addEventListener('click',() =>{
    alert("clicked!");
})

document.getElementById('greetbtn').addEventListener('click',() =>
    {
     document.getElementById('message').innerText= "hello"
});



                