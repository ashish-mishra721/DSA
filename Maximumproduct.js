// Maximum product of a triplet (subsequence of size 3) in array

let arr = [1, -4, 3, -6, 7, 0]
let sort = arr.sort((a,b) => a-b)
let p1 = arr[arr.length-1]*arr[arr.length-2]*arr[arr.length-3]
let p2 = arr[0]*arr[1]*arr[arr.length-1]
if(p1>p2) { console.log(p1) } else console.log(p2)

// output 168
