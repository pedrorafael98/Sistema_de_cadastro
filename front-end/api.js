
async function usuario(request, dados){
   let cpf = window.document.getElementById("login");
   let senha = window.document.getElementById("senha");
   cpf = String(cpf.value);
   senha = String(senha.value);
    
    dados.json({
        cpfUser: cpf,
        senhaUser: senha,
        
    });
    
}

export default usuario;