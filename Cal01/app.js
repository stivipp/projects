//
// -------- CODE FOR CALCULATION ---------
//
//


var numberOfStocks, priceOfStocks, totalSum, taxes, taxesShow, reset, totalSumTaxes, info, euro;


document.getElementById('calculate').addEventListener('click', function () {

    // Getter of Values
    numberOfStocks = document.getElementById('numberOfStocks').value;
    priceOfStocks = document.getElementById('priceOfStocks').value;
    totalSum = document.getElementById('totalSum').value;
    taxes = document.getElementById('taxes').value;


    // All Calculation
    totalSum = Math.round(numberOfStocks * priceOfStocks);
    taxes = taxes / 100;
    taxesShow = Math.round(totalSum * taxes);
    totalSumTaxes =parseInt(totalSum) - parseInt(taxesShow);


    // Info

    // if (totalSumTaxes <= 0) {
    //     info = "You should probably did better analyse before you will invest your money :/";
    // } else {
    //     if (totalSumTaxes => 1 && totalSumTaxes < 1000 ) {
    //         info = "You are on the best way to be a great Investor!";
    //     } else {
    //         if (totalSumTaxes => 1000 && totalSumTaxes < 10000 ) {
    //             info = "You are ready to be one of the richest man in the WORLD.";
    //         } else {
    //             info = "Congratulation you already belong between top 5% of richest people in the World :)";
    //
    //     }
    // }}


    if (totalSumTaxes <= 0) {
        info = "You should probably did better analyse before you will invest your money :/";
    } else if (totalSumTaxes > 1 && totalSumTaxes < 1000 ) {
        info = "You are on the best way to be a great Investor!";
    } else if (totalSumTaxes > 1000 && totalSumTaxes < 10000 ) {
                info = "You are ready to be one of the richest man in the WORLD.";
    } else {
        info = "Congratulation you already belong between top 5% of richest people in the World :)";
            }


    // Show the Values
    euro = ' €'

    document.getElementById('totalSum').textContent = totalSum + euro;
    document.getElementById('taxesShow').textContent = taxesShow + euro;
    document.getElementById('totalSumTaxes').textContent = totalSumTaxes + euro;
    document.querySelector('.info').textContent = info;


});


document.getElementById('reset').addEventListener('click', function () {

    numberOfStocks = document.getElementById('numberOfStocks').value = '';
    priceOfStocks = document.getElementById('priceOfStocks').value = '';
    taxes = document.getElementById('taxes').value = '';

    document.getElementById('totalSum').textContent = '';
    document.getElementById('taxesShow').textContent = '';
    document.getElementById('totalSumTaxes').textContent = '';
    document.querySelector('.info').textContent = 'Put the data into Calculation please. On the LEFT.';
})

