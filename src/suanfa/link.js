function Linked() {
  this.head = null;
  this.length = 0;
}
Linked.prototype.Node = function (data) {
  return {
    data,
    next: null,
  };
};

Linked.prototype.Add = function (data) {
  const node = this.Node(data);
  let currentNode = this.head;
  if (this.head) {
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  } else {
    this.head = node;
  }
};

Linked.prototype.Remove = function (data) {
  let currentNode = this.head;
  let prevNode = null;
  if (this.head.data === data) {
    this.head = this.head.next;
    return;
  }
  while (currentNode.next) {
    prevNode = currentNode;
    currentNode = currentNode.next;
    if (currentNode.data === data) {
      prevNode.next = currentNode.next;
      break;
    }
  }
};

const linked = new Linked();
linked.Add(10);
linked.Add(9);
linked.Add(8);
linked.Add(7);
linked.Remove(11);
console.log(JSON.stringify(linked.head, 2));
