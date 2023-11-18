# Material Creation

We assign `Materials` to primitives in our scene to tell the Engine how to colour/texture that material. Below are all the blocks ChromeEngine provides to help you work with `Materials`:

- `importFromMTL`
- `newMaterial`
- `setDoubleSided`
- `setPhysics`
- `setSecondaryColour`
- `setSFX`
- `setTexture`

### `importFromMTL`

<ScratchBlocks>
{`
Materials.importFromMTL\\( .MTL file data []\\) :: custom
`}
</ScratchBlocks>

To import many materials at once from a .MTL file you can use this block, just copy and paste the MTL file into the `.MTL file data` input.

### `newMaterial`

<ScratchBlocks>
{`
Materials.newMaterial \\( label [] pointer to secondary colour material [ ] sfx sound name [ ] texture costume name [ ] Colour \\(R,G,B,A\\) [] no collider? <> bounciness \\(0-1\\) [ ]) :: custom
`}
</ScratchBlocks>

Used to create a new material from Scratch. It has the following inputs:

- **label** - what we will use to refer to this material in future
- **pointer to secondary colour material** - a pointer to a material, that should be used as the back face colour if the primitive is double sided.
- **sfx sound name** - the name of a sound file in the `Logic` sprite which will be played when a player walks on a primitive with this material.
- **texture costume name** - the name of a texture contained as a costume in the sprite `render`. If specified ChromeEngine will use a texture for this primitive.
- **Colour** - the colour separated RGBA value for the primitive. If you don't specify `texture costume name` you'll need to specify this or your material won't have a colour and will default to black. You can leave out the A component, and the colour will default to an alpha of 1.
- **no collider?** - lets you turn off collisions for this material.
- **bounciness** - The restitution value of the material. A value between 0 and 1, where 0 is if the material absorbs all energy, 1 if it preserves all energy

### `setDoubleSided`
<ScratchBlocks>
{`
Materials.setDoubleSided \\( comma separated list of materials: [] \\) :: custom
`}
</ScratchBlocks>

Lets you specify a list of materials that should be double-sided. Aka materials without backface culling. Useful if you use `importFromMTL` as you can't specify the double sided property in a MTL file.

### `setPhysics`

<ScratchBlocks>
{`
Materials.setPhysics \\( material [] no collider? <> bounciness []\\) :: custom
`}
</ScratchBlocks>

lets you set the physics properties of materials, including `no collider?` which turns off collisions and `bounciness` which sets how much energy the material absorbs when the object bounces on it.

### `setSecondaryColour`

<ScratchBlocks>
{`
Materials.setSecondaryColour\\( Material [] Colour \\(R,G,B,A\\) \\) :: custom
`}
</ScratchBlocks>

Sets the secondary colour property of the material. This lets you specify a different colour to the main one for the back side of the primitive. This is useful for having your interior of your scene be different coloured to the exterior without needing to using meshes with thickness. Setting a secondary colour will automatically make your material double sided.

### `setSFX`

<ScratchBlocks>
{`
Materials.setSfx \\( material [] sound effect label []\\) :: custom
`}
</ScratchBlocks>

Sets the SFX property of the material. This is the name of a sound file in the `Logic` sprite which will be played when a player walks on a primitive with this material.

### `setTexture`

<ScratchBlocks>
{`
Materials.setTexture\\( material [] texture costume name []\\) :: custom
`}
</ScratchBlocks>

Sets the texture property of the material. The `texture costume name` should be the costume name of a texture in the sprite `render`. If specified ChromeEngine will use a texture for this primitive. You can use textured materials on 3D Points which will be shown as billboards but you can also have proper textured polygon primitives but only if the costumes were created using the [Texture Converter tool](https://github.com/Joeclinton1/texture_converter). This is powered by STTF and you should not use too many textures (max 20) as they use 100MB of ram per texture. 