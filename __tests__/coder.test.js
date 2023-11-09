import Coder from "../src/Coder"


test("A coder has a first name", () => {
    let c = new Coder("Pepito Pérez", true, 27);
    
    expect(c.getFirstName()).toBe("Pepito");
});

test("a coder has a last name", () => {
    COMPLETE_THIS
});

test("a coder has to complete a minimum of 30 exercises", () => {
    COMPLETE_THIS
});

test("we need to know if a coder is younger than 30 years old or not", () => {
    COMPLETE_THIS
});

