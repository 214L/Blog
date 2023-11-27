import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.06b9d6ab.js";const D=JSON.parse('{"title":"Leetcode 114.将二叉树展开为链表","description":"","frontmatter":{},"headers":[],"relativePath":"Algorithm/Binary Tree/114.将二叉树展开为链表.md","filePath":"Algorithm/Binary Tree/114.将二叉树展开为链表.md","lastUpdated":1680096351000}'),p={name:"Algorithm/Binary Tree/114.将二叉树展开为链表.md"},o=l(`<h1 id="leetcode-114-将二叉树展开为链表" tabindex="-1"><a href="https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/" target="_blank" rel="noreferrer">Leetcode 114.将二叉树展开为链表</a> <a class="header-anchor" href="#leetcode-114-将二叉树展开为链表" aria-label="Permalink to &quot;[Leetcode 114.将二叉树展开为链表](https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/)&quot;">​</a></h1><p>给你二叉树的根结点 root ，请你将它展开为一个单链表：</p><ul><li>展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。</li><li>展开后的单链表应该与二叉树 先序遍历 顺序相同。</li></ul><p>填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。 初始状态下，所有  next 指针都被设置为 NULL。</p><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/01/14/flaten.jpg" alt="示例1" title="示例1"></p><blockquote><p>输入：root = [1,2,5,3,4,null,6]<br> 输出：[1,null,2,null,3,null,4,null,5,null,6]</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p>输入：root = []<br> 输出：[]</p></blockquote><p><strong>示例 3:</strong></p><blockquote><p>输入：root = [0]<br> 输出：[0]</p></blockquote><p>提示：</p><ul><li>树中结点数在范围 <code>[0, 2000]</code> 内</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul><p>函数签名:</p><div class="language-javaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{TreeNode}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">root</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{void}</span><span style="color:#6A737D;"> Do not return anything, modify root in-place instead.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">flatten</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">root</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{TreeNode}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">root</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{void}</span><span style="color:#6A737D;"> Do not return anything, modify root in-place instead.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">flatten</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">root</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h2 id="思路" tabindex="-1">思路 <a class="header-anchor" href="#思路" aria-label="Permalink to &quot;思路&quot;">​</a></h2><h3 id="遍历" tabindex="-1">遍历 <a class="header-anchor" href="#遍历" aria-label="Permalink to &quot;遍历&quot;">​</a></h3><p>想要将二叉树转换为链表，且顺序同先序遍历相同。在遍历时构建出一个链表即可解决问题。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">flatten</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">root</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> dummy </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TreeNode</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> dummy</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">traverse</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">root</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (root </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">    p.right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TreeNode</span><span style="color:#E1E4E8;">(root.val)</span></span>
<span class="line"><span style="color:#E1E4E8;">    p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p.right</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">traverse</span><span style="color:#E1E4E8;">(root.left)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">traverse</span><span style="color:#E1E4E8;">(root.right)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> dummy</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">flatten</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">root</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> dummy </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TreeNode</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> dummy</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">traverse</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">root</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (root </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">    p.right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TreeNode</span><span style="color:#24292E;">(root.val)</span></span>
<span class="line"><span style="color:#24292E;">    p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p.right</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">traverse</span><span style="color:#24292E;">(root.left)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">traverse</span><span style="color:#24292E;">(root.right)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> dummy</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>但是，题目的函数签名为<code>@return {void} Do not return anything, modify root in-place instead.</code>希望我们在原地把二叉树拉平成链表。所以遍历思路并不能解决这个问题。</p><h3 id="分解" tabindex="-1">分解 <a class="header-anchor" href="#分解" aria-label="Permalink to &quot;分解&quot;">​</a></h3><p>接下来我们尝试用分解递归的思路来解决问题。</p><p>对每个节点进行以下操作：</p><ol><li>用变量存储两个叶子结点</li><li>将该根节点的左子节置空</li><li>将该根节点的右子节点设为原来的左子结点</li><li>将该根节点原先的右子节点接在新的右子节点下方</li></ol><div class="language-javaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Definition for a binary tree node.</span></span>
<span class="line"><span style="color:#6A737D;"> * function TreeNode(val, left, right) {</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.val = (val===undefined ? 0 : val)</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.left = (left===undefined ? null : left)</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.right = (right===undefined ? null : right)</span></span>
<span class="line"><span style="color:#6A737D;"> * }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{TreeNode}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">root</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{void}</span><span style="color:#6A737D;"> Do not return anything, modify root in-place instead.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">flatten</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">root</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//出口</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (root </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//递归</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">flatten</span><span style="color:#E1E4E8;">(root.left)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">flatten</span><span style="color:#E1E4E8;">(root.right)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//储存left right节点</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> left </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> root.left</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> root.right</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//讲左子节点置空</span></span>
<span class="line"><span style="color:#E1E4E8;">  root.left </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//原先的左子节点接到右子节点</span></span>
<span class="line"><span style="color:#E1E4E8;">  root.right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> left</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//寻找右子树链表的尽头</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> root;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(p.right </span><span style="color:#F97583;">!=</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    p</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">p.right</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//将原先的右子节点接到新右子节点链表的尽头</span></span>
<span class="line"><span style="color:#E1E4E8;">  p.right</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> right</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Definition for a binary tree node.</span></span>
<span class="line"><span style="color:#6A737D;"> * function TreeNode(val, left, right) {</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.val = (val===undefined ? 0 : val)</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.left = (left===undefined ? null : left)</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.right = (right===undefined ? null : right)</span></span>
<span class="line"><span style="color:#6A737D;"> * }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{TreeNode}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">root</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{void}</span><span style="color:#6A737D;"> Do not return anything, modify root in-place instead.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">flatten</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">root</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//出口</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (root </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">return</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//递归</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">flatten</span><span style="color:#24292E;">(root.left)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">flatten</span><span style="color:#24292E;">(root.right)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//储存left right节点</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> left </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> root.left</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> root.right</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//讲左子节点置空</span></span>
<span class="line"><span style="color:#24292E;">  root.left </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//原先的左子节点接到右子节点</span></span>
<span class="line"><span style="color:#24292E;">  root.right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> left</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//寻找右子树链表的尽头</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> root;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(p.right </span><span style="color:#D73A49;">!=</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    p</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">p.right</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//将原先的右子节点接到新右子节点链表的尽头</span></span>
<span class="line"><span style="color:#24292E;">  p.right</span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> right</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,25),e=[o];function t(r,c,y,E,i,d){return n(),a("div",null,e)}const h=s(p,[["render",t]]);export{D as __pageData,h as default};
