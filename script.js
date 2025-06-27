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
            <b>Tổng:</b> a + b = ${sum} <br>
            <b>Hiệu:</b> a - b = ${dif} <br>
            <b>Tích:</b> a * b = ${mul} <br>
            <b>Thương:</b> a / b = ${div} <br>
            <b>Chia lấy dư:</b> a % b = ${rem} <br>
            <b>Bằng (so sánh giá trị):</b> a == b = ${equ} <br>
            <b>Bằng (so sánh giá trị và kiểu):</b> a === b = ${sam} <br>
            <b>Không bằng (so sánh giá trị):</b> a != b = ${diff} <br>
            <b>Không bằng (so sánh giá trị và kiểu):</b> a !== b = ${difft} <br>
            <b>Nhỏ hơn:</b> a < b = ${sma} <br>
            <b>Lớn hơn:</b> a > b = ${big} <br>
            <b>Nhỏ hơn hoặc bằng:</b> a <= b = ${les} <br>
            <b>Lớn hơn hoặc bằng:</b> a >= b = ${gre} <br>            
        `;
    });
});