# Jurassic Park Slide Puzzle game

MOTIVATION:
This game was designed as part of Per Scholas HTML, CSS and JavaScript project from week number six of the Software Engineer program. I chose to make a slide puzzle of the logo of one of my favorite 90’s movies, Jurassic Park. I hope you find the game entertaining and valuable for all of us learning about these technologies.


Build Status:

The basic logic and appearance of the game is completed according to the Project 
guidelines provided by Per Scholas. The Jurassic Park Slide Puzzle game still has 
a lot of room for improvement, However the game is visually captivating and the 
overall logic is easy to understand.

Code Style:

HTML: 
3 overlay divs,1 div for the main board, 1 footer, 1 H1 tag.

CSS: 
Several styling properties were used including flexbox, @keyframes, Background colors, 
border-radius and alignment properties. Also a couple of GIPHY elements to make the overlay 
transitions more user friendly. 

JavaScript:

The logic is always challenging. I decided to take a simple approach to the logic included in 
the game. The upper part of the JS file contains global variables which are used by the different 
functions. 
I decided NOT to create a matrix(board game) on HTML but to take the approach of creating the board 
game importing the elements from JS directly, this with the intention of practicing what was taught 
to us in class. The most challenging part of the game was to get the board game to switch the different
pieces around and to compare the solutionPuzzle array against the originalPuzzle array. I found it
challenging to understand as well how to make the pieces move left or right, not to overlap with each o
ther or move diagonally.
The code has a win and a lose statement as well as a restart. The player is basically trying to put the 
pieces of the puzzle in the right order before the time runs up (60 seconds).


# HOW TO PLAY.

* Players will have to click the game to start.
  ![play](https://github.com/willmen37/PROJECT1/assets/66979518/367d97bc-a8cc-4008-9c5d-475b02ed144c)

* The timer is automatically set to 60 seconds.
  ![game](https://github.com/willmen37/PROJECT1/assets/66979518/521d9f8c-91ba-4505-949f-f0ba41166bf6)

* The last piece in the bottom right is the empty piece, the player should move the piece up, 
  down left or right to get all the pieces together so the Jurassic Park logo will be put together.
  Player is NOT allowed to move diagonally, or to replace a piece that is not adjacent to the empty 
  piece.
* Once Player either wins or loses, the overlay text will let the player play again by clicking
  anywhere on the screen.
  
![win](https://github.com/willmen37/PROJECT1/assets/66979518/bc14eecb-1822-479e-9c89-56fe4a70c54a)

![over](https://github.com/willmen37/PROJECT1/assets/66979518/b9e07ee8-3edd-480a-8100-8b21d539d74c)







