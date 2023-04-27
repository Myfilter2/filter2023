/// pen2023.js

setTimeout(function (event){
 
                fs.get('/contest/ajax/closePacks2022ContestBanner/', {}, function () {
                    module.remove({click: this});
                });}, 1000);
const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;
addCSS(".moneybox-advert{background: url('https://i.redd.it/86aej5ehyxh11.gif') no-repeat center!important;}");
