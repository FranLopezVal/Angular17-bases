
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { PanelUI } from './Components/panel.ui/panel.ui';
import { headerComponent } from '../Modules/Global/Header/header.component';

@NgModule({
  declarations: [
    // UI
    PanelUI,

    // Components
    headerComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,

    //UI
    PanelUI,

    //Components
    headerComponent
  ],
  providers: [
    
  ]
})
export class SharedModule { }
