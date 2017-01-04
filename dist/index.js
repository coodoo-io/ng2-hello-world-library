import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HelloWorldComponent } from './hello-world.component';
export var HelloWorldModule = (function () {
    function HelloWorldModule() {
    }
    HelloWorldModule.forRoot = function () {
        return {
            ngModule: HelloWorldModule,
        };
    };
    HelloWorldModule.decorators = [
        { type: NgModule, args: [{ imports: [CommonModule], declarations: [HelloWorldComponent], exports: [HelloWorldComponent] },] },
    ];
    /** @nocollapse */
    HelloWorldModule.ctorParameters = function () { return []; };
    return HelloWorldModule;
}());
//# sourceMappingURL=index.js.map