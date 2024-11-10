const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function guessCorrectAnswer(str, a, b) {
  rl.question("What is " + str, (answer) => {
    let ans;

    if (str.toLowerCase() === "what is a plus b?") {
      ans = a + b;
    } else if (str.toLowerCase() === "what is a minus b?") {
      ans = a - b;
    } else {
      console.log("Incorrect input");
      rl.close();
      return;
    }

    const result = Number(answer) === ans ? "You're human" : "You're robot";
    console.log(result);
    rl.close();
  });
}


guessCorrectAnswer("What is a minus b?", 5, 2);
// guessCorrectAnswer("What is a plus b?", 5, 2);
