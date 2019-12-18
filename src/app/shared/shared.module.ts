import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';

import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    /* angular */
    CommonModule,
    FormsModule,

    /* 3rd bibliotecas de terceiros (components) */
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    /* angular */
    CommonModule,
    FormsModule,

    /* 3rd bibliotecas de terceiros (components) */
    MatInputModule,
    MatButtonModule

    /* Componentes Customizados Próprios*/
    
  ]
})

export class SharedModule { }
