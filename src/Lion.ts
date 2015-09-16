import Animal = require("Animal");

class Lion extends Animal {
	constructor() {
		super('meat');
	}

	speak() {
		console.log('Lion roared');
		super.speak();
	}
} export = Lion;