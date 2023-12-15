const myFunction = (arr)=>
{

//using sort function to rearrange the array.
    const sortedArray = arr.sort((a, b) => a - b);

    let n =sortedArray.length;
   for(let i=0;i<=n;i++){
    if(sortedArray[i]==i){
      continue;
    } 
    else if(sortedArray[i]!=i ) { 
        console.log(i);
        break;
    }
    
    else if(sortedArray[i]==n){
       console.log(i);
    }
   }
}

let arr = [9,6,4,2,3,5,7,0,1];

//   [3,0,1]
myFunction(arr);