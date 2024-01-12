// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

//stapjes:
//begin met aantal speciale diploma's = 0
// voor iedere waarde van grades:
//check of het groter/gelijk is aan 8
// zo ja, maak het aantal speciale dimploma's eentje hoger
//print het aantal speciale diploma's

let specialeDiplomas = 0;
for (let n = 0 ;n < grades.length;n++)
{
    if(grades[n] >= 8 )
    {
        specialeDiplomas++;
    }
}
console.log('aantal speciale diploma\'s: '+ specialeDiplomas);
console.log(' ');//witregel
/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

function cumLaude(cijfers){
    let specialeDiplomas = 0;
    for (let n = 0 ;n < cijfers.length;n++)
    {
        if(cijfers[n] >= 8 )
        {
            specialeDiplomas++;
        }
    }
    return specialeDiplomas;
}
console.log('nu met de cumLaude function:')
console.log(cumLaude(grades));
console.log(cumLaude([6, 4, 5]));
console.log(cumLaude([8, 9, 4, 6, 10]));


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143
//gemiddelde is de som van alle cijfers gedeeld door het aantal cijfers.
//stapjes: neem ieder getal uit grades en tel het op bij een totaal
//deel het totaal door het aantal cijfers

let totaal = 0;//de totale score begint bij 0
for(let n = 0;n < grades.length;n++)
{
    totaal += grades[n];//tel ieder cijfer uit het grades array op bij het totaal
}
const average = totaal/grades.length;//deel het totaal door het aantal cijfers, dit is het gemiddelde

console.log('het gemiddelde cijfer is '+average);//print het gemiddelde

/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx

function averageGrade(cijfers){
    let totaal = 0;//de totale score begint bij 0
    for(let n = 0;n < cijfers.length;n++)
    {
        totaal += cijfers[n];//tel ieder cijfer uit het grades array op bij het totaal
    }
   return totaal/cijfers.length;//deel het totaal door het aantal cijfers en spuug deze waarde uit de functie
}

console.log('het gemiddelde cijfer berekend met de functie is '+ averageGrade(grades));//print het gemiddelde
console.log('het gemiddelde cijfer berekend met de functie is '+ averageGrade([6, 4, 5]));//print het gemiddelde
console.log('het gemiddelde cijfer berekend met de functie is '+ averageGrade([8, 9, 4, 6, 10]));//print het gemiddelde


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

//nieuwe versie van averageGrade
function averageGrade2(cijfers){
    let totaal = 0;//de totale score begint bij 0
    for(let n = 0;n < cijfers.length;n++)
    {
        totaal += cijfers[n];//tel ieder cijfer uit het grades array op bij het totaal
    }

    let average = totaal/cijfers.length;//het gemiddelde "average" berekenen: deel het totaal door het aantal cijfers

    //afronden op 2 decimalen. Math.round() rondt af op integers, maar num.toFixed(aantal decimalen) functie kan wel op afronden op een decimaal getal
    average = average.toFixed(2);
    return average;//return average uit functie
}

console.log("het afgeronde gemiddelde is "+ averageGrade2(grades));




//todo bonusopdracht


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

//