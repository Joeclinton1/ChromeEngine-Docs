"use strict";(self.webpackChunkchrome_engine_docs=self.webpackChunkchrome_engine_docs||[]).push([[453],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>u});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(i),m=o,u=c["".concat(s,".").concat(m)]||c[m]||h[m]||r;return i?n.createElement(u,a(a({ref:t},d),{},{components:i})):n.createElement(u,a({ref:t},d))}));function u(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<r;l++)a[l]=i[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},5741:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var n=i(7462),o=(i(7294),i(3905));const r={},a="Tree Generation",p={unversionedId:"system_docs/BSP/Tree Generation",id:"system_docs/BSP/Tree Generation",isDocsHomePage:!1,title:"Tree Generation",description:'This document provides detailed explanations for the custom block definitions used in the "Tree Generation" page of the "Binary Space Partitioning" docs. The code you\'ll be looking at was developed for a scratch based 3D engine called ChromeEngine.',source:"@site/docs/system_docs/01-BSP/02-Tree Generation.md",sourceDirName:"system_docs/01-BSP",slug:"/system_docs/BSP/Tree Generation",permalink:"/docs/system_docs/BSP/Tree Generation",editUrl:"https://github.com/your-github-username/your-repo-name/edit/main/docs/docs/system_docs/01-BSP/02-Tree Generation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"systemSidebar",previous:{title:"_*prims",permalink:"/docs/system_docs/BSP/Prims"},next:{title:"Tree Traversal",permalink:"/docs/system_docs/BSP/Tree Traversal"}},s=[{value:"Custom Block Definitions",id:"custom-block-definitions",children:[]},{value:"Custom Block Descriptions",id:"custom-block-descriptions",children:[{value:"<code>bsp.__init__</code>",id:"bsp__init__",children:[]},{value:"<code>bsp.gen</code>",id:"bspgen",children:[]},{value:"<code>bsp.recurse on low&amp;up</code>",id:"bsprecurse-on-lowup",children:[]},{value:"<code>bsp.partition</code>",id:"bsppartition",children:[]},{value:"<code>bsp.greedy_pivot_selection</code>",id:"bspgreedy_pivot_selection",children:[]},{value:"<code>test_prim_as_pivot</code>",id:"test_prim_as_pivot",children:[]},{value:"<code>_node_curr, _ori, _intersects = get_orientation_of_*poly_to_plane (P, N)</code>",id:"_node_curr-_ori-_intersects--get_orientation_of_poly_to_plane-p-n",children:[]},{value:"<code>_*prim = primitives.split_prim ( *prim, *intersectA, *intersectB )</code>",id:"_prim--primitivessplit_prim--prim-intersecta-intersectb-",children:[]}]}],l=(d="ScratchBlocks",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const c={toc:s},h="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(h,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tree-generation"},"Tree Generation"),(0,o.kt)("p",null,'This document provides detailed explanations for the custom block definitions used in the "Tree Generation" page of the "Binary Space Partitioning" docs. The code you\'ll be looking at was developed for a scratch based 3D engine called ChromeEngine.'),(0,o.kt)("h2",{id:"custom-block-definitions"},"Custom Block Definitions"),(0,o.kt)("p",null,"The custom block definitions are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bsp.__init__")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bsp.gen")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bsp.recurse on low&up")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bsp.partition")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bsp.greedy_pivot_selection")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"test_prim_as_pivot")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"get_orientation_of_*poly_to_plane (P, N)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"primitives.split_prim"))),(0,o.kt)("h2",{id:"custom-block-descriptions"},"Custom Block Descriptions"),(0,o.kt)("p",null,"Now we'll provide detailed descriptions for each of these custom blocks, including the converted ScratchBlocks code and an explanation of the logic within each block."),(0,o.kt)("h3",{id:"bsp__init__"},(0,o.kt)("inlineCode",{parentName:"h3"},"bsp.__init__")),(0,o.kt)(l,{mdxType:"ScratchBlocks"},"\ndefine bsp.__init__ \\( \\)\n"),(0,o.kt)("p",null,"This block initializes the Binary Space Partitioning (BSP) tree. It starts by creating two lists, ",(0,o.kt)("inlineCode",{parentName:"p"},"_bsp.node_tombstones[]")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bsp.tree[]"),", which will hold the tombstones for nodes and the tree structure respectively. It then adds two nodes to ",(0,o.kt)("inlineCode",{parentName:"p"},"bsp.tree[]")," for initialization. ",(0,o.kt)("inlineCode",{parentName:"p"},"tmp[]")," is also initialized with nine 0s. The ",(0,o.kt)("inlineCode",{parentName:"p"},"_split_count")," variable is set to 0, which will track the number of splits made during the tree generation. Lastly, ",(0,o.kt)("inlineCode",{parentName:"p"},"bsp._*prims.__init_non_dynamic__()")," is called to initialize the primitives with non-dynamic variables."),(0,o.kt)("h3",{id:"bspgen"},(0,o.kt)("inlineCode",{parentName:"h3"},"bsp.gen")),(0,o.kt)(l,{mdxType:"ScratchBlocks"},"\ndefine bsp.gen \\( (lowerBound) (upperBound) (parent_node) (right?) \\)\n"),(0,o.kt)("p",null,"This block is responsible for generating the BSP tree. It begins by checking if the ",(0,o.kt)("inlineCode",{parentName:"p"},"lowerBound")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"upperBound")," are null, or if the upper bound is equal to the lower bound in the primitives array, if so, it returns without performing any actions. This ensures that we have a valid range to work with. The block then selects a pivot by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"bsp.greedy_pivot_selection")," and if a pivot can't be found, it adds a node to the BSP tree with the ",(0,o.kt)("inlineCode",{parentName:"p"},"lowerBound")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"upperBound")," as the node limits. However, if a pivot is found, the function checks if the ",(0,o.kt)("inlineCode",{parentName:"p"},"upperBound")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"lowerBound")," are not the same, and if so, it partitions the prims into two groups by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"bsp.partition"),". It then groups the primitives by their orientation and adds a node to the BSP tree with the gathered data. The block also sets the parent node's edge to the newly created node, if the parent node is not null. The function then checks if the ",(0,o.kt)("inlineCode",{parentName:"p"},"upperBound")," equals the ",(0,o.kt)("inlineCode",{parentName:"p"},"lowerBound")," or if the pivot is null, and if either condition is true, it returns without proceeding further. If not, it calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"bsp.recurse on low&up")," function for further processing."),(0,o.kt)("h3",{id:"bsprecurse-on-lowup"},(0,o.kt)("inlineCode",{parentName:"h3"},"bsp.recurse on low&up")),(0,o.kt)(l,{mdxType:"ScratchBlocks"},"\ndefine bsp.recurse on low&up \\( (lowerBound) (*pivot_list_head) (*pivot_list_tail) (upperBound) (*parent_node) \\)\n"),(0,o.kt)("p",null,"This block is used to recursively generate the BSP tree. It calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"bsp.gen")," function twice - first for the lower partition, and then for the upper partition. "),(0,o.kt)("h3",{id:"bsppartition"},(0,o.kt)("inlineCode",{parentName:"h3"},"bsp.partition")),(0,o.kt)(l,{mdxType:"ScratchBlocks"},"\ndefine _upper, _*pivot_prims_tail = bsp.partition \\( (L) (U) \\)\n"),(0,o.kt)("p",null,"This block partitions the list of primitives into two parts - primitives in front of the pivot plane and those behind the pivot plane. It accepts the ",(0,o.kt)("inlineCode",{parentName:"p"},"lowerBound")," (L) and ",(0,o.kt)("inlineCode",{parentName:"p"},"upperBound")," (U) as inputs. It initializes ",(0,o.kt)("inlineCode",{parentName:"p"},"_pivot_prims_head")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"L")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"_pivot_prims_tail")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"U"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"_upper")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"L"),". The function then iterates over the primitives in the range ",(0,o.kt)("inlineCode",{parentName:"p"},"[L, U]")," and for each primitive, it calls ",(0,o.kt)("inlineCode",{parentName:"p"},"test_prim_as_pivot")," to test if the primitive can be used as a pivot. If it can't be used as a pivot, it increments ",(0,o.kt)("inlineCode",{parentName:"p"},"_pivot_prims_tail")," and moves the primitive at ",(0,o.kt)("inlineCode",{parentName:"p"},"_upper")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"_pivot_prims_tail"),", effectively moving it to the end of the pivot prims list. If it can be used as a pivot, it moves the primitive at ",(0,o.kt)("inlineCode",{parentName:"p"},"_pivot_prims_tail")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"_upper"),", effectively moving it to the front of the list, and increments ",(0,o.kt)("inlineCode",{parentName:"p"},"_upper"),". The block ends by returning ",(0,o.kt)("inlineCode",{parentName:"p"},"_upper")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"_pivot_prims_tail"),", which now represent the boundaries of the prims that can be used as pivots."),(0,o.kt)("h3",{id:"bspgreedy_pivot_selection"},(0,o.kt)("inlineCode",{parentName:"h3"},"bsp.greedy_pivot_selection")),(0,o.kt)(l,{mdxType:"ScratchBlocks"},"\ndefine bsp.greedy_pivot_selection \\( (lowerBound) (upperBound) \\)\n"),(0,o.kt)("p",null,"This block selects a pivot prims for partitioning the primitives list. It accepts the ",(0,o.kt)("inlineCode",{parentName:"p"},"lowerBound")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"upperBound")," as inputs. The block first calculates the middle index in the range ",(0,o.kt)("inlineCode",{parentName:"p"},"[lowerBound, upperBound]")," and if the primitive at the middle index can be used as a pivot (determined by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"test_prim_as_pivot"),"), it returns this primitive as the pivot. If it can't be used as a pivot, the block iterates over the primitives in the range ",(0,o.kt)("inlineCode",{parentName:"p"},"[lowerBound, upperBound]"),", in order, and returns the first primitive it finds that can be used as a pivot. If no pivot can be found, it returns null."),(0,o.kt)("h3",{id:"test_prim_as_pivot"},(0,o.kt)("inlineCode",{parentName:"h3"},"test_prim_as_pivot")),(0,o.kt)(l,{mdxType:"ScratchBlocks"},"\ndefine test_prim_as_pivot \\( (*pivot) (L) (U) \\)\n"),(0,o.kt)("p",null,"This block tests whether a primitive can be used as a pivot or not. It accepts the primitive to test (",(0,o.kt)("inlineCode",{parentName:"p"},"pivot"),"), and the ",(0,o.kt)("inlineCode",{parentName:"p"},"lowerBound")," (L) and ",(0,o.kt)("inlineCode",{parentName:"p"},"upperBound")," (U) of the range in which to test the primitive. The function iterates over the primitives in the range ",(0,o.kt)("inlineCode",{parentName:"p"},"[L, U]")," and for each primitive, it calls ",(0,o.kt)("inlineCode",{parentName:"p"},"get_orientation_of_*poly_to_plane (P, N)")," to get its orientation with respect to the pivot. If the primitive's orientation is such that it is on the same side as the pivot, it increments a counter. If the number of primitives that are on the same side as the pivot is greater than a threshold (for example, 90% of the primitives), it returns true, indicating that the primitive can be used as a pivot. Otherwise, it returns false."),(0,o.kt)("h3",{id:"_node_curr-_ori-_intersects--get_orientation_of_poly_to_plane-p-n"},(0,o.kt)("inlineCode",{parentName:"h3"},"_node_curr, _ori, _intersects = get_orientation_of_*poly_to_plane (P, N)")),(0,o.kt)(l,{mdxType:"ScratchBlocks"},"\ndefine _node_curr, _ori, _intersects = get_orientation_of_*poly_to_plane \\( (P, N) *poly (*poly) plane (P,N) (Px) (Py) (Pz) (Nx) (Ny) (Nz) do split? <do_split?> **Prim (**prim) \\)\n"),(0,o.kt)("p",null,"This custom block calculates the orientation of a polygon with respect to a plane and tests if the polygon intersects the plane. The block accepts the polygon (",(0,o.kt)("inlineCode",{parentName:"p"},"*poly"),"), the definition of the plane (",(0,o.kt)("inlineCode",{parentName:"p"},"Px, Py, Pz, Nx, Ny, Nz")," which represent the point and normal of the plane), a boolean indicating whether to split the polygon if it intersects the plane (",(0,o.kt)("inlineCode",{parentName:"p"},"do_split?"),"), and the primitive to use if a split is required (",(0,o.kt)("inlineCode",{parentName:"p"},"**Prim"),"). "),(0,o.kt)("p",null,"Initially, the block initializes ",(0,o.kt)("inlineCode",{parentName:"p"},"_intersects?")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," indicating no intersection and ",(0,o.kt)("inlineCode",{parentName:"p"},"_count")," to track the number of vertices processed. It extracts the first vertex index of the polygon and calculates the dot product of the plane's normal and the vector from a point on the plane to this vertex (",(0,o.kt)("inlineCode",{parentName:"p"},"_dot"),"). This value (",(0,o.kt)("inlineCode",{parentName:"p"},"_dot_curr"),") is used to determine the sign of the vertex with respect to the plane. This process is iterated for each vertex of the polygon in a loop. If the sign of a vertex is different from the sign of the previous vertex, this indicates a potential intersection. "),(0,o.kt)("p",null,"In case of an intersection, if ",(0,o.kt)("inlineCode",{parentName:"p"},"do_split?")," is set to true, the polygon is split by adding two new vertices at the intersection points and creating a new primitive for the second half of the split polygon. The new primitive is inserted into ",(0,o.kt)("inlineCode",{parentName:"p"},"bsp._*prims"),". If ",(0,o.kt)("inlineCode",{parentName:"p"},"do_split?")," is set to false, the function terminates and returns. "),(0,o.kt)("h3",{id:"_prim--primitivessplit_prim--prim-intersecta-intersectb-"},(0,o.kt)("inlineCode",{parentName:"h3"},"_*prim = primitives.split_prim ( *prim, *intersectA, *intersectB )")),(0,o.kt)(l,{mdxType:"ScratchBlocks"},"\ndefine _*prim = primitives.split_prim \\( *prim (*prim) *intersectA (*A) *intersectB (*B) \\)\n"),(0,o.kt)("p",null,"This custom block splits a primitive into two at the given intersection points. The block takes as input the primitive to split (",(0,o.kt)("inlineCode",{parentName:"p"},"*prim"),"), and two intersection points (",(0,o.kt)("inlineCode",{parentName:"p"},"*intersectA"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"*intersectB"),"). "),(0,o.kt)("p",null,"The process of splitting involves changing the connectivity of vertices in the polygon by inserting new vertices at the intersection points. The first intersection point is inserted after the vertex indexed by ",(0,o.kt)("inlineCode",{parentName:"p"},"*intersectA")," and the second intersection point is inserted after the vertex indexed by ",(0,o.kt)("inlineCode",{parentName:"p"},"*intersectB"),". The links between vertices are updated to ensure the continuity of the polygons after the split. "),(0,o.kt)("p",null,"A new primitive is then created for the second half of the split polygon. This new primitive shares the same attributes as the original primitive but has a different set of vertices. The primitive count ",(0,o.kt)("inlineCode",{parentName:"p"},"_split_count")," is incremented as well."))}m.isMDXComponent=!0}}]);