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
  amountText : string ="";
  heightText : number = 0;
  car={
    Company : "BMW",
    Year : 2018,
    Model : "S500"

  }

  onReceiverChanged(value:string){
    this.receiverText=value;
  }
  onPaymentDateChanged(value:string){
    this.paymentDateText=value;
  }
  onAmountChanged(value: string){
    this.amountText=value;
  }
  onHeightChanged(value:number){
    this.heightText=value;
  }
}
