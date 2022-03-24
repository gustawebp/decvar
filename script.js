function enter() {
   let nome1 = document.getElementById('nome').value
   let cpf = document.getElementById('cpf').value
   let idd = document.getElementById('idd').value
   let cdd = document.getElementById('cdd').value
   let res = document.getElementById('res')
   Number(cpf).value
   Number(idd).value
   res.innerHTML=`Nome: ${nome1} <br> CPF: ${cpf} <br> ${idd} Anos <br> Mora em ${cdd}`
}
