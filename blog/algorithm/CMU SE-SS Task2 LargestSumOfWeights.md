---
title: CMU SE-SS Task2 LargestSumOfWeights
date: 2022-12-18
categories:
 - algorithm
tags:
 - algorithm
sidebar: 'auto'
---

You are given an undirected graph consisting of N vertices, numbered from 1 to N, and M edges. The graph is described by two arrays, A and B, both of length M. A pair (A[K], B[K]), for K from 0 to M-1, describes an edge between vertex A[K] and vertex B[K].

Your task is to assign all values from the range [1..N] to the vertices of the graph, giving one number to each of the vertices. Do it in such a way that the sum over all edges of the values at the edges' endpoints is maximal.

For example, given N = 5, A = [2, 2, 1, 2], B = [1, 3, 4, 4], the graph has four edges: (2, 1), (2, 3), (1, 4), (2, 4). In order to obtain the maximum sum of weights, you can assign the following values to the vertices: 3, 5, 2, 4, 1 (to vertices 1, 2, 3, 4, 5 respectively).

![image](https://codility-frontend-prod.s3.amazonaws.com/media/task_static/largest_sum_of_weights/static/images/auto/467b5c3b325d21a5695330d21e5f386d.png)

* This way we obtain the sum of values at all edges' endpoints equal to 7 + 8 + 7 + 9 = 31:

  * edge (2, 3): 7 = 5 (vertex 2) + 2 (vertex 3)
  * edge (2, 1): 8 = 5 (vertex 2) + 3 (vertex 1)
  * edge (1, 4): 7 = 3 (vertex 1) + 4 (vertex 4)
  * edge (2, 4): 9 = 5 (vertex 2) + 4 (vertex 4)

* Notice that the value assigned to vertex 5 did not have any effect on the final result as it is not an endpoint of any edge.

* Write a function:

  * function solution(N, A, B);

* that, given a positive integer N and two arrays A, B of M positive integers, returns the maximum possible sum of values of the edges' endpoints.

* Examples:

  * \1. Given N = 5, A = [2, 2, 1, 2], B = [1, 3, 4, 4], the function should return 31, as explained above.

    ![图片](https://codility-frontend-prod.s3.amazonaws.com/media/task_static/largest_sum_of_weights/static/images/auto/467b5c3b325d21a5695330d21e5f386d.png)

  * \2. Given N = 3, A = [1], B = [3] function should return 5. The graph contains only one edge (1, 3). We can assign the following values to the vertices: 2, 1, 3.

    ![图片](https://codility-frontend-prod.s3.amazonaws.com/media/task_static/largest_sum_of_weights/static/images/auto/20e6243d20db0aed32859cf01a9766ec.png)

    The sum of values at the endpoints of the only edge (1, 3) is 2 + 3 = 5. Notice that it is not the only maximal assignment; the input graph admits another possible solution whose result is 5.

  * \3. Given N = 4, A = [1, 3], B = [2, 4] function should return 10. The graph contains two edges: (1, 2) and (3, 4). We can assign following values to the vertices: 4, 3, 2, 1.

    ![图片](https://codility-frontend-prod.s3.amazonaws.com/media/task_static/largest_sum_of_weights/static/images/auto/18d0307c27631e35e314eb59742b8dd7.png)

    The sum of values at the edges' endpoints is (4 + 3) + (2 + 1) = 10.

* Write an efficient  algorithm for the following assumptions:
  * N is an integer within the range [2..100,000]
  * M is an integer within the range [1..100,000]
  * all elements of arrays A and B are integers within the range [1..N];
  * there are no self-loops (edges with A[K] = B[K]) in the graph;
  * there are no multiple edges between the same vertices;
  * N * M is smaller than or equal to 1,000,000,000.

```js
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A, B) {
    // dp[i]: the degree of the vertex whose number is i
    const dp = new Array(N + 1).fill(0);
    let ans_sum = 0;
    const len = A.length;
    for (let i = 0; i < len; i++) {
        ++dp[A[i]];
        ++dp[B[i]];
    }
    dp.sort((x, y) => x - y);
    const dpLen = dp.length;
    for (let j = dpLen - 1; j > 0; j--) {
        ans_sum += j * dp[j];
    }
    return ans_sum;
}

```

