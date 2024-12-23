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

// 끝까지 간다 (길이 알아야 함)
// 길이 정보를 어딘가에서 알고 있어야 한다
// 빠져나오다가, Math.floor(n / 2) - 1 번째 node 를 만나면 ('만난다' 의 정의 필요 -> node.next 인지, current node 인지 등)
// node.next = node.next.next

/**
 * 모범답안: fast and slow pointers
 * 재귀를 사용해서 길이 정보를 미리 저장해둘 수도 있지만, 포인터를 두 개 사용해서 절반을 찾아낼 수도 있음.
 * 1씩 이동하는 slow pointer 와, n씩 이동하는 fast pointer 를 활용하여 1/n 지점의 요소를 한 번의 순회로 찾아내는 방식
 *
 * 재귀의 경우, 스택 전체에 걸쳐 공유되어야 하는 정보 (전체 길이) 와 각 스택이 깨질 때 리턴되어야 하는 정보 (node) 가 다르면
 * 재귀함수 밖에 변수를 선언해주어야 함 (아마도? 다소 지저분...)
 */

var deleteMiddle = function (head) {
  // base case
  if (!head || !head.next) return null;

  // 포인터 초기화
  let fast = head.next;
  let slow = head;

  // 포인터 이동 조건: fast 가 2칸 이동 가능한 경우
  while (fast.next && fast.next.next) {
    // 포인터 이동
    slow = slow.next;
    fast = fast.next.next;
  }

  // 반복문 탈출 = slow 가 Math.floor(half) 위치의 노드를 가리키는 중
  slow.next = slow.next.next;

  return head;
};
