export default {

    cpfMask(CPF){
      CPF = CPF
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
      return CPF
      },
    
    cepMask(CEP){
      CEP = CEP
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');
      return CEP;
    },
    
    pNumberMask(pNumber){
      pNumber = pNumber
      .replace(/\D/g, '')
      .replace(/^(\d{1})/, '($1')
      .replace(/(\(\d{2})(\d)/, '$1) $2')
      .replace(/(\s\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1' );
      return pNumber;
    },
    
    priceMask(price){
      price = price.replace('.', ',')
      .replace(/^(\d)/, "R$$$1");
      return price
    },

    maskTotal(price){
      price = price.replace('R$', '')
      .replace(',', '.');
      return parseFloat(price);
  }
}