const add = require("./StringCalculator");

it("should return a zero on a empty string", () => { 
    expect(add("")).toBe(0);
});

it("should return number when only one number is in the string", () => { 
    expect(add("5")).toBe(5);
});

it("should return the sum of two given numbers", () => { 
    expect(add("1,2")).toBe(3);
});

it("should summarize multible numbers ", () => { 
    expect(add("1,2,3")).toBe(6);
});

it("should summarize multible numbers with comma or new line", () => { 
    expect(add("1\n2,3")).toBe(6);
});

it("should not summarize negative numbers", () => { 
    expect(add("-1,2")).toBe("Negatives not allowed: -1");
});

it("should not summarize negative numbers", () => { 
    expect(add("2,-4,3,-5")).toBe("Negatives not allowed: -4,-5");
});

it("should ignore numbers over 1000", () => { 
    expect(add("1001,2")).toBe(2);
});

it("should allow different delimiter", () => { 
    expect(add("//;\n1;2")).toBe(3);
});



