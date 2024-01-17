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
console.log("output voor opdracht 1");
console.log(getEmailDomainName("n.eeken@novi-education.nl"));
console.log(getEmailDomainName("t.mellink@novi.nl"));
console.log(getEmailDomainName("a.wiersma@outlook.com"));

console.log("");

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of qextern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail(email)
{
    const domain = getEmailDomainName(email);//haal de domeinnaam uit het e-mailadres mbv de functie uit de vorige opdracht
    if(domain === "novi-education.nl")//als de domeinnaam precies gelijk is aan novi-education.nl
    {
        return  "Student";//geef "Student" terug uit de functie
    }
    else if(domain ==="novi.nl")//als de domeinnaam precies gelijk is aan novi.nl
    {
        return "Medewerker";//geef "Medewerker" terug uit de functie
    }
    else
    {
        return "Extern"; //in andere gevallen is het domein extern
    }
}

console.log("output voor opdracht 2");
console.log(typeOfEmail("n.eeken@novi-education.nl"));
console.log(typeOfEmail("t.mellink@novi.nl"));
console.log(typeOfEmail("novi.nlaapjesk@outlook.com"));
console.log(typeOfEmail("a.wiersma@outlook.com"));
console.log("");


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

//in: een string die mogelijk een emailadress is
//out: true of false
//stapjes:
//stel een boolean valid = false;
//1. neem een string possibleEmail

function checkEmailValidity(possibleEmail) {
    let valid; //dit wordt de return value (boolean) van de functie
    //2. check of er precies 1 "@" in voorkomt
    const fragments = possibleEmail.split("@");
    if (fragments.length !== 2) {
        return valid = false;//als er precies 1 keer "@" voorkomt is de lengte van het resulterende array altijd 2. bij een andere waarde bevat het adres geen of te vaak "@". Dan hoeven we niet ook verder te kijken naar andere criteria.
    }

    //3. als de opgegeven string een "," bevat, is het geen geldig e-mail adres en returnt de functie False
    if(possibleEmail.includes(","))
    {
        return valid = false;//
    }

    //4. check of in de domeinnaam een"." bevat en dit niet het laatste teken is.
    const domainName = getEmailDomainName(possibleEmail);//pak de domeinnaam uit het e-mail adres mbv functie uit opdracht 1

    if(domainName.includes(".")===false)//check de domeinnaam een "." bevat. Zonder "." is het geen geldig adres
    {
        return valid = false;
    }

    if(domainName.indexOf(".") === (domainName.length-1))//check of de "." op de laatste plaats staat. Zo ja is het adres ongeldig
    {
        return valid = false;
    }

    return valid = true;//als deze regel wordt bereikt, zijn alle checks geslaagd en is de String in de functieparameter dus een geldig emailadres
}

console.log("output van opdracht 3")
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
console.log(checkEmailValidity("n.eeken@novi.nl"));
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
console.log(checkEmailValidity("tessmellink@novi.nl"));
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
console.log(checkEmailValidity("n.eekenanovi.nl"));
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
console.log(checkEmailValidity("n.eeken@novinl."));
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in
console.log(checkEmailValidity("tessmellink@novi,nl"));










//todo beide scripts koppelen aan een index.html en testen of ze in de console draaien

