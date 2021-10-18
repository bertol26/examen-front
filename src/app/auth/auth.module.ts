import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { LoginComponent } from './pages/login.component';

@NgModule({
    declarations: [ LoginComponent ],
    imports: [ CommonModule, PrimengModule ],
    exports: [ ],
    providers: [],
})
export class AuthModule {}