import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pipes';
  receiverText='';
  paymentDateText : string ='';

  onReceiverChanged(value:string){
    this.receiverText=value;
  }
  onPaymentDateChanged(value:string){
    this.paymentDateText=value;
  }
}
