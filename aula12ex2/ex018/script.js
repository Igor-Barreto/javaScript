function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fAno.value.length ==0 || fAno.value > ano){
        window.alert('[Erro] verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano -Number(fAno.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >0 && idade < 12){
                //Criança
                img.setAttribute('src','criancam.png' )
            }else if (idade >= 12 && idade <21){
                //Jovem
                img.setAttribute('src','jovemm.png')
            }else if (idade >= 21 && idade <65){
                //Adulto
                img.setAttribute('src','adultom.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idosom.png')
            }

        } else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >0 && idade < 12){
                //Criança
                img.setAttribute('src','criancaf.png')
            }else if (idade >= 12 && idade <21){
                //Jovem
                img.setAttribute('src', 'jovemf.png')
            }else if (idade >= 21 && idade <65){
                //Adulto
                img.setAttribute('src', 'adultof.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idosaf.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}