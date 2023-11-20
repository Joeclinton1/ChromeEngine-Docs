# GameObject Creation

In ChromeEngine we provide the following blocks which let you create different types of meshes quickly:
 - `create3DLine`
 - `create3DPoint`
 - `createCone`
 - `createCuboid`
 - `createPlayer`
 - `createPrismUsing@polygon`
 - `createTri/Quad`
 - `importFromOBJFile`

There are some inputs in these blocks which are the same:

- **Material**: This is where you specify the material that all the primitives that make up this GameObject will use
- **Parent**: lets you specify a game object that the primitive should be appended as a child of instead of creating a new gameobject.
- **Name**: All GameObject creation blocks have this input. It's used if you need to reference the object later.
- **position**: If the block has this input, it sets the centre position in x,y,z
- **rotation**: If the block has this input, it sets the rotation in yaw,pitch,roll euler angles

### `create3DLine`

<ScratchBlocks>
{`
GameObjects.create3DLine \\(Pt A [ ] [ ] [ ] Pt B [ ] [ ] [ ] material [ ] radius [ ] parent [] name [ ]) :: custom
`}
</ScratchBlocks>

Creates a 3D line between two points. This is a line with thickness, that is technically a capped cylinder without any shading. Pt A and B are coordinates in 3D space, radius is the thickness.

### `create3DPoint`
<ScratchBlocks>
{`
GameObjects.create3DPoint \\(material name [] radius [] scale y [] position [] [] [] parent [] shadow offset dist [] name []) :: custom
`}
</ScratchBlocks>

This line creates a 3D point. It can either be a pen dot or a billboard sprite depending on what we set to be the material. if our sprite is a special stretchable style sprite, then scale y can be used to stretch it in the y-axis. If shadow offset dist is set the shadow for this will be at a fixed distance, which is useful for faking shadows for floating objects above complex geometry.

### `createCone`

<ScratchBlocks>
{`
GameObjects.createCone \\(Radius [] Height [] Number of sides [] Position [ ] [ ] [ ] Rotation [ ] [ ] [ ] Material [ ] name [ ]\\) :: custom
`}
</ScratchBlocks>

Lets us create a cone (also called an n-sided regular pyramid). You can specify the `Radius` of the base, the `Number of sides` of the base, and the height from base to apex.

### `createCuboid`
<ScratchBlocks>
{`
GameObjects.createCuboid \\(Scale [ ] [ ] [ ] Position [ ] [ ] [ ] Rotation [ ] [ ] [ ] Material [ ] name [ ]\\) :: custom
`}
</ScratchBlocks>

Creates a cuboid. Scale lets us set the x,y,z dimensions of our cuboid (width, height,depth)

### `createPlayer`

<ScratchBlocks>
{`
GameObjects.createPlayer \\( position [] [] [] first person view? <> Fixed shadow? <>\\) :: custom
`}
</ScratchBlocks>

Creates a Player object. We can specify where we want our player to start with position, whether we want to use first person or third person view, and whether we want the player to have a fixed drop shadow or for the shadow to project onto the ground plane. This is the only create block without a name because the Player's object name is required to be `Player`.

### `createPrismUsing@polygon`

<ScratchBlocks>
{`
GameObjects.createPrismUsing@polygon \\( height [] position [] [] [] Rotation [] [] [] Material [ ] name <>\\) :: custom
`}
</ScratchBlocks>

Creates a prism using the `@polygon` list. First add points in x,y,z format to the `@polygon` list and then call this block and it will use those points as the base for the primitive. Height is the height of the primitive. For example this block can be used to create buildings or mazes.

### `createTri/Quad`

<ScratchBlocks>
{`
GameObjects.createTri/Quad \\(Pt A [] [] [] Pt B [] [] [] Pt C [] [] [] Pt D \\(leave blank if tri\\) [] [] [] parent [] material [] name []\\) :: custom
`}
</ScratchBlocks>

Used to create a single Tri or Quad primitive. A,B,C,D define the vertices in x,y,z format of the triangle or quad. If D is left empty it will create a triangle otherwise it creates a Quad. Useful for adding details or for programmatically generating meshes.

## Import/Export blocks

### `importFromOBJFile`

<ScratchBlocks>
{`
GameObjects.import_from_OBJ_file \\( CW orientated? <> scale [] align_center <> .obj file data \\(leave blank if using _OBJ list\\) []\\) :: custom
`}
</ScratchBlocks>


Imports an .obj file into ChromeEngine. You can either import your .OBJ file to the `_OBJ` list and let it import from their or you can copy and paste your obj file into the `.obj file data` input to import it directly. 

- `CW orientated? [1]`: indicates that your object's faces are oriented clockwise.
- `scale`: lets you scale up or down the model. Default is 1.
- `align_centre`: lets your re-centre your mesh

### `exportScene`

<ScratchBlocks>
{`
_OBJ = exportScene\\(\\) :: custom
`}
</ScratchBlocks>

Exports the whole scene to a custom ChromeEngine .OBJ file. This scene stores all the geometry in native .OBJ format but also contains support for exporting the BSP tree and BSP.*prims list, which is super useful if you want to pre-compute your BSP tree.


## Dynamic Objects

### `setDynamic`

<ScratchBlocks>
{`
GameObjects.setDynamic \\( object name [] parent object [] \\) :: custom
`}
</ScratchBlocks>

Lets you mark Objects within ChromeEngine as being `Dynamic`, which means if they move they will be reinserted within the BSP tree. If you don't mark objects as sorted and move them they will likely have visual bugs. You can specify for the object to reinsert into a subtree instead of the main tree with the `parent object` input. This can be used to provide more control over how dynamic objects are sorted via BSP.

### `offsetDynamicCentre`

<ScratchBlocks>
{`
GameObjects.offsetDynamicCenter \\( object name [] offset [] [] []\\) :: custom
`}
</ScratchBlocks>

Dynamic Objects are sorted in the scene as if they were a single point. This point used for sorting is by default the centre of mass, but you can use this function to `offset` it by a fixed xyz vector. This gives more control over how dynamic objects are sorted.