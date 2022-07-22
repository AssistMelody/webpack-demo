import printMe from "./print";

const a = {
  name: "aaa",
  test2: function (params) {
    console.log(this);
    console.log(this.name + params);
  },
  test: (params) => {
    console.log(params);
  },
};
printMe();
console.log(a);
