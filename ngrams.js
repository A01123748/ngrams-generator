const ngrams = (text) => {
  // edge cases
  if (text === undefined || text === null) {
    return [];
  }
  // Remove all characters but space and letters
  const cleanedText = text.replace(/[^A-Za-z ]+/g, "").trim();
  // Split text into array separating by spaces
  const wordsArray = cleanedText.split(" ");
  const n = wordsArray.length;
  let res = [];
  // Get ngram from 1 to N where N is the number of worlds in the original text
  for (let wordsNumber = 1; wordsNumber <= wordsArray.length; wordsNumber++) {
    // Get combinations for continuous words based on the wordsNumber constraint
    for (let i = wordsNumber - 1; i < n; i++) {
      // Getting a dynamic start point
      const start = i - (wordsNumber - 1);
      // copy an array chunk moving the start position
      const wordsCombination = wordsArray.slice(start, start + wordsNumber);
      // join the array elements into a single text
      const mergedWords = wordsCombination.join(" ");
      // add result to results array
      res.push(mergedWords);
    }
  }
  return res;
};

export default ngrams;
// const example = ngrams("Show me the code.");
// console.log("res", example);

// const example2 = ngrams("Show");
// console.log("res", example2);

// const example3 = ngrams('Thi$ i$ a n@w te$| `~!@#$%^&*()_+}{":?><|\\<>.,:[]=-');
// console.log("res", example3);

// const example4 = ngrams(null);
// console.log("res", example4);
