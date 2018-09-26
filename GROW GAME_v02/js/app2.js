// // SEED'S
//
// corn = {
//     hMCorn : document.querySelector('.hMCorn'),
//     bPCorn : 10,
//     sPCorn : 9,
//     nCorn : 0,
//     btnBuyCorn : document.querySelector('.btnBuyCorn')
// };
//
//
//
//
//
////// FUNCTION CONSTRUCTOR
//
//  var Buy = function (btnBuy, price, howMuch, nProducts) {
//     this.btnBuy = btnBuy;
//     this.price = price;
//     this.howMuch = howMuch;
//     this.nProducts = nProducts;
//     this.Buy = function () {
//         this.btnBuy.addEventListener('click', function () {
//
//             if (budged >= price) {
//
//                 budgedNumber.textContent = budged = budged - price;
//                 howMuch.textContent = nProducts = nProducts + 1;
//                 btnBuy.style.color = "none";
//             }
//         })
//     }
// }

 // Buy.prototype.calculateBuy = function () {
//     this.btnBuy.addEventListener('click', function () {
//
//         if (budged >= this.price) {
//
//             budgedNumber.textContent = budged = budged - this.price;
//             this.howMuch.textContent = this.nProducts = this.nProducts + 1;
//             this.btnBuy.style.color = "none";
//         }
//
//     })
// }


 // var Corn = new Buy(corn.btnBuyCorn, corn.bpCorn, corn.hMCorn, corn.nCorn );
 // console.log(Corn)


var Person = function (name, job, yearOfBirth) {
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
};

Person.prototype.calculateAge = function () {
    console.log(2018 - this.yearOfBirth);
};

var corn = new Item('Stivi', 'programmer', 1995);

stivip.calculateAge();

//---------------------------------------------------------






var budged = 500,
    budgedNumber = document.querySelector('.budget'),

    btnBuyCorn = document.querySelector('.btnBuyCorn'),
    btnSellCorn = document.querySelector('.btnSellCorn'),
    hMCorn = document.querySelector('.hMCorn'),
    bPCorn = 10,
    sPCorn = 9,
    nCorn = 0;

budgedNumber.textContent = budged;




var Buy = function (btnBuy, btnSell, hMItem, bPItem, sPItem, nItem ) {
    this.btnBuy = btnBuy;
    this.btnSell = btnSell;
    this.hMItem = hMItem;
    this.bPItem = bPItem;
    this.sPItem = sPItem;
    this.nItem = nItem
};


Buy.prototype.btnBuy.addEventListener('click', function () {

    if (budged >= this.bPItem) {

        budgedNumber.textContent = budged = budged - this.bPItem;
        this.hMItem.textContent = this.nItem = this.nItem + 1;
        this.btnBuy.style.color = "none";
    }

});


//     this.btnSell.addEventListener('click', function () {
//
//         if (this.hMItem >= 1 ) {
//
//             budgedNumber.textContent = budged = budged + this.sPItem;
//             this.hMItem.textContent = this.nItem = this.nItem - 1;
//         }
//     })
//
// };



var Corn = new  Buy(btnBuyCorn, btnSellCorn, hMCorn, bPCorn, sPCorn, nCorn);

Corn.calculateBuy();