# Controllers

These are blocks which control player and/or camera movement. They should be placed within the `Logic sprite`. The following blocks are provided:

- `PlayerController`
- `targetGameObjWithOffset`
- `arrowKeysRotateCam`
- `freeLook`

### `PlayerController`

<ScratchBlocks>
{`
controllers.playerController \\( walk speed  [], run speed  [], jump height [], glide/walk mode = <>\\) :: custom
`}
</ScratchBlocks>

Makes it so the arrow keys and WASD can be used to move the player in 3D space. Additionally targets the player with the camera.
- **Walk speed**: the speed the player moves normally
- **Run speed**: the speed the player moves when shift key is pressed.
- **Jump height**: height of game units the player will move up on the y axis when the spacebar is pressed
- **glide/walk mode**: If set to true the player will move around as if they have legs otherwise the player will move like a rolling ball.

### `targetGameObjWithOffset`

<ScratchBlocks>
{`
Controllers.targetGameObjWithOffset \\( object name [] offset  []  []  [] \\):: custom
`}
</ScratchBlocks>

Targets a game object and follows it around with an `offset` vector, creating a third-person perspective.

### `arrowKeysRotateCam`

<ScratchBlocks>
{`
Controllers.arrowkeysRotateCam \\(\\) :: custom
`}
</ScratchBlocks>

Rotates the camera's yaw and pitch, when arrow keys are pressed. Rotation is intrinsic meaning it will always be relative to whatever direction the camera is currently looking.

### `freeLook`

<ScratchBlocks>
{`
Controllers.freeLook \\(\\)  :: custom
`}
</ScratchBlocks>

Allows rotation and movement of the camera freely, with out any connection to the player object. Useful in edit mode.

