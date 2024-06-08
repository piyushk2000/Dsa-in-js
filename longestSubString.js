// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function (s) {
//     stringLen = s.length

//     let longestSS = ''

//     if (s.length == 0) return 0
//     if (s.length == 1) return 1
// // staring pint for each substring is defind by i 
//     for (let i = 0; i < stringLen; i++) {
//         newStr = ''
//         for(let j=i ; j<stringLen; j++){
//             if(!newStr.includes(s[j])){
//                 newStr = newStr+s[j]
//             } else{
//                 if (newStr.length > longestSS.length){
//                     longestSS = newStr
//                 }
//                 newStr=''
//                 break
//             }
            
//         }
//         if (newStr.length > longestSS.length) {
//             longestSS = newStr;
//         }

//     }
//     return longestSS.length

// };



var lengthOfLongestSubstring = function (s) {
    let set = new Set();
    let left = 0;
    let maxSize = 0;

    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    for (let i = 0; i < s.length; i++) {

        while (set.has(s[i])) {
            console.log(s[left])
            set.delete(s[left])
            left++;
        }
        set.add(s[i]);
        maxSize = Math.max(maxSize, i - left + 1)
    }
    return maxSize;
}

console.log(lengthOfLongestSubstring('abcacdr'))
