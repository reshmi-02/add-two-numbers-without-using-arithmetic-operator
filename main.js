let a=parseInt(prompt("Enter the first number"))
document.write("Given value1 = "+a)
let b=parseInt(prompt("Enter the second number"))
document.write("<br><br> Given value2 = "+b+"<br><br>")

while(b!=0){
    let carry=a&b
    console.log(carry);

    a=a^b
    console.log(a);

    b=carry<<1
    console.log(b);
    console.log(a);
}
document.write(a)
