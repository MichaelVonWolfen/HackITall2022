import sys

A = sys.argv[1]
x = [ [float(ceva)] for ceva in A.split(',') if ceva.strip ]
y = [0, 1, 2, 3, 4]

from sklearn.neighbors import LocalOutlierFactor
clf = LocalOutlierFactor(n_neighbors=2)
clf.fit_predict(x) 
prediction = clf.negative_outlier_factor_
result = [ float(ceva) for ceva in A.split(',') if ceva.strip ]

for i in range(len(result)):
    if result[i] * prediction[i] <= -20 or result[i] * prediction[i] >= 20  :
       if prediction[i]< -20:
            result[i] *=1.01
       else:
             result[i]=(-1)*prediction[i]
    else:
        result[i]*= prediction[i]* (-1)

print(result)

# from sklearn.neighbors import KNeighborsClassifier
# from sklearn.neighbors import NearestNeighbors
# neigh = NearestNeighbors(n_neighbors=2)
# neigh.fit(x)
# A = neigh.kneighbors_graph(x)
# A.toarray()
# print(A)

# print(neigh.kneighbors(x, return_distance=False))

sys.stdout.flush();