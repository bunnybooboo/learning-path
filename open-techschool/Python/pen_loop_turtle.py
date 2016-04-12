import turtle

i = 0
jump = 15

for i in range(6):
    for jump in range(15):
        turtle.pendown()
        turtle.forward(jump)
        turtle.penup()
        turtle.forward(jump)
        jump += 10

turtle.exitonclick()

