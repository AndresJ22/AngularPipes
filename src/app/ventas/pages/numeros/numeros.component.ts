import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.scss']
})
export class NumerosComponent implements OnInit {

  ventasNetas: number = 2567789.5567;
  porcentaje: number = 0.48567;
  constructor() { }

  ngOnInit(): void {
  }

}
