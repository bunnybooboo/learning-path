# Problem 1
# Write a program to calculate the credit card balance after one year if a person only pays the
# minimum monthly payment required by the credit card company each month.
#
# Use raw_input() to ask for the following three floating point numbers:
#
# 1. the outstanding balance on the credit card
my_balance = raw_input("Enter the outstanding balance on your credit card:")
# 2. annual interest rate
interest_rate = raw_input("Enter the annual credit card interest rate as a decimal: ")
# 3. minimum monthly payment rate
payment_rate = raw_input("Enter the minimum monthly payment rate as a decimal:")
#
# For each month, print the minimum monthly payment, remaining balance, principle paid in the
# format shown in the test cases below. All numbers should be rounded to the nearest penny.
#
balance = my_balance
month = 1
while balance >= 0:
    print month
    month += 1
    min_payment = 
#
# Finally, print the result, which should include the total amount paid that year and the remaining balance.
#
# Test Case 1
# >>>
# Enter the annual credit card interest rate as a decimal: .2
# Enter the outstanding balance on your credit card: 4800
# Enter the minimum monthly payment rate as a decimal: .02
# Month: 1
# Minimum monthly payment: $96.0
# Principle paid: $16.0
# Remaining balance: $4784.0
# Month: 2
# Minimum monthly payment: $95.68
# Principle paid: $15.95
# Remaining balance: $4768.05
# Month: 3
# Minimum monthly payment: $95.36
# Principle paid: $15.89
# Remaining balance: $4752.16
#
# Test Case 2
# In recent years, many credit card corporations tightened restrictions by raising their minimum
# monthly payment rate to 4%. As illustrated in the second test case below, people will be able to
# pay less interest over the years and get out of debt faster.
# >>>
# Enter the outstanding balance on your credit card: 4800
# Enter the annual credit card interest rate as a decimal: .2
# Enter the minimum monthly payment rate as a decimal: .04
# Month: 1
# Minimum monthly payment: $192.0
# Principle paid: $112.0
# Remaining balance: $4688.0
# Month: 2
# Minimum monthly payment: $187.52
# Principle paid: $109.39
# Remaining balance: $4578.61
# Month: 3
# Minimum monthly payment: $183.14
# Principle paid: $106.83
# Remaining balance: $4471.78
