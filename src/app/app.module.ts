import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { DatepickerExComponent } from './datepicker-ex/datepicker-ex.component';
import { RouterModule } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdDatepickerModule, MdNativeDateModule, MdInputModule} from '@angular/material';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { HttpModule }    from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    DatepickerExComponent,
    InvoiceDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdDatepickerModule,
    MdInputModule,
    MdNativeDateModule,
    HttpModule,
     RouterModule.forRoot(
      [
        {
          path: 'invoice-details',
          component: InvoiceDetailsComponent
        }
      ]
    )


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
