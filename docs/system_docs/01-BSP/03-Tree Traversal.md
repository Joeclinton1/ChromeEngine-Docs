# Tree Traversal

## What is it?
The BSP tree traversal step is called every frame as part of the main render loop. What this does is perform an inorder traversal of the previously generated BSP tree, but with node child order swapped if the the node plane faces away from the camera. The order of traversal is exactly equivalent to a perfect sort of the primitives from the point of view of the camera.

## `bsp.traversal` pseudo code

1. Set `current` to the root node.
1. While `bsp.stack` is not empty:
    1. Traverse from `current` down to a child node.
        1. Add the `current` node to the top of `bsp.stack` 
        1. At each intermediate node check if the plane associated with the node faces the camera or not, and if it does, `current` is set to the left child, otherwise it's set to the right child
    1. Once at the child, pop one item off the top of `bsp.stack` and `current` to this.
    1. Get a pointer to the start (`_**prim`) and end (`_*pivot_prims_tail`) of the sublist of *prim list which is stored by the `current` node. This sublist has a left and right sub-sublist which corresponds to the set of frontfacing primitives and backfacing ones and is used. 
        1. Depending on whether we are looking at the backface or frontface we either pick the leftside of the sublist or the right side. (this is important for double sided primitives). In the case of non-double sided primitives, then only one side of this list will have items. Picking a side of the list without items is equivalent to backface culling.
    1. If the first item in the sublist does not have a normal, aka is not a polygon, and the sublist has length greater than 1, we apply `bsp._*prims.insertion_sort_by_point_prim_z` to sort the sublist by the z coordinate of each item's bounding sphere in the list
    1. Finally we iterate over each primitive in the `_*prims` sublist, calculate it's shading, whether it should be z-clipped, and whether we're looking at the front of the primitive (which is only applicable to double sided prims as for single sided we only ever reach this stage if we are looking at the prims frontside)
        1. if the primitive is a `container` primitive, aka contains a pointer to a subtree, we recursively traverse that subtree. Importantly we pass in all the variables from this scope so that if they get changed one level down they can be reset, as if they never got changed.
1. If we are calling `bsp.traversal` from a recursion depth of more than 1, we reset any variables to emulate a local scope.

