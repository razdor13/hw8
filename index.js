const elementsImput = prompt('Enter number of list  to separating them by ","');

const userArr = elementsImput.split(",").map(function (elem) {
    return +elem;
});
const isnumber = userArr.some(function (elem) {
    return isNaN(elem);
});
console.log(userArr);

let sum = 0;
if (elementsImput === null) {
    alert("ok gl");
} else if (!elementsImput) {
    alert("nothing entered");
} else if (isnumber) {
    alert("not all elements are numbers!");
} else {
    userArr.forEach(function (elem) {
        sum += elem;
    });
    alert("сума " + sum);
}
