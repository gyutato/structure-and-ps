/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  // base case 1. 주어진 노드 자체가 없을 때
  if (!head) return head;
  if (!head.next) return null;

  let totalLen = 0;

  // 재귀함수 정의
  const traverse = (node) => {
    // 리스트 길이 및 현재 노드 정보 업데이트
    totalLen = totalLen + 1;
    const currLen = totalLen;

    // base case 2. 마지막 노드일 때
    if (!node.next) return;

    traverse(node.next)

    // 만약 현재 노드가 중간 노드 직전 노드라면, 중간 노드를 건너뛰고 next 연결
    if (currLen === Math.floor(totalLen / 2)) {
      node.next = node.next.next;
    }
  };

  traverse(head)

  return head;
};