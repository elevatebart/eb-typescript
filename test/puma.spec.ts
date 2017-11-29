import { Puma } from "../src/puma";

describe("Puma", () => {
    let sut: Puma;
    beforeEach(() => {
        sut = new Puma();
    });

    it("puma should be a big cat", () => {
        expect(sut.name).toBe("Big Cat");
    });
});
