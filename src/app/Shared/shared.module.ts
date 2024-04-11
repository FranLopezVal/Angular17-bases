
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { PanelUI } from './Components/panel.ui/panel.ui';
import { headerComponent } from '../Modules/Global/Header/header.component';
import { ButtonGlassUI } from './Components/button.glass.ui/button.glass.ui';
import { ButtonFlatUI } from './Components/button.flat.ui/button.flat.ui';
import { userheaderComponent } from '../Modules/Global/Header/UserHeader/userheader.component';
import { containerviewComponent } from '../Modules/Global/ContainerViews/containerview.component';
import { ButtonMenuUI } from './Components/menubutton.ui/menubutton.ui';

@NgModule({
  declarations: [
    // UI
    PanelUI,
    ButtonGlassUI,
    ButtonFlatUI,
    ButtonMenuUI,

    //UI NODES
    // NodePrimigenUI, (Lo ponemos como referencia, pero es abstracto, no se puede instanciar)


    // Components
    headerComponent,
    userheaderComponent,
    containerviewComponent
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
    ButtonMenuUI,

    //UI NODES
    // NodePrimigenUI,

    //Components
    headerComponent,
    userheaderComponent,
    containerviewComponent,
  ],
  providers: [
    
  ]
})
export class SharedModule { }
