test("First Test", () => {
  expect(3 + 2).toBe(5);
});

test("4 is greater than 2", () => {
  expect(2 + 2).toBeGreaterThan(2);
});

test("variable num is null", () => {
  const num = null;
  expect(num).toBeNull();
});

test("check if ending contains ing", () => {
  expect("ending").toMatch(/ing/);
});

test("check for array equality", () => {
  const data = ["Naruto", "Sasuke"];
  data.push("Itachi");
  expect(data).toEqual(["Naruto", "Sasuke", "Itachi"]);
});
