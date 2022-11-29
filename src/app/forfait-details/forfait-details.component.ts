import { Component, Input, OnInit } from '@angular/core';
import { Forfait } from '../forfait';

@Component({
  selector: 'app-forfait-details',
  templateUrl: './forfait-details.component.html',
  styleUrls: ['./forfait-details.component.css']
})
export class ForfaitDetailsComponent implements OnInit {
@Input() forfait: Forfait | undefined
  
  constructor() { }

  ngOnInit(): void {
   
  }

}
