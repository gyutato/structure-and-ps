### 택배 배달과 수거하기

- 일직선 배열 상에서의 최단 거리 구하기
- 가장 짧은 거리 - 가장 먼 곳까지 딱 한 번 왕복하는 것
- 거리가 길어지는 조건 - 한 번에 배달을 끝내지 못하고 여러 번 왕복하는 경우
- 최단거리 조건 - 가장 먼 곳부터, 최대한 적은 왕복으로 배달을 끝내서 불필요한 이동을 없애기
- **그리디**

### 스택을 사용한 그리디

- 개념 상으로 스택일 뿐, 굳이 배열을 새로 만들지 않아도 된다.
- 이미 주어진 deliveries, pickups 배열의 요소들에 for 문을 사용해 역순으로 접근하면 스택과 같이 작동하게 된다.

### 로직

1. 배달 목적지를 정한다: Math.max(deliveriesMax, pickupsMax)

   - Math.max를 쓰지 않고 중첩 loop를 사용해서, 외부 루프의 인덱스 위치에 배달/수거물이 남아있으면 내부 루프로 들어가고, 아니면 루프가 마저 도는 식으로 구현해도 된다.

2. 배달 가능한 용량만큼 적재한다: Math.min(cap, remainDeliveries)
3. 가는 길에 모두 배달한다.
4. 수거 가능한 용량을 확보한다: Math.min(cap, remainPickups)
5. 오는 길에 최대로 수거한다.
6. 배달 또는 수거가 필요한 물품이 없을 때까지 각 집에 대해 먼 집부터 1~5를 반복한다.

### Caveats

- 배달 지점 < 수거 지점인 경우 수거를 먼저 해야 하는데 매번 cap 만큼 적재하면 비효율적인 것 아닌가?
  - 역순으로 for 문을 돌리는 것이 배달 방문 순서를 나타내는 것이 아니므로 상관없다.
  - 역순 for 문은 먼 집의 배달/수거 분량을 우선으로 고려하기 위함일 뿐이다.
  - 수거 지점까지 가는 동안 배달 지점에 먼저 배달물을 내려놓으면 되므로, 배달 목적지에서 load 는 항상 0이 될 수 있다.
- 시간 초과에 유의하자. input이 매우 작거나, 없거나, 매우 큰 경우를 생각하려고 노력하자.
  - 이 문제의 경우 케이스 16, 17에서 계속 시간 초과가 났는데, `n이 매우 큰 값 && pickups 총합이 아주 작은 경우`를 고려하지 못해서였다.
  - 수거 가능한 용량을 확보할 때, 처음에는 `load = cap` 으로 초기화했다.
  - pickups 총합이 매우 작다면 - `총합 < cap`, 단 한 번의 왕복으로 수거가 끝난다.
  - 이 때 n이 매우 크다면, 수거가 끝났음에도 불구하고 매 루프에서 pickups 배열을 불필요하게 순회하게 된다.
  - 이처럼, 불필요하게 반복문이 돌아가는 경우에 주의해서, 종료 조건을 명확히 생각하자.
    - 애초에 반복문의 목적 - 어떤 작업을 수행하기 위함인지 - 를 문제 해결의 관점에서 명확히 정의하자.
