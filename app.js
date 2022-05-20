let productAmount = document.getElementById('product_amt');
let shippingCharge = document.getElementById('shipping_charge');
let totalCartAmount = document.getElementById('total_cart_amt');

let discountCode = document.getElementById('discount_code1');
let throwError = document.getElementById('error_trw');

const decreaseNumber = (itemValue, itemPrice)=> {
	let itemval = document.getElementById(itemValue);
	let itemprice = document.getElementById(itemPrice);

	// console.log(itemval.value);
	if(itemval.value <= 0){
		itemval.value = 0;
		alert('Minimum quantity');
	} else {
		itemval.value = parseInt(itemval.value) - 1;
		itemprice.innerHTML = parseInt(itemprice.innerHTML) - 15;
		productAmount.innerHTML = parseInt(productAmount.innerHTML) - 15;
		totalCartAmount.innerHTML = parseInt(productAmount.innerHTML) + parseInt(shippingCharge.innerHTML);

		itemval.style.background = '#fff';
		itemval.style.color = '#000';
	}
}

const increaseNumber = (itemValue, itemPrice)=> {
	let itemval = document.getElementById(itemValue);
	let itemprice = document.getElementById(itemPrice);

	if(itemval.value >= 5){
		itemval.value = 5;
		alert('Maximum quantity');
		itemval.style.background = 'red';
		itemval.style.color = '#fff';
	} else {
		itemval.value = parseInt(itemval.value) + 1;
		itemprice.innerHTML = parseInt(itemprice.innerHTML) + 15;
		productAmount.innerHTML = parseInt(productAmount.innerHTML) + 15;
		totalCartAmount.innerHTML = parseInt(productAmount.innerHTML) + parseInt(shippingCharge.innerHTML);
	}
}

const discountcode = ()=> {
	let totalCurrentAmount = parseInt(totalCartAmount.innerHTML);
	if(discountCode.value === 'Ali'){
		let newTotalAmount = totalCurrentAmount - 15;
		totalCartAmount.innerHTML = newTotalAmount;
		throwError.innerHTML = "Congrats! you get the discount";
	} else {
		throwError.innerHTML = `TryAgain! your code is not valid.`;
	}
}