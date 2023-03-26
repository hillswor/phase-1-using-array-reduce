const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function (total, currentValue) {
  return total + currentValue;
}, 0);

function returnTotal(total, batch) {
  return total + batch;
}

const products = [
  { name: "Shampoo", price: 4.99 },
  { name: "Donuts", price: 7.99 },
  { name: "Cookies", price: 6.49 },
  { name: "Bath Gel", price: 13.99 },
];

function getTotalAmountForProducts(products) {
  let totalPrice = 0;

  for (const product of products) {
    totalPrice += product.price;
  }

  return totalPrice;
}

console.log(getTotalAmountForProducts(products));

const couponLocations = [
  { room: "Living room", amount: 5 },
  { room: "Kitchen", amount: 2 },
  { room: "Bathroom", amount: 1 },
  { room: "Master bedroom", amount: 7 },
];

function ourReduce(arr, reducer, init) {
  let accum = init;
  for (const element of arr) {
    accum = reducer(accum, element);
  }
  return accum;
}

function couponCounter(totalAmount, location) {
  return totalAmount + location.amount;
}

console.log(ourReduce(couponLocations, couponCounter, 0));
console.log(couponLocations.reduce(couponCounter, 0));

const doubledAndSummed = [1, 2, 3].reduce(function (accumulator, element) {
  return element * 2 + accumulator;
}, 0);

const letters = ["a", "b", "c", "b", "a", "a"];

const lettersCount = letters.reduce(function (countObj, currentLetter) {
  if (currentLetter in countObj) {
    countObj[currentLetter]++;
  } else {
    countObj[currentLetter] = 1;
  }
  return countObj;
}, {});

console.log(lettersCount);
