# A Visit to the Cat Cafe: A Cozy Text-Based Adventure Game

## Game Concept and Structure
For my text-based adventure game, I created a story about visiting a cat cafe, meeting several cats, and finding a new companion. The user chooses which actions they want to take and they decide which cat they want to take home. There are three action options (playing, sitting, and eating), and the user can do all three in any order they like, or they can just do one or two actions before choosing which cat they want. Each of the actions introduces the user to two cats, describing their appearance and personality. After these introductions, the user can either choose the next action they want to take or choose which cat they want to take home. The action options will only show activities the user hasn't completed yet, and the cat selection page will only show cats the user has met so far.

## Logic Overview
* User clicks the Start button
  * Hides the title screen and shows the game screen, loads the "opening" scene
* showScene(sceneName) function:
  * Looks up the scene name in the scenes object
  * If user just completed an activity, it's marked as complete by the markActivity(activity) function (and the cats they've met are recorded)
  * Loads the scene's text, image (if there is one), and determines which buttons to display
    * On decision scenes, it only shows buttons for activities that haven't been marked as complete yet, as well as the cat selection option
    * For the cat selection screen, it only shows the cats players have met so far, tracked by the catsMet array
  * Resets the game state if returning to the opening scene (after clicking "Play Again?")
* The gameState object tracks:
  * Which activities have been completed
  * Which cats the user has met so far
* When the user chooses a cat on the cat selection scene:
  * Goes to that cat's ending scene
  * Shows a "Play Again?" button that returns to the opening scene and resets the game state if the user presses it
