class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 == null) return l2;
  if (l2 == null) return l1;

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l2.next, l1);
    return l2;
  }
}

function main() {
  let l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
  let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

  console.log(mergeTwoLists(l1, l2));

  return mergeTwoLists(l1, l2);
}

main();
