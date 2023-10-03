function calculoIMC() {
    const form = document.querySelector('.formDados');
    const btnCalcular = document.querySelector('#btnCalcular');
    let aviso = document.getElementById('aviso');

    function calcular (evento) {
        evento.preventDefault();

        let peso = form.querySelector('#peso').value;
        let altura = form.querySelector('#altura').value;

        if(!peso && !altura) {
            console.log('ta de brinks ne');
            aviso.innerHTML = `Preencha os campos!`
            aviso.classList.add('invalido');

        } else if ( (!altura) || (altura < 0.01)) {
            console.log('Campo Altura vazio');
            aviso.innerHTML = `Altura inválida!`
            aviso.classList.add('invalido');

        } else if ( (!peso) || (peso < 1) ) {
            console.log('Campo Peso vazio');
            aviso.innerHTML = `Peso inválido!`
            aviso.classList.add('invalido');

        } else {
            console.log('Pode passa, milady');
            let imc = (peso / (altura * altura)).toFixed(2);
            if (imc < 18.5)
                aviso.innerHTML = `IMC: ${imc} - Abaixo do peso`;
            else if (imc >= 18.5 && imc <= 24.5)
                aviso.innerHTML = `IMC: ${imc} - Peso normal`;
            else if (imc >= 25 && imc <= 29.9)
                aviso.innerHTML = `IMC: ${imc} - Sobrepeso`;
            else if (imc >= 30 && imc <= 34.9)
                aviso.innerHTML = `IMC: ${imc} - Obesidade grau 1`;
            else if (imc >= 35 && imc <= 39.9)
                aviso.innerHTML = `IMC: ${imc} - Obesidade grau 2`;
            else if (imc > 40)
                aviso.innerHTML = `IMC: ${imc} - Obesidade grau 3`;
            
            aviso.classList.remove('invalido');
            aviso.classList.add('preenchido');
        }
    }

    form.addEventListener('submit', calcular);
}

calculoIMC();