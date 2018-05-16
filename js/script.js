/*var DOMquantity = document.getElementById('quantity').value;
var DOMstacks = document.getElementById('stacks').value;
var DOMprice = document.getElementById('price').value;
var DOMprofit = document.getElementById('profit-profit').value;
var DOMmsv = document.getElementById('msv').value;
var DOMdeposit = document.getElementById('selling-deposit-cost').value;
var DOMtotalAfterDeposit = document.getElementById('selling-income-deposit').value;
var DOMprofitAfterDeposit = document.getElementById('profit-after-deposit').value;
*/
var durationCost = 0.15;


function calculate(type, durr) {

    //Getting the user input.
	DOMquantity = document.getElementById('quantity').value;
	DOMstacks = document.getElementById('stacks').value;
	DOMprice = document.getElementById('price').value;
    DOMmsv = document.getElementById('msv').value;


    //Output fields
	DOMitemPrice = document.getElementById(type+'-item-price');
	DOMstackPrice = document.getElementById(type+'-stack-price');
	DOMtotalPrice = document.getElementById(type+'-total-price');
	DOMprofit = document.getElementById('profit-profit');
    DOMdeposit = document.getElementById('selling-deposit-cost');
    //DOMtotalAfterDeposit = document.getElementById('selling-income-deposit');
    //DOMprofitAfterDeposit = document.getElementById('profit-after-deposit');

    //Buying
	if (type === 'buying') {
		//Just so Item Price always has a number.
		if (DOMprice === "") {
		    DOMitemPrice.textContent = 0;
		} else {
		    DOMitemPrice.textContent = DOMprice;
		};
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
		deposit = (DOMmsv*durr)*(DOMquantity*DOMstacks);
		totalAfterDeposit = totalPrice-deposit;
		DOMtotalPrice.textContent = totalAfterDeposit;

		DOMdeposit.textContent = deposit;

		//DOMtotalAfterDeposit.textContent = totalAfterDeposit;

    //Profit
	} else if (type === 'profit') {
		btp = document.getElementById('buying-total-price').innerHTML;
		//stp = document.getElementById('selling-total-price').innerHTML;	
		//profit = stp-btp;
		profitAfterDeposit = totalAfterDeposit-btp;
		DOMprofit.textContent = profitAfterDeposit;

		//DOMprofitAfterDeposit.textContent = profitAfterDeposit;
	}
}

document.getElementById('action').addEventListener('click', function(){calculate('buying', durationCost)});
document.getElementById('action').addEventListener('click', function(){calculate('selling', durationCost)});
document.getElementById('action').addEventListener('click', function(){calculate('profit', durationCost)});

function removeActive() {
	for (i = 1; i<4; i++) {
	    document.getElementById('duration-'+i).classList.remove('active');
	}
}

function callIt() {
	calculate('buying', durationCost);
	calculate('selling', durationCost);
	calculate('profit', durationCost);
};

//12 hour duration
document.getElementById('duration-1').addEventListener('click', function(){
	removeActive();
	document.getElementById('duration-1').classList.add('active');
	durationCost = 0.15;
	callIt();
})

//24 hour duration
document.getElementById('duration-2').addEventListener('click', function(){
	removeActive();
	document.getElementById('duration-2').classList.add('active');
	durationCost = 0.30;
	callIt();
})

//48 hour duration
document.getElementById('duration-3').addEventListener('click', function(){
	removeActive();
	document.getElementById('duration-3').classList.add('active');
	durationCost = 0.60;
	callIt();
})


//Click enter to add player
window.addEventListener('keydown', function(e) {
	if (e.keyCode === 13) {
		callIt()
	}
})

function validate(e) {
	var text = e.value;
}

