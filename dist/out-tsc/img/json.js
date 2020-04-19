var Json = t.recursion("Json", function () {
    return t.union([
        t.string,
        t.number,
        t.boolean,
        t.null,
        t.record(t.string, Json),
        t.array(Json),
    ]);
});
var json = [1, [[["1"]], { a: 1, b: false }]];
var decoded = Json.decode([1, [[["1"]], { a: 1, b: false }]]);
console.log(decoded);
//# sourceMappingURL=json.js.map