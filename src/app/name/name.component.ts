import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { NameDataSource, NameItem } from './name-datasource';

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
  {id:5,indicador: 'Retención de clientes', tipoIndicador: 'Estrategico', frecuencia: 'Semestral', fuente: 'Informe administrativo', valor:8,estado:'positive',responsable:'Encargado A',accion: null,min:10,max:20},
  {id:6,indicador: 'Retención de clientes', tipoIndicador: 'Estrategico', frecuencia: 'Semestral', fuente: 'Informe administrativo', valor:8,estado:'positive',responsable:'Encargado A',accion: null,min:10,max:20},
  {id:7,indicador: 'Retención de clientes', tipoIndicador: 'Estrategico', frecuencia: 'Semestral', fuente: 'Informe administrativo', valor:8,estado:'positive',responsable:'Encargado A',accion: null,min:10,max:20},
  {id:8,indicador: 'Retención de clientes', tipoIndicador: 'Estrategico', frecuencia: 'Semestral', fuente: 'Informe administrativo', valor:8,estado:'positive',responsable:'Encargado A',accion: null,min:10,max:20},
];
@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit{
    ngOnInit(): void {
        
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
