/*
*
* Linked List Intersection
*
* Write a function linkedListIntersection that returns the node 
* at which the intersection of two linked lists begins, 
* or null if there is no such intersection.
* 
* Example:
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return D 
* as the node of intersection.
* 
*    A → B → C
*             ↘
*               D → E → F
*             ↗
*        X → Y
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return NULL 
* as there is no point of intersection.
* 
*    A → B → C → D
*    X → Y → Z
* 
*/

// Helper function (do not edit)
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}



function linkedListIntersection(list1, list2) {
  // TODO: Implement this function!
  var intersection = {};
  while (list1) {
      intersection[list1.value] = true;
      list1 = list1.next;
  }
  while (list2) {
    if(intersection[list2.value]) {  return list2;}
    list2 = list2.next;
  }
  return null;
}

var list1 = Node('A');
var node1 = list1.next = Node('B');
var node2 = node1.next = Node('C');
var node3 = node2.next = Node('D');
var node4 = node3.next = Node('E');
var node5 = node4.next = Node('F');

var list2 = Node('X')
var node1 = list2.next = Node('Y');
node1.next = node3;
linkedListIntersection(list1, list2);




var list1 = Node('A');
var node1 = list1.next = Node('B');
var node2 = node1.next = Node('C');
var node3 = node2.next = Node('D');

var list2 = Node('X')
var node1 = list2.next = Node('Y');
var node2 = node1.next = Node('Z');

linkedListIntersection(list1, list2);