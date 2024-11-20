import numpy as np
from scipy.optimize import bisect, fsolve, newton

def f(x):
 return np.log(x) - 7 / (2 * x + 6)

# Метод деления отрезка пополам (bisect)
a = 1
b = 10
solution_bisect = bisect(f, a, b)
print("Метод деления отрезка пополам:", solution_bisect)


# Метод Ньютона (newton)
x0 = 1 # Начальное приближение
solution_newton = newton(f, x0)
print("Метод Ньютона:", solution_newton)

# Метод fsolve
x0 = [1, 2, 3, 4, 5]
solution_fsolve = fsolve(f, x0)
print("Метод fsolve:", solution_fsolve)


# проверка решений
print("Значение функции в точке, найденной методом деления отрезка пополам:", f(solution_bisect))
print("Значение функции в точке, найденной методом Ньютона:", f(solution_newton))
print("Значения функции в точках, найденных методом fsolve:", [f(x) for x in solution_fsolve])