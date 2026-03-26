"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

/* ===================== STATIC OBJECTS ===================== */

const AccountType = {
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kredittkonto",
    Pension: "Pensjonskonto"
};

const CurrencyTypes = {
    NOK: { name: "Norske kroner", value: 1 },
    USD: { name: "US Dollar", value: 10 },
    GBP: { name: "Pound", value: 12 }
};

/* ===================== CLASS ===================== */

class TAccount {
    #type;
    #balance = 0;
    #withdrawCount = 0;
    #currency = CurrencyTypes.NOK;

    constructor(type) {
        this.#type = type;
    }

    toString() {
        return this.#type;
    }

    setType(newType) {
        printOut("Account is changed from " + this.#type + " to " + newType);
        this.#type = newType;
        this.#withdrawCount = 0;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amount, currency = CurrencyTypes.NOK) {
        let converted = this.#convert(amount, currency, this.#currency);
        this.#balance += converted;
        this.#withdrawCount = 0;
        printOut("Deposit of " + amount + " " + currency.name + ", new balance is " + this.#balance.toFixed(2));
    }

    withdraw(amount, currency = CurrencyTypes.NOK) {
        if (this.#type === AccountType.Pension) {
            printOut("You can't withdraw from a Pension account!");
            return;
        }

        if (this.#type === AccountType.Saving && this.#withdrawCount >= 3) {
            printOut("You can't withdraw from a Savings account more than three times!");
            return;
        }

        let converted = this.#convert(amount, currency, this.#currency);
        this.#balance -= converted;
        this.#withdrawCount++;

        printOut("Withdrawal of " + amount + " " + currency.name + ", new balance is " + this.#balance.toFixed(2));
    }

    setCurrencyType(newCurrency) {
        if (this.#currency === newCurrency) return;

        let old = this.#currency;
        this.#balance = this.#convert(this.#balance, old, newCurrency);

        this.#currency = newCurrency;

        printOut("Currency changed from " + old.name + " to " + newCurrency.name);
        printOut("New balance is " + this.#balance.toFixed(2));
    }

    #convert(amount, from, to) {
        return amount * (from.value / to.value);
    }
}

/* ===================== INSTANCE ===================== */

const myAccount = new TAccount(AccountType.Normal);

/* ===================== PART 1 ===================== */


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(
    AccountType.Normal + ", " +
    AccountType.Saving + ", " +
    AccountType.Credit + ", " +
    AccountType.Pension
);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("myAccount = " + myAccount.toString());
myAccount.setType(AccountType.Saving);
printOut("myAccount = " + myAccount.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(100);
myAccount.withdraw(25);
printOut("My account balance is " + myAccount.getBalance());

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(0); // reset withdraw count
myAccount.setType(AccountType.Saving);

myAccount.withdraw(10);
myAccount.withdraw(10);
myAccount.withdraw(10);
myAccount.withdraw(10); // should stop

myAccount.setType(AccountType.Pension);
myAccount.withdraw(10);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(150);
myAccount.setCurrencyType(CurrencyTypes.USD);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.setCurrencyType(CurrencyTypes.GBP);
myAccount.setCurrencyType(CurrencyTypes.NOK);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(12, CurrencyTypes.USD);
myAccount.withdraw(10, CurrencyTypes.GBP);

myAccount.setCurrencyType(CurrencyTypes.USD);
myAccount.withdraw(myAccount.getBalance(), CurrencyTypes.NOK);

printOut(newLine);
