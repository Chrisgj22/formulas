
const calc=document.getElementById("c")
calc.addEventListener("click", function() {

    let a = parseFloat(document.getElementById('input_a').value);
    let b = parseFloat(document.getElementById('input_b').value);

    let c = (a * 0.7854) / 90;
    let cResult = c * b;
    let dResult = a - cResult;

    document.getElementById('output_d').innerText = dResult.toFixed(2);

    if (a && b > 0){
        document.getElementById('result_image').style.display = 'block';
        document.getElementById('result_text').style.display = 'block';
    } else {
        document.getElementById('result_image').style.display = 'none';
        document.getElementById('result_text').style.display = 'none';
    }


})
