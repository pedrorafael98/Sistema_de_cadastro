function teste(){
    const nome = "            "
    const newNome = [... new Set(nome.split(''))]
    if(newNome == " "){
        console.log('vazio')
    }else{
        console.log('não vazio')
    }
}
teste()