---
title: CMU SE-SS Task3 MaxAlignedSubset
date: 2022-12-18
categories:
 - 算法
tags:
 - 算法
sidebar: 'auto'
---

There are N points located on a line, numbered from 0 to N−1, whose coordinates are given in an array A. For each I (0 ≤ I < N) the coordinate of point number I on the line is A[I]. The coordinates of points do not have to be distinct.

For a given integer M, a subset of these points is said to be M-aligned if the distance between any two points within the subset is divisible by M. Your task is to find the size of the largest M-aligned subset of the given set of N points.

For example, consider integer M = 3 and array A such that:

* A[0] = -3   
* A[1] = -2    
* A[2] = 1    
* A[3] = 0    
* A[4] = 8    
* A[5] = 7    
* A[6] = 1

A subset containing the points numbered 1, 2, 5 and 6, having coordinates −2, 1, 7 and 1, respectively, is an example of a 3-aligned subset, since:

*  the distance between points numbered 1 and 2 is abs(A[1] − A[2]) = 3,
* the distances from point number 5 to points numbered 1 and 2 are 9 and 6, respectively,
* the distances from point number 6 to points numbered 1, 2 and 5 are 3, 0 and 6, respectively,

and these distances are all divisible by M = 3. The size of this subset is 4 and there is no larger 3-aligned subset.

Write a function:

​	function solution(A, M);

that, given an array A consisting of N integers and an integer M, returns the size of the largest M-aligned subset.

For example, given M = 3 and A = [−3, −2, 1, 0, 8, 7, 1], the function should return 4, as explained above.

Given M = 8 and A = [7, 1, 11, 8, 4, 10], the function should return 1, since one can create a subset consisting of exactly one (arbitrary) point. Note that this is the largest 8-aligned subset since any given pair of points has a distance not divisible by 8.

Write an efficient  algorithm for the following assumptions:

* N is an integer within the range [0..100,000]
* M is an integer within the range [1..100,000]
* each element of array A is an integer within the range [−1,000,000,000..1,000,000,000]

```js
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, M) {
    // Implement your solution here
    A.sort((x, y) => x - y);
    const N = A.length;
    // dp[i]: the size of M-aligned subset which max value is A[i]
    const dp = new Array(N).fill(1);
    let max_size = 1, max_value = dp[0];
    for (let i = 1; i < N; i++) {
        for (let j = 0; j < i; j++) {
            if ((A[i] - A[j]) % M === 0) {
                dp[i] = Math.max(dp[j] + 1, dp[i]);
            }
        }
        // renew
        if (dp[i] > max_size) {
            max_size = dp[i];
            max_value = A[i];
        }
    }
    return max_size;
}

```

