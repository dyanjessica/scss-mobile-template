import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {
    
    locations: { city: string, country: string, imageSrc: string }[] = [
        { city: "SM City Baguio", country: "Metro Manila", imageSrc: "https://placem.at/places?random=1&w=500&txt=0" },
        { city: "SM City Bacoor", country: "South Luzon", imageSrc: "https://placem.at/places?random=2&w=500&txt=0" },
        { city: "SM Aura Premier", country: "Metro Manila", imageSrc: "https://placem.at/places?random=3&w=500&txt=0" },
        { city: "SM City Bicutan", country: "Metro Manila", imageSrc: "https://placem.at/places?random=4&w=500&txt=0" },
        { city: "SM City Pampanga", country: "North Luzon", imageSrc: "https://placem.at/places?random=5&w=500&txt=0" },
        { city: "SM Mall of Asia", country: "Metro Manila", imageSrc: "https://placem.at/places?random=6&w=500&txt=0" },
        { city: "SM City Naga", country: "South Luzon", imageSrc: "https://placem.at/places?random=77&w=500&txt=0" },
        { city: "SM City Cebu", country: "Visayas", imageSrc: "https://placem.at/places?random=8&w=500&txt=0" },
        { city: "SM City Bacolod", country: "Visayas", imageSrc: "https://placem.at/places?random=55&w=500&txt=0" },
        { city: "SM City Davao", country: "Mindanao", imageSrc: "https://placem.at/places?random=44&w=500&txt=0" },
        { city: "SM City Batangas", country: "South Luzon", imageSrc: "https://placem.at/places?random=11&w=500&txt=0" },
        { city: "SM City Iloilo", country: "Visayas", imageSrc: "https://placem.at/places?random=33&w=500&txt=0" }
    ];
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }
}
