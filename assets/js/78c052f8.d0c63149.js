"use strict";(self.webpackChunkchrome_engine_docs=self.webpackChunkchrome_engine_docs||[]).push([[423],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?o.createElement(h,n(n({ref:t},u),{},{components:r})):o.createElement(h,n({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,n=new Array(i);n[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,n[1]=l;for(var c=2;c<i;c++)n[c]=r[c];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9595:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=r(7462),a=(r(7294),r(3905));const i={},n="Material Creation",l={unversionedId:"user_docs/Materials",id:"user_docs/Materials",isDocsHomePage:!1,title:"Material Creation",description:"We assign Materials to primitives in our scene to tell the Engine how to colour/texture that material. Below are all the blocks ChromeEngine provides to help you work with Materials:",source:"@site/docs/user_docs/03-Materials.md",sourceDirName:"user_docs",slug:"/user_docs/Materials",permalink:"/docs/user_docs/Materials",editUrl:"https://github.com/your-github-username/your-repo-name/edit/main/docs/docs/user_docs/03-Materials.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"userSidebar",previous:{title:"GameObject Creation",permalink:"/docs/user_docs/Modelling"},next:{title:"Updating Scene",permalink:"/docs/user_docs/Updating Objects"}},s=[{value:"<code>importFromMTL</code>",id:"importfrommtl",children:[]},{value:"<code>newMaterial</code>",id:"newmaterial",children:[]},{value:"<code>setDoubleSided</code>",id:"setdoublesided",children:[]},{value:"<code>setPhysics</code>",id:"setphysics",children:[]},{value:"<code>setSecondaryColour</code>",id:"setsecondarycolour",children:[]},{value:"<code>setSFX</code>",id:"setsfx",children:[]},{value:"<code>setTexture</code>",id:"settexture",children:[]}],c=(u="ScratchBlocks",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const d={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"material-creation"},"Material Creation"),(0,a.kt)("p",null,"We assign ",(0,a.kt)("inlineCode",{parentName:"p"},"Materials")," to primitives in our scene to tell the Engine how to colour/texture that material. Below are all the blocks ChromeEngine provides to help you work with ",(0,a.kt)("inlineCode",{parentName:"p"},"Materials"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"importFromMTL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"newMaterial")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setDoubleSided")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setPhysics")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setSecondaryColour")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setSFX")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setTexture"))),(0,a.kt)("h3",{id:"importfrommtl"},(0,a.kt)("inlineCode",{parentName:"h3"},"importFromMTL")),(0,a.kt)(c,{mdxType:"ScratchBlocks"},"\nMaterials.importFromMTL\\( .MTL file data []\\) :: custom\n"),(0,a.kt)("p",null,"To import many materials at once from a .MTL file you can use this block, just copy and paste the MTL file into the ",(0,a.kt)("inlineCode",{parentName:"p"},".MTL file data")," input."),(0,a.kt)("h3",{id:"newmaterial"},(0,a.kt)("inlineCode",{parentName:"h3"},"newMaterial")),(0,a.kt)(c,{mdxType:"ScratchBlocks"},"\nMaterials.newMaterial \\( label [] pointer to secondary colour material [ ] sfx sound name [ ] texture costume name [ ] Colour \\(R,G,B,A\\) [] no collider? <> bounciness \\(0-1\\) [ ]) :: custom\n"),(0,a.kt)("p",null,"Used to create a new material from Scratch. It has the following inputs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"label")," - what we will use to refer to this material in future"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"pointer to secondary colour material")," - a pointer to a material, that should be used as the back face colour if the primitive is double sided."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"sfx sound name")," - the name of a sound file in the ",(0,a.kt)("inlineCode",{parentName:"li"},"Logic")," sprite which will be played when a player walks on a primitive with this material."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"texture costume name")," - the name of a texture contained as a costume in the sprite ",(0,a.kt)("inlineCode",{parentName:"li"},"render"),". If specified ChromeEngine will use a texture for this primitive."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Colour")," - the colour separated RGBA value for the primitive. If you don't specify ",(0,a.kt)("inlineCode",{parentName:"li"},"texture costume name")," you'll need to specify this or your material won't have a colour and will default to black. You can leave out the A component, and the colour will default to an alpha of 1."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"no collider?")," - lets you turn off collisions for this material."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"bounciness")," - The restitution value of the material. A value between 0 and 1, where 0 is if the material absorbs all energy, 1 if it preserves all energy")),(0,a.kt)("h3",{id:"setdoublesided"},(0,a.kt)("inlineCode",{parentName:"h3"},"setDoubleSided")),(0,a.kt)(c,{mdxType:"ScratchBlocks"},"\nMaterials.setDoubleSided \\( comma separated list of materials: [] \\) :: custom\n"),(0,a.kt)("p",null,"Lets you specify a list of materials that should be double-sided. Aka materials without backface culling. Useful if you use ",(0,a.kt)("inlineCode",{parentName:"p"},"importFromMTL")," as you can't specify the double sided property in a MTL file."),(0,a.kt)("h3",{id:"setphysics"},(0,a.kt)("inlineCode",{parentName:"h3"},"setPhysics")),(0,a.kt)(c,{mdxType:"ScratchBlocks"},"\nMaterials.setPhysics \\( material [] no collider? <> bounciness []\\) :: custom\n"),(0,a.kt)("p",null,"lets you set the physics properties of materials, including ",(0,a.kt)("inlineCode",{parentName:"p"},"no collider?")," which turns off collisions and ",(0,a.kt)("inlineCode",{parentName:"p"},"bounciness")," which sets how much energy the material absorbs when the object bounces on it."),(0,a.kt)("h3",{id:"setsecondarycolour"},(0,a.kt)("inlineCode",{parentName:"h3"},"setSecondaryColour")),(0,a.kt)(c,{mdxType:"ScratchBlocks"},"\nMaterials.setSecondaryColour\\( Material [] Colour \\(R,G,B,A\\) \\) :: custom\n"),(0,a.kt)("p",null,"Sets the secondary colour property of the material. This lets you specify a different colour to the main one for the back side of the primitive. This is useful for having your interior of your scene be different coloured to the exterior without needing to using meshes with thickness. Setting a secondary colour will automatically make your material double sided."),(0,a.kt)("h3",{id:"setsfx"},(0,a.kt)("inlineCode",{parentName:"h3"},"setSFX")),(0,a.kt)(c,{mdxType:"ScratchBlocks"},"\nMaterials.setSfx \\( material [] sound effect label []\\) :: custom\n"),(0,a.kt)("p",null,"Sets the SFX property of the material. This is the name of a sound file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Logic")," sprite which will be played when a player walks on a primitive with this material."),(0,a.kt)("h3",{id:"settexture"},(0,a.kt)("inlineCode",{parentName:"h3"},"setTexture")),(0,a.kt)(c,{mdxType:"ScratchBlocks"},"\nMaterials.setTexture\\( material [] texture costume name []\\) :: custom\n"),(0,a.kt)("p",null,"Sets the texture property of the material. The ",(0,a.kt)("inlineCode",{parentName:"p"},"texture costume name")," should be the costume name of a texture in the sprite ",(0,a.kt)("inlineCode",{parentName:"p"},"render"),". If specified ChromeEngine will use a texture for this primitive. You can use textured materials on 3D Points which will be shown as billboards but you can also have proper textured polygon primitives but only if the costumes were created using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Joeclinton1/texture_converter"},"Texture Converter tool"),". This is powered by STTF and you should not use too many textures (max 20) as they use 100MB of ram per texture."))}m.isMDXComponent=!0}}]);