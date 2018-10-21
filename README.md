# BBC Coding Kata - Roman Numerals

First, need to understand the relationship between regular numbers and roman numbers.

# Here is the pattern

Symbol  I   V   X   L   C   D   M
Value   1   5   10  50  100 500 1,000

# Counting from 1 to 10.

I, II, III, IV, V, VI, VII, VIII, IX, X.
IV (4) is one less than V (5).
IX (9) is one less then X(10).

# Counting from 10 to 100.

X, XX,  XXX,  XL,   L, LX,  LXX,  LXXX, XC,  C
XL (40)is ten less than L (50).
XC (90)is ten less than C (100).

# Counting from 100 to 1000.

C, CC,  CCC,  CD,   D, DC,  DCC,  DCCC, CM,  M
CD (400)is one hundred less than D (500).
CM (40)is one hundred less than M (1000)

1,  4,  5,  9,  10, 14, 15, 19, 20, 400, 500,  900,   1000
I,  IV, V,  IX, X,  XL, L,  LX, XC, CD,  D,    CM,    M

Get input number and check against constant numbers array if input can be divided by any numbers in constant array and should produce the remainder as Zero.If I can find it,just convert it into roman number.If there are remainders, check how many is remain and put it as an input, loop the remainder again and convert it to Roman numbers. 

# Possibilites:

The input can be the same number or less than or greater than number in constant numbers array. Let's assume if the input is (8) which will be between 1 and 9. In that case, I will take the biggest number(divisor) which can divide the input (8).So, 1, 5 and 9. (5)is the biggest (divisor)number. 

Eg. 8 / 5 = 1 , (3) 
dividend ÷ divisor = quotient, (remainder)

In the above example, I can convert number (5) to Roman (V). In order to find the exact remainder to be converted into Roman number, I will perform this.

input - numbers[bestDivisorIndexNo]. I will then take remainder (3) as an input and do the same process above.
