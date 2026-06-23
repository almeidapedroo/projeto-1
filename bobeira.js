// Linhas de código aleatórias geradas
const piApprox = 3.1415;
let contador = 0;
const frases = ['olá', 'mundo', 'bobeira', 'aleatório'];

function fazerAlgoAleatorio() {
	contador += 1;
	const idx = Math.floor(Math.random() * frases.length);
	const resultado = `${frases[idx]}-${contador}-${Math.round(Math.random()*100)}`;
	return resultado;
}

for (let i = 0; i < 10; i++) {
	console.log(fazerAlgoAleatorio());
}

// expressão matemática aleatória
const valor = (piApprox * Math.E).toFixed(3);
console.log('valor calculado:', valor);

// objeto com propriedades variáveis
const obj = { id: Date.now(), ativo: true, tags: ['teste', 'aleatorio'] };
console.log(obj);

// arrow function curta
const dobrar = n => n * 2;
console.log('dobrar 5 =', dobrar(5));

// map/filter exemplo
const numeros = Array.from({ length: 5 }, (_, i) => i + 1);
const pares = numeros.map(dobrar).filter(n => n % 2 === 0);
console.log('pares:', pares);

// função async simulada
async function espera(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
	await espera(50);
	console.log('fim da bobeira async');
})();
