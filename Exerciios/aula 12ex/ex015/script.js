
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERROR]Verifique se os Dados estao certos')
      
    } else {
        
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('img', 'foto')
       if (fsex[0].checked ) {
        genero = 'Homem'
        if (idade >=0 && idade <10) {
            //criança
            img.setAttribute('src','criançaM.png' )
        } else if (idade <21) {
            img.setAttribute('src', 'adolecenteM.png')
                           //adolecemte
        }  else if(idade <50){
            //Adulto
            img.setAttribute('src', 'adultoM.png')
        } else {
            //idoso
            img.setAttribute('src', 'IdosoM.png')
        }
       }     else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >=0 && idade <10) {
            //criança
        } else if (idade <21) {
                           //adolecemte
        }  else if(idade <50){
            //Adulto
        } else {
            //idoso 
        }
       }
       
        res.style.textAling = 'center'
        res.innerHTML = `dectamos o gênero ${genero} com idade ${idade} anos`
        res.appendChild(img)
        res.style.textAling = 'center'
    }
    }