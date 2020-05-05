import math

def absval(x):
    if x<0:
        y=-x
    elif x>=0:
        y=x
    return y
    
def average(x, y):
    z=x+y/2
    return z
    

def average_2ormore(*values):
    average=0
    for x in values:
        average+=x
    average/=2
    return average
    

def make_absval_equation(answer1, answer2):
    average(answer1, answer2)
    