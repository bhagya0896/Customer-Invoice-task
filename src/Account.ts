import {  Accountinfo}  from "./configurations"  ;
import  Customer from "./customer";
import {CustomerInfo}  from "./configurations"  ;

export default class Account extends Customer {
    AccountId: number;
    AccountBalance: number = 0.00;

    constructor(obj : CustomerInfo, obj2: Accountinfo) {
        super(obj);
        this.AccountId = obj2.id;
        this.AccountBalance = obj2.balance;
    }

    getAccountID(): Number {
        return this.AccountId;
    }
    getCustomer(): string {
        return this.toString();
    }

    getBalance(): number {
        return this.AccountBalance;
    }

    setBalance(balance: number): void {
        this.AccountBalance = balance;
    }
    toString(): string {
        return (`Customer details : ${this.CustomerName}(${this.CustomerID})
        balance=${this.AccountBalance.toFixed(2)}`)
    }
    getCustomerName(): string {
        return this.CustomerName;
    }
    deposit(amount:number): number {
        
        let depositedamount = +(amount + this.AccountBalance);
        return this.AccountBalance = depositedamount;
    }
    withdraw(amount: number) {
    
        if (this.AccountBalance >= amount) return (this.AccountBalance-amount)
        else return "Amount withdrawn exceeds the current balance!"
    }

}