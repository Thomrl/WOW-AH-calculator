var DOMquantity = document.getElementById('quantity').value;
var DOMstacks = document.getElementById('stacks').value;
var DOMprice = document.getElementById('price').value;
var DOMprofit = document.getElementById('profit1').value;


function calculate(type) {

	DOMquantity = document.getElementById('quantity').value;
	DOMstacks = document.getElementById('stacks').value;
	DOMprice = document.getElementById('price').value;

	DOMitemPrice = document.getElementById(type+'-item-price');
	DOMstackPrice = document.getElementById(type+'-stack-price');
	DOMtotalPrice = document.getElementById(type+'-total-price');
	DOMprofit = document.getElementById('profit1');

	if (type === 'buying') {
		DOMitemPrice.textContent = DOMprice;
		DOMstackPrice.textContent = DOMquantity*DOMprice;
		DOMtotalPrice.textContent = (DOMstacks*DOMquantity)*DOMprice;
	} else if (type === 'selling') {

		if (document.getElementById('sell-price') !== 0) {
			sellPrice = document.getElementById('sell-price').value
		} else {
			sellPrice = DOMprice;
		}
        DOMitemPrice.textContent = sellPrice-0.05*sellPrice;
		DOMstackPrice.textContent = DOMquantity*sellPrice-(0.05*(DOMquantity*sellPrice));
		temp = (DOMstacks*DOMquantity)*sellPrice;
		totalPrice = temp-(0.05*temp);
		DOMtotalPrice.textContent = temp-(0.05*temp);

	} else if (type === 'profit') {
		btp = document.getElementById('buying-total-price').innerHTML;
		stp = document.getElementById('selling-total-price').innerHTML;	
		profit = stp-btp;
		DOMprofit.textContent = profit;
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

