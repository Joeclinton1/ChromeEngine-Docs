# Subtrees for dynamic objects

Since ChromeEngine uses BSP for it's sorting traditionally the limitation is you can only have static scenes supported, however in ChromeEngine we've gone to great lengths to provide a workaround for dynamic objects. Our solution is called "BSP subtrees". And we'll walk you through how they work.

## What are subtrees?
### Reinserting point primitives

Re-inserting a point into a BSP tree is always O(log n) time complexity and easy to do. Here's how we do it:

1. Point primitives are always leaf nodes of the BSP tree
1. So removing a point primitive node from the tree is as simple as snipping off the leaf
1. Finally to complete the reinsertion we just insert the point into the tree by performing a fast traversal specific to points, without any split checks.

### Subtrees for dynamic objects contained within point primitives

if we can sort point primitives into a bsp tree could we simply tree a models tree as point and then sort an entire object into the scene? Yes! To do this we introduce a new primitive called a `container` and we introduce the idea of `dynamic objects`. Here's what we do:

1. Mark objects as being `dynamic`
2. Generate each `dynamic object` their own subtree
3. Create a `container primitive` for the dynamic object, which is treated as point primitive except also points to a subtree.
4. We can now insert this contain primitive into the main tree, and when it is reached during traversal we recursively traverse it's subtree.

### The big downside with `Dynamic objects`

Dynamic objects work great in alot of cases, but the problem is since we tree the object as a point and don't split any primitives, there's a possibility that the objects primitives will be sorted wrong and this can cause visual bugs. We are trying to solve this but it's not easy.

## Custom Block Descriptions

These are the custom blocks in ChromeEngine which deal with dynamic objects:

1. `handle_dynamic_objects`
1. `bsp.tree.insert_prim`
1. `bsp.tree.try_to_insert_in_container`
1. `bsp.tree.reinsert_updated_objects`
1. `bsp.tree.remove_leaf_node`
1. `bsp.tree.remove_prim_from_node`


### `handle_dynamic_objects`

<ScratchBlocks>
{`
define bsp.handle_dynamic_objects \\( \\)
`}
</ScratchBlocks>

1. Creates a root node if the tree is empty
    1. this only occurs if all objects are marked as dynamic
1. Iterate over all the gameobjects and for each object marked as dynamic add it to the `@dynamic_objects` list and to the `_dynamic_obj_queue`
1. Whilst `_dynamic_obj_queue` still has items:
    1. Pop off the first object `_*obj` off the queue
    1. If `_*obj` is not contained within the main tree (aka is a child of a dynamic object) and it's parent dynamic object has not been generated yet, add it back to the queue and go back to step 1.
    1. Create a new vertex to denote the centre of the `container` primitive. The position is equal to the bounding sphere of `_*obj`'s centre coordinate plus the dynamic offset vector.
    1. For each primitive assigned to `_*obj` insert pointers to them at the end of the `_*prims` list. `_lower` and `_**prim` are pointers to the start and end of the newly added sublist of `_*prims`.
    1. Generate a BSP subtree using this sublist.
    1. Create a `container` primitive using the previously created vertex, the radius of the dynamic objects bounding sphere and a pointer to the newly created subtree. Insert this `container` primitive into the main tree or the subtree assigned to the dynamic object using `bsp.tree.insert_prim`

### `bsp.tree.insert_prim`

<ScratchBlocks>
{`
define bsp.tree.insert_prim \\((_*prim)(old_**prim)(*root)(orientation) level (level) local_var_stack (stack:current)\\)
`}
</ScratchBlocks>

Performs the insertion of a primitive into a tree. The steps are:

1. Traverse the tree until we reach a point primitive node or a leaf node to find where the point primitive pointed to by `_*prim` should be inserted
2. If the current node is Empty, then we reached a leaf node which is assigned to a polygon:
    1. insert the primitive pointer into the `_*prims` list at the end
    1. Create a new leaf node as a child of the leaf node to store our new primitive. Whether it's a left or right node depends on orientation.
3. Else:
    1. Try to insert the primitive into a `container` primitive in case there is one using `bsp.tree.try_to_insert_in_container`.
    1. If our current node was previously node (which we can tell since it would've been marked as a TOMBSTONE) then insert our primitive pointer into the `_*prims` list at the end
    1. Else insert our primitive pointer in the same location as the first point primitive stored by the current node.

### `bsp.tree.try_to_insert_in_container`

<ScratchBlocks>
{`
define _tmp = bsp.tree.try_to_insert_in_container \\( *prim (*prim) old_**prim (old_**prim) orientation (orientation) level (level) \\)
`}
</ScratchBlocks>

Iterates over the point primitives stored in a given BSP tree node (it assumes `_current` is set to the current node), and checks if they are containers. If there's more than one container it finds the closest container (by bounding sphere distance) to the primitive being inserted. If any container was found it inserts the primitive into it. It sets `_tmp` to 1 if it was successful else 0.

### `bsp.tree.reinsert_updated_objects`

<ScratchBlocks>
{`
define bsp.tree.reinsert_updated_objects
`}
</ScratchBlocks>

1. For each updated object which is dynamic:
    1. remove the primitive from it's BSP tree node using `bsp.tree.remove_prim_from_node`
    1. pop it's prim pointer from `prims`
    1. insert the primitive back into the tree using `bsp.tree.insert_prim`

### `bsp.tree.remove_prim_from_node`

<ScratchBlocks>
{`
define _**prim = bsp.remove_prim_from_node \\((*node) (*prim)\\)
`}
</ScratchBlocks>

1. If `_*prim` is the only primitive in it's tree node then call `bsp.tree.remove_leaf_node` to snip off the leaf node (we can assume it's a leaf node as we only reinsert point primitives which are always leaves)
2. Else:
    1. Find the index of `_*prim` in the sublist of `_*prims` assigned to the tree node and then adjust the BSP tree to not include it. Note: we don't remove the primitive, from the list as we're going to add it back anyway and we don't want to waste computation.

### `bsp.tree.remove_leaf_node`

<ScratchBlocks>
{`
define bsp.remove_leaf_node \\((*node)\\)
`}
</ScratchBlocks>

Removes a leaf node by removing all references to it within the bsp.tree.
1. Remove edges to the node
2. If the node is at the end of the `bsp.tree` list simply delete the data, otherwise to preserve pointers just assign the first item of data to be TOMBSTONE to mark that it was deleted.
