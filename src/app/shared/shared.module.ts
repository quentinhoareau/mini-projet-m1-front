import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from './material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule,
    MatTableModule
  ],
  exports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule,
    MatTableModule
  ]
})
export class SharedModule { }
