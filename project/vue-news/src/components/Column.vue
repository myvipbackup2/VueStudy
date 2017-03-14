<template>
	<div class="content mt40">
	    <div class="newsList">
	    	<ul>
	            <li>
	            	<router-link to="/home">
	                    <h2>前端周刊第 46 期：Vue.js + VSCode + 程序员防骗指南</h2>
	                    <p>从零开始构建 JavaScript 技术栈

							这是 JavaScript Stack from Scratch 的中文版，由我们团队高级前端荣剑同学翻译成中文：这是个简单直接的 JavaScript 技术栈构建指南。在此之前，你需要掌握基本的编程知识和一些 JavaScript 基础。本教程旨在将所有现代 JS 技术栈结合起来使用，并为每个工具提供最简单的示例。你可以把它当作从零开始编写代码样板的示范。

							你不得不知的 package.json 常识

							可以说 package.json 是整个 npm 社区和生态的核心要素，你可以认为他是包、模块的规格说明，其中的字段都是什么含义，应该如何使用，懂了这些，你的 Node.js 才算是入门。</p>
	                </router-link>
	            </li>
	            <li>
	            	<router-link to="/home">
	                    <h2>2016 年崛起的 JS 项目</h2>
	                    <p>
							近几年 JS 社区创新和演化的速度是有目共睹的，几个月前比较时髦的技术很可能现在已经过时了。2016 已经过去，你有没有担心错过了什么重要的内容？在这篇调查报告中我们会为你解读社区的主流趋势。
							我们将从数量上来分析哪些项目 2016 年获得比较多的关注，具体的做法是比较各项目 2016 年在 Github 上新增 star 的数量。回顾 2015 年：React 无疑占据了统治地位，而 Redux 则在众多牛毛的 Flux 实现中脱颖而出。那么 2016 年哪些项目最受开发者关注呢？
						</p>
	                </router-link>
	            </li>
	        </ul>
	    </div>
	</div>
</template>
<script>
	export default {
	}
</script>
<style scoped>
	.mt40{
		margin-top:40px;
	}
</style>