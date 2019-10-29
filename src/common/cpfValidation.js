export default {
    
    testCPF(strCPF) {
        let cpf = strCPF.replace('.', '').replace('.', '').replace('-', '');
        if(cpf.length > 11){
          let tempCpf = '';
          for(let i=0;i<11;i++){
            tempCpf = tempCpf+cpf[i];
          }
          cpf = tempCpf;
        }
        let Sum;
        let Rest;
        Sum = 0;
      if (cpf == "00000000000") return false;
         
      for (i=1; i<=9; i++) Sum = Sum + parseInt(cpf.substring(i-1, i)) * (11 - i);
      Rest = (Sum * 10) % 11;
       
        if ((Rest == 10) || (Rest == 11))  Rest = 0;
        if (Rest != parseInt(cpf.substring(9, 10)) ) return false;
       
      Sum = 0;
        for (i = 1; i <= 10; i++) Sum = Sum + parseInt(cpf.substring(i-1, i)) * (12 - i);
        Rest = (Sum * 10) % 11;
       
        if ((Rest == 10) || (Rest == 11))  Rest = 0;
        if (Rest != parseInt(cpf.substring(10, 11) ) ) return false;
        return true;
    }
    
}