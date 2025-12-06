// Q-1 Create a user object that stores name and email and has a login method which prints "User logged in".

let user = {
  name: "Deba",
  email: "deba@gmail.com",
  login: function () {
    console.log("User logged in");
  },
};

// Imagine you now have 5 users. So in that case it's better to use class

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  login() {
    console.log("User Logged In");
  }
}

let user1 = new User("Deba", "deba@gmail.com");
let user2 = new User("Sukun", "suku@gmail.com");

// Q-2 Create a product that stores name and price , and has a method which returns the final price after discount.

class Product {
  constructor(name, price) {
    (this.name = name), (this.price = price);
    this.discount = "10%";
  }
  finalPrice() {
    const discountValue = parseFloat(this.discount) / 100;
    return this.price - this.price * discountValue;
  }
}

let prod1 = new Product("Tiger Biscuit", 300);

// Q-3 Create a car class with the following
// brand
// speed
// a drive method that prints the car brand and speed .

class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  drive() {
    console.log(this.brand, this.speed);
  }
}

let car1=new Car("Tiago","200km/hr");
let car2=new Car("Punch","280km/hr");

// SECTION 4 : Constructor Functions And Prototypes

// create a User constructor function (do not use class syntax).

function Animal(){
    this.name="Sher"
}

let an1=new Animal();

