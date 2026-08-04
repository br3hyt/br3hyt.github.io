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

    return Number(input) * multiplier;
}


function calculate() {

    let pickaxe = parseMoney(document.getElementById("pickaxe").value);
    let sellaxe = parseMoney(document.getElementById("sellaxe").value);
    let axe = parseMoney(document.getElementById("axe").value);
    let potion = parseMoney(document.getElementById("potion").value);


    let results = [
        {
            name: "Shard Pickaxe",
            value: pickaxe / 1500
        },

        {
            name: "Shard Sell Axe",
            value: sellaxe / 1500
        },

        {
            name: "Shard Axe",
            value: axe / 1500
        },

        {
            name: "Shard Potion",
            value: (potion * 6) / 250
        }
    ];


    results.sort(function(a, b) {
        return b.value - a.value;
    });


    let output = "";

    for (let i = 0; i < results.length; i++) {

        output +=
        (i + 1) + ". " +
        results[i].name +
        " - " +
        Math.floor(results[i].value).toLocaleString() +
        " money per shard<br>";
    }


    document.getElementById("results").innerHTML = output;
}
