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
            description: "Description for Item 1",
            image: "https://placekitten.com/400/400"
        },
        {
            id: 2,
            name: "Item 2",
            description: "Description for Item 2",
            image: "https://placekitten.com/260/260"
        },
        {
            id: 3,
            name: "Item 3",
            description: "Description for Item 3",
            image: "https://placekitten.com/200/200"
        },
        {
            id: 4,
            name: "Item 4",
            description: "Description for Item 4",
            image: "https://placekitten.com/300/200"
        },
        {
            id: 5,
            name: "Item 5",
            description: "Description for Item 5",
            image: "https://placekitten.com/300/300"
        },
        {
            id: 6,
            name: "Item 6",
            description: "Description for Item 6",
            image: "https://placekitten.com/350/350"
        },
        {
            id: 7,
            name: "Item 7",
            description: "Description for Item 7",
            image: "https://placekitten.com/500/200"
        },
        {
            id: 8,
            name: "Item 8",
            description: "Description for Item 8",
            image: "https://placekitten.com/400/500"
        },
        {
            id: 9,
            name: "Item 9",
            description: "Description for Item 9",
            image: "https://placekitten.com/300/400"
        },
        {
            id: 10,
            name: "Item 10",
            description: "Description for Item 10",
            image: "https://placekitten.com/250/250"
        },
       
    );

    getItems(): Array<IDataItem> {
        return this.items;
    }

    getItem(id: number): IDataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
