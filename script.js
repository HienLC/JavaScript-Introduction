document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('show-result');
    const result = document.getElementById('result');
    btn.addEventListener('click', function() {
        const a = 10;
        const b = 3;

        const sum = a + b;
        const dif = a - b;
        const mul = a * b;
        const div = a / b;
        const rem = a % b;
        const equ = a == b;
        const sam = a === b;
        const diff = a != b;
        const difft = a !== b;
        const sma = a < b;
        const big = a > b;
        const les = a <= b;
        const gre = a >= b;

        result.innerHTML = `
            a + b = ${sum} <br>
            a - b = ${dif} <br>
            a * b = ${mul} <br>
            a / b = ${div} <br>
            a % b = ${rem} <br>
            a == b = ${equ} <br>
            a === b = ${sam} <br>
            a != b = ${diff} <br>
            a !== b = ${difft} <br>
            a < b = ${sma} <br>
            a > b = ${big} <br>
            a <= b = ${les} <br>
            a >= b = ${gre} <br>            
        `;
    });
});