// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com


function getEmailDomainName(email){

    const fragments = email.split("@");//gebruik de method String.split om het email adress op te knippen in stukjes met "@" als seperator
    return fragments[1];//de fragments array bestaat altijd uit 2 entries omdat een emailadress altijd precies 1 "@" heeft. De domeinnaam is dus altijd de String op indexwaarde 1.
}

console.log(getEmailDomainName("n.eeken@novi-education.nl"));
console.log(getEmailDomainName("t.mellink@novi.nl"));
console.log(getEmailDomainName("a.wiersma@outlook.com"));





//todo opdracht 2.2

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of qextern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

//in: een email adres
//uit: string die soort domein omschrijft
//stapjes
//haal de domein naam uit het e-mail adres mbv de functie uit de vorige opdracht
//maak een variabele aan voor het resultaat
//check met if, elde if en else wat voor domein het is en stop het antwoord in het resultaat
//print resultaat
//stop dit alles in een console.log


//todo opdracht 2.3
/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

//todo beide scripts koppelen aan een index.html en testen of ze in de console draaien

//todo gevraagd in huiswerkklas geldigheid email checken komt in de volgende opdrachten! hier hoef je alleen aaaa.nl uit de string te vissen
//controleer of het format klopt:
//hak het op in stukjes
//een e-mail adres bevat
//recipient name (stuk voor @)
//domeinnaam
//toplevel domain.
//regels: het bevat een @
//@ is niet het eerste teken
//@ is hooguit het op 4 na laatste teken (kortst mogelijke domeinnaam is a.aa )
//het bevat een '.'
// '.' is niet het eerste teken
// '.' is hooguit het twee na laatste teken
//als het adres geldig is , return het stuk na de @
//als het adres niet-gelidg is , print een melding " ongeldig e-mail adres"