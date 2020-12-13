import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  personName : 'Steve Jobs'
  personAge : 30
  personAddress : 'Latur'
  personPhone : '+98928332873'
  personEmail : 'steve@microsoft.com'


  constructor() { }

  ngOnInit(): void {
  }

}
