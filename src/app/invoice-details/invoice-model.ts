export class Invoice {
  invoiceId = '';
  invoiceName = '';
  invoiceDueDate: any;
  customerEmail = '';
  invoiceZip= '';
  invoiceAddress = '';
  invoiceNotes = '';
  totalCost = 0;
  customerId = 123;
  invoiceItems: InvoiceItem[];

}

export class InvoiceItem {
  invoiceItemId = '';
  invoiceItemName = '';
  invoiceitemCost = 0;
  invoiceItemDescription = '';
}
