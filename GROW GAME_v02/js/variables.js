// -------- VARIABLES ---------

// BUDGED

var budged = 500,
    budgedNumber = document.querySelector('.budget'),

    // SEED'S

    btnBuyCorn = document.querySelector('.btnBuyCorn'),
    btnSellCorn = document.querySelector('.btnSellCorn'),
    hMCorn =document.querySelector('.hMCorn'),
    bPCorn = 10,
    sPCorn = 9,
    nCorn = 0,

    btnBuyWheat = document.querySelector('.btnBuyWheat'),
    btnSellWheat = document.querySelector('.btnSellWheat'),
    hMWheat = document.querySelector('.hMWheat'),
    bPWheat = 15,
    sPWheat = 13,
    nWheat = 0,

    btnBuySpecialSeeds = document.querySelector('.btnBuySpecialSeeds'),
    btnSellSpecialSeeds = document.querySelector('.btnSellSpecialSeeds'),
    hMSpecialSeeds = document.querySelector('.hMSpecialSeeds'),
    bPSpecialSeeds = 50,
    sPSpecialSeeds = 45,
    nSpecialSeeds = 0,

    // WATER

    btnBuyWater = document.querySelector('.btnBuyWater'),
    btnSellWater = document.querySelector('.btnSellWater'),
    hMWater = document.querySelector('.hMWater'),
    bPWater = 25,
    sPWater = 22,
    nWater = 0,

    btnBuySpecialWater = document.querySelector('.btnBuySpecialWater'),
    btnSellSpecialWater = document.querySelector('.btnSellSpecialWater'),
    hMSpecialWater = document.querySelector('.hMSpecialWater'),
    bPSpecialWater = 35,
    sPSpecialWater = 31,
    nSpecialWater = 0,

    // SOIL'S

    btnBuySoil = document.querySelector('.btnBuySoil'),
    btnSellSoil = document.querySelector('.btnSellSoil'),
    hMSoil = document.querySelector('.hMSoil'),
    bPSoil = 10,
    sPSoil = 9,
    nSoil = 0,

    btnBuySpecialSoil = document.querySelector('.btnBuySpecialSoil'),
    btnSellSpecialSoil = document.querySelector('.btnSellSpecialSoil'),
    hMSpecialSoil = document.querySelector('.hMSpecialSoil'),
    bPSpecialSoil = 25,
    sPSpecialSoil = 22,
    nSpecialSoil = 0,

    // TOOL'S

    btnBuyTool = document.querySelector('.btnBuyTool'),
    btnSellTool = document.querySelector('.btnSellTool'),
    hMTool = document.querySelector('.hMTool'),
    bPTool = 100,
    sPTool = 90,
    nTool = 0,

    // WORKER'S

    btnBuyWorker = document.querySelector('.btnBuyWorker'),
    btnSellWorker = document.querySelector('.btnSellWorker'),
    hMWorker = document.querySelector('.hMWorker'),
    bPWorker = 45,
    sPWorker = -5,
    nWorker = 0
;


budgedNumber.textContent = budged;