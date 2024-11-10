const wideNumDetector = (num) => {
  const countOfDigits = String(num).length;

  const arr = String(num).split("");

  console.log("Count of Digits is:  ", countOfDigits);
  const sum = arr.reduce((tot, curr) => {
    return (tot += Number(curr));
  }, 0);
  console.log("Sum of the digits is: ", sum);

  console.log("So");

  if (countOfDigits > sum) console.log(`${num} is wide number`);
  else console.log(`${num} is not wide number`);
};

wideNumDetector(100);
