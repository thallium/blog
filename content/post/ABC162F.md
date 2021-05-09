---
published: true
date: 2020-04-24
title: Solution for Atcoder beginner contest 162F -  Select Half Select Half
category: Tutorial
tags:
- DP
layout: post
math: true
---
<!--more-->

## Solution

There are a lot approaches based on different dp status and transition. Here I will describe mine which I think is quite standard. Of course there is shorter solution but is more difficult to understand.

First lets define the dp status, let $dp_{i,j}$ be the answer for the fist $i$ elements whose index of the last chosen number is $i-j$.

The key observation is that if $i$ is odd, $j\leq 2$, if $i$ is even $j\leq 1$. This can be easily seen if you only choose the numbers with index $1,3,5,\dots$

Now we can think about the transition. If $i$ is odd, this means that same amount of numbers as $i-1$ is chosen. So the answer for $dp_{i,j}$ would be same as $dp_{i-1,j-1}$, except for $dp_{i,0}$ which should be based on $dp_{i-2,j}$ since $a_i$ is not considered when calculating $dp_{i-1,j}$. Thus our transition is:

$$ \begin{align*}dp_{i,0}&=\max(dp_{i-2,0},dp_{i-2,1},dp_{i-2,2})+a_i \\\ dp_{i,1}&=dp_{i-1,0}\\\ dp_{i,2}&=dp_{i-1,1}\end{align*} $$

If $i$ is even, this means that we need to choose one more number than case $i-1$ and the idea is similar to odd $i$. The transition is:

\\[ \begin{align*}dp_{i,0}&=\max(dp_{i-1,i},dp_{i-1,2})+a_i \\\ dp_{i,1}&=dp_{i-1,2}+a_i\end{align*} \\]

## Code

```cpp
#include <bits/stdc++.h>

#define forn(i, n) for (int i = 0; i < int(n); ++i)
#define for1(i, n) for (int i = 1; i <= int(n); ++i)
#define ms(a, x) memset(a, x, sizeof(a))
#define F first
#define S second
#define all(x) (x).begin(),(x).end()

using namespace std;
typedef long long ll;
typedef pair<int, int> pii;
const int INF = 0x3f3f3f3f;
mt19937 gen(random_device{}());
template<typename... Args> void write(Args... args) { ((cout << args << " "), ...); cout<<endl;}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin>>n;
    vector<int> a(n+1);
    for(int i=1;i<=n;++i) cin>>a[i];
    vector<vector<ll>> dp(n+1,vector<ll>(3,-1e18));
    dp[1]={0,0,0};
    for(int i=2;i<=n;++i){
        if(i&1){
            dp[i][0]=max({dp[i-2][0],dp[i-2][1],dp[i-2][2]})+a[i];
            dp[i][1]=dp[i-1][0];
            dp[i][2]=dp[i-1][1];
        }else{
            dp[i][0]=max({dp[i-1][1]+a[i],dp[i-1][2]+a[i]});
            dp[i][1]=dp[i-1][2]+a[i-1];
        }
    }
    cout<<*max_element(all(dp[n]));
    return 0;
}
```
