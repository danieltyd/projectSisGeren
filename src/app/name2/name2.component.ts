import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  /* name: string;
  position: number;
  weight: number;
  symbol: string; */
  id:number;
  indicador: string;
  tipoIndicador:string;
  frecuencia:string;
  fuente:string;
  valor:number;
  responsable:string;
  estado:string;
  accion:number;
  min:number;
  max:number;
  
}

const ELEMENT_DATA: PeriodicElement[] = [    
  {id:1,indicador: 'Retención de clientes', tipoIndicador: 'Estrategico', frecuencia: 'Semestral', fuente: 'Informe administrativo', valor:8,estado:'positive',responsable:'Encargado A',accion: null,min:10,max:20},
  {id:2,indicador: 'Retención de clientes', tipoIndicador: 'Estrategico', frecuencia: 'Semestral', fuente: 'Informe administrativo', valor:8,estado:'positive',responsable:'Encargado A',accion: null,min:5,max:10},
  {id:3,indicador: 'Retención de clientes', tipoIndicador: 'Estrategico', frecuencia: 'Semestral', fuente: 'Informe administrativo', valor:8,estado:'positive',responsable:'Encargado A',accion: null,min:15,max:20},
  {id:4,indicador: 'Retención de clientes', tipoIndicador: 'Estrategico', frecuencia: 'Semestral', fuente: 'Informe administrativo', valor:8,estado:'positive',responsable:'Encargado A',accion: null,min:10,max:14},
];
@Component({
  selector: 'app-name2',
  templateUrl: './name2.component.html',
  styleUrls: ['./name2.component.sass']
})
export class Name2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  show: boolean = true;
  displayedColumns: string[] = ['indicador', 'tipoIndicador', 'frecuencia', 'fuente','valor','estado','responsable','accion'];
  dataSource = ELEMENT_DATA;
  calcular(id: number, valor: number) {
      console.log(id);
      console.log(this.dataSource[id-1].max);
      console.log(valor);
      if(valor>this.dataSource[id-1].min && valor<this.dataSource[id-1].max){
          this.dataSource[id-1].estado='mean';
      }else if(valor<=this.dataSource[id-1].min){
          this.dataSource[id-1].estado='negative';
      }else if(valor>=this.dataSource[id-1].max){
          this.dataSource[id-1].estado='positive';
      }
    }
  
}
