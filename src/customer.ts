import { CustomerInfo}  from "./configurations"  ;

export default class Customer
{
    CustomerID:number;
    CustomerName:string;
    Discountrate:number;

    constructor(obj:CustomerInfo){
        this.CustomerID= obj.customerid;
        this.CustomerName = obj.customername;
        this.Discountrate =obj.discountrate;
    }

    getCustomerID():number
    {
        return this.CustomerID;
    };
    getCustomerName():string
    {
        return this.CustomerName;
    };
    getDiscount(){
       return  this.Discountrate;
    }
    setDiscount(discount:number):void{
         this.Discountrate= discount;
     };
     toString():string{
         return(`  ${this.CustomerName}(${this.CustomerID}`)
     }
 

}