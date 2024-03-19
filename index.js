let nomeHeroi = "Yasuo";
let xpHeroi = 20000;
let classificacao = "";

do {
    if(xpHeroi<1000){
        classificacao = "Ferro"
        console.log(`O herói de nome ${nomeHeroi} está no nível ${classificacao}`);
    }else if(xpHeroi>1000 && xpHeroi<=2000){
        classificacao = "Bronze"
        console.log(`O herói de nome ${nomeHeroi} está no nível ${classificacao}`);
    }else if(xpHeroi>2000 && xpHeroi<=5000){
        classificacao = "Prata"
        console.log(`O herói de nome ${nomeHeroi} está no nível ${classificacao}`);
    }else if(xpHeroi>5000 && xpHeroi<=7000){
        classificacao = "Ouro"
        console.log(`O herói de nome ${nomeHeroi} está no nível ${classificacao}`);
    }else if(xpHeroi>7000 && xpHeroi<=8000){
        classificacao = "Platina"
        console.log(`O herói de nome ${nomeHeroi} está no nível ${classificacao}`);
    }else if(xpHeroi>8000 && xpHeroi<=9000){
        classificacao = "ascendente"
        console.log(`O herói de nome ${nomeHeroi} está no nível ${classificacao}`);
    }else if(xpHeroi>9000 && xpHeroi<=10000){
        classificacao = "Imortal"
        console.log(`O herói de nome ${nomeHeroi} está no nível ${classificacao}`);
    }else if(xpHeroi>10000){
        classificacao = "Radiante"
        console.log(`O herói de nome ${nomeHeroi} está no nível ${classificacao}`);
    }
} while (xpHeroi<0);
