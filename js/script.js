var zero = 0.00;
var winningBid = 0.05;
var durationCost = 0.15;
var durationType = 1;
var ahType = 1;
var designT = 1;


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
    DOMitemDeposit = document.getElementById('deposit-item-cost');
    DOMstackDeposit = document.getElementById('deposit-stack-cost');
    DOMtotalDeposit = document.getElementById('deposit-total-cost');

    //Buying
	if (type === 'buying') {
		//Just so Item Price always has a number.
		if (DOMprice === "") {
		    DOMitemPrice.textContent = zero.toFixed(2) ;
		} else {
		    DOMitemPrice.textContent = DOMprice;
		};
		stack = DOMquantity*DOMprice;
		DOMstackPrice.textContent = stack.toFixed(2);
		totalPrice = (DOMstacks*DOMquantity)*DOMprice;
		DOMtotalPrice.textContent = totalPrice.toFixed(2);

	//Selling
	} else if (type === 'selling') {

		if (document.getElementById('sell-price') !== 0) {
			sellPrice = document.getElementById('sell-price').value;
		} else {
			sellPrice = DOMprice;
		};
		itemPrice = sellPrice-winningBid*sellPrice;
		DOMitemPrice.textContent = itemPrice.toFixed(2);
		stackPrice = DOMquantity*sellPrice-(winningBid*(DOMquantity*sellPrice));
		DOMstackPrice.textContent = stackPrice.toFixed(2);
		temp = (DOMstacks*DOMquantity)*sellPrice;
		totalPrice = temp-(winningBid*temp);
		//Deposit
		itemDeposit = DOMmsv*durr;
		stackDeposit = (DOMmsv*durr)*DOMquantity;
		totalDeposit = (DOMmsv*durr)*(DOMquantity*DOMstacks);
		totalAfterDeposit = totalPrice-totalDeposit;
		DOMtotalPrice.textContent = totalAfterDeposit.toFixed(2);

		DOMitemDeposit.textContent = itemDeposit.toFixed(2);
		DOMstackDeposit.textContent = stackDeposit.toFixed(2);
		DOMtotalDeposit.textContent = totalDeposit.toFixed(2);


    //Profit
	} else if (type === 'profit') {
		btp = document.getElementById('buying-total-price').innerHTML;
		profitAfterDeposit = totalAfterDeposit-btp;
		DOMprofit.textContent = profitAfterDeposit.toFixed(2);
	};
};

document.getElementById('action').addEventListener('click', function(){calculate('buying', durationCost)});
document.getElementById('action').addEventListener('click', function(){calculate('selling', durationCost)});
document.getElementById('action').addEventListener('click', function(){calculate('profit', durationCost)});

function durationRemoveActive() {
	for (i = 1; i<4; i++) {
	    document.getElementById('duration-'+i).classList.remove('active');
	};
};

function callIt() {
	calculate('buying', durationCost);
	calculate('selling', durationCost);
	calculate('profit', durationCost);
};

//12 hour duration
document.getElementById('duration-1').addEventListener('click', function(){
	durationRemoveActive();
	document.getElementById('duration-1').classList.add('active');
	if (ahType === 1) {
		durationCost = 0.15;
	} else {
		durationCost = 0.75;
	};
	durationType = 1;
	callIt();
});

//24 hour duration
document.getElementById('duration-2').addEventListener('click', function(){
	durationRemoveActive();
	document.getElementById('duration-2').classList.add('active');
	if (ahType === 1) {
		durationCost = 0.30;
	} else {
		durationCost = 1.50;
	};
	durationType = 2;
	callIt();
});

//48 hour duration
document.getElementById('duration-3').addEventListener('click', function(){
	durationRemoveActive();
	document.getElementById('duration-3').classList.add('active');
	if (ahType === 1) {
		durationCost = 0.60;
	} else {
		durationCost = 3.00;
	};
	durationType = 3;
	callIt();
});


//Factioned Auction House
document.getElementById('type-1').addEventListener('click', function(){
	document.getElementById('type-1').classList.remove('active');
	document.getElementById('type-2').classList.remove('active');
	document.getElementById('type-1').classList.add('active');
	ahType = 1;
	winningBid = 0.05;
	if (durationType === 1) {
		durationCost = 0.15;
	} else if (durationType === 2) {
		durationCost = 0.30;
	} else {
		durationCost = 0.60;
	};
	callIt();
});

//Neutral Auction House
document.getElementById('type-2').addEventListener('click', function(){
	document.getElementById('type-1').classList.remove('active');
	document.getElementById('type-2').classList.remove('active');
	document.getElementById('type-2').classList.add('active');
	ahType = 2;
	winningBid = 0.15;
	if (durationType === 1) {
		durationCost = 0.75;
	} else if (durationType === 2) {
		durationCost = 1.50;
	} else {
		durationCost = 3.00;
	};
	callIt();
});



document.getElementById('design').addEventListener('click', function(){
	//change design
	if (designT === 2) {
		document.getElementById('css').href = "css/main.css";
		document.getElementById('design').textContent = "Old design";
		designT = 1;
	} else {
		document.getElementById('css').href = "css/second.css";
		document.getElementById('design').textContent = "Back to new design";
		designT = 2;
	};
});


//Click enter to add player
window.addEventListener('keydown', function(e) {
	if (e.keyCode === 13) {
		callIt();
	};
});

function validate(e) {
	var text = e.value;
};

