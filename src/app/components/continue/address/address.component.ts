import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { empty } from 'rxjs/Observer';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  nextInput(){
    
    var address = (<HTMLInputElement>document.getElementById('address')).value;
    this.newMethod(address);

}

  private newMethod(address: string) {
    if (address.length >= 5) {
      this.messageEvent.emit({ Address: address });
    }
    else {
      alert("You must enter an address");
    }
  }
}
