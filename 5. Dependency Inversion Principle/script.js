// // EXAMPLE WITHOUT USING DEPENDENCE INVERSION PRINCIPLE
// // if user wants to use his credit card, with amount in cents

// class Store {
//     constructor(user) {
//         this.creditCard = new CreditCard(user);
//     }

//     purchaseBicycle(quantity) {
//         this.creditCard.makePayment(225 * quantity * 100);
//     }
    
//     purchaseHelmet(quantity) {
//         this.creditCard.makePayment(15 * quantity * 100);
//     }
// }

// // our payment method(s) 
// // using credit card
// class CreditCard {
//     constructor(user) {
//         this.user = user;
//     }

//     makePayment(amountInCents) {
//         console.log(`${this.user} made payment of $${amountInCents / 100} dollars, with credit card.`);
//     }
// }

// const store = new Store('John');

// store.purchaseBicycle(2);
// store.purchaseHelmet(3);

// ===========================================================================

// SAME EXAMPLE
// if user wants to use his PayPall, with amount in dolars

// class Store {
//     constructor(user) {
//         this.paypal = new PayPal();
//         this.user = user;
//     }

//     purchaseBicycle(quantity) {
//         this.paypal.makePayment(this.user, 225 * quantity);
//     }
    
//     purchaseHelmet(quantity) {
//         this.paypal.makePayment(this.user, 15 * quantity);
//     }
// }

// // our payment method(s) 
// // using PayPal
// class PayPal {
//     makePayment(user, amountInDollars) {
//         console.log(`${user} made payment of $${amountInDollars} dollars, with PayPal.`);
//     }
// }


// const store = new Store('John');

// store.purchaseBicycle(2);
// store.purchaseHelmet(3);

// depending on payment method, user intake, amount paid in dollars or cents. we have to change code in Store constructor

// to avoid that we use Dependency inversion principle

// ========================================================================

// EXAMPLE USING DEPENDENCY INVERSION PRINCIPLE

class Store {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    purchaseBicycle(quantity) {
        this.paymentProcessor.pay(225 * quantity);
    }
    
    purchaseHelmet(quantity) {
        this.paymentProcessor.pay(15 * quantity);
    }
}

class CreditCardPaymentProcessor {
    constructor(user) {
        this.user = user;
        this.creditCard = new CreditCard(user);
    }

    pay(amountInDollars) {
        this.creditCard.makePayment(amountInDollars * 100);
    }
}

class CreditCard {
    constructor(user) {
        this.user = user;
    }

    makePayment(amountInCents) {
        console.log(`${this.user} made payment of $${amountInCents / 100} dollars, with credit card.`);
    }
}

class PayPalPaymentProcessor {
    constructor(user) {
        this.user = user;
        this.payPal = new PayPal();
    }

    pay(amountInDollars) {
        this.payPal.makePayment(this.user, amountInDollars);
    }
}

class PayPal {
    makePayment(user, amountInDollars) {
        console.log(`${user} made payment of $${amountInDollars} dollars, with PayPal.`);
    }
}

// const store = new Store(new CreditCardPaymentProcessor('John'));
const store = new Store(new PayPalPaymentProcessor('Marry'));

store.purchaseBicycle(2);
store.purchaseHelmet(3);