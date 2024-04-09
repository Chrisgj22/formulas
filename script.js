function calculateD() {
    let a = parseFloat(document.getElementById('input_a').value);
    let b = parseFloat(document.getElementById('input_b').value);

    let c = (a * 3.1416 / 4) / 90;
    let cResult = c * b;
    let dResult = a - cResult;

    document.getElementById('output_d').innerText = dResult.toFixed(2);
    document.getElementById('result_image').style.display = 'block';
    document.getElementById('result_text').style.display = 'block';
}
