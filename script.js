function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert(`[ERRO] Verificar os dados e tente novamente!`)
    } else{
        let fsex = document.getElementsByName('radsex') // Retorna uma coleção de elementos NodeList com o dado nome
        let idade = ano - Number(fano.value)
        let genêro = ''
        let img = document.createElement('img') //Cria o elemento HTMl espeficado 
        img.setAttribute('id', 'foto') // Adiciona um novo atributo ou modifica o valor de um atributo existente num elemento específico.
        if(fsex[0].checked){
            genêro = 'Homem'
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebe-menino.png')
            } else if(idade >= 10 && idade < 25){
                // Jovem
                img.setAttribute('src', 'jovem-homem.png' )
            } else if( idade < 50){
                // Adulto
                img.setAttribute('src', 'homem-adulto.png')
                
            } else {
                //Idoso
                img.setAttribute('src', 'homem-idoso.png')
            }

        } else if(fsex[1].checked){
            genêro = 'Mulher'
            if(idade>=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebe-menina.png')
            } else if(idade>= 10 && idade < 25){
                //Jovem
                img.setAttribute('src', 'jovem-mulherr.png')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'adulta-mulher.png')
            } else{
                //Idoso
                img.setAttribute('src', 'idosa-mulher.png')
            }
           
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genêro} com ${idade} anos`
        res.appendChild(img) //Adiciona um nó ao final da lista de um filho de um nó pai especificado
       
    }
}