//una libreria utile e molto utilizzata per l'utilizzo delle date è luxon, vediamo come funziona
const DateTime = luxon.DateTime;
const { Interval } = luxon;

console.log(DateTime);

//DateTime.now(), VEDIAMO IN CONSOLE TUTTE LE PROPRIETà DI NOW
const now = DateTime.now();
console.log(now);
console.log(now.year);
console.log(now.month);
console.log(now.day);
console.log(now.hour);
console.log(now.minute);
console.log(now.second);
//per essere sicuro di avere la for,attazione in lingua locale : giorno/mese/anno, ora:minuto:secondo gli impostiamo il metodo setLocale(e gli passiamo il parametro 'it-IT')
console.log(now.setLocale('it-IT').toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)); 

//PER manipolare una stringa con DateTime, usiamo il metodo toFormat

console.log(now.setLocale('it-IT').toFormat("dd 'giorno' MM 'mese' yyyy 'anno' HH 'ora' mm 'minuto' ss 'secondo'"));//-> 28 giorno 02 mese 2022 anno 15 ora 12 minuto 32 secondo

//intervals per calcolare il tempo trascorso tra due date e convertirlo in secondi o minuti o ore ecc...

//esempio: calcolare la differenza tra due date e convertirla in minuti
const born = DateTime.local(1994, 10, 4); 
//ATTENZIONE: interval è un metodo di luxon e non può essere usato senza specificare il nome della libreria SE IMPORTATA COME CDN(luxon.interval) ma solo come cli(interval) oppure richiamando la const destrutturando luxon
const i = Interval.fromDateTimes(born, now);
console.log('dalla mia nascita a oggi sono trascorsi');
console.log(i.length('hours'), "ore");
console.log(i.length('minutes'), "minuti");
console.log(i.length('seconds'), "secondi");
console.log(i.length('years'), "anni");