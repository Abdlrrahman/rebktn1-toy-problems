/*
Queue Stack

Write a stack. Once you’re done, implement a queue using two stacks to create FIFO behavior. 
The queue should not have any storage separate from its stacks.
*/

var Stack = function() {
  var storage = [];

  this.push = function(value) {
    storage.push(value);
    return value;
  };
    
  this.pop = function() {
    return storage.pop();
  };

  this.size = function() {
    return storage.length;
  };
};

var Queue = function() {
  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(value) {
    inbox.push(value);
    return value;
  };

  this.dequeue = function() {
    for (var i = 1; i <= inbox.size(); i++) {
      outbox.push(inbox.pop());
    }
    return outbox.pop();
  };

  this.size = function() {
    return inbox.size();
  };
};
