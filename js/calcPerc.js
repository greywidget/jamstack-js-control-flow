function setPercent(amount, percent) {
    var numAmount = parseInt(amount);
    var numPercent = parseInt(percent);

    var outPercent = (numAmount * numPercent / 100).toFixed(2);
    var outString = `${percent}% of ${amount} is ${outPercent}`
    document.getElementById('result').innerHTML = outString;
}

function getPercentage() {
    var amount = document.getElementById('amount').value;
    var percent = document.getElementById('percent').value;
    // Just return if either are blank. There will be a validation message
    if (amount == "" || percent == "") {
        return;
    }

    setPercent(amount, percent);
}