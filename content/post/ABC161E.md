---
published: true
date: 2020-04-05
title: Solution for AtCoder Beginner Contest 161E - Yutori
categories: [Solutions]
tags:
- Greedy
layout: post
math: true
---
<!--more-->

## Solution

We can construct an array $L$ such that the $x$-th workday is no earlier than day $L_x$, by choosing workdays as early as possible from the beginning to the end. Similarly, we can construct the array $R$ such that the $x$-th workday is no later than day $R_x$ from the end to the beginning. He is bounded to work on $i$-th day iff there exists a $x$ such that $L_x=R_x=i$. This problem can be solved in $O(N)$ time.


## Code

```cpp
#include <bits/stdc++.h>

#define forn(i, n) for (int i = 0; i < int(n); ++i)
#define for1(i, n) for (int i = 1; i <= int(n); ++i)
#define fore(i, l, r) for (int i = int(l); i <= int(r); ++i)
#define ford(i, n) for (int i = int(n)-1; i >= 0; --i)
#define pb push_back
#define eb emplace_back
#define ms(a, x) memset(a, x, sizeof(a))
#define F first
#define S second
#define endl '\n'
#define all(x) (x).begin(),(x).end()

using namespace std;
typedef long long ll;
typedef pair<int, int> pii;
const int INF = 0x3f3f3f3f;
mt19937 gen(chrono::high_resolution_clock::now().time_since_epoch().count());

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
	int n,k,c;
    cin>>n>>k>>c;
    string s;
    cin>>s;
    vector<int> a,b;
    forn(i,n){
        if(s[i]=='o'){
            a.pb(i);
            i+=c;
        }
    }
    ford(i,n){
        if(s[i]=='o'){
            b.pb(i);
            i-=c;
        }
    }
    forn(i,k){
        if(a[i]==b[k-i-1]) cout<<a[i]+1<<endl;
    }

    return 0;
}
```
