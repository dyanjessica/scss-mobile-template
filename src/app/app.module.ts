import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { SearchComponent } from "./search/search.component";
import { DetailComponent } from "./detail/detail.component";

import { DataService } from "./data/data";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        SearchComponent,
        DetailComponent
    
    ],
    providers: [
        DataService
    ],
   
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
