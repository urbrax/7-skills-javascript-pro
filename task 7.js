// JavaScript file task 7.js
// Created by Harrison Kong
// Copyright (C) Coursera 2020

// Let's simulate an asychronous function:  =====================

function isPrime(x) {

  // let's save time and reject these outright:
  if (typeof x != "number") { return false }  // not a number
  if (!Number.isInteger(x)) { return false }  // not an integer
  if (x <= 1) { return false }                // not greater than 1
  if (x == 2 || x == 3) { return true }       // don't bother testing 2 or 3
  if (Number.isInteger(Math.sqrt(x))) { return false };  // divisible by itself
  if (x % 2 == 0) { return false }            // is an even number > 2

  // test to see if it's divisible by all odd numbers, up to its square root
  for (var i = 3; i < Math.floor(Math.sqrt(x)); i += 2) {
    if (x % i == 0 ) return false;   // can stop as soon as it's divisible
  }

  return true;   // not divisible by any of those numbers, x is prime
}

// Promise wrapper:    ==========================================

function promisePrime(x) {
  var promise = new Promise(
    function(resolve, reject) {
      isPrime(x) ? resolve(x + " is prime.") : reject(Error(x + " is not prime"));
    }
  );
  return promise;
}

// Let's use it:    ==============================================

function primeResolved(result) {
  log("Success: " + result);
}

function primeRejected(error) {
  log("Rejected: " + error.message);
}

// either way works! 2nd form is better for chaining, we'll see later

// promisePrime(47).then(primeResolved, primeRejected);
//
// promisePrime(95)
//   .then(primeResolved)
//   .catch(primeRejected);

//===============================================================

// Let's simulate another asychronous function:  ================

function queryFlight(flightNumber) {

  // let's simulate a database:
  const flightDb = {
    "CX111"  : "HKG -> SEA",
    "AA222"  : "LAX -> SIN",
    "LH333"  : "TXL -> LHR"
  }

  return flightDb[flightNumber];  // undefined is returned if no match
}

// Promise wrapper:    ==========================================

function promiseFlight(flightNumber) {
  var promise = new Promise(
    function(resolve, reject) {

      var infoFromDb = queryFlight(flightNumber);

      if (infoFromDb != undefined) {
        resolve(flightNumber + " : " + infoFromDb);
      }
      else {
        reject(Error("Flight " + flightNumber + " not found in database"));
      }
    }
  );
  return promise;
}

// Let's use it:    ==============================================

// I have already written the resolved and rejected handlers

function flightFound(result) {
  log(result);
  return result;
}

function flightNotFound(error) {
  log(error.message);
}

// Can you write the code to look up "AA222" using the promise wrapper?

// promiseFlight("AA222").then(flightFound, flightNotFound);
// promiseFlight("AAxx222").then(flightFound, flightNotFound);
// Now, let's looking at chaining promises    =====================

function doubleIfEndsIn3(x) {
  var promise = new Promise(
    function(resolved, rejected) {
      var str = x.toString();

      if ( str[str.length - 1] == "3" ) {
        resolved(x * 2);
      }
      else {
        rejected(Error("Rejected by doubleIfEndsIn3( ) : " + x + " does not end in 3."));
      };
    }
  );
  return promise;
}

function tripleIfStartsWith4(x) {
  var promise = new Promise(
    function(resolved, rejected) {
      var str = x.toString();

      if (str[0] == "4") {
        resolved(x * 3);
      }
      else {
        rejected(Error("Rejected by tripleIfStartsWith4( ) : " + x + " does not start with 4."));
      };
    }
  );
  return promise;
}

var result = 23;

log("Calling with value : " + result);

// we will also review arrow function notations here

// doubleIfEndsIn3(result)
// .then((result) => { log("doubled: " + result); })
// .catch((error) =>  log(error.message));
//
// tripleIfStartsWith4(result)
// .then((result) => log("tripled: " + result))
// .catch((error) =>  log(error.message));

// chained - we will do this together:
doubleIfEndsIn3(result)
.then((result) => { log("doubled: " + result); return tripleIfStartsWith4(result) })
.then((result) => log("tripled: " + result))
.catch((error) =>  log(error.message))
.finally(() =>log("I hope you enjoyed this course!"));
