import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { TrimPipe } from './pipes/trim.pipe';

import {MatIconModule} from '@angular/material/icon'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatSortModule } from '@angular/material/sort'

import { RouterModule } from '@angular/router';

import { DaysPipe } from './pipes/days.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { TipoAutoPipe } from './pipes/tipo-auto.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ; 
import { ImgPipe } from './pipes/img.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchPipe,
    TrimPipe,
    DaysPipe,
    TipoAutoPipe,
    ImgPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }