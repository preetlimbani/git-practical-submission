n = int(input())
res = []
def rec(open, close, s):
	if open == close == n:
		res.append(s)
		return

	if open < n:
		rec(open + 1, close, s + '(')

	if close < open:
		rec(open, close + 1, s + ')')

rec(0, 0, '')
print(res)