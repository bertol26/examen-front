import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {CalendarModule} from 'primeng/calendar';
import {TooltipModule} from 'primeng/tooltip';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
    declarations: [],
    imports: 
    [ CommonModule,
      InputTextModule,  
      ButtonModule,
      TableModule,
      ToolbarModule,
      CalendarModule,
      TooltipModule,
      DynamicDialogModule,
      ToastModule
      
     ],
    exports: [
      CommonModule,
      InputTextModule,
      ButtonModule,
      TableModule,
      ToolbarModule,
      CalendarModule,
      TooltipModule,
      DynamicDialogModule,
      ToastModule
    ],
    providers: [DialogService,MessageService],
})
export class PrimengModule {}