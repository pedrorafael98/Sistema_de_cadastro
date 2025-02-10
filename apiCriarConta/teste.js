
function semCaracteres(str){
    const regex = /[^a-zA-Z ]/;

    return regex.test(str);
}
const nome = "pedro rafael!"
if(semCaracteres(nome)){
    console.log("n deu certo!")
}else{
    console.log("Deu certo!")
}
    


