import turtle


# turtle.forward()

def move():
    direction = input("Print 'hexagon', or draw 'left' or 'right'? ")
    direction = direction.strip().lower()
    if direction == "left":
        turtle.left(60)
        turtle.forward(50)
    if direction == "right":
        turtle.right(60)
        turtle.forward(50)
    if direction == "hexagon":
		for _ in range(6):
			turtle.forward(100)
			turtle.right(60)

print move()

turtle.exitonclick()
