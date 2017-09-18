import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {FormBuilder,FormGroup,FormArray} from "@angular/forms";
import {Invoice,InvoiceItem} from "./invoice-model";
import {InvoiceDataService} from "./invoice-httpService";
@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css'],
  providers: [InvoiceDataService]
})
export class InvoiceDetailsComponent implements OnInit {
  @Input() invoice: Invoice;


  invoiceForm : FormGroup;

  constructor(private formBu: FormBuilder , private invoiceService : InvoiceDataService ) {

this.createForm();

  }

  createForm () {
    this.invoiceForm = this.formBu.group(
      {
        invoiceId:0,
        invoiceName : '',
        invoiceDueDate : [null],
        customerEmail : '',
        invoiceZip: '',
        invoiceAddress : '',
        invoiceNotes : '',
        totalCost : 0,
        invoiceItems: this.formBu.array([]),

      }
    );
  }

  ngOnInit() {
  }

  get invoiceItems(): FormArray {
    return this.invoiceForm.get('invoiceItems') as FormArray;
  };

  prepareSaveInvoice(): Invoice {
    console.log(" Look FOr Total amt  " +this.invoiceForm.value );
    const formModel = this.invoiceForm.value;


    const invoiceItems: InvoiceItem[] = formModel.invoiceItems.map(
      (invoiceItem: InvoiceItem) => Object.assign({}, invoiceItem)
    );
    const savedInvoice: Invoice = {
      invoiceId: formModel.invoiceId as string,
      invoiceName: formModel.invoiceName as string,
      invoiceDueDate: formModel.invoiceDueDate as any,
      customerEmail: formModel.customerEmail as string,
      invoiceZip: formModel.invoiceZip  as string,
      invoiceAddress: formModel.invoiceAddress  as string,
      invoiceNotes: formModel.invoiceNotes as string,
      totalCost: formModel.totalCost as number,
      customerId: formModel.totalCost as number,
      invoiceItems: invoiceItems
    };
    return savedInvoice;
  }

  addInvoiceItem() {
    this.invoiceItems.push(this.formBu.group(new InvoiceItem()));
  }

  onSubmit() {
    this.invoice = this.prepareSaveInvoice();
    console.log(this.invoice);
    this.invoiceService.updateHero(this.invoice).subscribe(res => this.invoice = res);
    console.log(this.invoice);
  }


  sumAmount() {
    var total = 0;
    for(var i = 0; i < this.invoiceForm.value.invoiceItems.length; i++){
      var localSum = this.invoiceForm.value.invoiceItems[i].invoiceitemCost;
      total += (localSum);
    }
    this.invoiceForm.value.totalCost = total;
    return total;
  }

  displayInvoiceItemName(data) {
    var  isNameAv = false;
  if(data != null && data.trim() !='') {
    isNameAv = true;
  }
    return isNameAv;
  }



}
