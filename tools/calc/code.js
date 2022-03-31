document.getElementById('num1').addEventListener('input', function(){
    output();
});
document.getElementById('num2').addEventListener('input', function(){
    output();
});
document.getElementById('op').addEventListener('input', function(){
    output();
});

function output(){

    document.getElementById('outputter').textContent = 'output:';

    let opt = parseInt(document.getElementById('num1').value) * parseInt(document.getElementById('num2').value);
    let opm = parseInt(document.getElementById('num1').value) - parseInt(document.getElementById('num2').value);
    let opp = parseInt(document.getElementById('num1').value) + parseInt(document.getElementById('num2').value);
    let opd = parseInt(document.getElementById('num1').value) / parseInt(document.getElementById('num2').value);

    switch (document.getElementById('op').value) {
        case '*':
            document.getElementById('out').textContent = opt;
            break;
        case '+':
            document.getElementById('out').textContent = opp;
            break;
        case '-':
            document.getElementById('out').textContent = opm;
            break;
        case '/':
            document.getElementById('out').textContent = opd;
            break;
    }
    
}