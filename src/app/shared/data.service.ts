import { Injectable } from "@angular/core";

export interface IDataItem {
    id: number;
    name: string;
    description: string;
    image: string
}

@Injectable({
    providedIn: "root"
})
export class DataService {

    private items = new Array<IDataItem>(
        {
            id: 1,
            name: "Item 1",
            description: "SM Angono",
            image: "https://placem.at/places?random=1&w=500&txt=0"
        },
        {
            id: 2,
            name: "Item 2",
            description: "SM Antipolo",
            image: "https://placem.at/places?random=2&w=500&txt=0"
        },
        {
            id: 3,
            name: "Item 3",
            description: "SM Aura Premier",
            image: "https://placem.at/places?random=3&w=500&txt=0"
        },
        // {
        //     id: 4,
        //     name: "Item 4",
        //     description: "SM Bacolod",
        //     image: "https://placem.at/places?random=4&w=500&txt=0"
        // },
        // {
        //     id: 5,
        //     name: "Item 5",
        //     description: "SM Bacoor",
        //     image: "https://placem.at/places?random=5&w=500&txt=0"
        // },
        // {
        //     id: 6,
        //     name: "Item 6",
        //     description: "SM Baguio",
        //     image: "https://placem.at/places?random=6&w=500&txt=0"
        // },
        // {
        //     id: 7,
        //     name: "Item 7",
        //     description: "SM Pampanga",
        //     image: "https://placem.at/places?random=1&w=500&txt=0"
        // },
        // {
        //     id: 8,
        //     name: "Item 8",
        //     description: "SM Megamall",
        //     image: "https://picsum.photos/id/313/400/400"
        // },
        // {
        //     id: 9,
        //     name: "Item 9",
        //     description: "SM Makati",
        //     image: "https://picsum.photos/id/323/400/400"
        // },
        // {
        //     id: 10,
        //     name: "Item 10",
        //     description: "SM Molino",
        //     image: "https://picsum.photos/id/333/400/400"
        // },
       
    );

    getItems(): Array<IDataItem> {
        return this.items;
    }

    getItem(id: number): IDataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
