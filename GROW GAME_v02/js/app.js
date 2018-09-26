//-----------------------------   V A R I A B L E ' S --------------------------------------

    // BUDGED

var budged = 500,
    budgedNumber = document.querySelector('.budget'),

    // SEED'S

    btnBuyCorn = document.querySelector('.btnBuyCorn'),
    btnSellCorn = document.querySelector('.btnSellCorn'),
    hMCorn =document.querySelector('.hMCorn'),
    nCorn = 0,

    btnBuyWheat = document.querySelector('.btnBuyWheat'),
    btnSellWheat = document.querySelector('.btnSellWheat'),
    hMWheat = document.querySelector('.hMWheat'),
    nWheat = 0,

    btnBuySpecialSeeds = document.querySelector('.btnBuySpecialSeeds'),
    btnSellSpecialSeeds = document.querySelector('.btnSellSpecialSeeds'),
    hMSpecialSeeds = document.querySelector('.hMSpecialSeeds'),
    nSpecialSeeds = 0,

    // WATER

    btnBuyWater = document.querySelector('.btnBuyWater'),
    btnSellWater = document.querySelector('.btnSellWater'),
    hMWater = document.querySelector('.hMWater'),
    nWater = 0,

    btnBuySpecialWater = document.querySelector('.btnBuySpecialWater'),
    btnSellSpecialWater = document.querySelector('.btnSellSpecialWater'),
    hMSpecialWater = document.querySelector('.hMSpecialWater'),
    nSpecialWater = 0,

    // SOIL'S

    btnBuySoil = document.querySelector('.btnBuySoil'),
    btnSellSoil = document.querySelector('.btnSellSoil'),
    hMSoil = document.querySelector('.hMSoil'),
    nSoil = 0,

    btnBuySpecialSoil = document.querySelector('.btnBuySpecialSoil'),
    btnSellSpecialSoil = document.querySelector('.btnSellSpecialSoil'),
    hMSpecialSoil = document.querySelector('.hMSpecialSoil'),
    nSpecialSoil = 0,

    // TOOL'S

    btnBuyTool = document.querySelector('.btnBuyTool'),
    btnSellTool = document.querySelector('.btnSellTool'),
    hMTool = document.querySelector('.hMTool'),
    nTool = 0,

    // WORKER'S

    btnBuyWorker = document.querySelector('.btnBuyWorker'),
    btnSellWorker = document.querySelector('.btnSellWorker'),
    hMWorker = document.querySelector('.hMWorker'),
    nWorker = 0
;


budgedNumber.textContent = budged;

// -------- FUNCTION'S ---------

function lessThanBudget() {

    // CORN
    if (budged < bPCorn) {
        btnBuyCorn.style.background = 'grey';
        budgedNumber.style.color = 'red'
    } else {
        btnBuyCorn.style.color = 'white';
        budgedNumber.style.color = 'green';
        btnBuyCorn.style.background = ''
    }



    // WHEAT
    if (budged < bPWheat) {
        btnBuyWheat.style.background = 'grey';
        budgedNumber.style.color = 'red'
    } else {
        btnBuyWheat.style.color = 'white';
        budgedNumber.style.color = 'green';
        btnBuyWheat.style.background = ''
    }

    // SPECIAL SEEDS
    if (budged < bPSpecialSeeds) {
        btnBuySpecialSeeds.style.background = 'grey';
        budgedNumber.style.color = 'red'
    } else {
        btnBuySpecialSeeds.style.color = 'white';
        budgedNumber.style.color = 'green';
        btnBuySpecialSeeds.style.background = ''
    }

    // WATER
    if (budged < bPWater) {
        btnBuyWater.style.background = 'grey';
        budgedNumber.style.color = 'red'
    } else {
        btnBuyWater.style.color = 'white';
        budgedNumber.style.color = 'green';
        btnBuyWater.style.background = ''
    }

    // SPECIAL WATER
    if (budged < bPSpecialWater) {
        btnBuySpecialWater.style.background = 'grey';
        budgedNumber.style.color = 'red'
    } else {
        btnBuySpecialWater.style.color = 'white';
        budgedNumber.style.color = 'green';
        btnBuySpecialWater.style.background = ''
    }

    // SOIL
    if (budged < bPSoil) {
        btnBuySoil.style.background = 'grey';
        budgedNumber.style.color = 'red'
    } else {
        btnBuySoil.style.color = 'black';
        budgedNumber.style.color = 'green';
        btnBuySoil.style.background = ''
    }

    // SPECIAL SOIL
    if (budged < bPSpecialSoil) {
        btnBuySpecialSoil.style.background = 'grey';
        budgedNumber.style.color = 'red'
    } else {
        btnBuySpecialSoil.style.color = 'black';
        budgedNumber.style.color = 'green';
        btnBuySpecialSoil.style.background = ''
    }

    // TOOL'S
    if (budged < bPTool) {
        btnBuyTool.style.background = 'grey';
        budgedNumber.style.color = 'red'
    } else {
        btnBuyTool.style.color = 'black';
        budgedNumber.style.color = 'green';
        btnBuyTool.style.background = ''
    }

    // WORKERS'S
    if (budged < bPWorker) {
        btnBuyWorker.style.background = 'grey';
        budgedNumber.style.color = 'red'
    } else {
        btnBuyWorker.style.color = 'black';
        budgedNumber.style.color = 'green';
        btnBuyWorker.style.background = ''
    }

}


//-----------------------------   F U N C T I O N ' S  --------------------------------------
//-----------------------------     S E E D ' S          ------------------------------------
// CORN

function items (whichBtnBuy, whichBtnSell, buyPrice, sellPrice, hMWhat, nWhat)
{
    whichBtnBuy.addEventListener('click', function ()
    {

        if (budged >= buyPrice) {

            budgedNumber.textContent = budged = budged - buyPrice;
            hMWhat.textContent = nWhat = nWhat + 1;
            whichBtnBuy.style.color = "none";
        }

        lessThanBudget()

    });

    whichBtnSell.addEventListener('click', function ()
    {

        if (nWhat > 0 ) {

            budgedNumber.textContent = budged = budged + sellPrice;
            hMWhat.textContent = nWhat = nWhat - 1;
        }

        lessThanBudget()

    });

}

// ------------ CALLING THE FUNCTION ---------------
/*
This part of code is about calling the function a
inserting the parameters the value's of certain items.

@EXAMPLE:
    whichBtnBuy     -> btnBuyCorn
    whichBtnSell    -> btnSellCorn
    buyPrice        -> 10
    sellPrice       -> 9
    hMWhat          -> hMCorn
    nWhat           -> nCorn
 */

// SEED'S
items(btnBuyCorn, btnSellCorn, 10, 9, hMCorn, nCorn);
items(btnBuyWheat, btnSellWheat, 15, 13, hMWheat, nWheat);
items(btnBuySpecialSeeds, btnSellSpecialSeeds, 50, 45, hMSpecialSeeds, nSpecialSeeds);

// WATER
items(btnBuyWater, btnSellWater, 25, 20, hMWater, nWater);
items(btnBuySpecialWater, btnSellSpecialWater, 35, 25, hMSpecialWater, nSpecialWater);

// SOILS'S
items(btnBuySoil, btnSellSoil, 10, 9, hMSoil, nSoil);
items(btnBuySpecialSoil, btnSellSpecialSoil, 25, 20, hMSpecialSoil, nSpecialSoil);

// TOOL'S
items(btnBuyTool, btnSellTool, 100, 50, hMTool, nTool);

// WORKERS'S
items(btnBuyWorker, btnSellWorker, 45, -50, hMWorker, nWorker);




