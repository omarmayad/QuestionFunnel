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
  var city = (<HTMLInputElement>document.getElementById('city')).value;
  this.name(address,city);
}
private name(address:string,city:string) {
  if(address.length && city.length >= 1){
    this.messageEvent.emit({Address:address,City:city});
  }
  else{
    alert("Please enter your Street address and your city");
  }
}
}
