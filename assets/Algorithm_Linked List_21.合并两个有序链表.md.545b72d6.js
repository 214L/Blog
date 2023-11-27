import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.06b9d6ab.js";const d=JSON.parse('{"title":"LeetCode 21.合并两个有序链表","description":"","frontmatter":{},"headers":[],"relativePath":"Algorithm/Linked List/21.合并两个有序链表.md","filePath":"Algorithm/Linked List/21.合并两个有序链表.md","lastUpdated":1683426810000}'),p={name:"Algorithm/Linked List/21.合并两个有序链表.md"},o=l(`<h1 id="leetcode-21-合并两个有序链表" tabindex="-1"><a href="https://leetcode.cn/problems/merge-two-sorted-lists/" target="_blank" rel="noreferrer">LeetCode 21.合并两个有序链表</a> <a class="header-anchor" href="#leetcode-21-合并两个有序链表" aria-label="Permalink to &quot;[LeetCode 21.合并两个有序链表](https://leetcode.cn/problems/merge-two-sorted-lists/)&quot;">​</a></h1><p>将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。</p><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg" alt="示例1" title="示例1"></p><blockquote><p>输入：l1 = [1,2,4], l2 = [1,3,4] <br> 输出：[1,1,2,3,4,4]</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p>输入：l1 = [], l2 = []<br> 输出：[]</p></blockquote><p><strong>示例 3:</strong></p><blockquote><p>输入：l1 = [], l2 = [0]<br> 输出：[0]</p></blockquote><p><strong>提示：</strong></p><ul><li>两个链表的节点数目范围是<code>[0, 50]</code></li><li><code>-100 &lt;= Node.val &lt;= 100</code></li><li><code>l1</code>和<code>l2</code>均按<strong>非递减顺序</strong>排列</li></ul><p>函数签名:</p><div class="language-javaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Definition for singly-linked list.</span></span>
<span class="line"><span style="color:#6A737D;"> * function ListNode(val, next) {</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.val = (val===undefined ? 0 : val)</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.next = (next===undefined ? null : next)</span></span>
<span class="line"><span style="color:#6A737D;"> * }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{ListNode}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">list1</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{ListNode}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">list2</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{ListNode}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mergeTwoLists</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">list1</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">list2</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Definition for singly-linked list.</span></span>
<span class="line"><span style="color:#6A737D;"> * function ListNode(val, next) {</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.val = (val===undefined ? 0 : val)</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.next = (next===undefined ? null : next)</span></span>
<span class="line"><span style="color:#6A737D;"> * }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{ListNode}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">list1</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{ListNode}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">list2</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{ListNode}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mergeTwoLists</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">list1</span><span style="color:#24292E;">, </span><span style="color:#E36209;">list2</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">   </span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h2 id="思路" tabindex="-1">思路 <a class="header-anchor" href="#思路" aria-label="Permalink to &quot;思路&quot;">​</a></h2><p>本题要求将两个已经有序的链表合成一个链表。我们可以用一个新的链表作为载体，将两个链表的元素串联在这个结果链表上。</p><p>接下来我们可以用两个指针，分别指向两个链表的头节点，开始进行如下操作：</p><ol><li>开始对比两个指针所指的元素，将较小的元素连在结果链表的当前节点的后面。</li><li>更新被移动的链表的指针位置和结果链表的指针位置后，继续遍历。</li><li>当两个链表其中一个为空时，也就是其中一个链表的所有元素都已经合并完成。说明另外一个链表剩余元素肯定都小于当前结果链表最后一个元素，这时我们只需要将该链表连接到结果链表的末尾即可。</li></ol><p>代码如下：</p><div class="language-javaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Definition for singly-linked list.</span></span>
<span class="line"><span style="color:#6A737D;"> * function ListNode(val, next) {</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.val = (val===undefined ? 0 : val)</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.next = (next===undefined ? null : next)</span></span>
<span class="line"><span style="color:#6A737D;"> * }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{ListNode}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">list1</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{ListNode}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">list2</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{ListNode}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mergeTwoLists</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">list1</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">list2</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> dummy </span><span style="color:#F97583;">=new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ListNode</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> dummy;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> p1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> list1;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> p2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> list2;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(p1</span><span style="color:#F97583;">!=</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> p2 </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(p1.val</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">p2.val){</span></span>
<span class="line"><span style="color:#E1E4E8;">            p.next </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p2;</span></span>
<span class="line"><span style="color:#E1E4E8;">            p2</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">p2.next;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            p.next </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p1;</span></span>
<span class="line"><span style="color:#E1E4E8;">            p1</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">p1.next;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        p</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">p.next;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(p1 </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        p.next</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">p1;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(p2 </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        p.next</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">p2;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> dummy.next;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Definition for singly-linked list.</span></span>
<span class="line"><span style="color:#6A737D;"> * function ListNode(val, next) {</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.val = (val===undefined ? 0 : val)</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.next = (next===undefined ? null : next)</span></span>
<span class="line"><span style="color:#6A737D;"> * }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{ListNode}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">list1</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{ListNode}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">list2</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{ListNode}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mergeTwoLists</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">list1</span><span style="color:#24292E;">, </span><span style="color:#E36209;">list2</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> dummy </span><span style="color:#D73A49;">=new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ListNode</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> dummy;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> p1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> list1;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> p2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> list2;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(p1</span><span style="color:#D73A49;">!=</span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> p2 </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(p1.val</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">p2.val){</span></span>
<span class="line"><span style="color:#24292E;">            p.next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p2;</span></span>
<span class="line"><span style="color:#24292E;">            p2</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">p2.next;</span></span>
<span class="line"><span style="color:#24292E;">        }</span><span style="color:#D73A49;">else</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">            p.next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p1;</span></span>
<span class="line"><span style="color:#24292E;">            p1</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">p1.next;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        p</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">p.next;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(p1 </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        p.next</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">p1;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(p2 </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        p.next</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">p2;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> dummy.next;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div>`,19),e=[o];function t(c,r,y,E,i,A){return n(),a("div",null,e)}const F=s(p,[["render",t]]);export{d as __pageData,F as default};
