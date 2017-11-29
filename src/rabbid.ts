import { Animal } from "./animal";

export class Rabbid extends Animal {
    constructor() {
        super({
            name: "Small & Fluffy",
        });
    }
    public shout(): void {
        this.head.open();
        console.log("Sqweeeeee !!!");
    }
}
