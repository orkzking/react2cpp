class CalculatorApi {
	
  constructor(serviceAdress) {
  	this.serviceAdress = serviceAdress;
  }
  
  makeURL(number1, number2, operation) {
  	const resource =operation + "/" + number1 + "/" + number2;
      return new URL(resource,  this.serviceAdress);
  }
  
  calculate(number1, number2, operation, handler) {
    fetch(this.makeURL(number1,number2,operation))
      .then(res => res.json)
      .then( (response) => {
         handler(response["result"]);
        },
        (err) => {
        	handler(err);
            console.log(err);
        }
      );
  }
}

export default CalculatorApi;