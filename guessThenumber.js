let n
n=Math.floor(Math.random()*100);
let a= prompt("enter your guess:")
a=Number.parseInt(a)
var count=0
while(n!=a){
  if(n>a){
    a=prompt("oops enter greater number")
    a=Number.parseInt(a)
        count++
  }

  else{
    a=prompt("oops!  enter smaller number ")
    a=Number.parseInt(a)
    count++
  }
  
}
count++
let c=100-count
console.log("yes you are write  number is "+ a )
console.log("your score is "+c)
