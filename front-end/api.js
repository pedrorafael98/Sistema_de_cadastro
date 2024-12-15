const butaoEntrar  = document.getElementById('entrar');
 function usuario(request, dados){
   let cpf = window.document.getElementById("login");
   let senha = window.document.getElementById("senha");
   cpf = String(cpf.value);
   senha = String(senha.value);
   fetch('http://localhost:2000/login',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        cpf,
        senha   
    })
   })
   .then(re => re.json())
   .then(resposta =>{
       alert(`Seu acesso foi ${JSON.stringify(resposta)}`)
   })
   .catch(err => {
    console.error(err)
   })
      
}
butaoEntrar.addEventListener("click", ()=>{
    usuario();
})
//export default usuario;