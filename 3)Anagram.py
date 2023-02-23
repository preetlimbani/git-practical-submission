str = input()
strs = str.split(",")
res = {}
for i in strs:
	sortedS = "".join(sorted(i))
	if sortedS not in res:
		res[sortedS] = []
	print(sortedS)
	res[sortedS].append(i)
