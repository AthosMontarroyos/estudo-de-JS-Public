function carregar() {
    

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >=0 && hora < 12) {
    //BOA DIA 
    img.src = 'manhã.png'
    document.body.style.background = '#fff099'
    
} else if (hora >=12 && hora <18) {
    //BOM TARDe
    img.src = 'Tarde.png'
    document.body.style.background = '#fe7c00'
} else {
    img.src = 'noite.png'
    document.body.style.background ='#295288'
   //BOA NOITE
}


}