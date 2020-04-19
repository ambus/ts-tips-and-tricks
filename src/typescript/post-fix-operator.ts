function getSomething(value: number): undefined | { test: string } {
  if (value > 5) {
    return undefined;
  } else {
    return { test: "test" };
  }
}

let random = Math.random() * 10;
let val: { test: string } | undefined = getSomething(random) as {test: string} | undefined;

console.log(random, val.test);

// 👍 with "!" we assure TypeScript
// that 'textEl' is not null/undefined
