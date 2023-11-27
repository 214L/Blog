import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.06b9d6ab.js";const A=JSON.parse('{"title":"LeetCode 538.把二叉搜索树转换为累加树","description":"","frontmatter":{},"headers":[],"relativePath":"Algorithm/Binary Tree/538.把二叉搜索树转换为累加树.md","filePath":"Algorithm/Binary Tree/538.把二叉搜索树转换为累加树.md","lastUpdated":1681740510000}'),p={name:"Algorithm/Binary Tree/538.把二叉搜索树转换为累加树.md"},o=l(`<h1 id="leetcode-538-把二叉搜索树转换为累加树" tabindex="-1"><a href="https://leetcode.cn/problems/convert-bst-to-greater-tree/" target="_blank" rel="noreferrer">LeetCode 538.把二叉搜索树转换为累加树</a> <a class="header-anchor" href="#leetcode-538-把二叉搜索树转换为累加树" aria-label="Permalink to &quot;[LeetCode 538.把二叉搜索树转换为累加树](https://leetcode.cn/problems/convert-bst-to-greater-tree/)&quot;">​</a></h1><p>给出二叉<strong>搜索</strong>树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），使每个节点<code>node</code>的新值等于原树中大于或等于<code>node.val</code>的值之和。</p><p>提醒一下，二叉搜索树满足下列约束条件：</p><ul><li>节点的左子树仅包含键<code>小于</code>节点键的节点。</li><li>节点的右子树仅包含键<code>大于</code>节点键的节点。</li><li>左右子树也必须是二叉搜索树。</li></ul><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/05/03/tree.png" alt="示例1" title="示例1"></p><blockquote><p>输入：[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8] <br> 输出：[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p>输入：root = [0,null,1] <br> 输出：[1,null,1]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p>输入：root = [1,0,2]<br> 输出：[3,3,2]</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p>输入：root = [3,2,4,1]<br> 输出：[7,9,4,10]</p></blockquote><p>提示：</p><ul><li>树中的节点数介于<code>0</code>和<code>104</code>之间。</li><li>每个节点的值介于<code>-10^4 和</code>10^4\`之间。</li><li>树中的所有值<strong>互不相同</strong>。</li><li>给定的树为二叉搜索树。</li></ul><p>函数签名:</p><div class="language-javaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Definition for a binary tree node.</span></span>
<span class="line"><span style="color:#6A737D;"> * function TreeNode(val, left, right) {</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.val = (val===undefined ? 0 : val)</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.left = (left===undefined ? null : left)</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.right = (right===undefined ? null : right)</span></span>
<span class="line"><span style="color:#6A737D;"> * }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{TreeNode}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">root</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{TreeNode}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">convertBST</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">root</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Definition for a binary tree node.</span></span>
<span class="line"><span style="color:#6A737D;"> * function TreeNode(val, left, right) {</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.val = (val===undefined ? 0 : val)</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.left = (left===undefined ? null : left)</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.right = (right===undefined ? null : right)</span></span>
<span class="line"><span style="color:#6A737D;"> * }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{TreeNode}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">root</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{TreeNode}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">convertBST</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">root</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h2 id="思路" tabindex="-1">思路 <a class="header-anchor" href="#思路" aria-label="Permalink to &quot;思路&quot;">​</a></h2><h3 id="分解" tabindex="-1">分解 <a class="header-anchor" href="#分解" aria-label="Permalink to &quot;分解&quot;">​</a></h3><p>由题意知，我们此次获得的是一颗二叉搜索树。</p><p>已知二叉搜索树的中遍历是升序排列的。题目要求我们获得一个累加树，最右侧的右节点是最小值。所以我们可以反向的以中序遍历遍历这个二叉树。</p><p>由此我们获得了获取降序遍历的方法。</p><p>累加树的要求是，使每个节点的新值等于原树中大于或等于原值之和。所以我们用一个sum值来记录累加值，每次sum加上当前节点的值。再赋值给当前节点，遍历完一遍就可以完成累加树的构造。</p><p>代码如下：</p><div class="language-javaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Definition for a binary tree node.</span></span>
<span class="line"><span style="color:#6A737D;"> * function TreeNode(val, left, right) {</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.val = (val===undefined ? 0 : val)</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.left = (left===undefined ? null : left)</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.right = (right===undefined ? null : right)</span></span>
<span class="line"><span style="color:#6A737D;"> * }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{TreeNode}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">root</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{TreeNode}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">convertBST</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">root</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">traverse</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">root</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (root </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">traverse</span><span style="color:#E1E4E8;">(root.right)</span></span>
<span class="line"><span style="color:#E1E4E8;">        sum </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> root.val</span></span>
<span class="line"><span style="color:#E1E4E8;">        root.val </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> sum;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">traverse</span><span style="color:#E1E4E8;">(root.left)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">traverse</span><span style="color:#E1E4E8;">(root)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> root</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Definition for a binary tree node.</span></span>
<span class="line"><span style="color:#6A737D;"> * function TreeNode(val, left, right) {</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.val = (val===undefined ? 0 : val)</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.left = (left===undefined ? null : left)</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.right = (right===undefined ? null : right)</span></span>
<span class="line"><span style="color:#6A737D;"> * }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{TreeNode}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">root</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{TreeNode}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">convertBST</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">root</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> sum </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">traverse</span><span style="color:#24292E;">(</span><span style="color:#E36209;">root</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (root </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">return</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">traverse</span><span style="color:#24292E;">(root.right)</span></span>
<span class="line"><span style="color:#24292E;">        sum </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> root.val</span></span>
<span class="line"><span style="color:#24292E;">        root.val </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> sum;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">traverse</span><span style="color:#24292E;">(root.left)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">traverse</span><span style="color:#24292E;">(root)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> root</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div>`,25),e=[o];function t(r,c,i,y,E,d){return n(),a("div",null,e)}const D=s(p,[["render",t]]);export{A as __pageData,D as default};
