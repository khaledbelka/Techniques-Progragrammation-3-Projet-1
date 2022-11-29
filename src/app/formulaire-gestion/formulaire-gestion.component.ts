import { Component,Input, OnInit } from '@angular/core';
import { Forfait } from '../forfait';

@Component({
  selector: 'app-formulaire-gestion',
  templateUrl: './formulaire-gestion.component.html',
  styleUrls: ['./formulaire-gestion.component.css']
})
export class FormulaireGestionComponent implements OnInit {
@Input() forfait: Forfait | undefined
  
  constructor() { }

  ngOnInit(): void {
  }

}
