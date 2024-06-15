const arr = [1,2,3]

// // for (item of arr){
// //     console.log(item)
// // }
// const arr2 = [4,5,6]

// console.log(arr+arr2)

// const string = 'abcd'

// const newArr = string.split('')

// console.log(newArr.splice(0,2))

// arr.map((item)=>{console.log(item*2)})

// newArr = arr.filter((item)=>{
//     if(item==1){
//         return item
//     }
// })
newArr = arr.filter((item)=>{ 
    return item%2==0;
 });
 
 console.log(newArr);

// console.log(newArr)