// Maximum consecutive one’s (or zeros) in a binary array
let arr = [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
let count = 1
let maxCount = 0
for(let i = 1; i<arr.length; i++) {
  if(arr[i] === arr[i-1])
  {
    count = count +1
  }
  else { count = 1 }
  maxCount = Math.max(maxCount, count);
}
console.log(maxCount)
// output = 2
