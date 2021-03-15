function setDrinkChoice(flavour, drinkSize) {

    var outString = "You ordered "

    switch (flavour) {
        case 'Cola':
            outString += 'Cola';
            break;
        case 'Lemon':
            outString += 'Lemon';
            break;
        case 'Orange':
            outString += 'Orange';
            break;
    }

    outString += ", size ";

    switch (drinkSize) {
        case 'Small':
            outString += 'Small ';
            break;
        case 'Medium':
            outString += 'Medium ';
            break;
        case 'Large':
            outString += 'Large ';
            break;
    }

    document.getElementById('result').innerHTML = outString;
}

function getDrinkChoice() {
    var flavour = document.getElementById('flavour').value;
    var drinkSize = document.getElementById('drinkSize').value;
    // Just return if either are blank. There will be a validation message
    if (flavour == "" || drinkSize == "") {
        return;
    }

    setDrinkChoice(flavour, drinkSize);
}