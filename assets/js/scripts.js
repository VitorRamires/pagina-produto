var tamanhos = document.querySelectorAll('.inputamanho')

function changeTamanho(num){

    if(num == 0){
        tamanhos[0].classList.add('addBackground')
        tamanhos[1].classList.remove('addBackground')
        tamanhos[2].classList.remove('addBackground')
        tamanhos[3].classList.remove('addBackground')
        tamanhos[4].classList.remove('addBackground')
  
    }
    else if(num == 1){
        tamanhos[0].classList.remove('addBackground')
        tamanhos[1].classList.add('addBackground')
        tamanhos[2].classList.remove('addBackground')
        tamanhos[3].classList.remove('addBackground')
        tamanhos[4].classList.remove('addBackground')   
    }

    else if(num == 2){
        tamanhos[0].classList.remove('addBackground')
        tamanhos[1].classList.remove('addBackground')
        tamanhos[2].classList.add('addBackground')
        tamanhos[3].classList.remove('addBackground')
        tamanhos[4].classList.remove('addBackground')
    }
    else if(num == 3){
        tamanhos[0].classList.remove('addBackground')
        tamanhos[1].classList.remove('addBackground')
        tamanhos[2].classList.remove('addBackground')
        tamanhos[3].classList.add('addBackground')
        tamanhos[4].classList.remove('addBackground')
    }
    else{
        tamanhos[0].classList.remove('addBackground')
        tamanhos[1].classList.remove('addBackground')
        tamanhos[2].classList.remove('addBackground')
        tamanhos[3].classList.remove('addBackground')
        tamanhos[4].classList.add('addBackground')  
    }
}

    function setValue(value){
        document.querySelector('.prodNumber').value = value
    }

    var numero = 1

    function more(){
        numero ++
        setValue(numero)
    }

    function less(){

        if(numero === 0){
            numero = 0
        } else {
        numero --
        setValue(numero)
        }

    }

    setValue(numero)


