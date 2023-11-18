# Updating Scene

To make playable interactive games you will need to update GameObjects and Materials within the game. Thankfully ChromeEngine provides numerous blocks to help you with this:

 - **Updating GameOjects**
    - `move`
    - `pointTowardsObject`
    - `pointTowardsPosition`
    - `setPosition`
    - `setRotation`
    - `setScale`
    - `setUpdated`
    - `setVisibility`
    - `transform`
- **Updating Materials**
    - `setColour`
    - `setTexture`

## Updating GameOjects


### `move`
<ScratchBlocks>
{`
GameObject.move \\( object name [] steps [] \\) :: custom
`}
</ScratchBlocks>

Moves the object with name `object name`, `steps` distance in the direction of it's forward vector as defined by it's current rotation. This is a 3D version of scratch's move block.

### `pointTowardsObject`
<ScratchBlocks>
{`
GameObject.pointTowardsObject \\( object 1 name [] object 2 name [] \\) :: custom
`}
</ScratchBlocks>

Points the object with name `object 1 name` towards the object with name `object 2 name`.

### `pointTowardsPosition`
<ScratchBlocks>
{`
GameObject.pointTowardsPosition\\( object name [] position [] [] [] \\) :: custom
`}
</ScratchBlocks>

Points the object with name `object name` towards a point in 3D space defined by `Position` which should be an x,y,z coordinate

### `setPosition`

<ScratchBlocks>
{`
GameObject.setPosition \\( object name [] position  [] [] [] \\) :: custom
`}
</ScratchBlocks>

Sets the position of the object with name `object name`. The coordinate system used by ChromeEngine is based on the system used by OpenGL. It is a right-handed system, which means that:

- The x-axis goes from left (negative values) to right (positive values).
- The y-axis goes from bottom (negative values) to top (positive values).
- The z-axis goes from far (negative values) to near (positive values).

### `setRotation`

<ScratchBlocks>
{`
GameObject.setRotation \\( object name  [] rotation  [] [] []\\) :: custom
`}
</ScratchBlocks>

Sets the rotation of the object with name `object name`. Rotation in ChromeEngine is defined using Euler angles, a method where we specify the pitch, yaw, and roll to define the orientation of an object.

- Pitch is the rotation around the X axis (tilting up and down).
- Yaw is the rotation around the Y axis (turning left and right).
- Roll is the rotation around the Z axis (tilting side to side).

### `setScale`

<ScratchBlocks>
{`
GameObject.setScale \\( object name  [] scale xyz  [] [] []\\) :: custom
`}
</ScratchBlocks>

Sets the scale of the object with name `object name`.

### `setUpdated`

<ScratchBlocks>
{`
GameObject.setUpdated \\( object name  [] \\) :: custom
`}
</ScratchBlocks>

Sets the "Updated" flag for the object with name `object name` to `True`. In ChromeEngine if this flag isn't set the object's world coordinate data won't be updated. By default any of the blocks which updates a gameobject will call this block, so this is only needed if you modify the underlying world data without using one of the GameObject update blocks.

### `setVisibility`

<ScratchBlocks>
{`
GameObject.setVisibility \\( object name  [] visibility <>\\) :: custom
`}
</ScratchBlocks>

Sets the visibility of the object with name `object name`

### `transform`

<ScratchBlocks>
{`
GameObject.transform \\( object name  [] translate [] [] [] rotate [] [] []\\) :: custom
`}
</ScratchBlocks>

Applies a translation and/or rotation to the object with name `object name`. This is equivalent to setting the position or rotation to the current position or rotation plus some vector. useful if you know the translation or rotation vector but not the final position/rotation. They should be placed within the `Logic sprite`.

## Updating Materials

### `setColour`

<ScratchBlocks>
{`
Materials.setColour \\( material name  [] rgba [] [] [] []\\) :: custom
`}
</ScratchBlocks>

Sets the colour of the material with name `material name` to the rgba value provided.

### `setTexture`

<ScratchBlocks>
{`
Materials.setTexture \\( material name  [] texture costume name/# []\\) :: custom
`}
</ScratchBlocks>

Sets the texture costume of the material with name `material name` to the `texture costume name/#`. If a number is provided the costume # will be used to select the costume, otherwise the costume name will be used.




