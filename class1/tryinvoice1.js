angular.module('tryinvoice1',[])
.controller('trycontroller1', function($scope){
	this.currencies = ['USD','INR','EUR'];
	this.inCurr = 'INR';
	this.cost= 2;
	this.qty = 1;
this.rate = {
	USD: 65,
	INR: 1,
	EUR: 45 
}


	this.totalmoney =  function totalmoney(outCurr){
		return this.convertCurrency(this.qty* this.cost,this.inCurr,this.outCurr);
	};

this.convertCurrency = function convertCurrency(amount, inCurr, outCurr ){
	return amount* this.rate[outCurr]/ this.rate[inCurr];
}

});