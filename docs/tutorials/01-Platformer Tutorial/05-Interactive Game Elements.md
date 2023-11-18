# Interactive Game Elements

import deathSound from './media/death_sound.mp3'
import winSound from './media/win_sound.mp3'

Welcome to the "Interactive Game Elements" section of our platformer tutorial! Here, we're going to make our game world come alive by programming objects in the game to interact with each other! Ready to breathe life into your game? Let's go!

## The `playerIsTouching?` block

ChromeEngine makes it super simple to check if the player is touching an object using the  `Interactions.playerIsTouching?` block:

<ScratchBlocks>
{`
_touching? = Interactions.playerIsTouching? \\( object name  [] label  [] \\) :: custom
`}
</ScratchBlocks>

If the player touches the specified block it sets `_touching?` to true, and adds the specified label to the `interactions` list

## Killing the player if they touch a hazard

We'll use the `Interactions.playerIsTouching?` block to check if the player is touching any of the hazards and if so add `hazard` to the `ìnteractions` list. Then we'll make it so that if `interactions` contains hazard or the player y is below the level of the ground we reset the player back to the start and play a death sound effect.

Here's the code to do this:

<ScratchBlocks>
{`
_touching? = Interactions.playerIsTouching? \\( object name  [Spike 1] label  [hazard] \\) :: custom
_touching? = Interactions.playerIsTouching? \\( object name  [Spike 2] label  [hazard] \\) :: custom
_touching? = Interactions.playerIsTouching? \\( object name  [Enemy] label  [hazard] \\) :: custom
if <<[interactions v] contains [hazard] ?> or <(@player_y) < (@ground_y)>> then
    set [@player_x v] to [0]
    set [@player_y v] to [1]
    set [@player_z v] to [0] 
    start sound [death_sound v]
`}
</ScratchBlocks>

For the `death_sound`, first download the below sound by clicking the triple dots then `Download`. Then you should import it into the `Logic` sprite:

<audio src={deathSound} controls />


## Winning when touching the end platform
If the player is touching the end platform, we'll set a variable called `has_won?` to 1. We'll also must add the condition that `has_won?` must be 0, or they will repeatedly win the game! And again for dramatic effect lets play a happy sound. This time we directly use the `_touching?` variable instead of checking if the `interactions` list contains our label

<ScratchBlocks>
{`
_touching? = Interactions.playerIsTouching? \\( object name  [End] label  [] \\) :: custom
if <<(_touching?) = [1]> and <(has_won?) = [0]>> then
    set [has_won? v] to [1]
    start sound [win_sound v]
`}
</ScratchBlocks>

And again here's a sound byte for you to use for the `win_sound`:
<audio src={winSound} controls />

### Showing a win screen

Let's give the player a congratulatory message when they win! First make a costume titled `win_screen`in the `GUI` sprite and design your fantastic win message. Then just add the following to the `Game GUI()` script, in the `GUI` sprite, to show your message:

<ScratchBlocks>
{`
if <(has_won?) = [1]> then
    switch costume to (win_screen v)
    stamp
`}
</ScratchBlocks>

This simply checks if we're in the `has_won` state and if so shows the win_screen.

## Congratulations!

And there you have it! Our platformer game is now Complete! We hope you enjoyed the tutorial and can't wait to see what you make with ChromeEngine!

(For more detailed information on object interactions in ChromeEngine, you can visit the guide [Object Interactions](/docs/user_docs/Interactions))

