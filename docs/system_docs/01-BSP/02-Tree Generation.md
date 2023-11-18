# Tree Generation

This document provides detailed explanations for the custom block definitions used in the "Tree Generation" page of the "Binary Space Partitioning" docs. The code you'll be looking at was developed for a scratch based 3D engine called ChromeEngine.

## Custom Block Definitions
The custom block definitions are as follows:
- `bsp.__init__`
- `bsp.gen`
- `bsp.recurse on low&up`
- `bsp.partition`
- `bsp.greedy_pivot_selection`
- `test_prim_as_pivot`
- `get_orientation_of_*poly_to_plane (P, N)`
- `primitives.split_prim`
  
## Custom Block Descriptions
Now we'll provide detailed descriptions for each of these custom blocks, including the converted ScratchBlocks code and an explanation of the logic within each block.

### `bsp.__init__`
<ScratchBlocks>
{`
define bsp.__init__ \\( \\)
`}
</ScratchBlocks>

This block initializes the Binary Space Partitioning (BSP) tree. It starts by creating two lists, `_bsp.node_tombstones[]` and `bsp.tree[]`, which will hold the tombstones for nodes and the tree structure respectively. It then adds two nodes to `bsp.tree[]` for initialization. `tmp[]` is also initialized with nine 0s. The `_split_count` variable is set to 0, which will track the number of splits made during the tree generation. Lastly, `bsp._*prims.__init_non_dynamic__()` is called to initialize the primitives with non-dynamic variables.

### `bsp.gen`
<ScratchBlocks>
{`
define bsp.gen \\( (lowerBound) (upperBound) (parent_node) (right?) \\)
`}
</ScratchBlocks>

This block is responsible for generating the BSP tree. It begins by checking if the `lowerBound` and `upperBound` are null, or if the upper bound is equal to the lower bound in the primitives array, if so, it returns without performing any actions. This ensures that we have a valid range to work with. The block then selects a pivot by calling `bsp.greedy_pivot_selection` and if a pivot can't be found, it adds a node to the BSP tree with the `lowerBound` and `upperBound` as the node limits. However, if a pivot is found, the function checks if the `upperBound` and `lowerBound` are not the same, and if so, it partitions the prims into two groups by calling `bsp.partition`. It then groups the primitives by their orientation and adds a node to the BSP tree with the gathered data. The block also sets the parent node's edge to the newly created node, if the parent node is not null. The function then checks if the `upperBound` equals the `lowerBound` or if the pivot is null, and if either condition is true, it returns without proceeding further. If not, it calls the `bsp.recurse on low&up` function for further processing.

### `bsp.recurse on low&up`
<ScratchBlocks>
{`
define bsp.recurse on low&up \\( (lowerBound) (*pivot_list_head) (*pivot_list_tail) (upperBound) (*parent_node) \\)
`}
</ScratchBlocks>

This block is used to recursively generate the BSP tree. It calls the `bsp.gen` function twice - first for the lower partition, and then for the upper partition. 

### `bsp.partition`
<ScratchBlocks>
{`
define _upper, _*pivot_prims_tail = bsp.partition \\( (L) (U) \\)
`}
</ScratchBlocks>

This block partitions the list of primitives into two parts - primitives in front of the pivot plane and those behind the pivot plane. It accepts the `lowerBound` (L) and `upperBound` (U) as inputs. It initializes `_pivot_prims_head` to `L` and `_pivot_prims_tail` to `U`, and `_upper` to `L`. The function then iterates over the primitives in the range `[L, U]` and for each primitive, it calls `test_prim_as_pivot` to test if the primitive can be used as a pivot. If it can't be used as a pivot, it increments `_pivot_prims_tail` and moves the primitive at `_upper` to `_pivot_prims_tail`, effectively moving it to the end of the pivot prims list. If it can be used as a pivot, it moves the primitive at `_pivot_prims_tail` to `_upper`, effectively moving it to the front of the list, and increments `_upper`. The block ends by returning `_upper` and `_pivot_prims_tail`, which now represent the boundaries of the prims that can be used as pivots.

### `bsp.greedy_pivot_selection`
<ScratchBlocks>
{`
define bsp.greedy_pivot_selection \\( (lowerBound) (upperBound) \\)
`}
</ScratchBlocks>

This block selects a pivot prims for partitioning the primitives list. It accepts the `lowerBound` and `upperBound` as inputs. The block first calculates the middle index in the range `[lowerBound, upperBound]` and if the primitive at the middle index can be used as a pivot (determined by calling `test_prim_as_pivot`), it returns this primitive as the pivot. If it can't be used as a pivot, the block iterates over the primitives in the range `[lowerBound, upperBound]`, in order, and returns the first primitive it finds that can be used as a pivot. If no pivot can be found, it returns null.

### `test_prim_as_pivot`
<ScratchBlocks>
{`
define test_prim_as_pivot \\( (*pivot) (L) (U) \\)
`}
</ScratchBlocks>

This block tests whether a primitive can be used as a pivot or not. It accepts the primitive to test (`pivot`), and the `lowerBound` (L) and `upperBound` (U) of the range in which to test the primitive. The function iterates over the primitives in the range `[L, U]` and for each primitive, it calls `get_orientation_of_*poly_to_plane (P, N)` to get its orientation with respect to the pivot. If the primitive's orientation is such that it is on the same side as the pivot, it increments a counter. If the number of primitives that are on the same side as the pivot is greater than a threshold (for example, 90% of the primitives), it returns true, indicating that the primitive can be used as a pivot. Otherwise, it returns false.

### `_node_curr, _ori, _intersects = get_orientation_of_*poly_to_plane (P, N)`
<ScratchBlocks>
{`
define _node_curr, _ori, _intersects = get_orientation_of_*poly_to_plane \\( (P, N) *poly (*poly) plane (P,N) (Px) (Py) (Pz) (Nx) (Ny) (Nz) do split? <do_split?> **Prim (**prim) \\)
`}
</ScratchBlocks>

This custom block calculates the orientation of a polygon with respect to a plane and tests if the polygon intersects the plane. The block accepts the polygon (`*poly`), the definition of the plane (`Px, Py, Pz, Nx, Ny, Nz` which represent the point and normal of the plane), a boolean indicating whether to split the polygon if it intersects the plane (`do_split?`), and the primitive to use if a split is required (`**Prim`). 

Initially, the block initializes `_intersects?` to `0` indicating no intersection and `_count` to track the number of vertices processed. It extracts the first vertex index of the polygon and calculates the dot product of the plane's normal and the vector from a point on the plane to this vertex (`_dot`). This value (`_dot_curr`) is used to determine the sign of the vertex with respect to the plane. This process is iterated for each vertex of the polygon in a loop. If the sign of a vertex is different from the sign of the previous vertex, this indicates a potential intersection. 

In case of an intersection, if `do_split?` is set to true, the polygon is split by adding two new vertices at the intersection points and creating a new primitive for the second half of the split polygon. The new primitive is inserted into `bsp._*prims`. If `do_split?` is set to false, the function terminates and returns. 

### `_*prim = primitives.split_prim ( *prim, *intersectA, *intersectB )`
<ScratchBlocks>
{`
define _*prim = primitives.split_prim \\( *prim (*prim) *intersectA (*A) *intersectB (*B) \\)
`}
</ScratchBlocks>

This custom block splits a primitive into two at the given intersection points. The block takes as input the primitive to split (`*prim`), and two intersection points (`*intersectA`, `*intersectB`). 

The process of splitting involves changing the connectivity of vertices in the polygon by inserting new vertices at the intersection points. The first intersection point is inserted after the vertex indexed by `*intersectA` and the second intersection point is inserted after the vertex indexed by `*intersectB`. The links between vertices are updated to ensure the continuity of the polygons after the split. 

A new primitive is then created for the second half of the split polygon. This new primitive shares the same attributes as the original primitive but has a different set of vertices. The primitive count `_split_count` is incremented as well.