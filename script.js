// console.log("test")
// function test(){
//         console.log("Test");
//         return 0;
// }
// var t=test();
// console.log(t);
// var newTest=()=>{
//         console.log("new Test");
// }
// newTest();
// var getSquare=num=>num*num;
// console.log(getSquare(10));

// var getSum=(num1,num2)=>num1+num2;
// console.log(getSum(1000,272));



///call Back function

// numbers.forEach(item=>console.log(item));
// let printAll=item=>{
//         console.log(item);
// }
// numbers.forEach(num=>
//         console.log(num*num));


// let square=numbers.map(function(item){
//         return item*item;
// });

// let print=value=>console.log(value);

// let newArray=["Shahin","Bashar","Sithi","AHmed","Mousuma","Afsana"];
// newArray.forEach(print);

// newArray.map(print);
// print(square);

let fruits =['Apple','Mango','Banana','Orange'];
let newFruitsList=[...fruits];
console.log(newFruitsList);


let person={
        name:'Shahin Bashar',
        email:'sbiitju@gmail.com',
        number:'01613162522'
}

let newperson={...person,age:'25'};
console.log(newperson.age);





let numbers=[1,2,3,4,5,6,7,8,9];
console.log(Math.max(...numbers));

let itr=numbers[Symbol.iterator]();
// console.log(itr.next());


function customIterator(arr){
        let i=0;
        return {
                next:function(){
                        return i<arr.length?{
                                value:arr[i++],done:false
                        }:{
                                done:true
                        }

                }
        }
}


let check=customIterator(numbers);
let check2=customIterator(numbers);
console.log(check.next(),check.next());
console.log(check2.next());



function customIterators2(arr){
        let i=0;
        return {
                next:function(){
                        return i<arr.length?{
                                name:arr[i++],
                                done:false
                        }:{
                                done:true
                        }
                }

        }

}
let man=['Shahin','Bashar','Afsana','Mimi'];
let itr2=customIterators2(man);
console.log(itr2.next());
console.log(itr2.next());
console.log(itr2.next());
console.log(itr2.next());
console.log(itr2.next());
console.log(itr2.next());
console.log(itr2.next());
