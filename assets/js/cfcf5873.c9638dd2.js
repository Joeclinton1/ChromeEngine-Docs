"use strict";(self.webpackChunkchrome_engine_docs=self.webpackChunkchrome_engine_docs||[]).push([[387],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>u});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(i),h=r,u=c["".concat(l,".").concat(h)]||c[h]||m[h]||o;return i?n.createElement(u,a(a({ref:t},p),{},{components:i})):n.createElement(u,a({ref:t},p))}));function u(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var d=2;d<o;d++)a[d]=i[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},2948:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=i(7462),r=(i(7294),i(3905));const o={},a="Subtrees for dynamic objects",s={unversionedId:"system_docs/BSP/Dynamic Objects",id:"system_docs/BSP/Dynamic Objects",isDocsHomePage:!1,title:"Subtrees for dynamic objects",description:"Since ChromeEngine uses BSP for it's sorting traditionally the limitation is you can only have static scenes supported, however in ChromeEngine we've gone to great lengths to provide a workaround for dynamic objects. Our solution is called \"BSP subtrees\". And we'll walk you through how they work.",source:"@site/docs/system_docs/01-BSP/04-Dynamic Objects.md",sourceDirName:"system_docs/01-BSP",slug:"/system_docs/BSP/Dynamic Objects",permalink:"/ChromeEngine-Docs/docs/system_docs/BSP/Dynamic Objects",editUrl:"https://github.com/your-github-username/your-repo-name/edit/main/docs/docs/system_docs/01-BSP/04-Dynamic Objects.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"systemSidebar",previous:{title:"Tree Traversal",permalink:"/ChromeEngine-Docs/docs/system_docs/BSP/Tree Traversal"},next:{title:"Bounding Spheres Generation",permalink:"/ChromeEngine-Docs/docs/system_docs/Physics/BoundingSpheres"}},l=[{value:"What are subtrees?",id:"what-are-subtrees",children:[{value:"Reinserting point primitives",id:"reinserting-point-primitives",children:[]},{value:"Subtrees for dynamic objects contained within point primitives",id:"subtrees-for-dynamic-objects-contained-within-point-primitives",children:[]},{value:"The big downside with <code>Dynamic objects</code>",id:"the-big-downside-with-dynamic-objects",children:[]}]},{value:"Custom Block Descriptions",id:"custom-block-descriptions",children:[{value:"<code>handle_dynamic_objects</code>",id:"handle_dynamic_objects",children:[]},{value:"<code>bsp.tree.insert_prim</code>",id:"bsptreeinsert_prim",children:[]},{value:"<code>bsp.tree.try_to_insert_in_container</code>",id:"bsptreetry_to_insert_in_container",children:[]},{value:"<code>bsp.tree.reinsert_updated_objects</code>",id:"bsptreereinsert_updated_objects",children:[]},{value:"<code>bsp.tree.remove_prim_from_node</code>",id:"bsptreeremove_prim_from_node",children:[]},{value:"<code>bsp.tree.remove_leaf_node</code>",id:"bsptreeremove_leaf_node",children:[]}]}],d=(p="ScratchBlocks",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var p;const c={toc:l},m="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"subtrees-for-dynamic-objects"},"Subtrees for dynamic objects"),(0,r.kt)("p",null,"Since ChromeEngine uses BSP for it's sorting traditionally the limitation is you can only have static scenes supported, however in ChromeEngine we've gone to great lengths to provide a workaround for dynamic objects. Our solution is called \"BSP subtrees\". And we'll walk you through how they work."),(0,r.kt)("h2",{id:"what-are-subtrees"},"What are subtrees?"),(0,r.kt)("h3",{id:"reinserting-point-primitives"},"Reinserting point primitives"),(0,r.kt)("p",null,"Re-inserting a point into a BSP tree is always O(log n) time complexity and easy to do. Here's how we do it:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Point primitives are always leaf nodes of the BSP tree"),(0,r.kt)("li",{parentName:"ol"},"So removing a point primitive node from the tree is as simple as snipping off the leaf"),(0,r.kt)("li",{parentName:"ol"},"Finally to complete the reinsertion we just insert the point into the tree by performing a fast traversal specific to points, without any split checks.")),(0,r.kt)("h3",{id:"subtrees-for-dynamic-objects-contained-within-point-primitives"},"Subtrees for dynamic objects contained within point primitives"),(0,r.kt)("p",null,"if we can sort point primitives into a bsp tree could we simply tree a models tree as point and then sort an entire object into the scene? Yes! To do this we introduce a new primitive called a ",(0,r.kt)("inlineCode",{parentName:"p"},"container")," and we introduce the idea of ",(0,r.kt)("inlineCode",{parentName:"p"},"dynamic objects"),". Here's what we do:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Mark objects as being ",(0,r.kt)("inlineCode",{parentName:"li"},"dynamic")),(0,r.kt)("li",{parentName:"ol"},"Generate each ",(0,r.kt)("inlineCode",{parentName:"li"},"dynamic object")," their own subtree"),(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"container primitive")," for the dynamic object, which is treated as point primitive except also points to a subtree."),(0,r.kt)("li",{parentName:"ol"},"We can now insert this contain primitive into the main tree, and when it is reached during traversal we recursively traverse it's subtree.")),(0,r.kt)("h3",{id:"the-big-downside-with-dynamic-objects"},"The big downside with ",(0,r.kt)("inlineCode",{parentName:"h3"},"Dynamic objects")),(0,r.kt)("p",null,"Dynamic objects work great in alot of cases, but the problem is since we tree the object as a point and don't split any primitives, there's a possibility that the objects primitives will be sorted wrong and this can cause visual bugs. We are trying to solve this but it's not easy."),(0,r.kt)("h2",{id:"custom-block-descriptions"},"Custom Block Descriptions"),(0,r.kt)("p",null,"These are the custom blocks in ChromeEngine which deal with dynamic objects:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"handle_dynamic_objects")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"bsp.tree.insert_prim")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"bsp.tree.try_to_insert_in_container")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"bsp.tree.reinsert_updated_objects")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"bsp.tree.remove_leaf_node")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"bsp.tree.remove_prim_from_node"))),(0,r.kt)("h3",{id:"handle_dynamic_objects"},(0,r.kt)("inlineCode",{parentName:"h3"},"handle_dynamic_objects")),(0,r.kt)(d,{mdxType:"ScratchBlocks"},"\ndefine bsp.handle_dynamic_objects \\( \\)\n"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Creates a root node if the tree is empty",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"this only occurs if all objects are marked as dynamic"))),(0,r.kt)("li",{parentName:"ol"},"Iterate over all the gameobjects and for each object marked as dynamic add it to the ",(0,r.kt)("inlineCode",{parentName:"li"},"@dynamic_objects")," list and to the ",(0,r.kt)("inlineCode",{parentName:"li"},"_dynamic_obj_queue")),(0,r.kt)("li",{parentName:"ol"},"Whilst ",(0,r.kt)("inlineCode",{parentName:"li"},"_dynamic_obj_queue")," still has items:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Pop off the first object ",(0,r.kt)("inlineCode",{parentName:"li"},"_*obj")," off the queue"),(0,r.kt)("li",{parentName:"ol"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"_*obj")," is not contained within the main tree (aka is a child of a dynamic object) and it's parent dynamic object has not been generated yet, add it back to the queue and go back to step 1."),(0,r.kt)("li",{parentName:"ol"},"Create a new vertex to denote the centre of the ",(0,r.kt)("inlineCode",{parentName:"li"},"container")," primitive. The position is equal to the bounding sphere of ",(0,r.kt)("inlineCode",{parentName:"li"},"_*obj"),"'s centre coordinate plus the dynamic offset vector."),(0,r.kt)("li",{parentName:"ol"},"For each primitive assigned to ",(0,r.kt)("inlineCode",{parentName:"li"},"_*obj")," insert pointers to them at the end of the ",(0,r.kt)("inlineCode",{parentName:"li"},"_*prims")," list. ",(0,r.kt)("inlineCode",{parentName:"li"},"_lower")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"_**prim")," are pointers to the start and end of the newly added sublist of ",(0,r.kt)("inlineCode",{parentName:"li"},"_*prims"),"."),(0,r.kt)("li",{parentName:"ol"},"Generate a BSP subtree using this sublist."),(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"container")," primitive using the previously created vertex, the radius of the dynamic objects bounding sphere and a pointer to the newly created subtree. Insert this ",(0,r.kt)("inlineCode",{parentName:"li"},"container")," primitive into the main tree or the subtree assigned to the dynamic object using ",(0,r.kt)("inlineCode",{parentName:"li"},"bsp.tree.insert_prim"))))),(0,r.kt)("h3",{id:"bsptreeinsert_prim"},(0,r.kt)("inlineCode",{parentName:"h3"},"bsp.tree.insert_prim")),(0,r.kt)(d,{mdxType:"ScratchBlocks"},"\ndefine bsp.tree.insert_prim \\((_*prim)(old_**prim)(*root)(orientation) level (level) local_var_stack (stack:current)\\)\n"),(0,r.kt)("p",null,"Performs the insertion of a primitive into a tree. The steps are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Traverse the tree until we reach a point primitive node or a leaf node to find where the point primitive pointed to by ",(0,r.kt)("inlineCode",{parentName:"li"},"_*prim")," should be inserted"),(0,r.kt)("li",{parentName:"ol"},"If the current node is Empty, then we reached a leaf node which is assigned to a polygon:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"insert the primitive pointer into the ",(0,r.kt)("inlineCode",{parentName:"li"},"_*prims")," list at the end"),(0,r.kt)("li",{parentName:"ol"},"Create a new leaf node as a child of the leaf node to store our new primitive. Whether it's a left or right node depends on orientation."))),(0,r.kt)("li",{parentName:"ol"},"Else:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Try to insert the primitive into a ",(0,r.kt)("inlineCode",{parentName:"li"},"container")," primitive in case there is one using ",(0,r.kt)("inlineCode",{parentName:"li"},"bsp.tree.try_to_insert_in_container"),"."),(0,r.kt)("li",{parentName:"ol"},"If our current node was previously node (which we can tell since it would've been marked as a TOMBSTONE) then insert our primitive pointer into the ",(0,r.kt)("inlineCode",{parentName:"li"},"_*prims")," list at the end"),(0,r.kt)("li",{parentName:"ol"},"Else insert our primitive pointer in the same location as the first point primitive stored by the current node.")))),(0,r.kt)("h3",{id:"bsptreetry_to_insert_in_container"},(0,r.kt)("inlineCode",{parentName:"h3"},"bsp.tree.try_to_insert_in_container")),(0,r.kt)(d,{mdxType:"ScratchBlocks"},"\ndefine _tmp = bsp.tree.try_to_insert_in_container \\( *prim (*prim) old_**prim (old_**prim) orientation (orientation) level (level) \\)\n"),(0,r.kt)("p",null,"Iterates over the point primitives stored in a given BSP tree node (it assumes ",(0,r.kt)("inlineCode",{parentName:"p"},"_current")," is set to the current node), and checks if they are containers. If there's more than one container it finds the closest container (by bounding sphere distance) to the primitive being inserted. If any container was found it inserts the primitive into it. It sets ",(0,r.kt)("inlineCode",{parentName:"p"},"_tmp")," to 1 if it was successful else 0."),(0,r.kt)("h3",{id:"bsptreereinsert_updated_objects"},(0,r.kt)("inlineCode",{parentName:"h3"},"bsp.tree.reinsert_updated_objects")),(0,r.kt)(d,{mdxType:"ScratchBlocks"},"\ndefine bsp.tree.reinsert_updated_objects\n"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"For each updated object which is dynamic:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"remove the primitive from it's BSP tree node using ",(0,r.kt)("inlineCode",{parentName:"li"},"bsp.tree.remove_prim_from_node")),(0,r.kt)("li",{parentName:"ol"},"pop it's prim pointer from ",(0,r.kt)("inlineCode",{parentName:"li"},"prims")),(0,r.kt)("li",{parentName:"ol"},"insert the primitive back into the tree using ",(0,r.kt)("inlineCode",{parentName:"li"},"bsp.tree.insert_prim"))))),(0,r.kt)("h3",{id:"bsptreeremove_prim_from_node"},(0,r.kt)("inlineCode",{parentName:"h3"},"bsp.tree.remove_prim_from_node")),(0,r.kt)(d,{mdxType:"ScratchBlocks"},"\ndefine _**prim = bsp.remove_prim_from_node \\((*node) (*prim)\\)\n"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"_*prim")," is the only primitive in it's tree node then call ",(0,r.kt)("inlineCode",{parentName:"li"},"bsp.tree.remove_leaf_node")," to snip off the leaf node (we can assume it's a leaf node as we only reinsert point primitives which are always leaves)"),(0,r.kt)("li",{parentName:"ol"},"Else:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Find the index of ",(0,r.kt)("inlineCode",{parentName:"li"},"_*prim")," in the sublist of ",(0,r.kt)("inlineCode",{parentName:"li"},"_*prims")," assigned to the tree node and then adjust the BSP tree to not include it. Note: we don't remove the primitive, from the list as we're going to add it back anyway and we don't want to waste computation.")))),(0,r.kt)("h3",{id:"bsptreeremove_leaf_node"},(0,r.kt)("inlineCode",{parentName:"h3"},"bsp.tree.remove_leaf_node")),(0,r.kt)(d,{mdxType:"ScratchBlocks"},"\ndefine bsp.remove_leaf_node \\((*node)\\)\n"),(0,r.kt)("p",null,"Removes a leaf node by removing all references to it within the bsp.tree."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Remove edges to the node"),(0,r.kt)("li",{parentName:"ol"},"If the node is at the end of the ",(0,r.kt)("inlineCode",{parentName:"li"},"bsp.tree")," list simply delete the data, otherwise to preserve pointers just assign the first item of data to be TOMBSTONE to mark that it was deleted.")))}h.isMDXComponent=!0}}]);