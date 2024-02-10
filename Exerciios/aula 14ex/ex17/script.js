function gerar() {
    var ini = document.getElementById('num')
    var tab = document.getElementById('seltab')
    if (ini.value.length == 0) {
        window.alert('[ERROR]Digite um numero')
    } else {
    var i = Number(ini.value)
    var c = 1
    tab.innerHTML =''
    while (c <= 10)  {
     var item = document.createElement('option')
     item.text = `${i} x ${c} = ${i*c}`
     item.value = `tab${c}`
     tab.appendChild(item)
     c++
    } 
         

}
}