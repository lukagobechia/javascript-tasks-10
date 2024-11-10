const withdrawal = (amount, dayLimit, weekLimit) => {
  let daysNeeded = 0;
  let amountLeft = amount;
  if (dayLimit > weekLimit) {
    console.log("Process terminated");
    return false;
  }
  if (amount <= 0) {
    console.log("No amount to withdraw");
    return 0;
  }
  while (amountLeft > 0) {
    if (amountLeft >= weekLimit) {
      amountLeft -= weekLimit;
      daysNeeded += 7; // beacouse week consists of 7 days
    } else {
      amountLeft -= dayLimit;
      daysNeeded += 1;
    }
  }
  return daysNeeded;
};

console.log(withdrawal(50, 5, 20));
