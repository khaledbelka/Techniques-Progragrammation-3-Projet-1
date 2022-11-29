import { Component, Input, OnInit } from '@angular/core';
import {FORFAITS} from '../mock-forfait';


@Component({
  selector: 'app-petit-forfait',
  templateUrl: './petit-forfait.component.html',
  styleUrls: ['./petit-forfait.component.css']
})
export class PetitForfaitComponent implements OnInit {
forfaits = FORFAITS
  
  constructor() { }

  ngOnInit(): void {
   
  }

}
