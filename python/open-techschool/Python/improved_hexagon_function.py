import turtle

def draw_shape(sides, length):
    for _ in range(sides):
        turtle.forward(length)
        turtle.left(360 / sides)

def hexagon():
    return draw_shape(6,50)

def square():
	return draw_shape(4, 50)
	
def triangle():
	return draw_shape(3, 50)

print triangle()
turtle.penup()
turtle.forward(150)
turtle.pendown()

print square()
turtle.penup()
turtle.forward(150)
turtle.pendown()

print hexagon()
turtle.penup()
turtle.forward(150)
turtle.pendown()

turtle.exitonclick()
