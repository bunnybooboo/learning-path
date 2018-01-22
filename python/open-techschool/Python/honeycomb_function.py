import turtle

def hexagon_function():
    sides = 0
    for sides in range(6):
        turtle.forward(50)
        turtle.left(60)

#def turn():
#	turtle.penup()
#	turtle.forward(50)
#	turtle.right(60)
#	turtle.pendown()
	

for times_drawn in range(6):
    print hexagon_function()	# print turn()
    turtle.penup() # folowing the solution
    turtle.forward(50) # they combined what I had as two functions
    turtle.right(60) # into one
    turtle.pendown()

turtle.exitonclick()
