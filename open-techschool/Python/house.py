import turtle
import math

a = 150
b = 150

c = math.sqrt(a**2 + b**2)

turtle.forward(150)
turtle.right(90)
turtle.forward(150)
turtle.right(90)
turtle.forward(150)
turtle.right(90)
turtle.forward(150)
turtle.right(45)

turtle.forward(c / 2)
turtle.right(90)
turtle.forward(c / 2)
turtle.right(90)

turtle.forward(c)
turtle.right(135)
turtle.forward(150)
turtle.right(135)
turtle.forward(c)

turtle.exitonclick()
