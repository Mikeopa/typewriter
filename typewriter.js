const sentence = "hello there from lighthouse labs";

const animateSentence = function(sentence) {
  let delay = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 50;
  }
  
  setTimeout(() => {
    process.stdout.write('\n');
  }, delay);
};

animateSentence(sentence);
