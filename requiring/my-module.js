'use strict';

const sports = function(){
  console.log("...and I like sports")
}

const introduction = function() {
  console.log("Hello, my name is Matthew...");
  sports();
}


module.exports = {
  introduction: introduction
}
