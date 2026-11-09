const test = require("node:test");
const assert = require("node:assert");
const { validateEmail } = require("../script");

test("Valid email should return true", () => {
    assert.strictEqual(
        validateEmail("student@gmail.com"),
        true
    );
});

test("Invalid email should return false", () => {
    assert.strictEqual(
        validateEmail("studentgmail.com"),
        false
    );
});

test("Empty email should return false", () => {
    assert.strictEqual(
        validateEmail(""),
        false
    );
});

test("Email without domain should return false", () => {
    assert.strictEqual(
        validateEmail("student@"),
        false
    );
});