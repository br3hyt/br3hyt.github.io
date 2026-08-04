function calculate() {

    // Get prices from boxes
    let pickaxe = Number(document.getElementById("pickaxe").value);
    let sellaxe = Number(document.getElementById("sellaxe").value);
    let axe = Number(document.getElementById("axe").value);
    let potion = Number(document.getElementById("potion").value);


    // Calculate value per shard

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


    // Sort highest value first
    results.sort(function(a, b) {
        return b.value - a.value;
    });


    // Display results

    let output = "";

    for (let i = 0; i < results.length; i++) {

        output += 
        (i + 1) + ". " +
        results[i].name +
        " - " +
        Math.floor(results[i].value).toLocaleString() +
        " money per shard"
        + "<br>";
    }


    document.getElementById("results").innerHTML = output;

}
