[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/kmWXipzR)
# Lesson 6: 알고리즘

- [ ] 정렬(sort), 팀 과제

정렬을 사용하여 O(N)에 1부터 N까지의 값을 포함하는 배열 정렬
```
입력: arr[] = { 2, 1, 5, 4, 3} 
출력: 1 2 3 4 5 
설명: 
arr[0] = 2가 올바른 위치에 있지 않으므로 arr[0]을 arr[arr[0] – 1]로 바꿉니다. 
이제 배열은 다음과 같습니다: arr[] = {1, 2, 5, 4, 3}
이제 arr[2] = 5가 올바른 위치에 있지 않습니다. 그런 다음 arr[2]를 arr[arr[2] – 1]로 바꿉니다.
이제 배열은 다음과 같습니다. arr[] = {1, 2, 3, 4, 5} 
이제 배열이 정렬되었습니다.
```
## 삽입 정렬
insertion_sort()
- 각각의 모든 요소를 이미 정렬된 앞의 배열 부분과 비교하여 적절한 위치로 옮겨 삽입한다. 
- i 번째 값을 비교하는 상황에서 i - 1 까지는 정렬 된 배열이다.

## 선택 정렬
selection_sort()
- 주어진 리스트 범위 내에서 (0부터 끝까지) 최솟값을 찾는다.
- 처음 위치에 최솟값을 넣는다. (교환한다.)
- 다음 인덱스 (1부터 끝까지) 범위 내에서 최솟값을 찾는다.
- 처음 위치에 최솟값을 넣는다. (이하 동일)
- ...
```js
let arr = [3,1,5,6,2,4];
arr.forEach((v,i) => {
  const min = Math.min(...[...arr].slice(i, arr.length));
  const temp = arr[i];
  arr[arr.indexOf(min)] = temp;
  arr[i] = min;
})
console.log(arr) // -> [1,2,3,4,5,6]
```

## 버블 정렬
bubble_sort()
- 인접한 두 값을 비교하여 정렬하는 방법.
- 비교적 구현이 쉬움.
