## To Do List

1) Set up your GameContext and initialize your board state (I would model the board as an array of objects that track the space number and the content in the space. Empty spaces can just have an empty string. {space: 4, content: ''}))

2) Initialize your state
    - currentPlayer (‘X’ or ‘O’)
    - active (true / false)
    - gameMessage (says who’s turn it is, who won or if its a cats game)

3) Create a Board component which reads the board state from the context and renders a Box component for each space

4) Add a click handler to the Box component that calls a function in the context for handling a space click

5) Add the logic for handling the space click in game context
    - If the space already contains an ‘X’ or an ‘O’, return
    - If the game is no longer active, return
    - Otherwise, set the space’s content to the current player
    - Switch current player

6) On every render of the App, you should check the game status and set active to false if any of the “end game” conditions are met
    - All spaces are taken (Cats / Scratch game)
    - A player has 3 in a row (don’t be too clever about this - you can just have repetitive code to check for a winner)
    - If the end game conditions are met, update active and the game message

7) Add a button to reset the game
    - Should reset the board
    - Reset the current player to ‘X’
    - Update game message

## Rubric

    Board styling to look like a tic-tac-toe board - 2

    GameContext file which contains the game state and logic - 4

    Users can click spaces and it shows an ‘X’ or ‘O’ - 2

    Users see a message with the current state (user turn, winner or cats game) - 2

    When a user has 3 in a row, a message is displayed with the winner - 4

    When there is no winner, a message is displayed saying its a Cats game - 4

    Users can restart the game - 2

## Stretch Goals

Add a /stats page that shows stats for total games played, times X has won, times O has won
Allow users to pick emojis instead of ‘X’ or ‘O’ to play with
Add a supabase table to track all-time game stats that loads when the page loads