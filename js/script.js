/*var DOMquantity = document.getElementById('quantity').value;
var DOMstacks = document.getElementById('stacks').value;
var DOMprice = document.getElementById('price').value;
var DOMprofit = document.getElementById('profit-profit').value;
var DOMmsv = document.getElementById('msv').value;
var DOMdeposit = document.getElementById('selling-deposit-cost').value;
var DOMtotalAfterDeposit = document.getElementById('selling-income-deposit').value;
var DOMprofitAfterDeposit = document.getElementById('profit-after-deposit').value;
*/

function calculate(type) {

	DOMquantity = document.getElementById('quantity').value;
	DOMstacks = document.getElementById('stacks').value;
	DOMprice = document.getElementById('price').value;

	DOMitemPrice = document.getElementById(type+'-item-price');
	DOMstackPrice = document.getElementById(type+'-stack-price');
	DOMtotalPrice = document.getElementById(type+'-total-price');
	DOMprofit = document.getElementById('profit-profit');
    DOMmsv = document.getElementById('msv').value;
    DOMdeposit = document.getElementById('selling-deposit-cost');
    DOMtotalAfterDeposit = document.getElementById('selling-income-deposit');
    DOMprofitAfterDeposit = document.getElementById('profit-after-deposit');

    //Buying
	if (type === 'buying') {
		DOMitemPrice.textContent = DOMprice;
		DOMstackPrice.textContent = DOMquantity*DOMprice;
		DOMtotalPrice.textContent = (DOMstacks*DOMquantity)*DOMprice;

	//Selling
	} else if (type === 'selling') {

		if (document.getElementById('sell-price') !== 0) {
			sellPrice = document.getElementById('sell-price').value;
		} else {
			sellPrice = DOMprice;
		}
        DOMitemPrice.textContent = sellPrice-0.05*sellPrice;
		DOMstackPrice.textContent = DOMquantity*sellPrice-(0.05*(DOMquantity*sellPrice));
		temp = (DOMstacks*DOMquantity)*sellPrice;
		totalPrice = temp-(0.05*temp);
		DOMtotalPrice.textContent = temp-(0.05*temp);

		deposit = (DOMmsv*0.15)*(DOMquantity*DOMstacks);
		DOMdeposit.textContent = deposit;

		totalAfterDeposit = totalPrice-deposit;
		DOMtotalAfterDeposit.textContent = totalAfterDeposit;

    //Profit
	} else if (type === 'profit') {
		btp = document.getElementById('buying-total-price').innerHTML;
		stp = document.getElementById('selling-total-price').innerHTML;	
		profit = stp-btp;
		DOMprofit.textContent = profit;

		profitAfterDeposit = totalAfterDeposit-btp;
		DOMprofitAfterDeposit.textContent = profitAfterDeposit;
	}
}

document.getElementById('action').addEventListener('click', function(){calculate('buying')});
document.getElementById('action').addEventListener('click', function(){calculate('selling')});
document.getElementById('action').addEventListener('click', function(){calculate('profit')});


//Click enter to add player
window.addEventListener('keydown', function(e) {
	if (e.keyCode === 13) {
		calculate('buying');
		calculate('selling');
		calculate('profit');
	}
})

function validate(e) {
	var text = e.value;
}

