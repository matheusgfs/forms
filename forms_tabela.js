const form = document.getElementById('formservico');
const tabela = document.getElementById('tbServico').getElementsByTagName('tbody')[0];

form.addEventListener('submit',function(event){
event.preventDefault();

const tipoServico = document.getElementById('tipoServico').value;
const precoProduto = document.getElementById('precoProduto').value;
const tempoDuracao = document.getElementById('tempoDuracao').value;

const novaLinha = tabela.insertRow();

const celulaNomeServico = novaLinha.insertCell(0);
const celulaPreco = novaLinha.insertCell(1);
const celulaDuracao = novaLinha.insertCell(2);

celulaNomeServico.innerText =tipoServico;
celulaPreco.innerText =precoProduto;
celulaDuracao.innerText = tempoDuracao;

form.reset();
});