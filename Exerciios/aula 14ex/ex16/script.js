function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    let res = document.querySelector('div#res')
    let love = document.querySelector('div#love')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = '[ERROR]Teste os dados e tente novamente.' 
    } else {
        
            res.innerHTML = `Contando`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('[ERROR] imposivel contar Considerando passo agora vale 1')
            p = 1
        } 
        if(i < f){
        for (let c = i; c <=f; c +=p){
            res.innerHTML += `\u{1F449} ${c} `
            love.innerHTML = `\u{2764}`
            //Crecente
        }} else if(i > f) {
            for (let c = i; c >=f; c -=p){
                res.innerHTML += `\u{1F449} ${c} `
                love.innerHTML = `\u{2764}`
                //Decresente
        }
                 
      
        }
    }
    
}

