import turtle

sides = 4

for sides in range(4):
    turtle.forward(150)
    turtle.right(90)
    sides -= 1
    for drawing in range(4):
        turtle.penup()
        turtle.forward(5)
        turtle.pendown()
        turtle.forward(5)

turtle.exitonclick()

