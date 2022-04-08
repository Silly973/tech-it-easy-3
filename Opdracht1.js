//Opdracht 1 - Array Methoden
//Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.

const tvTypeName = inventory.map((inventorys)=>{
    return inventorys.type;

});
console.log(tvTypeName);


//Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.

const soldOut = inventory.map((inventorys)=>{
    return inventorys.originalStock === 0 + " " + inventorys.name;
});
console.log(soldOut);


//Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.

const ambiLights = inventory.map((inventorys)=>{
    return inventorys.ambiLight === "true";

});
console.log(ambiLights);


//Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.

const prices = inventory.sort((a, b)=>{
    if (a.price < b.price){
        return 1;
    } else if (a.price > b.price){
        return -1;
    } else {
        return 0;
    }

});
console.log(prices);

