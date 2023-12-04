function date (){
   // console.log(new Date().toLocaleDateString().split('/').reverse().join('-'));
    // const today = new Date().toISOString().split('T')[0].split('-').reverse().join('-');
    // console.log(today);
    
    // const today = new Date().toLocaleDateString();
    // console.log(today);

    const today = new Date().toISOString().split('T')[0];
console.log(today); // Output: "yyyy-mm-dd"

// const reversedToday = today.split('-').reverse().join('-');
// console.log(reversedToday); // Output: "dd-mm-yyyy"

}
date()