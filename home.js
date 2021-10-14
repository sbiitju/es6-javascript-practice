let practiceFunction=(a,b)=>a+b;
let sum=practiceFunction(10,20);
// console.log(sum);
let s=0;
let numbers=[10,20,30,40,50];
let addAllNumber=item=>{
        s=s+item;
}
// numbers.forEach(addAllNumber);
// console.log(s);

// numbers.map(addAllNumber);
// console.log(s);
let spreadOperator=[...numbers];
// console.log(spreadOperator);

let person={
        fname:"Shahin",
        lname:"Bashar"
}
// let {fname,lname}=person;
// console.log({fname,lname});

let display=({fname,lname})=>console.log(fname,lname);
// display(person);

let a,b;
//swaping
a=10;
b=20;
[a,b]=[b,a];
// console.log(a,b);


//arrayDestraction

//spreadOperator
let x=['a','b','c','d','e','f','g','h','i'];
let y=['j','k','l'];
let c=['m','n'];
let abc=[...x,...y,...c];
// console.log(abc.length);

let personSpread={...person,age:'26'};
console.log(personSpread);




