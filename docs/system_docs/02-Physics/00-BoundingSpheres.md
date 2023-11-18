# Bounding Spheres Generation

The following custom block definitions are present in the Bounding Spheres Generation code:

1. `primitives.generate_bounding_spheres`
2. `GameObjects.generate_bounding_spheres`
3. `_x, _y, _z, _r = RitterSphere`
4. `_x,_y,_z,_r = SphereFromDistantPoints`
5. `_min, _max = MostSeparatedPointsOnAABB`
6. `_x,_y,_z,_r = SphereOfSphereAndPt`

## Custom Block Descriptions

### primitives.generate_bounding_spheres

<ScratchBlocks>
{`
define primitives.generate_bounding_spheres \\(\\)
`}
</ScratchBlocks>

This custom block calculates the bounding spheres for each primitive. It starts by initializing `_*prim` to 1 and then repeating the calculations for each primitive. If the primitive is not a container, it adds the primitive to the `idxs_tmp` list and calculates the bounding sphere using the Ritter Sphere algorithm. It adds the bounding sphere coordinates and radius to the `bsphere_buff` list and updates the primitive's `*BSPHERE` attribute. If the primitive has less than three vertices, it adds the primitive's radius to the bounding sphere radius. Finally, it copies all the calculated bounding spheres to the `bsphere_world` list.

### GameObjects.generate_bounding_spheres

<ScratchBlocks>
{`
define GameObjects.generate_bounding_spheres \\(\\)
`}
</ScratchBlocks>

This custom block calculates the bounding spheres for each game object, following a similar process as the `primitives.generate_bounding_spheres` block. It adds each vertex of the object to the `_tmp` list and calculates the bounding sphere using the Ritter Sphere algorithm. It adds the bounding sphere coordinates and radius to the `bsphere_buff` list, updates the object's `*BSPHERE` attribute, and copies all the calculated bounding spheres to the `bsphere_world` list.

### _x, _y, _z, _r = RitterSphere

<ScratchBlocks>
{`
define _x, _y, _z, _r = RitterSphere \\( (*tmp) \\)
`}
</ScratchBlocks>

This custom block calculates the bounding sphere for a set of vertices stored in the `_tmp` list using the Ritter Sphere algorithm. It starts by calculating an initial bounding sphere from the two most distant points in the list, and then checks each remaining vertex in the list. If a vertex is outside the current bounding sphere, it calculates a new bounding sphere that includes the vertex and the current bounding sphere.

### _x,_y,_z,_r = SphereFromDistantPoints

<ScratchBlocks>
{`
define _x,_y,_z,_r = SphereFromDistantPoints \\( (*tmp) \\)
`}
</ScratchBlocks>

This custom block calculates a bounding sphere from the two most distant points in the `_tmp` list. It first identifies these points using the `MostSeparatedPointsOnAABB` block, and then calculates the center of the bounding sphere as the midpoint between the points, and the radius as the half of the distance between the points.

### _min, _max = MostSeparatedPointsOnAABB

<ScratchBlocks>
{`
define _min, _max = MostSeparatedPointsOnAABB \\( (*tmp) \\)
`}
</ScratchBlocks>

This custom block identifies the two most separated points on an axis-aligned bounding box (AABB) from a list of vertices stored in the `_tmp` list. It iterates over the list three vertices at a time (representing the x, y, and z coordinates of each

 vertex), finding the minimum and maximum x, y, and z values. It calculates the squared distance between the minimum and maximum points for each dimension, and returns the indices of the two most separated points.

### _x,_y,_z,_r = SphereOfSphereAndPt

<ScratchBlocks>
{`
define _x,_y,_z,_r = SphereOfSphereAndPt \\( Sphere (Sx) (Sy) (Sz) (Sr), Pt (Px) (Py) (Pz) \\)
`}
</ScratchBlocks>

This custom block calculates a new bounding sphere that includes a given point and a current bounding sphere. If the given point is outside the current bounding sphere, it calculates a new bounding sphere with a radius half way between the current bounding sphere and the given point, and a center that lies on the line between the center of the current bounding sphere and the given point, closer to the given point.