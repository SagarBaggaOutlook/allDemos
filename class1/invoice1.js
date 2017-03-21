angular.module('invoice1', [])
			.controller('InvoiceController', function() {
				this.qty = 1;
  this.cost = 2;
  this.inCurr = 'EURss';
				this.currencies = ['USDa', 'EURss', 'CNYdd'];
				this.usdToForeignRates = {
					USDa: 1,
					EURss: 0.74,
					CNYdd: 6.09,					
				};
				this.boss = [
					{'name' : 'Sagar'},
					{'Duration' : '5year'},
					{'location' : 'South Asia'}
				];

				this.total = function total(outCurr){
					return this.convertCurrency(this.qty*this.cost,this.inCurr,outCurr);
					//y not this.outCurr?
				};

				this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
			    return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
 				 };
 				 //bracket= usdToForeignRates[outCurr] --usdToForeignRates(outCurr)?

  				this.pay = function pay() {
    			window.alert("Thanks!");
  			};
			});

