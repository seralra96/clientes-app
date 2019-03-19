import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    {id: 1, nombre: 'Sergio', apellido: 'Ramírez', email: 'seralra96@hotmail.com', createAt: '2019-03-18'},
    {id: 2, nombre: 'Sergio2', apellido: 'Ramírez', email: 'seralra962@hotmail.com', createAt: '2019-03-18'},
    {id: 3, nombre: 'Sergio3', apellido: 'Ramírez', email: 'seralra963@hotmail.com', createAt: '2019-03-18'},
    {id: 4, nombre: 'Sergio4', apellido: 'Ramírez', email: 'seralra964@hotmail.com', createAt: '2019-03-18'},
    {id: 5, nombre: 'Sergio5', apellido: 'Ramírez', email: 'seralra965@hotmail.com', createAt: '2019-03-18'},
    {id: 6, nombre: 'Sergio6', apellido: 'Ramírez', email: 'seralra966@hotmail.com', createAt: '2019-03-18'},
    {id: 7, nombre: 'Sergio7', apellido: 'Ramírez', email: 'seralra967@hotmail.com', createAt: '2019-03-18'},
    {id: 8, nombre: 'Sergio8', apellido: 'Ramírez', email: 'seralra968@hotmail.com', createAt: '2019-03-18'},
    {id: 9, nombre: 'Sergio9', apellido: 'Ramírez', email: 'seralra969@hotmail.com', createAt: '2019-03-18'},
    {id: 10, nombre: 'Sergio10', apellido: 'Ramírez', email: 'seralra9610@hotmail.com', createAt: '2019-03-18'},
    {id: 11, nombre: 'Sergio11', apellido: 'Ramírez', email: 'seralra9611@hotmail.com', createAt: '2019-03-18'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
