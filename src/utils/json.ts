// type Json =
//   | string
//   | number
//   | boolean
//   | null
//   | { [property: string]: Json }
//   | Json[];

// const Json: t.Type<Json> = t.recursion("Json", () =>
//   t.union([
//     t.string,
//     t.number,
//     t.boolean,
//     t.null,
//     t.record(t.string, Json),
//     t.array(Json),
//   ])
// );

// const json: Json = [1, [[["1"]], { a: 1, b: false }]];

// const decoded = Json.decode([1, [[["1"]], { a: 1, b: false }]]);
// console.log(decoded);
