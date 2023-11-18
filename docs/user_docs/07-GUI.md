# GUI

Although Scratch already makes it easy to make a GUI, ChromeEngine provides some custom blocks to make your life even easier. These blocks go in the `GUI` sprite. The onTouch and onClick blocks will only apply to whatever costume is shown when the block is called. The following blocks are provided:

- `broadcastOnClick`
- `playSoundOnClick`
- `set/toggleStateOnClick`
- `scaleOnTouch`



**FAQ: what is `GameState?`**
In Scratch there is no way for you to provide a name of a variable and update it through a custom block, however as a workaround we provide a list called `GameState` which can be used to store labelled data. This means we can update "variables" through GUI custom blocks which is very useful.


### `broadcastOnClick`

<ScratchBlocks>
{`
GUI.broadcastOnClick \\( message label [] \\) :: custom
`}
</ScratchBlocks>

If the current GUI element is clicked, it broadcasts the message with label `message label`

### `playSoundOnClick`

<ScratchBlocks>
{`
GUI.playSoundOnClick \\( sound label [] \\) :: custom
`}
</ScratchBlocks>

If the current GUI element is clicked, it plays the sound specified by sound label.


### `set/toggleStateOnClick`

<ScratchBlocks>
{`
GUI.set/toggleStateOnClick \\( state label  [] state value [] toggle? <> \\) :: custom
`}
</ScratchBlocks>

If the current GUI element is clicked it sets the `GameState` variable with label specified by `state label` to the value given by `state value`. If `toggle?` is set to True then it will flip a boolean GameState value, which is useful for toggling things in game.


### `scaleOnTouch`

<ScratchBlocks>
{`
GUI.scaleOnTouch \\( scale factor [] \\) :: custom
`}
</ScratchBlocks>

If the current GUI element is touched by the mouse pointer it scales that element by `scale factor`.