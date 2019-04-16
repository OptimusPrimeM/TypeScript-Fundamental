
let v;
let p: boolean;
let q: boolean;

v = "abc";

/* Type assertions */

/*1 st way*/
p = (<string> v).endsWith('c');

q = (v as string).endsWith('c');

console.log(p);
console.log(q);
