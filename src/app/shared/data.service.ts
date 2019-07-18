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
            image: "https://picsum.photos/id/343/400/400"
        },
        {
            id: 2,
            name: "Item 2",
            description: "Description for Item 2",
            image: "https://picsum.photos/id/383/400/400"
        },
        {
            id: 3,
            name: "Item 3",
            description: "Description for Item 3",
            image: "https://picsum.photos/id/353/400/400"
        },
        {
            id: 4,
            name: "Item 4",
            description: "Description for Item 4",
            image: "https://picsum.photos/id/363/400/400"
        },
        {
            id: 5,
            name: "Item 5",
            description: "Description for Item 5",
            image: "https://picsum.photos/id/373/400/400"
        },
        {
            id: 6,
            name: "Item 6",
            description: "Description for Item 6",
            image: "https://picsum.photos/id/383/400/400"
        },
        {
            id: 7,
            name: "Item 7",
            description: "Description for Item 7",
            image: "https://picsum.photos/id/393/400/400"
        },
        {
            id: 8,
            name: "Item 8",
            description: "Description for Item 8",
            image: "https://picsum.photos/id/313/400/400"
        },
        {
            id: 9,
            name: "Item 9",
            description: "Description for Item 9",
            image: "https://picsum.photos/id/323/400/400"
        },
        {
            id: 10,
            name: "Item 10",
            description: "Description for Item 10",
            image: "https://picsum.photos/id/333/400/400"
        },
       
    );

    getItems(): Array<IDataItem> {
        return this.items;
    }

    getItem(id: number): IDataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
