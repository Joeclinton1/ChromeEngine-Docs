# `_*prims`

`_*prims` is a linked list which stores pointers to the primitives. The `_*prims` linked list is manipulated during the BSP tree generation to allow the tree to point to primitives.

The custom block definitions in the code are:

- `bsp._*prims.__init_non_dynamic__`
- `_**prim = bsp._*prims.insert_after`
- `bsp._*prims.randomize_order`
- `_tmp, _tmp2 = bsp._*prims.pop`
- `bsp._*prims.swap`
- `bsp._*prims.sanity_check`

## Custom Block Descriptions

Each custom block definition in the `_*prims` page of the Binary Space Partitioning documentation is described in detail in this section.

### `bsp._*prims.__init_non_dynamic__`

<ScratchBlocks>
{`
define bsp._*prims.__init_non_dynamic__
`}
</ScratchBlocks>

initializes the `_*prims` linked list with non-dynamic primitives from the primitives list.

1. Starting from the first element in the primitives list, it iterates over the list, skipping elements belonging to dynamic GameObjects.
2. For each non-dynamic primitive, it adds an entry in the `_*prims` list containing the primitive index, two pointers to form a doubly linked list, and the side ("FRONT" or "BACK") of the primitive. 
    1. If a primitive has a non-zero material, an entry for the "BACK" side of the primitive is also added. 
3. The second element and the last element of the `_*prims` list are set to "null", and the tail pointer is set to the second-last element of the list.

### `_*prim = bsp._*prims.insert_after`

<ScratchBlocks>
{`
define _**prim = bsp._*prims.insert_after \\( (*prim) (*elem) (*mem_loc) (Orientation) \\)
`}
</ScratchBlocks>

Inserts a new primitive `*prim` after a given element `*elem` in the `_*prims` list. optionally can specify a memory location `*mem_loc` for the data to go.

1. if the `_*prims` list empty, appends the data at the end of the `_*prims` list and returns.
1. If `*mem_loc` is None:
    1.  Add the `_*prim` and it's `Orientation` as a new linked list node at the end of the list. 
3. else:
    1. we replace the data slot at `*mem_loc` with the `_*prim` and it's `Orientation`
4. set the correct links for the linked list such that the new node in the linked list is inserted between `*elem`  and `*elems` next item.

### `bsp._*prims.randomize_order`

<ScratchBlocks>
{`
define bsp._*prims.randomize_order \\( (*left) (*right) \\)
`}
</ScratchBlocks>

The `bsp._*prims.randomize_order` custom block randomizes the order of the primitives in the `_*prims` list between the left and right indices. It iterates over the primitives, starting from the left index and going up to the right index, and swaps each primitive with another random primitive in the `_*prims` list.

### `_tmp, _tmp2 = bsp._*prims.pop`

<ScratchBlocks>
{`
define _tmp, _tmp2 = bsp._*prims.pop \\( (*elem) \\)
`}
</ScratchBlocks>

The `_tmp, _tmp2 = bsp._*prims.pop` custom block removes a primitive from the `_*prims` list. The previous and next elements' pointers are updated to skip over the removed element. If the removed element is the last element in the list, the tail pointer is updated. The primitive and its orientation are stored, and the removed element's entries in the _*prims list are cleared.

### `bsp._*prims.swap`

<ScratchBlocks>
{`
define bsp._*prims.swap \\( *a (*a) *b (*b) \\)
`}
</ScratchBlocks>

The `bsp._*prims.swap` custom block swaps two primitives in the `_*prims` list. The primitives and their orientations are swapped using a temporary variable.

### `bsp._*prims.sanity_check`

<ScratchBlocks>
{`
define bsp._*prims.sanity_check \\( (*left) (*right) \\)
`}
</ScratchBlocks>

The `bsp._*prims.sanity_check` custom block checks the consistency of the `_*prims` list between the left and right indices. It iterates over the primitives and checks that each primitive index is a multiple of the size of a primitive. It also checks that the previous and next element pointers for each primitive point to the correct elements. If an inconsistency is detected, a breakpoint is triggered.
