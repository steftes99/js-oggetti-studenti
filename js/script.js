var classe = [];
var studente = {
    nome: 'stefano',
    cognome: 'tescione',
    età: 22
}
var studente2 = {
    nome: '',
    cognome: '',
    età: ''
}


for(x in studente){
    console.log(studente[x]);
}
classe.push(studente);

var nomeStudente = prompt('Inserisci il nome del secondo studente');
var cognomeStudente = prompt('Inserisci il cognome del secondo studente');
var anni = parseInt(prompt('Inserisci l\'età del secondo studente')); 

studente2.nome = nomeStudente;
studente2.cognome = cognomeStudente;
studente2.età = anni;

classe.push(studente2);

console.log(classe);
