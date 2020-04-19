type Foo =
  | {
      type: "a";
      bar: number;
    }
  | {
      type: "b";
      baz: number;
    };

function f<T extends Foo>(item: T extends { type: "a" } ? T : never) {
  console.log(item.bar);
}

f({
  type: "a",
  bar: 12,
});

// f({
//   type: "b",
//   baz: 12,
// });
