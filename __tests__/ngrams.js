import "react-native";
import ngrams from "../ngrams";

it("Gets the right ngrams", () => {
  const example = ngrams("Show me the code.");
  expect(example).toEqual([
    "Show",
    "me",
    "the",
    "code",
    "Show me",
    "me the",
    "the code",
    "Show me the",
    "me the code",
    "Show me the code",
  ]);
});

it("Gets the right ngrams and removes unwanted characters", () => {
  const example3 = ngrams(
    'Thi$ i$ a n@w te$| `~!@#$%^&*()_+}{":?><|\\<>.,:[]=-'
  );
  expect(example3).toEqual([
    "Thi",
    "i",
    "a",
    "nw",
    "te",
    "Thi i",
    "i a",
    "a nw",
    "nw te",
    "Thi i a",
    "i a nw",
    "a nw te",
    "Thi i a nw",
    "i a nw te",
    "Thi i a nw te",
  ]);
});

it("Return empty array if empty/undefined", () => {
  const example3 = ngrams();
  expect(example3).toEqual([]);
  const example4 = ngrams(null);
  expect(example4).toEqual([]);
  const example5 = ngrams(undefined);
  expect(example5).toEqual([]);
});
