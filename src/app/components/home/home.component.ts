import { Component, OnInit, ViewChild} from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { UntypedFormControl } from '@angular/forms';
import {PageEvent} from '@angular/material/paginator';
import { Seminuevo } from '../../classes/seminuevo';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  carsList : any []= [];
  listaDescripcion: any [] = [];
  dataSource: any;

  @ViewChild(MatSort) sort = new MatSort;
  months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  day = new Date().getDate();
  month = this.months[new Date().getMonth()].toLocaleUpperCase();
  filter = new UntypedFormControl('');
  carSelected: any = "";
  sortStatus:boolean = false;
  columnaActiva:any = "";
  descriptionList: any[] = [];
  displayedColumns: string[] = ['agency', 'tresesenta', 'carid', 'make', 'model', 'typeid', 'year', 'color', 'trans', 'date', 'km', 'price', 'description'];
  length = 100;
  pageSize = 1000;
  pageSizeOptions: number[] = [100, 150, 200];
  pageEvent?: PageEvent;
  page = 1;
  images: any [] = [];
  position: number = 0;
  busqueda: any = "";
  title = 'inventario';
  fileName= 'Inventario2023.xlsx';
  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }


  constructor(private apiService: ApiService) { 
    
  }
  

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.apiService.getAllCars().subscribe(resp =>{
      //console.log(resp.data);
      for (let i=0; i < resp.data.length; i++){
        
        if (resp.data[i].image == null){
          resp.data[i].tresesenta = "NO";
        } else {
          resp.data[i].tresesenta = "SI";
        }
      }
      
      this.carsList = resp.data;
      this.pageSize = resp.data.length;
      //console.log(resp.data.length);

      this.dataSource = new MatTableDataSource<Seminuevo>(this.carsList);

      this.dataSource.sort = this.sort;
      //console.log(this.sort)
    })
  }

  openImages(car: any){
    this.carSelected = car
    this.position = 0;
    this.images = car.image;
  }

  openDescriptions(car: any){
    //console.log(car)
    this.carSelected = car;
    let division = this.carSelected.description.split('.');
    this.listaDescripcion = division;
  }

  prev(){
    if(this.position !=0 ){  
      this.position--
    }
      else {console.log('Estas en la primer imagen')}
  }
  
  next(){
    if(this.position != this.images.length -1){ 
      this.position++
      //console.log(this.position)
      //console.log(this.images)
    } else {console.log('Estas en la ultima imagen')}
  }

  closeModal(){
    this.position = 0;
    this.images = [];
    this.carSelected = [];
  }


  filtrar(){

    this.apiService.getAllCars().subscribe(resp =>{

      for (let i=0; i < resp.data.length; i++){
        
        if (resp.data[i].image == null){
          resp.data[i].tresesenta = "NO";
        } else {
          resp.data[i].tresesenta = "SI";
        }
      }
      
      this.carsList = resp.data;
        this.carsList = this.carsList.filter((data) =>  JSON.stringify(data).toLowerCase().indexOf(this.busqueda.toLowerCase()) !== -1);

    })

  }

  announceSortChange(ev: any){
    console.log(ev)
  }


  sorteo(tipo:any, columna:string){

    this.columnaActiva = columna;

    if (this.sortStatus == true) {
        this.sortStatus = false;
      } else {
        this.sortStatus = true;
      }

    if (tipo === 'num'){

      if (this.sortStatus == false){
        this.carsList = this.carsList.sort(((a, b) => a[columna] - b[columna]));
      } else {
        this.carsList = this.carsList.sort(((a, b) => b[columna] - a[columna]));
      }

    } else {

      if (this.sortStatus == false){

        this.carsList = this.carsList.sort ((a, b) =>
        a[columna].toLowerCase() > b[columna].toLowerCase() ? 1 :
        a[columna].toLowerCase() < b[columna].toLowerCase() ? -1:
        0 );

      } else {
        
        this.carsList = this.carsList.sort ((a, b) =>
        a[columna].toLowerCase() < b[columna].toLowerCase() ? 1 :
        a[columna].toLowerCase() > b[columna].toLowerCase() ? -1:
        0 );

      }
    }

  }
}


