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

===! "效果"
	$$
	\begin{matrix}
	1 & x & x^2 \\
	1 & y & y^2 \\
	1 & z & z^2 \\
	\end{matrix}
	$$

=== "源码"
	```latex
	$$
	\begin{matrix}
	1 & x & x^2 \\
	1 & y & y^2 \\
	1 & z & z^2 \\
	\end{matrix}
	$$
	```

===! "效果"
	$$
	\begin{pmatrix}1&2\\3&4\\ \end{pmatrix}
	$$

=== "源码"
	```latex
	$$
	\begin{pmatrix}1&2\\3&4\\ \end{pmatrix}
	$$
	```

===! "效果"
	$$
	\begin{bmatrix}1&2\\3&4\\ \end{bmatrix}
	$$

=== "源码"
	```latex
	$$
	\begin{bmatrix}1&2\\3&4\\ \end{bmatrix}
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
	\begin{vmatrix}1&2\\3&4\\ \end{vmatrix}
	$$

=== "源码"
	```latex
	$$
	\begin{vmatrix}1&2\\3&4\\ \end{vmatrix}
	$$
	```

===! "效果"
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
	\begin{pmatrix}
	1 & a_1 & a_1^2 & \cdots & a_1^n \\
	1 & a_2 & a_2^2 & \cdots & a_2^n \\
	\vdots  & \vdots& \vdots & \ddots & \vdots \\
	1 & a_m & a_m^2 & \cdots & a_m^n    
	\end{pmatrix}
	$$

=== "源码"
	```latex
	$$
	\begin{pmatrix}
	1 & a_1 & a_1^2 & \cdots & a_1^n \\
	1 & a_2 & a_2^2 & \cdots & a_2^n \\
	\vdots  & \vdots& \vdots & \ddots & \vdots \\
	1 & a_m & a_m^2 & \cdots & a_m^n    
	\end{pmatrix}
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

===! "效果"
	$$
	\begin{pmatrix}
		a & b\\
		c & d\\
	\hline
		1 & 0\\
		0 & 1
	\end{pmatrix}
	$$

=== "源码"
	```latex
	$$
	\begin{pmatrix}
		a & b\\
		c & d\\
	\hline
		1 & 0\\
		0 & 1
	\end{pmatrix}
	$$
	```

===! "效果"
	$$
 	\bigl( \begin{smallmatrix} a & b \\ c & d \end{smallmatrix} \bigr)
	$$

=== "源码"
	```latex
	$$
 	\bigl( \begin{smallmatrix} a & b \\ c & d \end{smallmatrix} \bigr)
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

===! "效果"
	$$
	f(n) =
	\begin{cases}
	\frac{n}{2},  & \text{if $n$ is even} \\[2ex]
	3n+1, & \text{if $n$ is odd}
	\end{cases}
	$$

=== "源码"
	```latex
	$$
	f(n) =
	\begin{cases}
	\frac{n}{2},  & \text{if $n$ is even} \\[2ex]
	3n+1, & \text{if $n$ is odd}
	\end{cases}
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

===! "效果"
	$$
	\begin{array}{ll} \hfill\mathrm{Bad}\hfill & \hfill\mathrm{Better}\hfill \\ \hline \\ e^{i\frac{\pi}2} \quad e^{\frac{i\pi}2}& e^{i\pi/2} \\ \int_{-\frac\pi2}^\frac\pi2 \sin x\,dx & \int_{-\pi/2}^{\pi/2}\sin x\,dx \\ \end{array}
	$$

=== "源码"
	```latex
	$$
	\begin{array}{ll} \hfill\mathrm{Bad}\hfill & \hfill\mathrm{Better}\hfill \\ \hline \\ e^{i\frac{\pi}2} \quad e^{\frac{i\pi}2}& e^{i\pi/2} \\ \int_{-\frac\pi2}^\frac\pi2 \sin x\,dx & \int_{-\pi/2}^{\pi/2}\sin x\,dx \\ \end{array}
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

===! "效果"
	$$
	\left\{
	\begin{array}{ll}
	a_1x+b_1y+c_1z &=d_1+e_1 \\ 
	a_2x+b_2y &=d_2 \\ 
	a_3x+b_3y+c_3z &=d_3 
	\end{array} 
	\right.
	$$

=== "源码"
	```latex
	$$
	\left\{
	\begin{array}{ll}
	a_1x+b_1y+c_1z &=d_1+e_1 \\ 
	a_2x+b_2y &=d_2 \\ 
	a_3x+b_3y+c_3z &=d_3 
	\end{array} 
	\right.
	$$
	```

===! "效果"
	$$
	\begin{cases}
	a_1x+b_1y+c_1z=\frac{p_1}{q_1} \\[2ex] 
	a_2x+b_2y+c_2z=\frac{p_2}{q_2} \\[2ex] 
	a_3x+b_3y+c_3z=\frac{p_3}{q_3}
	\end{cases}
	$$

=== "源码"
	```latex
	$$
	\begin{cases}
	a_1x+b_1y+c_1z=\frac{p_1}{q_1} \\[2ex] 
	a_2x+b_2y+c_2z=\frac{p_2}{q_2} \\[2ex] 
	a_3x+b_3y+c_3z=\frac{p_3}{q_3}
	\end{cases}
	$$
	```

===! "效果"
	$$
	\begin{cases}
	a_1x+b_1y+c_1z=\frac{p_1}{q_1} \\
	a_2x+b_2y+c_2z=\frac{p_2}{q_2} \\
	a_3x+b_3y+c_3z=\frac{p_3}{q_3}
	\end{cases}
	$$

=== "源码"
	```latex
	$$
	\begin{cases}
	a_1x+b_1y+c_1z=\frac{p_1}{q_1} \\
	a_2x+b_2y+c_2z=\frac{p_2}{q_2} \\
	a_3x+b_3y+c_3z=\frac{p_3}{q_3}
	\end{cases}
	$$
	```

===! "效果"
	$$
	\left\{ \begin{array}{l}
	0 = c_x-a_{x0}-d_{x0}\dfrac{(c_x-a_{x0})\cdot d_{x0}}{\|d_{x0}\|^2} + c_x-a_{x1}-d_{x1}\dfrac{(c_x-a_{x1})\cdot d_{x1}}{\|d_{x1}\|^2} \\[2ex] 
	0 = c_y-a_{y0}-d_{y0}\dfrac{(c_y-a_{y0})\cdot d_{y0}}{\|d_{y0}\|^2} + c_y-a_{y1}-d_{y1}\dfrac{(c_y-a_{y1})\cdot d_{y1}}{\|d_{y1}\|^2} \end{array} \right. 
	$$

=== "源码"
	```latex
	$$
	\left\{ \begin{array}{l}
	0 = c_x-a_{x0}-d_{x0}\dfrac{(c_x-a_{x0})\cdot d_{x0}}{\|d_{x0}\|^2} + c_x-a_{x1}-d_{x1}\dfrac{(c_x-a_{x1})\cdot d_{x1}}{\|d_{x1}\|^2} \\[2ex] 
	0 = c_y-a_{y0}-d_{y0}\dfrac{(c_y-a_{y0})\cdot d_{y0}}{\|d_{y0}\|^2} + c_y-a_{y1}-d_{y1}\dfrac{(c_y-a_{y1})\cdot d_{y1}}{\|d_{y1}\|^2} \end{array} \right. 
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

## 交换图

===! "效果"
	$$
	\begin{CD}
	A @>a>> B\\
	@V b V V= @VV c V\\
	C @>>d> D
	\end{CD}
	$$

=== "源码"
	```latex
	$$
	\begin{CD}
	A @>a>> B\\
	@V b V V= @VV c V\\
	C @>>d> D
	\end{CD}
	$$
	```

===! "效果"
	$$
	\begin{CD}
	A @>>> B @>{\text{very long label}}>> C \\
	@. @AAA @| \\
	D @= E @<<< F
	\end{CD}
	$$

=== "源码"
	```latex
	$$
	\begin{CD}
	A @>>> B @>{\text{very long label}}>> C \\
	@. @AAA @| \\
	D @= E @<<< F
	\end{CD}
	$$
	```

===! "效果"
	$$
	\begin{CD}
		RCOHR'SO_3Na @>{\text{Hydrolysis,$\Delta, Dil.HCl$}}>> (RCOR')+NaCl+SO_2+ H_2O 
	\end{CD}
	$$

=== "源码"
	```latex
	$$
	\begin{CD}
		RCOHR'SO_3Na @>{\text{Hydrolysis,$\Delta, Dil.HCl$}}>> (RCOR')+NaCl+SO_2+ H_2O 
	\end{CD}
	$$
	```

## 持续分数

===! "效果"
	$$
	x = a_0 + \cfrac{1^2}{a_1
						+ \cfrac{2^2}{a_2
						+ \cfrac{3^2}{a_3 + \cfrac{4^4}{a_4 + \cdots}}}}
	$$

=== "源码"
	```latex
	$$
	x = a_0 + \cfrac{1^2}{a_1
						+ \cfrac{2^2}{a_2
						+ \cfrac{3^2}{a_3 + \cfrac{4^4}{a_4 + \cdots}}}}
	$$
	```

===! "效果"
	$$
	x = a_0 + \frac{1^2}{a_1
						+ \frac{2^2}{a_2
						+ \frac{3^2}{a_3 + \frac{4^4}{a_4 + \cdots}}}}
	$$

=== "源码"
	```latex
	$$
	x = a_0 + \frac{1^2}{a_1
						+ \frac{2^2}{a_2
						+ \frac{3^2}{a_3 + \frac{4^4}{a_4 + \cdots}}}}
	$$
	```

===! "效果"
	$$
	x = a_0 + \frac{1^2}{a_1+}
						\frac{2^2}{a_2+}
						\frac{3^2}{a_3 +} \frac{4^4}{a_4 +} \cdots
	$$

=== "源码"
	```latex
	$$
	x = a_0 + \frac{1^2}{a_1+}
						\frac{2^2}{a_2+}
						\frac{3^2}{a_3 +} \frac{4^4}{a_4 +} \cdots
	$$
	```

===! "效果"
	$$
	\cfrac{a_{1}}{b_{1}+\cfrac{a_{2}}{b_{2}+\cfrac{a_{3}}{b_{3}+\ddots }}}=   {\genfrac{}{}{}{}{a_1}{b_1}}   {\genfrac{}{}{0pt}{}{}{+}}   {\genfrac{}{}{}{}{a_2}{b_2}}   {\genfrac{}{}{0pt}{}{}{+}}   {\genfrac{}{}{}{}{a_3}{b_3}}   {\genfrac{}{}{0pt}{}{}{+\dots}}
	$$

=== "源码"
	```latex
	$$
	\cfrac{a_{1}}{b_{1}+\cfrac{a_{2}}{b_{2}+\cfrac{a_{3}}{b_{3}+\ddots }}}=   {\genfrac{}{}{}{}{a_1}{b_1}}   {\genfrac{}{}{0pt}{}{}{+}}   {\genfrac{}{}{}{}{a_2}{b_2}}   {\genfrac{}{}{0pt}{}{}{+}}   {\genfrac{}{}{}{}{a_3}{b_3}}   {\genfrac{}{}{0pt}{}{}{+\dots}}
	$$
	```

===! "效果"
	$$
	\underset{j=1}{\overset{\infty}{\LARGE\mathrm K}}\frac{a_j}{b_j}=\cfrac{a_1}{b_1+\cfrac{a_2}{b_2+\cfrac{a_3}{b_3+\ddots}}}.
	$$

=== "源码"
	```latex
	$$
	\underset{j=1}{\overset{\infty}{\LARGE\mathrm K}}\frac{a_j}{b_j}=\cfrac{a_1}{b_1+\cfrac{a_2}{b_2+\cfrac{a_3}{b_3+\ddots}}}.
	$$
	```

===! "效果"
	$$
	\mathop{\LARGE\mathrm K}_{i=1}^\infty \frac{a_i}{b_i}
	$$

=== "源码"
	```latex
	$$
	\mathop{\LARGE\mathrm K}_{i=1}^\infty \frac{a_i}{b_i}
	$$
	```

## 大括号

===! "效果"
	$$
	f\left(
		\left[ 
			\frac{
				1+\left\{x,y\right\}
			}{
				\left(
						\frac{x}{y}+\frac{y}{x}
				\right)
				\left(u+1\right)
			}+a
		\right]^{3/2}
	\right)
	$$

=== "源码"
	```latex
	$$
	f\left(
		\left[ 
			\frac{
				1+\left\{x,y\right\}
			}{
				\left(
						\frac{x}{y}+\frac{y}{x}
				\right)
				\left(u+1\right)
			}+a
		\right]^{3/2}
	\right)
	$$
	```

===! "效果"
	$$
	\begin{aligned}
	a=&\left(1+2+3+  \cdots \right. \\
	& \cdots+ \left. \infty-2+\infty-1+\infty\right)
	\end{aligned}
	$$

=== "源码"
	```latex
	$$
	\begin{aligned}
	a=&\left(1+2+3+  \cdots \right. \\
	& \cdots+ \left. \infty-2+\infty-1+\infty\right)
	\end{aligned}
	$$
	```

===! "效果"
	$$
	\left\langle  
		q
	\middle\|
		\frac{\frac{x}{y}}{\frac{u}{v}}
	\middle| 
		p 
	\right\rangle
	$$

=== "源码"
	```latex
	$$
	\left\langle  
		q
	\middle\|
		\frac{\frac{x}{y}}{\frac{u}{v}}
	\middle| 
		p 
	\right\rangle
	$$
	```

## 高亮

===! "效果"
	$$
	\bbox[yellow]
	{
	e^x=\lim_{n\to\infty} \left( 1+\frac{x}{n} \right)^n
	\qquad (1)
	}
	$$

=== "源码"
	```latex
	$$
	\bbox[yellow]
	{
	e^x=\lim_{n\to\infty} \left( 1+\frac{x}{n} \right)^n
	\qquad (1)
	}
	$$
	```

===! "效果"
	$$
	\bbox[yellow,5px]
	{
	e^x=\lim_{n\to\infty} \left( 1+\frac{x}{n} \right)^n
	\qquad (1)
	}
	$$

=== "源码"
	```latex
	$$
	\bbox[yellow,5px]
	{
	e^x=\lim_{n\to\infty} \left( 1+\frac{x}{n} \right)^n
	\qquad (1)
	}
	$$
	```

===! "效果"
	$$
	\bbox[5px,border:2px solid red]
	{
	e^x=\lim_{n\to\infty} \left( 1+\frac{x}{n} \right)^n
	\qquad (2) 
	}
	$$

=== "源码"
	```latex
	$$
	\bbox[5px,border:2px solid red]
	{
	e^x=\lim_{n\to\infty} \left( 1+\frac{x}{n} \right)^n
	\qquad (2) 
	}
	$$
	```

===! "效果"
	$$
	\bbox[yellow,5px,border:2px solid red]
	{
	e^x=\lim_{n\to\infty} \left( 1+\frac{x}{n} \right)^n
	\qquad (1)
	}
	$$

=== "源码"
	```latex
	$$
	\bbox[yellow,5px,border:2px solid red]
	{
	e^x=\lim_{n\to\infty} \left( 1+\frac{x}{n} \right)^n
	\qquad (1)
	}
	$$
	```

## Pack of cards

===! "效果"
	$$
	\spadesuit\quad\heartsuit\quad\diamondsuit\quad\clubsuit
	$$

=== "源码"
	```latex
	$$
	\spadesuit\quad\heartsuit\quad\diamondsuit\quad\clubsuit
	$$
	```

===! "效果"
	$$
	\color{red}{\heartsuit}\quad\color{red}{\diamondsuit}
	$$

=== "源码"
	```latex
	$$
	\color{red}{\heartsuit}\quad\color{red}{\diamondsuit}
	$$
	```

===! "效果"
	$$
	♠\quad♡\quad♢\quad♣\\
	♤\quad♥\quad♦\quad♧
	$$

=== "源码"
	```latex
	$$
	♠\quad♡\quad♢\quad♣\\
	♤\quad♥\quad♦\quad♧
	$$
	```

## 长除法

===! "效果"
	$$
	\require{enclose}
	\begin{array}{r}
									13  \\[-3pt]
	4 \enclose{longdiv}{52} \\[-3pt]
			\underline{4}\phantom{2} \\[-3pt]
									12  \\[-3pt]
			\underline{12}
	\end{array}
	$$

=== "源码"
	```latex
	$$
	\require{enclose}
	\begin{array}{r}
									13  \\[-3pt]
	4 \enclose{longdiv}{52} \\[-3pt]
			\underline{4}\phantom{2} \\[-3pt]
									12  \\[-3pt]
			\underline{12}
	\end{array}
	$$
	```

===! "效果"
	$$
	\begin{array}{c|rrrr}& x^3 & x^2 & x^1 &  x^0\\ & 1 & -6 & 11 & -6\\ {\color{red}1} & \downarrow & 1 & -5 & 6\\ \hline & 1 & -5 & 6 & |\phantom{-} {\color{blue}0} \end{array}
	$$

=== "源码"
	```latex
	$$
	\begin{array}{c|rrrr}& x^3 & x^2 & x^1 &  x^0\\ & 1 & -6 & 11 & -6\\ {\color{red}1} & \downarrow & 1 & -5 & 6\\ \hline & 1 & -5 & 6 & |\phantom{-} {\color{blue}0} \end{array}
	$$
	```

===! "效果"
	$$
	x^3−6x^2+11x−6=(x−{\color{red}1})(x^2−5x+6)+{\color{blue}0}
	$$

=== "源码"
	```latex
	$$
	x^3−6x^2+11x−6=(x−{\color{red}1})(x^2−5x+6)+{\color{blue}0}
	$$
	```

## Degree symbol

===! "效果"
	$$
	\begin{array}
	45^\text{o} \\
	45^o \\
	45^\circ \\
	90°
	\end{array}
	$$

=== "源码"
	```latex
	$$
	\begin{array}
	45^\text{o} \\
	45^o \\
	45^\circ \\
	90°
	\end{array}
	$$
	```

## 其他

===! "效果"
	$$
	\sum_{n=1}^\infty \frac{1}{n^2} \to
		\textstyle \sum_{n=1}^\infty \frac{1}{n^2} \to
		\displaystyle \sum_{n=1}^\infty \frac{1}{n^2}
	$$

=== "源码"
	```latex
	$$
	\sum_{n=1}^\infty \frac{1}{n^2} \to
		\textstyle \sum_{n=1}^\infty \frac{1}{n^2} \to
		\displaystyle \sum_{n=1}^\infty \frac{1}{n^2}
	$$
	```

===! "效果"
	$$
	e=mc^2 \tag{1}\label{eq1}
	$$

=== "源码"
	```latex
	$$
	e=mc^2 \tag{1}\label{eq1}
	$$
	```

===! "效果"
	$$
	\begin{equation}\begin{aligned}
	a &= b + c \\
		&= d + e + f + g \\
		&= h + i
	\end{aligned}\end{equation}\tag{2}\label{eq2}
	$$

=== "源码"
	```latex
	$$
	\begin{equation}\begin{aligned}
	a &= b + c \\
		&= d + e + f + g \\
		&= h + i
	\end{aligned}\end{equation}\tag{2}\label{eq2}
	$$
	```

===! "效果"
	$$
	\begin{align}
	a &= b + c \tag{3}\label{eq3} \\
	x &= yz \tag{4}\label{eq4}\\
	l &= m - n \tag{5}\label{eq5}
	\end{align}
	$$

=== "源码"
	```latex
	$$
	\begin{align}
	a &= b + c \tag{3}\label{eq3} \\
	x &= yz \tag{4}\label{eq4}\\
	l &= m - n \tag{5}\label{eq5}
	\end{align}
	$$
	```

===! "效果"
	$$
	54\,321.123\,45
	$$

=== "源码"
	```latex
	$$
	54\,321.123\,45
	$$
	```

===! "效果"
	$$
	\left.\mathrm{m}\middle/\mathrm{s}^2\right.
	$$

=== "源码"
	```latex
	$$
	\left.\mathrm{m}\middle/\mathrm{s}^2\right.
	$$
	```

===! "效果"
	$$
	\mu_0=4\pi\times10^{-7} \ \left.\mathrm{\mathrm{T}\!\cdot\!\mathrm{m}}\middle/\mathrm{A}\right.
	$$

=== "源码"
	```latex
	$$
	\mu_0=4\pi\times10^{-7} \ \left.\mathrm{\mathrm{T}\!\cdot\!\mathrm{m}}\middle/\mathrm{A}\right.
	$$
	```

===! "效果"
	$$
	\begin{array}{rrrrrr|r}
						& x_1 & x_2 & s_1 & s_2 & s_3 &    \\ \hline
				s_1 &   0 &   1 &   1 &   0 &   0 &  8 \\
				s_2 &   1 &  -1 &   0 &   1 &   0 &  4 \\
				s_3 &   1 &   1 &   0 &   0 &   1 & 12 \\ \hline
						&  -1 &  -1 &   0 &   0 &   0 &  0
	\end{array}
	$$

=== "源码"
	```latex
	$$
	\begin{array}{rrrrrr|r}
						& x_1 & x_2 & s_1 & s_2 & s_3 &    \\ \hline
				s_1 &   0 &   1 &   1 &   0 &   0 &  8 \\
				s_2 &   1 &  -1 &   0 &   1 &   0 &  4 \\
				s_3 &   1 &   1 &   0 &   0 &   1 & 12 \\ \hline
						&  -1 &  -1 &   0 &   0 &   0 &  0
	\end{array}
	$$
	```

===! "效果"
	$$
	\begin{array}{rrrrrrr|rr}
		& x_1 & x_2 & s_1 & s_2 & s_3 &  w &    & \text{ratio} \\ \hline
		s_1 &   0 &   1 &   1 &   0 &   0 &  0 &  8 &            - \\
	w & 1^* &  -1 &   0 &  -1 &   0 &  1 &  4 &            4 \\
		s_3 &   1 &   1 &   0 &   0 &   1 &  0 & 12 &           12 \\ \hdashline
		&   1 &  -1 &   0 &  -1 &   0 &  0 &  4 &              \\ \hline
		s_1 &   0 &   1 &   1 &   0 &   0 &  0 &  8 &              \\
		x_1 &   1 &  -1 &   0 &  -1 &   0 &  1 &  4 &              \\
		s_3 &   0 &   2 &   0 &   2 &   1 & -1 &  8 &              \\ \hdashline
		&   0 &   0 &   0 &   0 &   0 & -1 &  0 &
	\end{array}
	$$

=== "源码"
	```latex
	$$
	\begin{array}{rrrrrrr|rr}
		& x_1 & x_2 & s_1 & s_2 & s_3 &  w &    & \text{ratio} \\ \hline
		s_1 &   0 &   1 &   1 &   0 &   0 &  0 &  8 &            - \\
	w & 1^* &  -1 &   0 &  -1 &   0 &  1 &  4 &            4 \\
		s_3 &   1 &   1 &   0 &   0 &   1 &  0 & 12 &           12 \\ \hdashline
		&   1 &  -1 &   0 &  -1 &   0 &  0 &  4 &              \\ \hline
		s_1 &   0 &   1 &   1 &   0 &   0 &  0 &  8 &              \\
		x_1 &   1 &  -1 &   0 &  -1 &   0 &  1 &  4 &              \\
		s_3 &   0 &   2 &   0 &   2 &   1 & -1 &  8 &              \\ \hdashline
		&   0 &   0 &   0 &   0 &   0 & -1 &  0 &
	\end{array}
	$$
	```

===! "效果"
	$$
	\begin{array}{rrrrrrrr|r}
					& x_1 & x_2 & x_3 & x_4 & x_5 & x_6 &  x_7 &        \\ \hline
			x_4 &   0 &  -3 &   7 &   1 &   0 &   0 &    2 & 2M  -4 \\
			x_5 &   0 &  -9 &   0 &   0 &   1 &   0 &   -1 & -M  -3 \\
			x_6 &   0 &   6 &  -1 &   0 &   0 &   1 & -4^* & -4M +8 \\
			x_1 &   1 &   0 &   1 &   0 &   0 &   0 &    1 &      M \\ \hline
					&   0 &   1 &   1 &   0 &   0 &   0 &    2 &     2M \\
	\text{ratio} &     &     &   1 &     &     &     &  1/2 &
	\end{array}
	$$

=== "源码"
	```latex
	$$
	\begin{array}{rrrrrrrr|r}
					& x_1 & x_2 & x_3 & x_4 & x_5 & x_6 &  x_7 &        \\ \hline
			x_4 &   0 &  -3 &   7 &   1 &   0 &   0 &    2 & 2M  -4 \\
			x_5 &   0 &  -9 &   0 &   0 &   1 &   0 &   -1 & -M  -3 \\
			x_6 &   0 &   6 &  -1 &   0 &   0 &   1 & -4^* & -4M +8 \\
			x_1 &   1 &   0 &   1 &   0 &   0 &   0 &    1 &      M \\ \hline
					&   0 &   1 &   1 &   0 &   0 &   0 &    2 &     2M \\
	\text{ratio} &     &     &   1 &     &     &     &  1/2 &
	\end{array}
	$$
	```

===! "效果"
	$$
	\begin{array}{rrrrrrr|r}
					&  x_1 &  x_2 &  x_3 &  s_1 &    s_2 &  s_3 &       \\     \hline
			s_1 &   -2 &    0 &   -2 &    1 &      0 &    0 &   -60 \\
			s_2 &   -2 & -4^* &   -5 &    0 &      1 &    0 &   -70 \\
			s_3 &    0 &   -3 &   -1 &    0 &      0 &    1 &   -27 \\ \hdashline
					&    8 &   10 &   25 &    0 &      0 &    0 &     0 \\
	\text{ratio} &   -4 & -5/2 &   -5 &      &        &      &       \\     \hline
			s_1 & -2^* &    0 &   -2 &    1 &      0 &    0 &   -60 \\
			x_2 &  1/2 &    1 &  5/4 &    0 &   -1/4 &    0 &  35/2 \\
			s_3 &  3/2 &    0 & 11/4 &    0 &   -3/4 &    1 &  51/2 \\ \hdashline
					&    3 &    0 & 25/2 &    0 &    5/2 &    0 &  -175 \\
	\text{ratio} & -3/2 &      & 25/4 &      &        &      &       \\     \hline
			x_1 &    1 &    0 &    1 & -1/2 &      0 &    0 &    30 \\
			x_2 &    0 &    1 &  3/4 &  1/4 &   -1/4 &    0 &   5/2 \\
			s_3 &    0 &    0 &  5/4 &  3/4 & -3/4^* &    1 & -39/2 \\ \hdashline
					&    0 &    0 & 19/2 &  3/2 &    5/2 &    0 &  -265 \\
	\text{ratio} &      &      &      &      &  \dots &      &       \\     \hline
			x_1 &    1 &    0 &    1 & -1/2 &      0 &    0 &    30 \\
			x_2 &    0 &    1 &  1/3 &    0 &      0 & -1/3 &     9 \\
			s_2 &    0 &    0 & -5/3 &   -1 &      1 & -4/3 &    26 \\ \hdashline
					&    0 &    0 & 41/3 &    4 &      0 & 10/3 &  -330
	\end{array}
	$$

=== "源码"
	```latex
	$$
	\begin{array}{rrrrrrr|r}
					&  x_1 &  x_2 &  x_3 &  s_1 &    s_2 &  s_3 &       \\     \hline
			s_1 &   -2 &    0 &   -2 &    1 &      0 &    0 &   -60 \\
			s_2 &   -2 & -4^* &   -5 &    0 &      1 &    0 &   -70 \\
			s_3 &    0 &   -3 &   -1 &    0 &      0 &    1 &   -27 \\ \hdashline
					&    8 &   10 &   25 &    0 &      0 &    0 &     0 \\
	\text{ratio} &   -4 & -5/2 &   -5 &      &        &      &       \\     \hline
			s_1 & -2^* &    0 &   -2 &    1 &      0 &    0 &   -60 \\
			x_2 &  1/2 &    1 &  5/4 &    0 &   -1/4 &    0 &  35/2 \\
			s_3 &  3/2 &    0 & 11/4 &    0 &   -3/4 &    1 &  51/2 \\ \hdashline
					&    3 &    0 & 25/2 &    0 &    5/2 &    0 &  -175 \\
	\text{ratio} & -3/2 &      & 25/4 &      &        &      &       \\     \hline
			x_1 &    1 &    0 &    1 & -1/2 &      0 &    0 &    30 \\
			x_2 &    0 &    1 &  3/4 &  1/4 &   -1/4 &    0 &   5/2 \\
			s_3 &    0 &    0 &  5/4 &  3/4 & -3/4^* &    1 & -39/2 \\ \hdashline
					&    0 &    0 & 19/2 &  3/2 &    5/2 &    0 &  -265 \\
	\text{ratio} &      &      &      &      &  \dots &      &       \\     \hline
			x_1 &    1 &    0 &    1 & -1/2 &      0 &    0 &    30 \\
			x_2 &    0 &    1 &  1/3 &    0 &      0 & -1/3 &     9 \\
			s_2 &    0 &    0 & -5/3 &   -1 &      1 & -4/3 &    26 \\ \hdashline
					&    0 &    0 & 41/3 &    4 &      0 & 10/3 &  -330
	\end{array}
	$$
	```

===! "效果"
	$$
	\require{extpfeil} % produce extensible horizontal arrows
	\begin{array}{ccc} % arrange LPPs
	% first row
	% first LPP
	\begin{array}{ll}
	\max & z = c^T x \\
	\text{s.t.} & A x \le b \\
	& x \ge 0
	\end{array}
	& \xtofrom{\text{duality}} &
	% second LPP
	\begin{array}{ll}
	\min & v = b^T y \\
	\text{s.t.} & A^T y \ge c \\
	& y \ge 0
	\end{array} \\
	({\cal PC}) & & ({\cal DC}) \\
	\text{add } {\Large \downharpoonleft} \text{slack var} &  & \text{minus } {\Large \downharpoonright} \text{surplus var}\\ % Change to your favorite arrow style
	%
	% second row
	% third LPP
	\begin{array}{ll}
	\max & z = c^T x \\
	\text{s.t.} & A x + s = b \\
	& x,s \ge 0
	\end{array}
	& \xtofrom[\text{some steps skipped}]{\text{duality}} &
	% fourth LPP
	\begin{array}{ll}
	\min & v = b^T y \\
	\text{s.t.} & A^T y - t = c \\
	& y,t \ge 0
	\end{array} \\
	({\cal PS}) & & ({\cal DS})
	%
	\end{array}
	$$

=== "源码"
	```latex
	\require{extpfeil} % produce extensible horizontal arrows
	\begin{array}{ccc} % arrange LPPs
	% first row
	% first LPP
	\begin{array}{ll}
	\max & z = c^T x \\
	\text{s.t.} & A x \le b \\
	& x \ge 0
	\end{array}
	& \xtofrom{\text{duality}} &
	% second LPP
	\begin{array}{ll}
	\min & v = b^T y \\
	\text{s.t.} & A^T y \ge c \\
	& y \ge 0
	\end{array} \\
	({\cal PC}) & & ({\cal DC}) \\
	\text{add } {\Large \downharpoonleft} \text{slack var} &  & \text{minus } {\Large \downharpoonright} \text{surplus var}\\ % Change to your favorite arrow style
	%
	% second row
	% third LPP
	\begin{array}{ll}
	\max & z = c^T x \\
	\text{s.t.} & A x + s = b \\
	& x,s \ge 0
	\end{array}
	& \xtofrom[\text{some steps skipped}]{\text{duality}} &
	% fourth LPP
	\begin{array}{ll}
	\min & v = b^T y \\
	\text{s.t.} & A^T y - t = c \\
	& y,t \ge 0
	\end{array} \\
	({\cal PS}) & & ({\cal DS})
	%
	\end{array}
	```

===! "效果"
	$$
	\Large\LaTeX
	$$

=== "源码"
	```latex
	$$
	\Large\LaTeX
	$$
	```

===! "效果"
	$$
	\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}
	$$

=== "源码"
	```latex
	$$
	\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}
	$$
	```

===! "效果"
	$$
	\Biggl(\biggl(\Bigl(\bigl((egg)\bigr)\Bigr)\biggr)\Biggr)
	$$

=== "源码"
	```latex
	$$
	\Biggl(\biggl(\Bigl(\bigl((egg)\bigr)\Bigr)\biggr)\Biggr)
	$$
	```

## 字体

===! "效果"
	$$
	\mathbb{CHNQRZ}
	$$

=== "源码"
	```latex
	$$
	\mathbb{CHNQRZ}
	$$
	```

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
	\mathbf{abcdefghijklmnopqrstuvwxyz}
	$$

=== "源码"
	```latex
	$$
	\mathbf{abcdefghijklmnopqrstuvwxyz}
	$$
	```

===! "效果"
	$$
	\mathit{ABCDEFGHIJKLMNOPQRSTUVWXYZ}
	$$

=== "源码"
	```latex
	$$
	\mathit{ABCDEFGHIJKLMNOPQRSTUVWXYZ}
	$$
	```

===! "效果"
	$$
	\mathit{abcdefghijklmnopqrstuvwxyz}
	$$

=== "源码"
	```latex
	$$
	\mathit{abcdefghijklmnopqrstuvwxyz}
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
	\mathtt{ABCDEFGHIJKLMNOPQRSTUVWXYZ,abcdefghijklmnopqrstuvwxyz}
	$$

=== "源码"
	```latex
	$$
	\mathtt{ABCDEFGHIJKLMNOPQRSTUVWXYZ,abcdefghijklmnopqrstuvwxyz}
	$$
	```

===! "效果"
	$$
	\mathrm{ABCDEFGHIJKLMNOPQRSTUVWXYZ,abcdefghijklmnopqrstuvwxyz}
	$$

=== "源码"
	```latex
	$$
	\mathrm{ABCDEFGHIJKLMNOPQRSTUVWXYZ,abcdefghijklmnopqrstuvwxyz}
	$$
	```

===! "效果"
	$$
	\mathsf{ABCDEFGHIJKLMNOPQRSTUVWXYZ,abcdefghijklmnopqrstuvwxyz}
	$$

=== "源码"
	```latex
	$$
	\mathsf{ABCDEFGHIJKLMNOPQRSTUVWXYZ,abcdefghijklmnopqrstuvwxyz}
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
	\mathscr{ABCDEFGHIJKLMNOPQRSTUVWXYZ,abcdefghijklmnopqrstuvwxyz}
	$$

=== "源码"
	```latex
	$$
	\mathscr{ABCDEFGHIJKLMNOPQRSTUVWXYZ,abcdefghijklmnopqrstuvwxyz}
	$$
	```

===! "效果"
	$$
	\mathfrak{ABCDEFGHIJKLMNOPQRSTUVWXYZ} \mathfrak{abcdefghijklmnopqrstuvwxyz}
	$$

=== "源码"
	```latex
	$$
	\mathfrak{ABCDEFGHIJKLMNOPQRSTUVWXYZ} \mathfrak{abcdefghijklmnopqrstuvwxyz}
	$$
	```

## 参考

- https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference
- https://www.yuque.com/yuque/help/brzicb