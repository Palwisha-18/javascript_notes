// logical OR assignment operator

let title; // undefined
title ||= 'untitled';

console.log(title); // 'untitled'


// logical AND assignment operator

let title = 'title';
title &&= 'untitled';

console.log(title); // 'untitled'


// nullish coalescing assignment operator

let user = {
    username: 'Satoshi'
};
user.nickname ??= 'anonymous';

console.log(user);  // {username: 'Satoshi', nickname:'anonymous'}
