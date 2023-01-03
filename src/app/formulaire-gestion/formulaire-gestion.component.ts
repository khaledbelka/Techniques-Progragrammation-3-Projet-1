import { Component,Input, OnInit,  } from '@angular/core';


@Component({
  selector: 'app-formulaire-gestion',
  templateUrl: './formulaire-gestion.component.html',
  styleUrls: ['./formulaire-gestion.component.css']
})
export class FormulaireGestionComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  constructor() { }

  ngOnInit(): void {
  }

}