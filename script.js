function parseMoney(input) {

    input = input.toLowerCase().replace(/,/g, "").trim();

    let multiplier = 1;

    if (input.endsWith("k")) {
        multiplier = 1000;
        input = input.slice(0, -1);
    }

    else if (input.endsWith("m")) {
        multiplier = 1000000;
        input = input.slice(0, -1);
    }

    else if (input.endsWith("b")) {
        multiplier = 1000000000;
        input = input.slice(0, -1);
    }

    else if (input.endsWith("t")) {
        multiplier = 1000000000000;
        input = input.slice(0, -1);
    }

    return Number(input) * multiplier;
}


function formatMoney(number) {

    if (number >= 1000000000000) {
        return (number / 1000000000000).toFixed(2).replace(/\.00$/, "") + "t";
    }

    if (number >= 1000000000) {
        return (number / 1000000000).toFixed(2).replace(/\.00$/, "") + "b";
    }

    if (number >= 1000000) {
        return (number / 1000000).toFixed(2).replace(/\.00$/, "") + "m";
    }

    if (number >= 1000) {
        return (number / 1000).toFixed(2).replace(/\.00$/, "") + "k";
    }

    return number;
}


function calculate() {

    let pickaxe = parseMoney(document.getElementById("pickaxe").value);
    let sellaxe = parseMoney(document.getElementById("sellaxe").value);
    let axe = parseMoney(document.getElementById("axe").value);
    let potion = parseMoney(document.getElementById("potion").value);


    let results = [
        {
            name: "Shard Pickaxe",
            value: pickaxe
        },

        {
            name: "Shard Sell Axe",
            value: sellaxe
        },

        {
            name: "Shard Axe",
            value: axe
        },

        {
            name: "Shard Potion",
            value: potion * 6
        }
    ];


    results.sort((a, b) => b.value - a.value);


    let best = results[0];
    let second = results[1];

    let difference = best.value - second.value;


    let output = `
    <h3>🏆 Best Buy: ${best.name}</h3>
    <p>${formatMoney(best.value)} total value</p>

    <p>💰 Beats ${second.name} by ${formatMoney(difference)}</p>

    <h3>Ranking:</h3>
    `;


    for (let i = 0; i < results.length; i++) {

        output += 
        (i + 1) + ". " +
        results[i].name +
        " - " +
        formatMoney(results[i].value) +
        "<br>";
    }


    document.getElementById("results").innerHTML = output;

}
