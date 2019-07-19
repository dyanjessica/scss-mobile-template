import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MovieRoutingModule } from "./movie-routing.module";
import { MovieComponent } from "./movie.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MovieRoutingModule
    ],
    declarations: [
        MovieComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MovieModule { }
