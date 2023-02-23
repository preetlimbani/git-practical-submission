#dict for word to number
digit_map = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four':4,
    'five':5,
    'six':6,
    'seven':7,
    'eight':8,
    'nine':9,
    'zero':0
}
#List for Num To word
string = ['zero','one','two','three','four','five','six','seven','eight','nine']

#string_to_num function will convert string to number
def string_to_num(s):
    result = 0
    current_digit = ''
    c = 0
    while c < len(s):
        current_digit += s[c]
        c += 1
        if current_digit in digit_map:
            result = result * 10 + digit_map[current_digit]
            current_digit = ""

    return result

#cal_gcd will calculate GCD of two number
def cal_gcd(x, y):
   while(y):
       x, y = y, x % y
   return x

#num_to_string function will convert numeric value to words
def num_to_string(num):
    if (num == 0):
        return ""

    else:
        half_ans = string[num % 10]

        ans = num_to_string(int(num / 10)) + half_ans

    return ans



# This is intilizing part

input1 = input("Enter 1st string ")
num1 = string_to_num(input1)

input2 = input("Enter 2nd string ")
num2 = string_to_num(input2)

hcf = int(cal_hcf(num1,num2))

output = num_to_string(hcf)

print(output)
