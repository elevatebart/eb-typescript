
enum MouthSize {
    small,
    big,
}

export interface IAnimalOption {
    name: string;
}

export interface IHasAMouth {
    open: () => void;
    size: MouthSize;
}

export abstract class Animal {
    public head: IHasAMouth;
    public readonly name: string;
    constructor(opts: IAnimalOption) {
        this.name = opts.name;
    }

    public abstract shout(): void;
}
