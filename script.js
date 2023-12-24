function makeid(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

// Examples
const randomString1 = makeid(5);
const randomString2 = makeid(10);

console.log(randomString1); // Example output: "K3f2G"
console.log(randomString2); // Example output: "aB9EfgT2X1"


// Do not change the code below.
// const l = prompt("Enter a number.");
// alert(makeid(l));
