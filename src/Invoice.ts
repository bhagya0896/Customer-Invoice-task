import {InvoiceInfo}  from "./configurations"  ;
import {CustomerInfo}  from "./configurations"  ;
import  Customer from "./customer";



export default class Invoice extends Customer {
    InvoiceId: number;
    InvoiceAmount: number;
   

    constructor(obj:CustomerInfo, obj1: InvoiceInfo) {
        super(obj);
        this.InvoiceId = obj1.id;
        this.InvoiceAmount = obj1.amount;
     
    }

    getID(): number {
        return this.InvoiceId;
    }
    getCustomer(): string {
        return this.toString();
    }
    setCustomer(obj : CustomerInfo): void {
        this.CustomerID = obj.customerid;
        this.CustomerName = obj.customername;
        this.Discountrate = obj.discountrate;
    }
    getAmount(): number {
        return this.InvoiceAmount
    }
    setAmount(amount: number): void {
        this.InvoiceAmount = amount;
    }
    getCustomerName(): string {
        return this.CustomerName;
    }

    getAmountAfterDiscount(): number {
        let discountamount = (this.Discountrate) / 100 * this.InvoiceAmount;
        return (this.InvoiceAmount - discountamount);
    }
}
