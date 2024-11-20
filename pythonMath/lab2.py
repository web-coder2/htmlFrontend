import numpy as np
from scipy import linalg

matrixA = np.array([ [9.9, -1.5, 2.6], [2.5, 5.8, -0.5], [0.7, 0.4, 7.1] ])
matrixB = np.array([0, 3.5, -1.3])
tolerance = 10**(-12)
numIterations = 1000
x0 = ([0, 0, 0])


# Метод Гаусса-Жордана
try:
    x = linalg.solve(matrixA, matrixB)
    print("Решение системы уравнений методом scipy.linalg.solve: " + str(x))
except linalg.LinAlgError:
    print("Система уравнений не имеет решений")


# Метод простой итерации
def simple_iteration(A, b, x0, tolerance, max_iterations):

    n = len(b)
    D = np.diag(A)
    R = A - np.diagflat(D)
    D_inv = np.diag(1.0 / D)

    if np.max(np.abs(np.linalg.eigvals(D_inv @ R))) >= 1:
        return None

    x = x0.copy()
    for i in range(max_iterations):
        x_new = D_inv @ (b - R @ x)
        if np.linalg.norm(x_new - x) < tolerance:
            return x_new, f"Метод сошелся за {i+1} итераций.", "метод простых итераций"
        x = x_new
    return None 

print(simple_iteration(matrixA, matrixB, x0, tolerance, numIterations))
