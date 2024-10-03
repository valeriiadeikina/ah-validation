import { determinateCard } from "../js/determinateCard";

describe("Card Type", () => {
  test("Maestro card", () => {
    expect(determinateCard("5018 1234 5678 9012")).toBe("Maestro");
    expect(determinateCard("5020 1234 5678 9012")).toBe("Maestro");
    expect(determinateCard("6759 1234 5678 9012")).toBe("Maestro");
    expect(determinateCard("6761 1234 5678 9012")).toBe("Maestro");
    expect(determinateCard("5893 1234 5678 9012")).toBe("Maestro");
    expect(determinateCard("6304 1234 5678 9012")).toBe("Maestro");
    expect(determinateCard("1234 1234 5678 9012")).toBe("");
  });

  test("MasterCard", () => {
    expect(determinateCard("5111 1234 5678 9012")).toBe("MasterCard");
    expect(determinateCard("5222 1234 5678 9012")).toBe("MasterCard");
    expect(determinateCard("5555 1234 5678 9012")).toBe("MasterCard");
    expect(determinateCard("2221000000000000")).toBe("MasterCard");
    expect(determinateCard("2720990000000000")).toBe("MasterCard");
    expect(determinateCard("2922000000000000")).toBe("");
  });

  test("Visa", () => {
    expect(determinateCard("4111 1111 1111 1111")).toBe("Visa");
    expect(determinateCard("4111 1111 1111 1")).toBe("Visa");
    expect(determinateCard("4111 1111 1111 1111 111")).toBe("Visa");
    expect(determinateCard("8111 1111 1111 1111")).toBe("");
  });

  test("Mir", () => {
    expect(determinateCard("2200 0000 0000 0000")).toBe("Mir");
    expect(determinateCard("2200 0000 0000 0000 000")).toBe("Mir");
    expect(determinateCard("2111 1111 1111 1111")).toBe("");
  });

  test("unknown card", () => {
    expect(determinateCard("1234 5678 9123")).toBe("");
    expect(determinateCard("0000 0000 0000 0000")).toBe("");
  });
});
