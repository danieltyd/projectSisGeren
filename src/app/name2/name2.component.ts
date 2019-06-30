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
  {id:1,indicador: 'Margen comercial', tipoIndicador: 'Estrategico', frecuencia: 'Semestral', fuente: 'Reporte comercial', valor:null,estado:null,responsable:'Encargado B',accion: null,min:9,max:16},
  {id:2,indicador: 'Gastos fijos', tipoIndicador: 'No estrategico', frecuencia: 'Semestral', fuente: 'Reporte administrativo', valor:null,estado:null,responsable:'Encargado E',accion: null,min:5,max:11},
  {id:3,indicador: 'Cash flow', tipoIndicador: 'No estrategico', frecuencia: 'Semestral', fuente: 'Reporte administrativo', valor:null,estado:null,responsable:'Encargado F',accion: null,min:7,max:15},
  
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
