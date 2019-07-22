import { Component, OnInit } from "@angular/core";
import { isAndroid } from "tns-core-modules/platform";

import { CardView } from 'nativescript-cardview';
import { registerElement } from 'nativescript-angular';

registerElement('CardView', () => CardView as any);

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    getIconSource(icon: string): string {
        const iconPrefix = isAndroid ? "res://" : "res://tabIcons/";

        return iconPrefix + icon;
    }
}
