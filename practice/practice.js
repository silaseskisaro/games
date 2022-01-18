let map = new Map();
map.set("Philip", "Java");
map.set("Bill", "Doctor");
map.set("Abed", "Python");

map.forEach((k, v) => {
    console.log(k, ":", v);
});