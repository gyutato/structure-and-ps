# Binary Search

- 이분 탐색: **정렬된** 배열을 반복적으로 절반씩 나누어 탐색하는 방법
- 탐색 범위가 계속 직전의 1/2로 감소하므로, 시간 복잡도는 O(log n)

### Caveats

- 범위를 나타내는 `lo`, `hi` 는 '모든' 요소를 포함해야 한다.

  - 예를 들어, 단순 인덱스를 찾는 문제라면 모든 요소란 `0` ~ `array.length - 1` 이지만, 요소를 '삽입할 위치' 를 찾는 문제라면 범위가 `0` ~ `array.length` 로 늘어난다.

- 이미 확인한 값(`mid`)은 다음 루프에서 제외한다.

```js
if (target > arr[mid]) {
  // 이 경우, target === arr[mid] 일 가능성이 전혀 없다.
  // 따라서 mid 를 범위에서 제외한다.
  lo = mid + 1;
} else {
  hi = mid;
}
```

- 루프의 종료 조건을 명확히 한다.

  - 루프의 종료 조건과 `lo`, `hi` 범위가 맞물려야 한다.
  - 다시 말해, 루프가 돌 때마다 종료 조건을 결정하는 `lo`, `hi` 값에 계속 변화가 있어야 한다.
  - 루프가 도는데 `lo`, `hi` 값이 변하지 않는 케이스가 있을 경우 무한루프에 빠지게 된다.

- 각 루프마다, lo, hi, mid 값이 정확히 업데이트된 채로 루프가 끝나는지 확인한다.

```js
while (lo < hi) {
  // lo === hi 라서 while 문이 종료된 경우, 루프가 돌지 않으므로 mid 값이 업데이트되지 않는다. 당연히 오답.
  mid = lo + Math.floor((hi - lo) / 2);
  if (target > nums[mid]) {
    lo = mid + 1;
  } else {
    hi = mid;
  }
}

return nums[mid] === target ? mid : -1;
```
