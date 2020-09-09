Basic Foundation II

[1]
function big (arr){
  for (var idx=0; idx<arr.length; idx++){
    if (arr[idx]>0){
      arr[idx]='big';
    }
  }
  return arr;
}

console.log(big([1,-2,-43213,321321,432]));

[2]
function print(arr){
  var lowest=arr[0];
  var highest=arr[0];
  for (var idx=0; idx<arr.length;idx++){
    if(arr[idx]<lowest){
      lowest=arr[idx];
    }
    if (arr[idx]>highest){
      highest=arr[idx];
    }
  }
  console.log(lowest);
  return highest;
}

[3]
function three(arr){
  var second;
  var odd;
  for (var idx=0; idx<arr.length; idx++){
      second=arr[arr.length-2];
    }
    for (var idx=0; idx<arr.length; idx++){
    if(arr[idx]%2!==0){
      odd=arr[idx];
      break;
    }
  }
  console.log(second);
  return odd;
}
console.log(three([2,-2,-43213,321321,432]));

[4]
function double(arr){
  New =[];
  for (var idx=0; idx<arr.length; idx++){
    arr[idx]*=2;
    New.push(arr[idx]);
  }
  return New;
}

console.log(double([1,2,3,4,5,6,7]));

[5]
function positive(arr){
  var count=0;
  for (var idx=0; idx<arr.length; idx++){
    if (arr[idx]>0){
      count+=1;
    }
  }
  arr[arr.length-1]=counter
  return arr
}

console.log(positive([5,1,3,4,4,6,2,5,1,-1,-432,1,432,-432,123,883]));

[6]
function six(arr){
  for (var idx=0; idx<arr.length; idx++){
    if(idx==arr.length-2){
      break;
    }
    if (arr[idx]%2!==0 && arr[idx+1]%2 !==0 && arr[idx+2]%2 !==0){
      console.log("That's odd!");
    }
    if (arr[idx]%2===0 && arr[idx+1]%2===0 && arr[idx+2]%2===0){
      console.log("Even more so!");
    }
  }
}
six([1,2,3,4,5,5,5,6,8,8,23,65,876,5,5,5]);


[7]
function oddElement(arr){
  for (var idx=0; idx<arr.length; idx++){
    if (idx%2!==0){
      arr[idx]+=1;
    }
  }
  return arr;
}

console.log(oddElement([1,2,3,4,5,6,7]));

[8]
function string (arr){
  for (var idx=arr.length-1; idx>0; idx--){
    arr[idx]=arr[idx-1].length;
  }
  return arr;
}

console.log(string(['hello', 'how', 'is', 'life, going', 'forever', 'you']));

[9]
function seven(arr){
  New=[];
  for (var i=0; i<arr.length; i++){
    New.push(arr[i]+7);
  }
  return New;
}

console.log(seven([1,2,3,4,5,6,7,8,9,10]));

[10]
function reverse (arr){
  for (var idx=0; idx<arr.length/2; idx++){
    var temp=arr[idx];
    arr[idx]=arr[arr.length-1-idx];
    arr[arr.length-1-idx]=temp;
  }
  return arr;
}

console.log(reverse([1,2,3,4,5,6]));

[11]
function negative (arr){
  New=[];
  for (var idx=0; idx<arr.length;idx++){
    if (arr[idx]>0){
    arr[idx]*=-1;
    }
    New.push(arr[idx]);
  }
  return New;
}
console.log(negative([1,2,3,4,5,6,7,-1,-2]));

[12]
function hunger(arr){
  var sum=0;
  for (var idx=0; idx<arr.length; idx++){
    if(arr[idx]=='food'){
      console.log("Yummy!")
    }
    else{
      sum++;
    }
  }
  if (sum==arr.length){
    console.log("I'm hungry!")
  }
}

console.log(hunger([1,2,3,4,5,66]));

[13]

function swap(arr){
  for (var idx=0; idx<=arr.length/2; idx+=2){
      temp=arr[idx]
      arr[idx]=arr[arr.length-1-idx];
      arr[arr.length-1-idx]=temp;
  }
  return arr;
}

console.log(swap(['a','b','c','d','g','e']));

[14]

function scale(arr, num){
  for (var idx=0; idx<arr.length; idx++){
    arr[idx]*=num;
  }
  return arr;
}

console.log(scale([1,2,3,4,5,6], 5));

