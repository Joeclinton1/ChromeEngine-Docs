"use strict";(self.webpackChunkchrome_engine_docs=self.webpackChunkchrome_engine_docs||[]).push([[20],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,u=d["".concat(l,".").concat(m)]||d[m]||h[m]||a;return r?i.createElement(u,o(o({ref:t},p),{},{components:r})):i.createElement(u,o({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8874:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=r(7462),n=(r(7294),r(3905));const a={},o="Tree Traversal",s={unversionedId:"system_docs/BSP/Tree Traversal",id:"system_docs/BSP/Tree Traversal",isDocsHomePage:!1,title:"Tree Traversal",description:"What is it?",source:"@site/docs/system_docs/01-BSP/03-Tree Traversal.md",sourceDirName:"system_docs/01-BSP",slug:"/system_docs/BSP/Tree Traversal",permalink:"/docs/system_docs/BSP/Tree Traversal",editUrl:"https://github.com/your-github-username/your-repo-name/edit/main/docs/docs/system_docs/01-BSP/03-Tree Traversal.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"systemSidebar",previous:{title:"Tree Generation",permalink:"/docs/system_docs/BSP/Tree Generation"},next:{title:"Subtrees for dynamic objects",permalink:"/docs/system_docs/BSP/Dynamic Objects"}},l=[{value:"What is it?",id:"what-is-it",children:[]},{value:"<code>bsp.traversal</code> pseudo code",id:"bsptraversal-pseudo-code",children:[]}],c={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tree-traversal"},"Tree Traversal"),(0,n.kt)("h2",{id:"what-is-it"},"What is it?"),(0,n.kt)("p",null,"The BSP tree traversal step is called every frame as part of the main render loop. What this does is perform an inorder traversal of the previously generated BSP tree, but with node child order swapped if the the node plane faces away from the camera. The order of traversal is exactly equivalent to a perfect sort of the primitives from the point of view of the camera."),(0,n.kt)("h2",{id:"bsptraversal-pseudo-code"},(0,n.kt)("inlineCode",{parentName:"h2"},"bsp.traversal")," pseudo code"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Set ",(0,n.kt)("inlineCode",{parentName:"li"},"current")," to the root node."),(0,n.kt)("li",{parentName:"ol"},"While ",(0,n.kt)("inlineCode",{parentName:"li"},"bsp.stack")," is not empty:",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Traverse from ",(0,n.kt)("inlineCode",{parentName:"li"},"current")," down to a child node.",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Add the ",(0,n.kt)("inlineCode",{parentName:"li"},"current")," node to the top of ",(0,n.kt)("inlineCode",{parentName:"li"},"bsp.stack")," "),(0,n.kt)("li",{parentName:"ol"},"At each intermediate node check if the plane associated with the node faces the camera or not, and if it does, ",(0,n.kt)("inlineCode",{parentName:"li"},"current")," is set to the left child, otherwise it's set to the right child"))),(0,n.kt)("li",{parentName:"ol"},"Once at the child, pop one item off the top of ",(0,n.kt)("inlineCode",{parentName:"li"},"bsp.stack")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"current")," to this."),(0,n.kt)("li",{parentName:"ol"},"Get a pointer to the start (",(0,n.kt)("inlineCode",{parentName:"li"},"_**prim"),") and end (",(0,n.kt)("inlineCode",{parentName:"li"},"_*pivot_prims_tail"),") of the sublist of *prim list which is stored by the ",(0,n.kt)("inlineCode",{parentName:"li"},"current")," node. This sublist has a left and right sub-sublist which corresponds to the set of frontfacing primitives and backfacing ones and is used. ",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Depending on whether we are looking at the backface or frontface we either pick the leftside of the sublist or the right side. (this is important for double sided primitives). In the case of non-double sided primitives, then only one side of this list will have items. Picking a side of the list without items is equivalent to backface culling."))),(0,n.kt)("li",{parentName:"ol"},"If the first item in the sublist does not have a normal, aka is not a polygon, and the sublist has length greater than 1, we apply ",(0,n.kt)("inlineCode",{parentName:"li"},"bsp._*prims.insertion_sort_by_point_prim_z")," to sort the sublist by the z coordinate of each item's bounding sphere in the list"),(0,n.kt)("li",{parentName:"ol"},"Finally we iterate over each primitive in the ",(0,n.kt)("inlineCode",{parentName:"li"},"_*prims")," sublist, calculate it's shading, whether it should be z-clipped, and whether we're looking at the front of the primitive (which is only applicable to double sided prims as for single sided we only ever reach this stage if we are looking at the prims frontside)",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"if the primitive is a ",(0,n.kt)("inlineCode",{parentName:"li"},"container")," primitive, aka contains a pointer to a subtree, we recursively traverse that subtree. Importantly we pass in all the variables from this scope so that if they get changed one level down they can be reset, as if they never got changed."))))),(0,n.kt)("li",{parentName:"ol"},"If we are calling ",(0,n.kt)("inlineCode",{parentName:"li"},"bsp.traversal")," from a recursion depth of more than 1, we reset any variables to emulate a local scope.")))}d.isMDXComponent=!0}}]);