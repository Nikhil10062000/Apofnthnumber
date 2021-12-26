const a = 25, b = 35;
const n = 50;
const findNthTerm = (first, second, num) => {
   const diff = second - first;
   const fact = (num - 1) * diff;
   const term = first + fact;
   return term;
};
console.log(findNthTerm(a, b, n));