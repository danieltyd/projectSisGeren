import { AfterViewInit, Component, OnInit, ViewChild, Inject,DoCheck } from '@angular/core';
import { MatPaginator, MatSort, MatTable, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NameDataSource, NameItem } from './name-datasource';
import { DialogOverviewExampleDialog } from '../name2/name2.component';


export interface PeriodicElement {
    /* name: string;
    position: number;
    weight: number;
    symbol: string; */
    id: number;
    indicador: string;
    tipoIndicador: string;
    frecuencia: string;
    fuente: string;
    valor: number;
    responsable: string;
    estado: string;
    accion: number;
    min: number;
    max: number;

}
export interface DialogData {
    id: number;
    numero1:number;
    numero2:number;
    valor:number;
    periodo:number;
    utilidad:number;
}
const ELEMENT_DATA: PeriodicElement[] = [
    { id: 1, indicador: 'Utilidad', tipoIndicador: 'Estrategico', frecuencia: 'Semestral', fuente: 'total de ingresos - total egresos', valor: 1113, estado: 'mean', responsable: 'Encargado A', accion: 1113, min: 213, max: 2013 },
    { id: 2, indicador: '% Coste de adquisición de un cliente', tipoIndicador: 'Estrategico', frecuencia: 'Semestral', fuente: '# nuevos clientes / gastos de marketing', valor: 5.71, estado: 'positive', responsable: 'Encargado B', accion: 5.71, min: 2.85, max: 8.57 },
    { id: 3, indicador: '% Competitividad de precio en el mercado', tipoIndicador: 'Estrategico', frecuencia: 'Semestral', fuente: '# de clientes demandantes del servicio / media del precio del mercado ', valor: 7.14, estado: 'positive', responsable: 'Encargado C', accion: 7.14, min: 3.57, max: 10.71 },
    { id: 4, indicador: 'Adquisición de nuevos planes de servicio', tipoIndicador: 'No estrategico', frecuencia: 'Semestral', fuente: 'utilidad / # de nuevos planes contratados', valor: 92.75, estado: 'mean', responsable: 'Encargado D', accion: 92.75, min: 35.5, max: 111.83 },
    { id: 5, indicador: 'Tiempo de mejora', tipoIndicador: 'No estrategico', frecuencia: 'Semestral', fuente: 'tiempo de respueta anterior - tiempo de respuesta optimizado', valor: 60, estado: 'positive', responsable: 'Encargado E', accion: 60, min: 20, max: 60 },
    { id: 6, indicador: 'Margen comercial', tipoIndicador: 'No estrategico', frecuencia: 'Semestral', fuente: '# campañas comerciales ejecutadas con éxito', valor: 2, estado: 'mean', responsable: 'Encargado F', accion: 2, min: 2, max: 6 },
    { id: 7, indicador: '% Personal con desempeño adecuado', tipoIndicador: 'No estrategico', frecuencia: 'Semestral', fuente: '# personal con desempeño adecuado / total personal', valor: 60, estado: 'positive', responsable: 'Encargado G', accion: 60, min: 20, max: 100 },
    { id: 8, indicador: 'Tiempo de no disponibilidad de aplicaciones informáticas', tipoIndicador: 'No estrategico', frecuencia: 'Semestral', fuente: '# minutos de no disponibilidad para manejar aplicaciones informáticas', valor: 10, estado: 'mean', responsable: 'Encargado H', accion: 10, min: 45, max: 5 },
    { id: 9, indicador: 'Eficiencia del personal técnico', tipoIndicador: 'No estrategico', frecuencia: 'Semestral', fuente: 'total del personal técnico - # técnicos desactualizados ', valor: 2, estado: 'negative', responsable: 'Encargado H', accion: 2, min: 2, max: 4 },
    { id: 10, indicador: '% Monto de renovación', tipoIndicador: 'No estrategico', frecuencia: 'Semestral', fuente: 'utililidad / costo de infraestructura', valor: 285, estado: 'positive', responsable: 'Encargado H', accion: 285, min: 54.61, max: 516.153 },
];

@Component({
    selector: 'app-name',
    templateUrl: './name.component.html',
    styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit, DoCheck {
    ngDoCheck(): void {
        
    }
    id: number;
    valor:number;
    numero1:number;
    numero2:number;
    periodo:number;
    utilidad:number;
    

    constructor(public dialog: MatDialog) { }
    ngOnInit(): void {
        for(let i of ELEMENT_DATA){            
            let id=i.id;
            switch (id) {
                case 1: {
                    //statements;
                    if (this.dataSource[id - 1].valor > this.dataSource[id - 1].min && this.dataSource[id - 1].valor < this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'mean';
                    } else if (this.dataSource[id - 1].valor <= this.dataSource[id - 1].min) {
                        this.dataSource[id - 1].estado = 'negative';
                    } else if (this.dataSource[id - 1].valor >= this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'positive';
                    }
                    break;
                }
                case 2: {
                    //statements;
                    if (this.dataSource[id - 1].valor > this.dataSource[id - 1].min && this.dataSource[id - 1].valor < this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'mean';
                    } else if (this.dataSource[id - 1].valor <= this.dataSource[id - 1].min) {
                        this.dataSource[id - 1].estado = 'negative';
                    } else if (this.dataSource[id - 1].valor >= this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'positive';
                    }
                    break;
                }
                case 3: {
                    //statements; 
                    if (this.dataSource[id - 1].valor > this.dataSource[id - 1].min && this.dataSource[id - 1].valor < this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'mean';
                    } else if (this.dataSource[id - 1].valor <= this.dataSource[id - 1].min) {
                        this.dataSource[id - 1].estado = 'negative';
                    } else if (this.dataSource[id - 1].valor >= this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'positive';
                    }
                    break;
                }
                case 4: {
                    //statements; 
                    if (this.dataSource[id - 1].valor > this.dataSource[id - 1].min && this.dataSource[id - 1].valor < this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'mean';
                    } else if (this.dataSource[id - 1].valor <= this.dataSource[id - 1].min) {
                        this.dataSource[id - 1].estado = 'negative';
                    } else if (this.dataSource[id - 1].valor >= this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'positive';
                    }
                    break;
                }
                case 5: {
                    //statements; 
                    if (this.dataSource[id - 1].valor > this.dataSource[id - 1].min && this.dataSource[id - 1].valor < this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'mean';
                    } else if (this.dataSource[id - 1].valor <= this.dataSource[id - 1].min) {
                        this.dataSource[id - 1].estado = 'negative';
                    } else if (this.dataSource[id - 1].valor >= this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'positive';
                    }
                    break;
                }
                case 6: {
                    //statements; 
                    if (this.dataSource[id - 1].valor > this.dataSource[id - 1].min && this.dataSource[id - 1].valor < this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'mean';
                    } else if (this.dataSource[id - 1].valor <= this.dataSource[id - 1].min) {
                        this.dataSource[id - 1].estado = 'negative';
                    } else if (this.dataSource[id - 1].valor >= this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'positive';
                    }
                    break;
                }
                case 7: {
                    //statements;
                    if (this.dataSource[id - 1].valor > this.dataSource[id - 1].min && this.dataSource[id - 1].valor < this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'mean';
                    } else if (this.dataSource[id - 1].valor <= this.dataSource[id - 1].min) {
                        this.dataSource[id - 1].estado = 'negative';
                    } else if (this.dataSource[id - 1].valor >= this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'positive';
                    }
                    break;
                }
                case 8: {
                    //statements; 
                    if (this.dataSource[id - 1].valor < this.dataSource[id - 1].min && this.dataSource[id - 1].valor > this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'mean';
                    } else if (this.dataSource[id - 1].valor >= this.dataSource[id - 1].min) {
                        this.dataSource[id - 1].estado = 'negative';
                    } else if (this.dataSource[id - 1].valor <= this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'positive';
                    }
                    break;
                }
                case 9: {
                    //statements; 
                    if (this.dataSource[id - 1].valor > this.dataSource[id - 1].min && this.dataSource[id - 1].valor < this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'mean';
                    } else if (this.dataSource[id - 1].valor <= this.dataSource[id - 1].min) {
                        this.dataSource[id - 1].estado = 'negative';
                    } else if (this.dataSource[id - 1].valor >= this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'positive';
                    }
                    break;
                }
                case 10: {
                    //statements; 
                    if (this.dataSource[id - 1].valor > this.dataSource[id - 1].min && this.dataSource[id - 1].valor < this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'mean';
                    } else if (this.dataSource[id - 1].valor <= this.dataSource[id - 1].min) {
                        this.dataSource[id - 1].estado = 'negative';
                    } else if (this.dataSource[id - 1].valor >= this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'positive';
                    }
                    break;
                }
                default: {
                    //statements; 
                    break;
                }
            }

        }
    }
    show: boolean = true;
    displayedColumns: string[] = ['indicador', 'definicion', 'valor', 'accion'];
    dataSource = ELEMENT_DATA;
    calcular(id: number, valor: number) {
        /* console.log(id);
        console.log(this.dataSource[id-1].max);
        console.log(valor); */

        
    }

    openDialog(id:number): void {
        
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
          width: '250px',
          data: {id:id,periodo:6,utilidad:this.utilidad}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          
          this.utilidad=result.utilidad;
          this.dataSource[id - 1].accion = Math.round(result.valor*100)/100;
          this.dataSource[id - 1].valor=Math.round(result.valor*100)/100;
            switch (id) {
                case 1: {
                    //statements;
                    if (this.dataSource[id - 1].valor > this.dataSource[id - 1].min && this.dataSource[id - 1].valor < this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'mean';
                    } else if (this.dataSource[id - 1].valor <= this.dataSource[id - 1].min) {
                        this.dataSource[id - 1].estado = 'negative';
                    } else if (this.dataSource[id - 1].valor >= this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'positive';
                    }
                    break;
                }
                case 2: {
                    //statements;
                    if (this.dataSource[id - 1].valor > this.dataSource[id - 1].min && this.dataSource[id - 1].valor < this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'mean';
                    } else if (this.dataSource[id - 1].valor <= this.dataSource[id - 1].min) {
                        this.dataSource[id - 1].estado = 'negative';
                    } else if (this.dataSource[id - 1].valor >= this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'positive';
                    }
                    break;
                }
                case 3: {
                    //statements; 
                    if (this.dataSource[id - 1].valor > this.dataSource[id - 1].min && this.dataSource[id - 1].valor < this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'mean';
                    } else if (this.dataSource[id - 1].valor <= this.dataSource[id - 1].min) {
                        this.dataSource[id - 1].estado = 'negative';
                    } else if (this.dataSource[id - 1].valor >= this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'positive';
                    }
                    break;
                }
                case 4: {
                    //statements; 
                    if (this.dataSource[id - 1].valor > this.dataSource[id - 1].min && this.dataSource[id - 1].valor < this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'mean';
                    } else if (this.dataSource[id - 1].valor <= this.dataSource[id - 1].min) {
                        this.dataSource[id - 1].estado = 'negative';
                    } else if (this.dataSource[id - 1].valor >= this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'positive';
                    }
                    break;
                }
                case 5: {
                    //statements; 
                    if (this.dataSource[id - 1].valor > this.dataSource[id - 1].min && this.dataSource[id - 1].valor < this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'mean';
                    } else if (this.dataSource[id - 1].valor <= this.dataSource[id - 1].min) {
                        this.dataSource[id - 1].estado = 'negative';
                    } else if (this.dataSource[id - 1].valor >= this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'positive';
                    }
                    break;
                }
                case 6: {
                    //statements; 
                    if (this.dataSource[id - 1].valor > this.dataSource[id - 1].min && this.dataSource[id - 1].valor < this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'mean';
                    } else if (this.dataSource[id - 1].valor <= this.dataSource[id - 1].min) {
                        this.dataSource[id - 1].estado = 'negative';
                    } else if (this.dataSource[id - 1].valor >= this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'positive';
                    }
                    break;
                }
                case 7: {
                    //statements;
                    if (this.dataSource[id - 1].valor > this.dataSource[id - 1].min && this.dataSource[id - 1].valor < this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'mean';
                    } else if (this.dataSource[id - 1].valor <= this.dataSource[id - 1].min) {
                        this.dataSource[id - 1].estado = 'negative';
                    } else if (this.dataSource[id - 1].valor >= this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'positive';
                    }
                    break;
                }
                case 8: {
                    //statements; 
                    if (this.dataSource[id - 1].valor < this.dataSource[id - 1].min && this.dataSource[id - 1].valor > this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'mean';
                    } else if (this.dataSource[id - 1].valor >= this.dataSource[id - 1].min) {
                        this.dataSource[id - 1].estado = 'negative';
                    } else if (this.dataSource[id - 1].valor <= this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'positive';
                    }
                    break;
                }
                case 9: {
                    //statements; 
                    if (this.dataSource[id - 1].valor > this.dataSource[id - 1].min && this.dataSource[id - 1].valor < this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'mean';
                    } else if (this.dataSource[id - 1].valor <= this.dataSource[id - 1].min) {
                        this.dataSource[id - 1].estado = 'negative';
                    } else if (this.dataSource[id - 1].valor >= this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'positive';
                    }
                    break;
                }
                case 10: {
                    //statements; 
                    if (this.dataSource[id - 1].valor > this.dataSource[id - 1].min && this.dataSource[id - 1].valor < this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'mean';
                    } else if (this.dataSource[id - 1].valor <= this.dataSource[id - 1].min) {
                        this.dataSource[id - 1].estado = 'negative';
                    } else if (this.dataSource[id - 1].valor >= this.dataSource[id - 1].max) {
                        this.dataSource[id - 1].estado = 'positive';
                    }
                    break;
                }
                default: {
                    //statements; 
                    break;
                }
            }

        
        });
      }
}
