let input1 = document.querySelector(".kvaff");
let input2 = document.querySelector(".cikesz");
let output = document.querySelector(".output");
let num1 = 0;
let num2 = 0;

input1.value = 0;
input2.value = 0;

input1.oninput = count1;
input2.oninput = count2;

function count1() {
    if (input1.value < 0) {
        window.alert("Az érték nem lehet negatív");
        input1.value = 0;
        input2.value = 0;
    } else {
        num1 = 10*(input1.value);
        end = num1 + num2;
        output.innerHTML = ("Összesen:" + end + "pont")
    }
}

function count2 () {
    if (input2.value < 0) {
        window.alert("Az érték nem lehet negatív");
        input2.value = 0;
    } else if (input2.value > 1) {
        window.alert("Az aranycikeszt csak egyszer lehet elkapni")
        input2.value = 1;
    } else {
        num2 = 150*(input2.value);
        end = num1 + num2;
        output.innerHTML = ("Összesen:" + end + "pont")
    }
}
