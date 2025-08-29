var screen = document.getElementById('screen');
    var btns = document.getElementsByClassName('btn');

    // Button click handle
    for (const btn of btns) {
        btn.addEventListener('click', () => {
            const btnText = btn.innerText;

            if (btnText === 'ANS') {
                calculate();
            } else if (btnText === 'DEL') {
                screen.value = screen.value.slice(0, -1);
            } else if (btnText === 'C') {
                cleardisplay();
            } else if (btnText === 'ANS') {
                calculate();
            } else if (btnText === 'π') {
                insertvalue(Math.PI);
            } else if (btnText === 'e') {
                insertvalue(Math.E);
            } else if (btnText === 'x²') {
                insertvalue(innerHTML = "²");
            } else if (btnText === 'x³') {
                insertvalue('³');
            } else if (btnText === 'xⁿ') {
                insertvalue('^');
            } else if (btnText === '√') {
                insertvalue('√(');
            } else if (btnText === '³√') {
                insertvalue('³√(');
            } else if (btnText === 'Sin') {
                insertvalue('sin(');
            } else if (btnText === 'Cos') {
                insertvalue('cos(');
            } else if (btnText === 'Tan') {
                insertvalue('tan(');
            } else if (btnText === 'log') {
                insertvalue('log(');
            } else if (btnText === 'ln') {
                insertvalue('ln(');
            } else {
                insertvalue(btnText);
            }
        });
    }

    function insertvalue(value) {
        screen.value += value;
    }

    function cleardisplay() {
        screen.value = '';
    }

    function calculate() {
        try {
            let expression = screen.value;

            // Replace mathematical symbols
            expression = expression.replace(/³√/g, "Math.cbrt");
            expression = expression.replace(/×/g, '*');
            expression = expression.replace(/÷/g, '/');
            expression = expression.replace(/−/g, '-');
            expression = expression.replace(/%/g, '/100');
            expression = expression.replace(/²/g, '**2');
            expression = expression.replace(/³/g, '**3');
            expression = expression.replace(/\^/g, '**');

            // Replace functions with Math equivalents
            expression = expression.replace(/sin\(/g, "Math.sin((" + Math.PI + "/180)*");
            expression = expression.replace(/cos\(/g, "Math.cos((" + Math.PI + "/180)*");
            expression = expression.replace(/tan\(/g, "Math.tan((" + Math.PI + "/180)*");
            expression = expression.replace(/log\(/g, "Math.log10(");
            expression = expression.replace(/ln\(/g, "Math.log(");
            expression = expression.replace(/√/g, "Math.sqrt");
            
            // Evaluate expression
            screen.value = eval(expression);
        } catch (error) {
            screen.value = "Error";
        }
    }

