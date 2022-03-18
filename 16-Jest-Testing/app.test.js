test("Our First Test", () => {
  expect(3 + 2).toBe(5);
});

test("Greater Than", () => {
  expect(2 + 2).toBeGreaterThan(3);
});

test("Null", () => {
  expect(null).toBeNull();
});
