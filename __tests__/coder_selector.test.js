import Coder from "../src/Coder"
import CoderSelector from "../src/CoderSelector";


test("Selects the coders that are less than 30 years old and have completed the exercises", () => {
    let s = new CoderSelector();
    let coders = [
        new Coder("Luis López", true, 29),
        new Coder("Napoleón Bonaparte", true, 254),
        new Coder("Ana Benítez", false, 24),
        new Coder("Lola Fernández", true, 27)

    ]
    expect(s.selectFor300H(coders)).toBe([
        "Luis", "Lola"
    ]);
})