// var text = 'I may not have been sure about what really did interest me, but I was absolutely sure about what didn\'t.';

// var pattern = /may/;

// console.log(pattern.exec(text));
// // -> [ 'what', index: 31, input: ... ]


// var text = 'The text does not have exwhyzee';

// var pattern = new RegExp('xyz');

// pattern.exec(text);
// // -> null

// var text = 'I may not have been sure about what really did interest me, but I was absolutely sure about what didn\'t.';

// var pattern = /may/;

// text.match(pattern);
// -> [ 'what', i/;bndex: 31, input: ... ]
// var pattern = /\b\w+\b/;

//while loop
// var m;
// while (m = pattern.exec(text)) {
//     console.log(m);
//     console.log()
// }
//ex1

// var text = 'I looked up at the mass of signs and stars in the night sky and laid myself open for the first time to the benign indifference of the world.'

// var pattern = / [a-zA-Z][a-zA-Z][a-zA-Z] /;

// console.log(text.match(pattern));
// same as above pattern.exec(text)

//ex2

// var text = 'I looked up at the mass of signs and stars in the night sky and laid myself open for the first time to the benign indifference of the world.'

// var pattern = /\b\w{3}\b/g;
// console.log(text.match(pattern));


//ex 3
// var text = 'txtng: the Gr8 Db8'
// var pattern =  /[A-Z]/;
// console.log(text.match(pattern))

//ex 4
// var text = 'There are 300,000,000 Americans, give or take.'
// var pattern = /[0-9,]+/;
// console.log(text.match(pattern))

//ex 5
// var text = 'txting: the Great Debate'
// var pattern =  /[A-Z]/;
// console.log(text.match(pattern))

//ex 6
// var text = 'This is an example of a hexadecimal number: af00cce1. So is this: AF11. A dad is hex but a mom isn\'t.'
// var pattern = /\b[a-fA-F0-9]+\b/g;
// console.log(text.match(pattern))


//ex 7
// var text = 'This is an example.'

// var pattern = /\b\w+\b/;
// console.log(text.match(pattern))

//ex 8

// var text = 'This is an example.'
// var pattern = /\w+\W+$/;

// console.log(text.match(pattern))

//ex 9
// var dates = ['01/01/2000', '12/31/1999', '02/29/2017'];

// var pattern = new RegExp('\\d{1,2}/\\d{1,2}/(\\d{2,4})')

// for (var i = 0; i < dates.length; i++){
// var date = dates[i];

// var dateMatch = date.match(pattern);
// console.log(dateMatch);
// }


//ex 10
// var html = '<html><head>'+
// '<title>Simple</title>'+
// '</head><body>'+
// 'Nothing to see here'+
// '</body></html>';

// // var pattern = /(<[\w/]+>)/g;

// console.log(html.match(pattern))

//peters pattern
// var pattern = /<,+?>/g;

// html.split(pattern);