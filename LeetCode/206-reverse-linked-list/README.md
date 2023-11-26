# Linked List (feat. 재귀)

- `Node`: 주로 value 와 next 필드를 가짐
- `LinkedList`: head 필드를 가짐
  - head는 리스트의 첫 번째 `Node`를 가리킴
  - 이후의 `Node` 들은 `.next` 필드를 통해 선형 탐색으로만 접근할 수 있음.
  - tail 조건: `!node.next`

### 반복문으로 탐색하기

- Reverse Linked List: two pointer 개념을 활용한다.
  - Node 의 인터페이스 만으로는 다음 노드만 접근할 수 있으므로 (`next`), 이전 노드를 저장할 `prev` 포인터가 필요하다.

```js
// two pointer
let curr = head,
  prev = null;

while (curr) {
  // next 연결을 끊기 전 미리 값을 저장한다.
  let next = curr.next;
  // 현재 노드가 바라보는 next 값을 이전 노드로 전환한다.
  curr.next = prev;
  // 다음 노드로 넘어가기 위해 포인터를 업데이트한다.
  prev = curr;
  curr = next;
}

// 최종적으로 curr 포인터는 tail.next인 null을 가리키게 되고,
// prev가 reverse된 head 노드를 가리키게 된다.
return prev;
```

### 반복문으로 탐색하기

- two pointer 개념을 활용한다.

```js
// two pointer
let curr = head,
  prev = null;

while (curr) {
  // next 연결을 끊기 전 미리 값을 저장한다.
  let next = curr.next;
  // 현재 노드가 바라보는 next 값을 이전 노드로 전환한다.
  curr.next = prev;
  // 다음 노드로 넘어가기 위해 포인터를 업데이트한다.
  prev = curr;
  curr = next;
}

// 최종적으로 curr 포인터는 tail.next인 null을 가리키게 되고,
// prev가 reverse된 head 노드를 가리키게 된다.
return prev;
```

### 재귀로 탐색하기

[재귀 풀이법 참고](https://velog.io/@eddy_song/you-can-solve-recursion)

- base case를 생각한다.
  - 바로 답이 리턴되는, 가장 간단한(쉬운) 인풋값
- 재귀의 인풋값을 분해한다.
  - 재귀(분해)가 거듭할수록 인풋값이 base case에 가까워저야 한다.
  - ex. 정수: `n - 1`, 연결 리스트: `node.next`
- 재귀의 리턴값을 사용해, **현재 단계**의 답을 낸다.
  - 재귀 과정 전체의 조합 (X)
  - 특정 단계의 답(O)
    - ex. 베이스 조건 바로 위, 2단계 위, 3단계 위...
```js
var reverseList = function (head) {
  // base case - 연결 리스트 자체가 비었거나, 현재 Node(인풋값 head)가 마지막 Node인 경우.
  if (head == null || head.next == null) {
    return head;
  }

  // 인풋값 분해 - head.next를 넣어서 재귀 호출해야 base case인 마지막 Node에 가까워질 수 있다.
  // 재귀 리턴값 사용 - base case가 리턴됐을 때 바로 위 단계에서 어떻게 활용할지 생각해 본다.
  let newHead = reverseList(head.next);

  // 현재 단계의 답 조합 - 앞선 재귀 리턴값을 활용해 답을 낸다.
  // 현재 단계를 마지막으로 하는 Reversed Linked List를 만든다.
  // 다음 노드의 next가 현재 노드를 가리키도록 전환하고, 현재 노드를 tail로 만들어 준다.
  head.next.next = head;
  head.next = null;
  return newHead;
};
```
