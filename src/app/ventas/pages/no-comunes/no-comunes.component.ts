import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.scss']
})
export class NoComunesComponent implements OnInit {
  //i18nSelect
  nombre: string = 'Andres';
  genero: string = 'Masculino'
  verdadFalso: boolean = true;
  invitacionMapa = {
    'Masculino': 'invitarlo',
    'Femenino': 'invitarla'
  }
  // i18nPlural
  clientes: string[] = ['Andres', 'Luis', 'Maria', 'Pedro', 'Felix'];
  clientesMapa = {
    '0': 'no tenemos ningun cliente esperando',
    '1': 'tenemos 1 clientes esperando',
    '2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando.'
  }

  persona = {
    nombre: 'Andres',
    edad: 35,
    direccion: 'Ottawa, Canada'
  }

  heroes = [
    {
      nombre: 'SuperMan',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'SpiderMan',
      vuela: true
    }
  ];
  //async Pipe
  miObservable = interval(5000);

  valorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(' Tenemos una promesa ');
    }, 1000);
   })
  cambiarCliente() {
    if (this.verdadFalso === false) {
      this.nombre = 'Maria';
      this.genero = 'Femenino';
      this.verdadFalso = true;
    } else {
      this.nombre = 'Andres';
      this.genero = 'Masculino';
      this.verdadFalso = false;
    }
  }

  borrarCliente() {
    this.clientes.splice(0, 1);
  }
  constructor() { }

  ngOnInit(): void {

  }

}
