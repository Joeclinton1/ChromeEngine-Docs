# Interactions

ChromeEngine provides a number of custom blocks to help with sensing interactions and retrieving GameObject data. They should be placed within the `Logic sprite`. These are the blocks available:

 - `check_and_add_interaction`
 - `playerIsTouching?`
 - `getPosition`


### `check_and_add_interaction`
<ScratchBlocks>
{`
_interacted = interactions.check_and_add_interaction \\( object 1 name [] object 2 name [] interaction distance  [] label  [] add to interactions list? <>\\) :: custom
`}
</ScratchBlocks>

Sets `_interacted` to True, if object 1 and object 2's bounding spheres are closer than the specified `interaction distance`. Additionally adds `label` to the `interactions` list if `add to interactions list?` is set to True. 

### `playerIsTouching?`

<ScratchBlocks>
{`
_touching? = Interactions.playerIsTouching? \\( object name  [] label  [] \\) :: custom
`}
</ScratchBlocks>

Sets `_touching?` to True if the `player` object is touching `object name`. Additionally adds the specified `label` to the built-in `interactions` list

### `getPosition`

<ScratchBlocks>
{`
_x, _y, _z = GameObjects.getPosition \\( object name  [] label  [] \\) :: custom
`}
</ScratchBlocks>