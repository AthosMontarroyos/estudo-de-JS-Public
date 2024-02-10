
function Verificar() {
    var data = new Date()
    var ano = data.getFullYear
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR]Verifique se os Dados estao certos')
        
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        if (fsex[0].checked) {
            gênero = ('Homem')}
            else if (fsex[1].checked) {
                gênero = ('Mulher')
            }
            res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
            
        
    }
    }