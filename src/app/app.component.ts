import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  invoiceForm: FormGroup;

  post: any;                     // A property for our submitted form

  totalAmountDue:   10;
  amountDue: number;
  dueByDate: any;
  email: string;
  invoiceName: 'My Invoice';
  invoiceBillToAddress: '123 main st san jose';
  invoiceBillToZip: '12345';
  invoiceNotes: 'notes here';





  constructor(private fb: FormBuilder) {

    this.invoiceForm = fb.group({
      'amountDue' : [null],
      'dueByDate' : [null],
      'email' : [null],
      'invoiceName' : [null],

      'invoiceBillToAddress' : [null],
      'invoiceBillToZip' : [null],
      'invoiceNotes' : [null],
      'totalAmountDue': [null],
    });

  }
  addPost(post) {
    this.email = post.email;
    this.amountDue = post.amountDue;
    this.dueByDate = post.dueByDate;
    this.invoiceName = post.invoiceName;
    this.invoiceBillToAddress = post.invoiceBillToAddress;
    this.invoiceBillToZip = post.invoiceBillToZip;
    this.invoiceNotes = post.invoiceNotes;
    this.totalAmountDue = post.totalAmountDue;
    console.log(post);
  }


}
