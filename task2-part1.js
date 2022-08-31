//задание 1

const max = document.querySelector(".val");

var a = parseInt(prompt("Введите первое число", ""));
var b = parseInt(prompt("Введите первое число", ""));
var c = parseInt(prompt("Введите первое число", ""));

if (a>b && a>c)
{
    console.log("Максимальное число a", a);
}
else if(b>a && b>c)
{
    {
        console.log("Максимальное число b", b);
    }
}
else if(c>a && c>b)
{
    console.log("Максимальное число c", c);    
}
else if(a==b && a>c)
{
    console.log("Максимальное число a b", a)
}
else if(a==c && a>b)
{
    console.log("Максимальное число a c", a)
}
else if(c==b && c>a)
{
    console.log("Максимальное число b c", c)
}
else if(a==b && b==c)
{
    console.log("Все три числа одинаковые и равны", c)
}
else
(
    console.log("Ошибка")
)

