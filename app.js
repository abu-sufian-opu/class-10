
let mail = 'sabbir.valochele_99@gmail.com';
let petternMail = /^[a-z0-9\._]*@[a-z\._]*\.[a-z]{3,5}$/;
console.log(petternMail.test(mail));


let bdPhone = '01936513119';
let pattern = /^(01|8801|\+8801)[0-9]{9}$/ ;
console.log(pattern.test(bdPhone));


let user = 'sufin.opu_99'
let userName = /^[a-z0-9\._]{5,16}$/ ;
console.log(userName.test(user));


let password = 'Sufian053458%';
let pwPettern = /^[A-Za-z0-9@#$%_]{8,16}$/;
console.log(pwPettern.test(password));


let zip = '7851';
let zipPettern = /^[0-9]{4}$/;
console.log(zipPettern.test(zip));