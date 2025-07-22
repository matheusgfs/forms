/*const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const barbeiros =[];

function perguntar(){
    rl.question("Digite o nome do profissional para adicionar na lista: ", (resposta) => {
        if (resposta.toLocaleLowerCase() ==="sair"){
            console.log("\n Sua lista final:");
            console.log(barbeiros);
            rl.close();
        }
        else {
            barbeiros.push(resposta);
            console.log(`"Adicionado: "${resposta}"`);
            perguntar();
        }
    });
}

console.log("Olá! Vamos adicionar os barbeiros");
perguntar();*/



/*const nome = 'Calvo';
const idade = 32;

console.log(`Seu nome é ${nome} e você tem ${idade} anos!`);

var n1 = 5;
var n2 = 3;
var n3 = 4;
n1+n2;
console.log(n1+n2);

var profissionais = ["Matheus", "Vitor", "Erick"];
console.log(profissionais);

var obj = {
    nome: "Matheus",
    idade: 32,
};

console.log(obj);*/

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const barbearia = {
    nome: "",
    servicos: []
};

function adicionarServico(){
    rl.question("Nome do Serviço: ", (nomeServico) => {
        rl.question("Preço do Serviço:", (precoStr) => {
            const preco = parseFloat(precoStr);
            barbearia.servicos.push({nome: nomeServico, preco});

            rl.question("Deja adicionar mais um serviço? (s/n): ",(resposta) => {
                if (resposta.toLowerCase ()==='s'){
                    adicionarServico();
            } else {
                console.log("\nServiços cadastrados:");
                console.log(barbearia);
                rl.close();
            }
            })
        })
    })
};
adicionarServico();