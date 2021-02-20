import {InvoiceInfo} from "./configurations";
import  Invoice  from "./Invoice";
import {Accountinfo} from "./configurations";
import Account from "./Account";
import  {CustomerInfo} from "./configurations";
import Customer from "./customer";

(<HTMLElement>document.getElementById("invoiceinfosubmit")).addEventListener("click", (e) => {
    (<HTMLElement>document.getElementById("display")).innerHTML="";
    (e.preventDefault());
    let cid = +(<HTMLInputElement>document.getElementById("id")).value;
    let cname = (<HTMLInputElement>document.getElementById("name")).value;;
    let rate = +(<HTMLInputElement>document.getElementById("discount")).value;
    let id = +(<HTMLInputElement>document.getElementById("invoiceid")).value;
    let amount =+(<HTMLInputElement>document.getElementById("invoiceamount")).value;

    let c: CustomerInfo =
        { customerid:cid, customername:cname, discountrate:rate };

    let I:InvoiceInfo =
    {
        id,amount
    }

    let Invoice1 = new Invoice(c,I);

    let Cdetails =Invoice1 .toString();
    
    let Cid= Invoice1 .getCustomerID();

    let Cname =Invoice1 .getCustomerName();

    let Cdiscount = Invoice1 .getDiscount();

    let Iid = Invoice1.getID();

    let Iamount =Invoice1.getAmount();

    let AmountAfterdiscount=Invoice1.getAmountAfterDiscount();

    let heading = document.createElement("h4");
    heading.innerHTML=`Invoice Info of ${Cname}`;
    (<HTMLElement>document.getElementById("display")).append(heading);

    let table = document.createElement("table");
    let tr= document.createElement("tr");
    let td=document.createElement("td");
    td.innerHTML=`invoice id`;
    let td1=document.createElement("td");
    td1.innerHTML= `${Iid}`;
    tr.append(td,td1);
    table.append(tr);

    let tr1= document.createElement("tr");
    let td2=document.createElement("td");
    td2.innerHTML=`customer id`;
    let td3=document.createElement("td");
    td3.innerHTML= `${Cid}`;
    tr1.append(td2,td3);
    table.append(tr1);

    let tr2= document.createElement("tr");
    let td4=document.createElement("td");
    td4.innerHTML=`Customer name`;
    let td5=document.createElement("td");
    td5.innerHTML= `${Cname}`;
    tr2.append(td4,td5);
    table.append(tr2);

    let tr3= document.createElement("tr");
    let td6=document.createElement("td");
    td6.innerHTML=`Amount`;
    let td7=document.createElement("td");
    td7.innerHTML= `Rs ${Iamount}`;
    tr3.append(td6,td7);
    table.append(tr3);


    let tr4= document.createElement("tr");
    let td8=document.createElement("td");
    td8.innerHTML=`Discount Rate (%)`;
    let td9=document.createElement("td");
    td9.innerHTML= `${Cdiscount}%`;
    tr4.append(td8,td9);
    table.append(tr4);

    
    let tr5= document.createElement("tr");
    let td10=document.createElement("td");
    td10.innerHTML=`Amount after discount`;
    let td11=document.createElement("td");
    td11.innerHTML= `Rs ${AmountAfterdiscount}`;
    tr5.append(td10,td11);
    table.append(tr5);

    (<HTMLElement>document.getElementById("display")).append(table);
    document.body.append(<HTMLElement>document.getElementById("display"));

});



(<HTMLElement>document.getElementById("formsubmit")).addEventListener("click", (e) => {
    (<HTMLElement>document.getElementById("display")).innerHTML="";
    (e.preventDefault());

    let cid = +(<HTMLInputElement>document.getElementById("id1")).value;
    let cname = (<HTMLInputElement>document.getElementById("name1")).value;;
    let id = +(<HTMLInputElement>document.getElementById("accountid")).value;
    let balance = +(<HTMLInputElement>document.getElementById("balanceamount")).value;
    let amount= +(<HTMLInputElement>document.getElementById("amount")).value;

    let c1: CustomerInfo =
        { customerid:cid, customername:cname,discountrate:0 };

    let A:Accountinfo =
    {
        id ,balance
    }

    let account = new Account(c1,A);

    let Cdetails =account.toString();
    
    let Cid= account.getCustomerID();

    let Cname =account .getCustomerName();


    let Aid =account.getAccountID();

    let balanceamount =account.getBalance();

    let depositedamount = account.deposit(amount);
  
    let withdrawnamount = account.withdraw(amount);
  
    let heading = document.createElement("h4");
    heading.innerHTML=`Account Info of ${Cname}`;
    (<HTMLElement>document.getElementById("display")).append(heading);

    let table = document.createElement("table");
    let tr= document.createElement("tr");
    let td=document.createElement("td");
    td.innerHTML=`Customer ID`;
    let td1=document.createElement("td");
    td1.innerHTML= `${ Cid}`;
    tr.append(td,td1);
    table.append(tr);

    let tr1= document.createElement("tr");
    let td2=document.createElement("td");
    td2.innerHTML=`Customer Name`;
    let td3=document.createElement("td");
    td3.innerHTML= `${Cname}`;
    tr1.append(td2,td3);
    table.append(tr1);

    let tr2= document.createElement("tr");
    let td4=document.createElement("td");
    td4.innerHTML=`Account Id`;
    let td5=document.createElement("td");
    td5.innerHTML= `${Aid}`;
    tr2.append(td4,td5);
    table.append(tr2);

    let tr3= document.createElement("tr");
    let td6=document.createElement("td");
    td6.innerHTML=`Account Balance`;
    let td7=document.createElement("td");
    td7.innerHTML= ` ${balanceamount}`;
    tr3.append(td6,td7);
    table.append(tr3);

    let tr4= document.createElement("tr");
    let td8=document.createElement("td");
    td8.innerHTML=`Credit`;
    let td9=document.createElement("td");
    td9.innerHTML= `+Rs ${depositedamount}`;
    tr4.append(td8,td9);
    table.append(tr4);

    let tr5= document.createElement("tr");
    let td10=document.createElement("td");
    td10.innerHTML=`Debit`;
    let td11=document.createElement("td");
    td11.innerHTML= `-Rs ${withdrawnamount}`;
    tr5.append(td10,td11);
    table.append(tr5);

    (<HTMLElement>document.getElementById("display")).append(table);
    (<HTMLElement>document.body).append((<HTMLElement>document.getElementById("display")));
});


   








