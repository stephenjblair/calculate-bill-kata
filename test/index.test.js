const TestRunner = require("jest-runner");

// -Calculate Bill - Create a function that takes the price of the bill,
// the VAT rate and the tip rate and returns the total
// amount the customer needs to pay.


// create a function
// takes price, VAT and tip rate as numbers
// returns the totalamount formatted as a currency string
// (amount + (amount * vat /100 ) + tip)
const calculateBill = require('../index');
test("calculateBill is a function", () => {

    expect(calculateBill).toBeDefined();
});

test("it returns a string", () => {
    const result = calculateBill();

    expect(typeof result).toBe("string");
});

test("it returns the right amount", () => {
    const price = 100;
    const vat = 20;
    const tip = 10;

    expect(calculateBill(price, vat, tip)).toBe("£130");
})

test("if price is not a number returns an error string", () => {
    const price = "100";
    const errorMessage = "error";

    expect(calculateBill(price)).toBe(errorMessage);
})

test("if vat is anot a number returns an error string", () => {
    const price = 100;
    const vat = undefined
    const errorMessage = "error";

    expect(calculateBill(price, vat)).toBe(errorMessage);

})

test("if tip is not a number returns an error string", () => {
    const price = 100;
    const vat = 20
    const tip = null;

    const errorMessage = "error";

    expect(calculateBill(price, vat, null)).toBe(errorMessage);
})