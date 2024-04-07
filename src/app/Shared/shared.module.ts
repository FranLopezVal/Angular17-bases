
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { PanelUI } from './Components/panel.ui/panel.ui';
import { headerComponent } from '../Modules/Global/Header/header.component';
import { ButtonGlassUI } from './Components/button.glass.ui/button.glass.ui';
import { ButtonFlatUI } from './Components/button.flat.ui/button.flat.ui';

@NgModule({
  declarations: [
    // UI
    PanelUI,
    ButtonGlassUI,
    ButtonFlatUI,

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
    ButtonGlassUI,
    ButtonFlatUI,

    //Components
    headerComponent
  ],
  providers: [
    
  ]
})
export class SharedModule { }
