import 'rxjs/add/operator/map';

import { Http,Response} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Invoice,InvoiceItem} from "./invoice-model";


@Injectable()

export class InvoiceDataService {

  constructor (private http: Http) {

  }
  updateHero(invoice: Invoice) : Observable <Invoice>{

    var abc = this.callHttpInvoicePost(invoice);
    console.log( " RESULTS " + abc );
    return abc;
  }

  callHttpInvoicePost (invoice: Invoice) {
  return  this.http.post("http://localhost:8080/customer/"+invoice.customerId+ "/invoice", invoice).map((res: Response) => res.json());
  }

}
