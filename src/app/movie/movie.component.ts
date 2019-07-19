import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Movie",
    moduleId: module.id,
    templateUrl: "./movie.component.html"
})
export class MovieComponent implements OnInit {
    constructor() {
        // Use the constructor to inject services.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }
}
