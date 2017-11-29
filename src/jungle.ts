import { Animal } from "./animal";
import { Bear } from "./bear";
import { Puma } from "./puma";
import { Rabbid } from "./rabbid";

export class Jungle {
    public myPuma = new Puma();
    public myBear = new Bear();
    public myRabbid = new Rabbid();
    private animals: Animal[] = [];
    private observedAnimal: Bear | Puma;
    constructor() {
        this.animals.push(this.myPuma);
        this.animals.push(this.myBear);
    }

    public async happenings() {
        const belly = await this.myPuma.swallow();
        belly.poop();
        this.startObserving(this.myPuma); // try replacing 'this.myPuma' by 'this.myRabbid'
        this.startObserving(this.myBear); // try replacing 'this.myPuma' by 'this.myRabbid'
    }

    private startObserving(animal: Bear | Puma) {
        this.observedAnimal = animal;
    }
}
