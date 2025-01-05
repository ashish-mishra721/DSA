// Remove duplicates from Sorted Array

const arry = [2,3,3,4,4,5,5,6,6]
for(let i=0;i<arry.length;i++)
{
  console.log(arry[i])
  for(let j = i+1; j<arry.length;j++)
  {
    if(arry[i]===arry[j])
    {
       arry.splice(i,1)
    }
  }
}

console.log(arry)

//output  [2, 3, 4, 5, 6]
