import Payload from './app/pix/payload.js';
let divQr = document.getElementById('qrcode')


const objPayload = new Payload()
objPayload.setPixKey('37249364863')
objPayload.setDescription('descicao')
objPayload.setMerchantName('alexandre julios')
objPayload.setMerchantCity('sao PAulo')
objPayload.setTxid('aleDev')
objPayload.setAmount()

function gerarQrCode() {
console.log("🚀 ~ file: app.js ~ line 14 ~ gerarQrCode ~ gerarQrCode", gerarQrCode)
    
    // const chavepix = document.getElementById('chavepix').value
    // divQr.innerHTML = ''
    // new QRCode(divQr, {text:chavepix, width, height:300})
}
// function gerarQRCode(){
//     console.log(pay)
//     let chavepix = document.getElementById('chavepix').value;
//     divQr.innerHTML = ""
//     new QRCode(divQr, {text:chavepix, width:300, height:300})
//     }



console.log(objPayload.getPayload())

    