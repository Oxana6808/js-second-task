
// задание 3
const num = document.querySelector(".val");

var a = parseInt(prompt("Введите первое число", ""));
var b = parseInt(prompt("Введите первое число", ""));

if(a>b)
{
    console.log(a);
}
else if(b>a)
{
    num.innerHTML = b;
}
else
{
    num.innerHTML = "Числа равны";
}
