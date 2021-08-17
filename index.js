const cidades = require('./cidades.json');

const filtroFor = () => {
    let cidadesSelecionadas = {PR:[], SP:[]};
    for (let i = 0; i < cidades.length; i++) {
        if (cidades[i].Estado === "18") {
            cidadesSelecionadas["PR"].push(cidades[i]) 
        }
        if (cidades[i].Estado === "26"){
            cidadesSelecionadas["SP"].push(cidades[i]) 
        }
        
    }
    return cidadesSelecionadas;
}

const filtroFilter = () => {
    let cidadesSelecionadas = {PR:[], SP:[]};
    cidadesSelecionadas.PR = cidades.filter((item) => item.Estado === "18")
    cidadesSelecionadas.SP = cidades.filter((item) => item.Estado === "26")
    return cidadesSelecionadas;
}

const filtroReduce = () => {
    return cidades.reduce((acumulador, valorAtual) => {
        if(valorAtual.Estado === "18"){
            acumulador.PR.push(valorAtual)
        }
        if(valorAtual.Estado === "26"){
            acumulador.SP.push(valorAtual)
        }

        return acumulador
        
    }, {"PR":[], "SP":[]} );
}

const inicio = performance.now();
    filtroFor()
const fim = performance.now();

const inicio1 = performance.now();
    filtroFilter()
const fim1 = performance.now();

const inicio2 = performance.now();
    filtroReduce()
const fim2 = performance.now();



console.log(`A operação "For" levou ${fim - inicio} milissegundos`);
console.log(`A operação "Filter" levou ${fim1 - inicio1} milissegundos`);
console.log(`A operação "Reduce" levou ${fim2 - inicio2} milissegundos`);