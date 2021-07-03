import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDatafilesRoutingModule } from './list-datafiles-routing.module';
import { ListDatafilesComponent } from './list-datafiles.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
    imports: [CommonModule,
              ListDatafilesRoutingModule,
              FormsModule,
              ReactiveFormsModule,
              Ng5SliderModule
            ],

    declarations: [ListDatafilesComponent]
})
export class ListDatafilesModule {}
