import Payload from './app/pix/payload.js';
// var pay = require('./app/pix/payload');
let divQr = document.getElementById('qrcode')
//https://www.youtube.com/watch?v=eO11iFgrdCA
//https://www.bcb.gov.br/content/estabilidadefinanceira/forumpireunioes/AnexoI-PadroesparaIniciacaodoPIX-versao3.0.1.pdf
//https://www.bcb.gov.br/content/estabilidadefinanceira/forumpireunioes/Anexo%20IV%20-%20Manual%20de%20Seguranca%20PIX%20v2.0.pdf
//https://blog.vindi.com.br/pix-qr-code/
//https://www.bcb.gov.br/content/estabilidadefinanceira/spb_docs/ManualBRCode.pdf

const objPayload = new Payload()
objPayload.setPixKey('12345678900')
objPayload.setDescription('descicao')
objPayload.setMerchantName('alexandre julios')
objPayload.setMerchantCity('sao PAulo')
objPayload.setTxid('aleDev')
objPayload.setAmount(100.45)


// const teste = objPayload.getValue()
// console.log(teste)
// const payloadQrCode = objPayload.getPayload('nao ')

console.log(objPayload.getPayload())


// novoPayload.setPixKey('123')
// novoPayload.setDescription('hihi')
// novoPayload.setMerchantName('HAHA')



// const chavepix = Payload.setPixKey('12345678900')
// divQr.innerHTML = chavepix

// const description = Payload.setDescription('pagemento teste')
// divQr.innerHTML += description

// const merchantname = Payload.setMerchantName('alexandre juliao')
// divQr.innerHTML += merchantname

// const merchantcity = Payload.setMerchantCity('sao paulo')
// divQr.innerHTML += merchantcity

// const txid = Payload.setTxid('AleDEV')
// divQr.innerHTML += txid

// const amount = Payload.setAmount('100.00')
// divQr.innerHTML += amount
// let novoid = teste.id_PAYLOAD_FORMAT_INDICATOR
// console.log(teste)
// teste.setPixKey('99999'), teste.setDescription('agra vai')
// console.log(teste.setPixKey(teste.key =  '222'))

// divQr.innerHTML = teste
// payloadQrCode = chavepix.getPayload()

// const pay = new Payload()
// console.log(pay)

// function gerarQRCode(){
    // console.log(pay)
    // let chavepix = document.getElementById('chavepix').value;
    // divQr.innerHTML = ""
    // new QRCode(divQr, {text:chavepix, width:300, height:300})
    // }
    