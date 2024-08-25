// const nestedArray = [[1, 2], [3, 4], [5, 6]];

// newArr = nestedArray.reduce((acc , currentVal) => {
//     for (let ele of currentVal) {
//         acc.push(ele)
//       }
//     console.log(acc)
//     return acc
// },[])

// console.log(newArr)

// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// newObj = fruits.reduce((acc, currentVal) =>{
//     for (let ele in currentVal){
//         acc[ele]= acc[ele]? acc[ele]+1 : 1
//     }
//     return acc

// }, {})


const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Animal Farm", author: "George Orwell", year: 1945 }
  ];

const newObj = books.reduce((ar, currentval)=>{
    if (!ar[currentval.author]){
    ar[currentval.author] = [currentval]    
    } else {
        ar[currentval.author].push(currentval)
    }
    
    return ar
},{})

console.log(newObj)