import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.scss']
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean = true;
  ordenarPor: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Linterna Roja',
      vuela: false,
      color: Color.rojo
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  cambiar(): void {
    if (this.enMayusculas === true) {
      this.enMayusculas = false;

    }
    else {
      this.enMayusculas = true;
    }
  }
  cambiarOrden(valor: string) {
    this.ordenarPor = valor;

  }
}
