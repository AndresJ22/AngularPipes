import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nombreLower: string = 'andres';
  nombreUpper: string = 'ANDRES';
  nombreCompleto: string = 'jOel aNdRes';

  fecha: Date = new Date();
}
