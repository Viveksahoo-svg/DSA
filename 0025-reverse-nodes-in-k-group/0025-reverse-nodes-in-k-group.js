/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
        if (!head || k === 1) return head;

    let count = 0;
    let node = head;
    while (node) {
        count++;
        node = node.next;
    }

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    while (count >= k) {
        let curr = prev.next;
        let next = curr.next;

        for (let i = 1; i < k; i++) {
            curr.next = next.next;
            next.next = prev.next;
            prev.next = next;
            next = curr.next;
        }

        prev = curr;
        count -= k;
    }

    return dummy.next;
};