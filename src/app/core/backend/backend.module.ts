import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Service } from './service';

@NgModule({
    declarations: [],
    imports: [ CommonModule, HttpClientModule ],
    exports: [ HttpClientModule],
    providers: [Service],
})
export class BackendModule {
    static forRoot(): ModuleWithProviders<BackendModule> {
        return {
          ngModule: BackendModule,
          providers: [
            Service
          ],
        };
      }
}