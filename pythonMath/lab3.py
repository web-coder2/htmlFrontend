import numpy as np 
import matplotlib.pyplot as plt 

def f(x):
	return np.sqrt((x - 2)**3 * (5 - x))


def langrageInterpolation(x_nodes, y_nodes, x):
	n = len(x_nodes)
	y = 0
	for i in range(n):
		term = y_nodes[i]
		for j in range(n):
	   		if i != j:
	   			term *= (x - x_nodes[j]) / (x_nodes[i] - x_nodes[j])
		y += term
		return y

def newtonInterpolation(x_nodes, y_nodes, x):
	n = len(x_nodes)
	y = y_nodes[0]
	diff = np.zeros((n, n))
	diff[:, 0] = y_nodes

	for j in range(1, n):
		for i in range(n - j):
			diff[i, j] = (diff[i + 1, j - 1] - diff[i, j - 1]) / (x_nodes[i + j] - x_nodes[i])

	term = 1
	for i in range(1, n):
		term *= (x - x_nodes[i - 1])
		y += diff[0, i] * term
	return y

x_nodes = np.arange(1, 10)
y_nodes = f(x_nodes)

xPlot = np.linspace(2, 5, 100)
yLangrage = langrageInterpolation(x_nodes, y_nodes, xPlot)
yNewton = newtonInterpolation(x_nodes, y_nodes, xPlot)

plt.figure(figsize = (10, 6))
plt.plot(xPlot, f(xPlot), label='Исходная функция')
plt.plot(xPlot, yLangrage, label='Интерполяция Лагранжа')
plt.plot(xPlot, yNewton, label='Интерполяция Ньютона')
plt.scatter(x_nodes, y_nodes, color='red', label='Узлы интерполяции')
plt.legend()
plt.title('Интерполяция функции sqrt((x-2)^3*(5-x))')
plt.xlabel('x')
plt.ylabel('y')
plt.grid(True)
plt.show()