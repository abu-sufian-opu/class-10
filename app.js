//# Create an email pattern 

let mail = 'sufian.jnu@gmail.com';
let petternMail = /^[a-z0-9\._]*@[a-z\._]*\.[a-z]{3,5}$/;

console.log(`
E-mail Validation Matching===========
Code is : /^[a-z0-9\._]*@[a-z\._]*\.[a-z]{3,5}$/
User E-mail : ${mail}
`);
console.log(petternMail.test(mail));
console.log(`=====================================`);


//# Create a  username pattern

let bdPhone = '01936513119';
let pattern = /^(01|8801|\+8801)[0-9]{9}$/ ;
console.log(`
BD Phone No Validation Matching===========
Code is : /^(01|8801|\+8801)[0-9]{9}$/
User Phone No : ${bdPhone}
`);
console.log(pattern.test(bdPhone));
console.log(`=====================================`);


//# Create a Bangladeshi phone number pattern

let user = 'sufin.opu_99'
let userName = /^[a-z0-9\._]{5,16}$/ ;

console.log(`
User Name Validation Matching===========
Code is : /^[a-z0-9\._]{5,16}$/
User Name : ${user}
`);
console.log(userName.test(user));
console.log(`=====================================`);


//# Create a password pattern 

let password = 'Sufian0458%';
let pwPettern = /^[A-Za-z0-9@#$%_]{8,16}$/;

console.log(`
PassWord Validation Matching===========
Code is : /^[a-z0-9\._]{5,16}$/
User PassWord : ${password}
`);
console.log(pwPettern.test(password));
console.log(`=====================================`);


//# Create a zipcode pattern
let zip = '7851';
let zipPettern = /^[0-9]{4}$/;

console.log(`
User Name Validation Matching===========
Code is : /^[0-9]{4}$/
User Zip-Code : ${zip}
`);
console.log(zipPettern.test(zip));
console.log(`=====================================`);