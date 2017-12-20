var arr = [7, 5, -12, 6, 32, 18, 14, -2];
var arr2 =[-3, 9, 21, 36, 27, 54, 17, 35];
var max = arr.reduce(function(a,b) {
  return Math.max(a, b);
});
var min = arr2.reduce(function (a,b){
     return Math.min(a,b);
});
console.log(max);
console.log(min);
