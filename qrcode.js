
// Codigo funcionando, no click 
function gqcode(){
    document.getElementById('linhaCodigo').style.display = "none"


    document.getElementById('button')
        .addEventListener('click', ()=>{
            const divQr = document.getElementById('qrcode')
            divQr.innerHTML = ''
            document.getElementById('linhaCodigo').style.display = "initial"
            const txid = document.getElementById('linhaCodigo').value
            const code = new QRCode(divQr, {text:txid, width:300, height:300})
    })
}
//Codigo funcionando, no click 


