// задание 4, уравнение a*x^2+b*x+c=0, d = b^2-4*a*c, x1 = (-b +  d^(1/2))/(2*a)
//1, -2, -3, дискриминант 16, корни 3 и -1

const sq = document.querySelector(".val");
var a = parseInt(prompt("Введите первое число", ""));
var b = parseInt(prompt("Введите второе число", ""));
var c = parseInt(prompt("Введите третье число", ""));

let d = b**2-4*a*c;
console.log("Дискриминант равен", d);

if (d<0)
{
    console.log("Нет действительных корней");
}
else if(d==0)
{
    var x = - b / ( 2 *a);
    console.log("Дискриминант равен нулю, корень уравнения равен", x);
}
else if(d>0)
{
    var x1 = (- b + (d**(1/2)))/ (2 * a);
    var x2 = (- b - (d**(1/2)))/ (2 * a);
    console.log("Дискриминант больше нуля, уравнение имеет 2 корня", x1, "и", x2);
}
