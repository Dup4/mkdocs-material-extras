# 数学公式

## 行内公式

=== "效果"
	$e^x$

=== "源码"
	```latex
	$e^x$
	```

## 块级公式

=== "效果"
	$$
	e^x
	$$

=== "源码"
	```latex
	$$
	e^x
	$$
	```

## 矩阵

=== "效果"
	$$
	\begin{Vmatrix}1&2\\3&4\\ \end{Vmatrix}
	$$

=== "源码"
	```latex
	$$
	\begin{Vmatrix}1&2\\3&4\\ \end{Vmatrix}
	$$
	```

===! "效果"
	$$
	\begin{Bmatrix}1&2\\3&4\\ \end{Bmatrix}
	$$

=== "源码"
	```latex
	$$
	\begin{Bmatrix}1&2\\3&4\\ \end{Bmatrix}
	$$
	```

===! "效果"
	$$
	\left[
	\begin{array}{cc|c}
		1&2&3\\
		4&5&6
	\end{array}
	\right]
	$$

=== "源码"
	```latex
	$$
	\left[
	\begin{array}{cc|c}
		1&2&3\\
		4&5&6
	\end{array}
	\right]
	$$
	```

## 对齐方程

===! "效果"
	$$
	\begin{align}
	\sqrt{37} & = \sqrt{\frac{73^2-1}{12^2}} \\
	& = \sqrt{\frac{73^2}{12^2}\cdot\frac{73^2-1}{73^2}} \\ 
	& = \sqrt{\frac{73^2}{12^2}}\sqrt{\frac{73^2-1}{73^2}} \\
	& = \frac{73}{12}\sqrt{1 - \frac{1}{73^2}} \\ 
	& \approx \frac{73}{12}\left(1 - \frac{1}{2\cdot73^2}\right)
	\end{align}
	$$

=== "源码"
	```latex
	$$
	\begin{align}
	\sqrt{37} & = \sqrt{\frac{73^2-1}{12^2}} \\
	& = \sqrt{\frac{73^2}{12^2}\cdot\frac{73^2-1}{73^2}} \\ 
	& = \sqrt{\frac{73^2}{12^2}}\sqrt{\frac{73^2-1}{73^2}} \\
	& = \frac{73}{12}\sqrt{1 - \frac{1}{73^2}} \\ 
	& \approx \frac{73}{12}\left(1 - \frac{1}{2\cdot73^2}\right)
	\end{align}
	$$
	```

===! "效果"
	$$
	\begin{align}
	f(x)&=\left(x^3\right)+\left(x^3+x^2+x^1\right)+\left(x^3+x^2\right)\\
	f'(x)&=\left(3x^2+2x+1\right)+\left(3x^2+2x\right)\\
	f''(x)&=\left(6x+2\right)\\ \end{align}
	$$

=== "源码"
	```latex
	$$
	\begin{align}
	f(x)&=\left(x^3\right)+\left(x^3+x^2+x^1\right)+\left(x^3+x^‌​2\right)\\
	f'(x)&=\left(3x^2+2x+1\right)+\left(3x^2+2x\right)\\
	f''(x)&=\left(6x+2\right)\\ \end{align}
	$$
	```

## 分段函数

===! "效果"
	$$
	f(n) =
	\begin{cases}
	n/2,  & \text{if $n$ is even} \\
	3n+1, & \text{if $n$ is odd}
	\end{cases}
	$$

=== "源码"
	```latex
	$$
	f(n) =
	\begin{cases}
	n/2,  & \text{if $n$ is even} \\
	3n+1, & \text{if $n$ is odd}
	\end{cases}
	$$
	```

===! "效果"
	$$
	\left.
	\begin{array}{l}
	\text{if $n$ is even:}&n/2\\
	\text{if $n$ is odd:}&3n+1
	\end{array}
	\right\}
	=f(n)
	$$

=== "源码"
	```latex
	$$
	\left.
	\begin{array}{l}
	\text{if $n$ is even:}&n/2\\
	\text{if $n$ is odd:}&3n+1
	\end{array}
	\right\}
	=f(n)
	$$
	```

## 数组

===! "效果"
	$$
	\begin{array}{c|lcr}
	n & \text{Left} & \text{Center} & \text{Right} \\
	\hline
	1 & 0.24 & 1 & 125 \\
	2 & -1 & 189 & -8 \\
	3 & -20 & 2000 & 1+10i
	\end{array}
	$$

=== "源码"
	```latex
	$$
	\begin{array}{c|lcr}
	n & \text{Left} & \text{Center} & \text{Right} \\
	\hline
	1 & 0.24 & 1 & 125 \\
	2 & -1 & 189 & -8 \\
	3 & -20 & 2000 & 1+10i
	\end{array}
	$$
	```

===! "效果"
	$$
	\begin{array}{c}
	\begin{array}{cc}
	\begin{array}{c|cccc}
	\text{min} & 0 & 1 & 2 & 3\\
	\hline
	0 & 0 & 0 & 0 & 0\\
	1 & 0 & 1 & 1 & 1\\
	2 & 0 & 1 & 2 & 2\\
	3 & 0 & 1 & 2 & 3
	\end{array}
	&
	\begin{array}{c|cccc}
	\text{max}&0&1&2&3\\
	\hline
	0 & 0 & 1 & 2 & 3\\
	1 & 1 & 1 & 2 & 3\\
	2 & 2 & 2 & 2 & 3\\
	3 & 3 & 3 & 3 & 3
	\end{array}
	\end{array}
	\\
	\begin{array}{c|cccc}
	\Delta&0&1&2&3\\
	\hline
	0 & 0 & 1 & 2 & 3\\
	1 & 1 & 0 & 1 & 2\\
	2 & 2 & 1 & 0 & 1\\
	3 & 3 & 2 & 1 & 0
	\end{array}
	\end{array}
	$$

=== "源码"
	```latex
	$$
	\begin{array}{c}
	\begin{array}{cc}
	\begin{array}{c|cccc}
	\text{min} & 0 & 1 & 2 & 3\\
	\hline
	0 & 0 & 0 & 0 & 0\\
	1 & 0 & 1 & 1 & 1\\
	2 & 0 & 1 & 2 & 2\\
	3 & 0 & 1 & 2 & 3
	\end{array}
	&
	\begin{array}{c|cccc}
	\text{max}&0&1&2&3\\
	\hline
	0 & 0 & 1 & 2 & 3\\
	1 & 1 & 1 & 2 & 3\\
	2 & 2 & 2 & 2 & 3\\
	3 & 3 & 3 & 3 & 3
	\end{array}
	\end{array}
	\\
	\begin{array}{c|cccc}
	\Delta&0&1&2&3\\
	\hline
	0 & 0 & 1 & 2 & 3\\
	1 & 1 & 0 & 1 & 2\\
	2 & 2 & 1 & 0 & 1\\
	3 & 3 & 2 & 1 & 0
	\end{array}
	\end{array}
	$$
	```

===! "效果"
	{==

	由于注释的原因，该公式目前渲染不正常。

	==}

	$$
	% outer vertical array of arrays
	\begin{array}{c}
	% inner horizontal array of arrays
	\begin{array}{cc}
	% inner array of minimum values
	\begin{array}{c|cccc}
	\text{min} & 0 & 1 & 2 & 3\\
	\hline
	0 & 0 & 0 & 0 & 0\\
	1 & 0 & 1 & 1 & 1\\
	2 & 0 & 1 & 2 & 2\\
	3 & 0 & 1 & 2 & 3
	\end{array}
	&
	% inner array of maximum values
	\begin{array}{c|cccc}
	\text{max}&0&1&2&3\\
	\hline
	0 & 0 & 1 & 2 & 3\\
	1 & 1 & 1 & 2 & 3\\
	2 & 2 & 2 & 2 & 3\\
	3 & 3 & 3 & 3 & 3
	\end{array}
	\end{array}
	\\
	% inner array of delta values
	\begin{array}{c|cccc}
	\Delta&0&1&2&3\\
	\hline
	0 & 0 & 1 & 2 & 3\\
	1 & 1 & 0 & 1 & 2\\
	2 & 2 & 1 & 0 & 1\\
	3 & 3 & 2 & 1 & 0
	\end{array}
	\end{array}
	$$

=== "源码"
	```latex
	$$
	% outer vertical array of arrays
	\begin{array}{c}
	% inner horizontal array of arrays
	\begin{array}{cc}
	% inner array of minimum values
	\begin{array}{c|cccc}
	\text{min} & 0 & 1 & 2 & 3\\
	\hline
	0 & 0 & 0 & 0 & 0\\
	1 & 0 & 1 & 1 & 1\\
	2 & 0 & 1 & 2 & 2\\
	3 & 0 & 1 & 2 & 3
	\end{array}
	&
	% inner array of maximum values
	\begin{array}{c|cccc}
	\text{max}&0&1&2&3\\
	\hline
	0 & 0 & 1 & 2 & 3\\
	1 & 1 & 1 & 2 & 3\\
	2 & 2 & 2 & 2 & 3\\
	3 & 3 & 3 & 3 & 3
	\end{array}
	\end{array}
	\\
	% inner array of delta values
	\begin{array}{c|cccc}
	\Delta&0&1&2&3\\
	\hline
	0 & 0 & 1 & 2 & 3\\
	1 & 1 & 0 & 1 & 2\\
	2 & 2 & 1 & 0 & 1\\
	3 & 3 & 2 & 1 & 0
	\end{array}
	\end{array}
	$$
	```

## 方程组

===! "效果"
	$$
	\left\{ 
	\begin{array}{c}
	a_1x+b_1y+c_1z=d_1 \\ 
	a_2x+b_2y+c_2z=d_2 \\ 
	a_3x+b_3y+c_3z=d_3
	\end{array}
	\right.
	$$

=== "源码"
	```latex
	$$
	\left\{ 
	\begin{array}{c}
	a_1x+b_1y+c_1z=d_1 \\ 
	a_2x+b_2y+c_2z=d_2 \\ 
	a_3x+b_3y+c_3z=d_3
	\end{array}
	\right.
	$$
	```

===! "效果"
	$$
	\begin{cases}
	a_1x+b_1y+c_1z=d_1 \\ 
	a_2x+b_2y+c_2z=d_2 \\ 
	a_3x+b_3y+c_3z=d_3
	\end{cases}
	$$

=== "源码"
	```latex
	$$
	\begin{cases}
	a_1x+b_1y+c_1z=d_1 \\ 
	a_2x+b_2y+c_2z=d_2 \\ 
	a_3x+b_3y+c_3z=d_3
	\end{cases}
	$$
	```

===! "效果"
	$$
	\left\{
	\begin{aligned} 
	a_1x+b_1y+c_1z &=d_1+e_1 \\ 
	a_2x+b_2y&=d_2 \\ 
	a_3x+b_3y+c_3z &=d_3 
	\end{aligned} 
	\right. 
	$$

=== "源码"
	```latex
	$$
	\left\{
	\begin{aligned} 
	a_1x+b_1y+c_1z &=d_1+e_1 \\ 
	a_2x+b_2y&=d_2 \\ 
	a_3x+b_3y+c_3z &=d_3 
	\end{aligned} 
	\right. 
	$$
	```

## 颜色

===! "效果"
	$$
	\begin{array}{|rc|}
	\hline
	\verb+\color{black}{text}+ & \color{black}{text} \\
	\verb+\color{gray}{text}+ & \color{gray}{text} \\
	\verb+\color{silver}{text}+ & \color{silver}{text} \\
	\verb+\color{white}{text}+ & \color{white}{text} \\
	\hline
	\verb+\color{maroon}{text}+ & \color{maroon}{text} \\
	\verb+\color{red}{text}+ & \color{red}{text} \\
	\verb+\color{yellow}{text}+ & \color{yellow}{text} \\
	\verb+\color{lime}{text}+ & \color{lime}{text} \\
	\verb+\color{olive}{text}+ & \color{olive}{text} \\
	\verb+\color{green}{text}+ & \color{green}{text} \\
	\verb+\color{teal}{text}+ & \color{teal}{text} \\
	\verb+\color{aqua}{text}+ & \color{aqua}{text} \\
	\verb+\color{blue}{text}+ & \color{blue}{text} \\
	\verb+\color{navy}{text}+ & \color{navy}{text} \\
	\verb+\color{purple}{text}+ & \color{purple}{text} \\ 
	\verb+\color{fuchsia}{text}+ & \color{magenta}{text} \\
	\hline
	\end{array}
	$$

=== "源码"
	```latex
	$$
	\begin{array}{|rc|}
	\hline
	\verb+\color{black}{text}+ & \color{black}{text} \\
	\verb+\color{gray}{text}+ & \color{gray}{text} \\
	\verb+\color{silver}{text}+ & \color{silver}{text} \\
	\verb+\color{white}{text}+ & \color{white}{text} \\
	\hline
	\verb+\color{maroon}{text}+ & \color{maroon}{text} \\
	\verb+\color{red}{text}+ & \color{red}{text} \\
	\verb+\color{yellow}{text}+ & \color{yellow}{text} \\
	\verb+\color{lime}{text}+ & \color{lime}{text} \\
	\verb+\color{olive}{text}+ & \color{olive}{text} \\
	\verb+\color{green}{text}+ & \color{green}{text} \\
	\verb+\color{teal}{text}+ & \color{teal}{text} \\
	\verb+\color{aqua}{text}+ & \color{aqua}{text} \\
	\verb+\color{blue}{text}+ & \color{blue}{text} \\
	\verb+\color{navy}{text}+ & \color{navy}{text} \\
	\verb+\color{purple}{text}+ & \color{purple}{text} \\ 
	\verb+\color{fuchsia}{text}+ & \color{magenta}{text} \\
	\hline
	\end{array}
	$$
	```

## 字体

===! "效果"
	$$
	\mathbf{ABCDEFGHIJKLMNOPQRSTUVWXYZ}
	$$

=== "源码"
	```latex
	$$
	\mathbf{ABCDEFGHIJKLMNOPQRSTUVWXYZ}
	$$
	```

===! "效果"
	$$
	\pmb{ABCDEFGHIJKLMNOPQRSTUVWXYZ,abcdefghijklmnopqrstuvwxyz}
	$$

=== "源码"
	```latex
	$$
	\pmb{ABCDEFGHIJKLMNOPQRSTUVWXYZ,abcdefghijklmnopqrstuvwxyz}
	$$
	```

===! "效果"
	$$
	\mathcal{ABCDEFGHIJKLMNOPQRSTUVWXYZ,abcdefghijklmnopqrstuvwxyz}
	$$

=== "源码"
	```latex
	$$
	\mathcal{ABCDEFGHIJKLMNOPQRSTUVWXYZ,abcdefghijklmnopqrstuvwxyz}
	$$
	```

===! "效果"
	$$
	\mathcal{ABCDEFGHIJKLMNOPQRSTUVWXYZ,abcdefghijklmnopqrstuvwxyz}
	$$

=== "源码"
	```latex
	$$
	\mathscr{ABCDEFGHIJKLMNOPQRSTUVWXYZ,abcdefghijklmnopqrstuvwxyz}
	$$
	```

===! "效果"
	$$
	\mathscr{ABCDEFGHIJKLMNOPQRSTUVWXYZ,abcdefghijklmnopqrstuvwxyz}
	$$

=== "源码"
	```latex
	$$
	\mathscr{ABCDEFGHIJKLMNOPQRSTUVWXYZ,abcdefghijklmnopqrstuvwxyz}
	$$
	```

## 参考

- https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference
- https://www.yuque.com/yuque/help/brzicb