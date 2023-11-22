### 투 포인터로 큐 풀기

- 큐는 `FIFO` 방식으로 작동하는 자료구조
- 두 큐 사이에서 한 큐의 데이터를 다른 큐로 옮길 때, 투 포인터를 사용해 계산할 수 있다.
  - 한 큐의 범위를 나타내는 두 개의 포인터 `start`, `end`를 생성한다.
  - **가장 먼저 들어온 요소(start)가 먼저 나가는** 큐의 작동원리에 의해:
    - 한 큐의 요소를 다른 큐로 옮기는 것은 `start++`
    - 다른 큐의 요소를 이 큐로 가져오는 것은 `end++` 로 생각할 수 있다.
- 매 `++` 연산마다 `cnt` 변수의 값을 1씩 올릴 때, **`*cnt === (합친 큐의 length * 2)`** 라면 가능한 모든 이동을 거쳤다는 뜻이므로 반복을 끝낸다.

```js
let count = 0;
while (count <= q0.length * 2) {
  if (q1sum === target) {
    return count;
  } else if (q1sum < target) {
    q1sum += q0[end++];
  } else {
    q1sum -= q0[start++];
  }
  count++;
}
```
