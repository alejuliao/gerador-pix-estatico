// PAYLOAD  JS #####################
const Payload = {
    // constructor(){
        // this.id_PAYLOAD_FORMAT_INDICATOR = '00';
        id_payload_format_indicator : '00',
        //merchant
        id_merchant_account_information : '26',
        id_merchant_account_information_gui : '00',
        id_merchant_account_information_key : '01',
        id_merchant_account_information_description  : '02',

        id_merchant_category_code : '52',
        id_transaction_currency : '53',
        id_transaction_amount : '54', 

        id_country_code : '58',

        id_merchant_name : '59',
        id_merchant_city : '60',

        id_addtional_data_field_template : '62',
        id_additional_data_field_template_txid : '05',

        id_crc16 : '63',
        





        // this.pixkey = ''
        // this.description = '';
        // this.merchantName = ''
        // this.merchantCity = ''
        // this.txid = ''
        // this.amount = ''
        // this.payload = ''
    // },
    // return console.log('a key digitada foi ' + key )
    setPixKey(key){
        this.pixkey = key
        return key
    },
    setDescription(description){
        this.description = description
        return description
    },
    setMerchantName(merchantName){
        this.merchantName = merchantName
        return merchantName
    },
    setMerchantCity(merchantCity){
        this.merchantCity = merchantCity
        return merchantCity
    },
    setTxid(txid){
        this.txid = txid
        return txid
    },
    setAmount(amount){
        this.amount = amount
        return amount
    },


    getValue(id,value){
        //fazer o calculo para contar os caracteres, se for menor que 2 adicionar o zero antes
        var size = value.length
        if (size<10) {
            size = '0'+ size
        }
        return id+size+value
    },

    getMerchantAccountInformation(gui, key, description){
        gui = this.getValue(this.id_merchant_account_information_gui, 'br.gov.bcb.pix ')
        key = this.getValue(this.id_merchant_account_information_key, this.pixkey)
        description = this.getValue(this.id_merchant_account_information_description, this.description )
        return this.getValue(this.id_merchant_account_information, (gui+key+description))
    },

    getAdditionalDataFieldTemplate(){
         var txid = this.getValue(this.id_additional_data_field_template_txid, this.txid)
         return this.getValue(this.id_additional_data_field_template_txid, txid)
    },
    
    getPayload(){
        this.payload = this.getValue(this.id_payload_format_indicator, '01') 
        + this.getMerchantAccountInformation()
        + this.getValue(this.id_merchant_category_code,'0000')
        + this.getValue(this.id_transaction_currency, '986')
        + this.getValue(this.id_transaction_amount, '')
        + this.getValue(this.id_country_code, 'BR')
        + this.getValue(this.id_merchant_name, this.merchantName)
        + this.getValue(this.id_merchant_city, this.merchantCity)
        + this.getAdditionalDataFieldTemplate()

        return this.payload + this.getCRC16(this.payload)
    },
    
    getCRC16(){
      var payload = this.id_crc16 + '04';

      //DADOS DEFINIDOS PELO BACEN
      var polinomio = 0x1021;
      var resultado = 0xFFFF;

      //CHECKSUM
      if (length = payload.length > 0) {
          for (let offset = 0; offset < length; offset++) {
              resultado ^ (payload.charCodeAt[offset]<8)
              for (let bitwise = 0; bitwise < 8; bitwise++) {
                  if ((resultado <<= 1) & 0x10000) resultado ^ polinomio;
                  resultado &= 0xFFFF;
              }
          }
      }
      function dechex (number) {
        // http://jsphp.co/jsphp/fn/view/dechex
        // +   original by: Philippe Baumann
        // +   bugfixed by: Onno Marsman
        // +   improved by: http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
        // +   input by: pilus
        // *     example 1: dechex(10);
        // *     returns 1: 'a'
        // *     example 2: dechex(47);
        // *     returns 2: '2f'
        // *     example 3: dechex(-1415723993);
        // *     returns 3: 'ab9dc427'
        if (number < 0) {
            number = 0xFFFFFFFF + number + 1;
        }
        return parseInt(number, 10).toString(16);
    }
      //RETORNA CÓDIGO CRC16 DE 4 CARACTERES
      return this.id_crc16+'04'+ payload.toUpperCase() + dechex(resultado)
    //   .dechex();
    }

}

// APP JS #################################

const objPayload = Payload


objPayload.setPixKey('')
objPayload.setDescription('')
objPayload.setMerchantName('')
objPayload.setMerchantCity('')
objPayload.setTxid('')
objPayload.setAmount()



const Form ={ 
    // inputChavePix: document.getElementById('chavepix').value,
    
    
    // getValues(){
    //     return{
    //         inputChavePix: Form.inputChavePix.value,
    //     }
    // },

    submit(event){
        event.preventDefault() 
        // console.log('submit')
        
        gerarCode.init()
        gerarCode.reload()
    }
}
const gerarCode = {

    init(){
        // objPayload.setPixKey(document.getElementById('chavepix').value)
   
        const pix = objPayload.getPayload()

        document.getElementById('linhaCodigo').textContent =  pix
    },

    reload(){
        objPayload.setPixKey(document.getElementById('chavepix').value)

        const pix = objPayload.getPayload()

        document.getElementById('linhaCodigo').textContent =  pix

    }
}

gerarCode.init()


