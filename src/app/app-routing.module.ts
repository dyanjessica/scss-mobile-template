import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DetailComponent } from "./detail/detail.component";


const routes: Routes = [
    {
        path: "",
        redirectTo: "/(homeTab:home/default//browseTab:browse/default//searchTab:search/default//movieTab:movie/default)",
        pathMatch: "full"
    },

    {
        path: "home",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/home/home.module#HomeModule",
        outlet: "homeTab"
    },
    {
        path: "browse",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/browse/browse.module#BrowseModule",
        outlet: "browseTab"
    },
    {
        path: "search",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/search/search.module#SearchModule",
        outlet: "searchTab"
    },
    {
        path: "movie",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/movie/movie.module#MovieModule",
        outlet: "movieTab"
    },
    { path: "detail/:id", component: DetailComponent }

];
    
@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
