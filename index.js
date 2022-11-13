/* Coded by Vez Codez aka Usi */

function closeCard()
{
    const cardE = document.getElementById("card");
    cardE.style.visibility = "hidden";
    const cardB = document.getElementById("cardO");
    cardB.style.visibility = "visible";
}

function openCard()
{
    const cardB = document.getElementById("cardO");
    const cardE = document.getElementById("card");
    cardE.style.visibility = "visible";
    cardB.style.visibility = "hidden";
}

/* Coded by Vez Codez aka Usi */