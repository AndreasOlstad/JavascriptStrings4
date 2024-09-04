// oppgave 1
/* function navneformattering() {
        let fornavn = prompt("Skriv ditt fornavn")
        let etternavn = prompt("Skriv ditt etternavn")
        fornavn = fornavn.substring(0,1).toUpperCase() + fornavn.substring(1).toLowerCase();
        etternavn = etternavn.substring(0,1).toUpperCase() + etternavn.substring(1).toLowerCase();
        return (`${fornavn} ${etternavn}`)
}

document.write(navneformattering());                                    
 */

// oppgave 2
/* function stringLength() {
    let ord = prompt ("Skriv inn en setning")
    const array = ord.trim().split(/\s+/)
    return array.length
}

   document.write("Word count:" + stringLength()) */

// oppgave 3
/* function erstatt() {
    let ord = prompt("Skriv inn en setning");
    let replaced = ord.replace(/a/g, "@");
    return replaced;
}
document.write(erstatt()); */

// oppgave 4
function long() {
    let ord = prompt("Skriv inn en setning");
    ord = ord.split(' '); 
    let lengste = ord.sort((a, b) => b.length - a.length)[0];
    
    return lengste.length;
}

document.write("Lengste ordet er:" + long());
