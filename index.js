const elementsImput = prompt('Enter number of list  to separating them by ","');

let sum = 0;
if (elementsImput === null) {
    alert("ok gl");
} else if (!elementsImput) {
    alert("nothing entered");
} else {
    let validation = false;
    elementsImput.split(",").forEach(function (elem) {
        if (!elem || !elem.trim()) {
            validation = true;
        }
    });
    const userArr = elementsImput.split(",").map(function (elem) {
        return +elem;
    });
    const isnumber = userArr.some(function (elem) {
        return isNaN(elem);
    });
    if (isnumber || validation) {
        alert("not all elements are numbers!");
    } else {
        userArr.forEach(function (elem) {
            sum += elem;
        });
        alert("сума " + sum);
    }
}
