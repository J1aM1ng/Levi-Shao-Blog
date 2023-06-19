---
title: CMU SE-SS Task1 WordSplit
date: 2022-12-18
categories:
 - algorithm
tags:
 - algorithm
sidebar: 'auto'
---

You are given a string consisting of lowercase letters of the English alphabet. You must split this string into a minimal number of substrings in such a way that no letter occurs more than once in each substring.

For example, here are some correct splits of the string "abacdec": ('a', 'bac', 'dec'), ('a', bacd', 'ec') and ('ab', 'ac', 'dec').

Write a function:
	function solution(S);

that, given a string S of length N, returns the minimum number of substrings into which the string has to be split.

Examples:

1. Given 'world', your function should return 1. There is no need to split the string into substrings as all letters occur just once.

2. Given 'dddd', your function should return 4. The result can be achieved by splitting the string into four substrings ('d', 'd', 'd', 'd').

3. Given 'cycle', your function should return 2. The result can be achieved by splitting the string into two substrings ('cy', 'cle') or ('c', 'ycle').

4. Given 'abba', your function should return 2. The result can be achieved by splitting the string into two substrings ('ab', 'ba').

Write an efficient  algorithm for the following assumptions:
	1.N is an integer within the range [1..1,000,000].
	2.string S is made only of lowercase letters (a-z).

```js
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // Implement your solution here
    let st = new Set();
    const N = S.length;
    const arr = S.split('');
    let cnt = 1;
    for (let i = 0; i < N; i++) {
        if (!st.has(arr[i])) {
            st.add(arr[i]);
        } else {
            ++cnt;
            st = new Set();
            st.add(arr[i]);
        }
    }
    return cnt;
}
```

