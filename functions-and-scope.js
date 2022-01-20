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

// loop over array values
// set loop limit to array length
// if I want to remember the values then I need a new array. If want to keep track of how many match the conditions I can simply make a counter.

const cumLaude = (studGrades) => {
    let cumLoudeCounter = 0;
    for (let i = 0; i < studGrades.length; i++) {
        if (studGrades[i] >= 8) cumLoudeCounter++;
    }
    return cumLoudeCounter;
};

console.log("Opdracht 1a\n")
console.log(cumLaude(grades));

// ---- Verwachte uitkomst: 6

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

console.log("\n\nOpdracht 1b \n")
console.log(cumLaude(grades)); // geeft 6
console.log(cumLaude([6, 4, 5])); // geeft 0
console.log(cumLaude([8, 9, 4, 6, 10])); // geeft 3

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

//Add all numbers in array
//divide the result by number of entries
//display result

const averageGrade = (studGrades) => {
    let total = 0;
    for (let i = 0; i < studGrades.length; i++) {
        total += studGrades[i];
    }
    return total / studGrades.length;
}
console.log("\n\nOpdracht 2a \n")
console.log(averageGrade(grades));

// ---- Verwachte uitkomst: 6.642857142857143


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
console.log("\n\nOpdracht 2b \n")
console.log(averageGrade(grades)); //geeft 6.642857142857143
console.log(averageGrade([6, 4, 5])); //geeft xxxx
console.log(averageGrade([8, 9, 4, 6, 10])); //geeft xxxx


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

console.log("\n\nOpdracht 2c \n")
console.log(averageGrade(grades).toFixed(2)); //geeft 6.642857142857143
console.log(averageGrade([6, 4, 5]).toFixed(2)); //geeft xxxx
console.log(averageGrade([8, 9, 4, 6, 10]).toFixed(2)); //geeft xxxx

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

//check every number in the array
//if number is higher than previous one, then remember that number

const highestGrade = (studGrades) => {
    let highest = 0;
    for (let i = 0; i < studGrades.length; i++) {
        if (highest < studGrades[i]) highest = studGrades[i];
    }
    return highest;
}
console.log("\n\nOpdracht 3a \n")
console.log(highestGrade(grades));


// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
console.log("\n\nOpdracht 3b \n")
console.log(highestGrade(grades)); //geeft 9
console.log(highestGrade([6, 4, 5])); //geeft 6
console.log(highestGrade([8, 9, 4, 6, 10]));// geeft 10
