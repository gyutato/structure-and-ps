# DFS

- 자식 노드를 확장할 수 있을 때까지 깊이 우선으로 탐색을 진행하는 방법
- 일반적으로 BFS에 비해 더 널리 쓰임
- 코딩 테스트 시에도 대부분의 그래프 탐색은 DFS로 구현하게 될 것
- **주로 스택으로 구현하거나 재귀로 구현**

### 가장 기초적인 형태의 재귀 DFS: leetcode 543

```js
const dfs = (root) => {
  if (!root) return 0;

  const ldepth = dfs(root.left);
  const rdepth = dfs(root.right);

  diameter = Math.max(diameter, ldepth + rdepth);
  return Math.max(ldepth, rdepth) + 1;
};
```

1. 반복되는 로직, 즉 `dfs()` 호출의 목적을 생각한다.
   - impl: 현재 노드의 Lmax, Rmax 를 구해서 지름을 계산하고 업데이트한다.
2. 답이 바로 리턴되는, base case 를 생각한다.
   - impl: root 가 존재하지 않으면 바로 종료된다.
3. `dfs()` 호출의 리턴값을 생각한다.
   - 리턴값이란, **다음 스택에서 이전 단계에 대해 알아야 하는 값** 이라고 생각하자.
   - impl: 현재 노드의 depth = `Math.max(L, R)` 을 리턴해야, 다음 스택에서 지름을 계산할 수 있다.
4. depth 계산, diameter 계산 등 구현 로직을 작성한다.
