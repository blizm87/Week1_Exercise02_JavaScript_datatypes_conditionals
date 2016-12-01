console.log("script linked!")

//////////////////////////////
//          STEP 1          //
//////////////////////////////

// First build two objects 'mom' and 'dad' as object literals (e.g. 'var mom = {}'). If you have a non-traditional family structure, just use someone everybody loves, like Joe Biden or Oprah.
var mom = {};
var dad = {};




// uncomment these console.logs after you write your code
console.log('mom object after step 1:', mom);
console.log('dad object after step 1:', dad);

//////////////////////////////
//          STEP 2          //
//////////////////////////////

// Create one Physicality object and one Personality object for each parent (e.g. 'mom.physicality = {}' and 'mom.personality = {}').

mom.physicality = {};
mom.personality = {};
dad.physicality = {};
dad.personality = {};


// uncomment these console.logs after you write your code
console.log('mom object after step 2:', mom);
console.log('dad object after step 2:', dad);

//////////////////////////////
//          STEP 3          //
//////////////////////////////

// Using different data types (Number, String, Array, Object, Null, & Boolean), add **5 physical attributes** to each of your parents.

mom.physicality = {
  age: 60,
  legs:"long",
  tall: true,
  hair: ['long','black','natural'],
  legHair: null
};

dad.physicality = {
  age: 57,
  legs:"long",
  tall: true,
  hair: ['short','black','brush cut'],
  nails: null
};


// uncomment these console.logs after you write your code
console.log('mom object after step 3:', mom);
console.log('dad object after step 3:', dad);

//////////////////////////////
//          STEP 4          //
//////////////////////////////

// Do the same with the personality object!

mom.personality = {
  honest:true,
  heart:"loving",
  intelligence: 350,
  social: ['talkative','drinker','networker'],
  religion: null
}

dad.personality = {
  honest:true,
  heart:"stern",
  intelligence: 550,
  social: null,
  religion: ['agnostic','christian','spiritual']
}


// uncomment these console.logs after you write your code
console.log('mom object after step 4:', mom);
console.log('dad object after step 4:', dad);

//////////////////////////////
//          STEP 5          //
//////////////////////////////

// Now build yourself by referencing physical and personality attributes from your folks!

var me = {
  physicality: {
    tall: mom.physicality.tall,
    hair: dad.physicality.hair,
    legs: mom.physicality.legs,
    age: dad.physicality.age,
    nails: dad.physicality.nails
  },

  personality: {
    intelligence: dad.personality.intelligence,
    honest: mom.personality.honest,
    heart: mom.personality.heart,
    social: dad.personality.social,
    religion: dad.personality.religion
  }
};




// uncomment this console.log after you write your code
console.log('me object after step 5:', me);

//////////////////////////////
//          STEP 6          //
//////////////////////////////

// Make 2 lists: first, what you're good at, and second, what you're bad at.


me.goodAt = ['sports','coding', 'math','sex'];
me.badAt = ['golf','cheating','cooking','spanish'];



// uncomment this console.log after you write your code
console.log('me object after step 6:', me)

//////////////////////////////
//          STEP 7          //
//////////////////////////////

// Age yourself.

me.physicality.age = me.physicality.age + 50;




// uncomment this console.log after you write your code
console.log('me object after step 7:', me)

//////////////////////////////
//          STEP 8          //
//////////////////////////////

// Delete half of the things you were good at.


me.goodAt = me.goodAt.splice(0,2);



// uncomment this console.log after you write your code
console.log('me object after step 8:', me);

//////////////////////////////
//          STEP 9          //
//////////////////////////////

// Age yourself (again).

me.physicality.age = me.physicality.age + 150;




// uncomment this console.log after you write your code
console.log('me object after step 9:', me);

//////////////////////////////
//          STEP 10         //
//////////////////////////////

// Add 'sitting' to the things you're good at and remove everything else from the list.


me.goodAt.push('sitting');
me.goodAt = [me.goodAt.pop()];



// uncomment this console.log after you write your code
console.log('me object after step 10:', me)

//////////////////////////////
//          STEP 11         //
//////////////////////////////

// Add 5 more things to the list of things you're bad at.

me.badAt.push('flying');
me.badAt.push('stealing');
me.badAt.push('shooting');
me.badAt.push('bowling');
me.badAt.push('swimming');



// uncomment this console.log after you write your code
console.log('me object after step 11:', me);

//////////////////////////////
//           BONUS          //
//////////////////////////////

// Create a method that prints out one of your classic sayings!





// call your function :)
