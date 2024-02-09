function carregar() {
    

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora}horas.`
if (hora >=0 && hora < 12) {
    //BOA DIA 
    img.src = 'manhã.png'
} else if (hora >=12 && hora <18) {
    //BOM TARDe
    img.src = 'Tarde.png'
} else {
    img.src = 'noite.png'
   //BOA NOITE
}


}