import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {HelloWorldComponent} from './hello-world.component';

@NgModule({imports: [CommonModule], declarations: [HelloWorldComponent], exports: [HelloWorldComponent]})
export class HelloWorldModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HelloWorldModule,
    };
  }
}
