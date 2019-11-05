function cal(x) {
    let result = 0;
    let n1 = parseFloat(document.getElementById("number1").value);
    let n2 = parseFloat(document.getElementById("number2").value);
    switch (x) {
        case "add" : {
            result = n1 + n2;
            document.getElementById("result").innerHTML = "Result addition: " + result.toFixed(2);
            break;
        }
        case "sub" : {
            result = n1 - n2;
            document.getElementById("result").innerHTML = "Result subtraction: " + result.toFixed(2);
            break;

        }
        case "mul" : {
            result = n1 * n2;
            document.getElementById("result").innerHTML = "Result multiplition: " + result.toFixed(2);
            break;
        }
        case "div" : {
            result = n1 / n2;
            document.getElementById("result").innerHTML = "Result division: " + result.toFixed(2);
            break;
        }


    }
}
