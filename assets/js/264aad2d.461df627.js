"use strict";(self.webpackChunkchrome_engine_docs=self.webpackChunkchrome_engine_docs||[]).push([[295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,u=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return n?o.createElement(u,a(a({ref:t},m),{},{components:n})):o.createElement(u,a({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9098:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(7462),i=(n(7294),n(3905));const r={},a="Modelling with Blender",l={unversionedId:"tutorials/Modelling with Blender/Modelling-with-blender",id:"tutorials/Modelling with Blender/Modelling-with-blender",isDocsHomePage:!1,title:"Modelling with Blender",description:"Whilst the built in tools for creating scene geometry are great, if you want to make bigger scenes it will be easier to make them first in a 3D modelling tool and then import them into the engine. One of the best 3D modelling tools out there is Blender, so here's quick tutorial on how to use it with Chrome Engine",source:"@site/docs/tutorials/02-Modelling with Blender/01-Modelling-with-blender.md",sourceDirName:"tutorials/02-Modelling with Blender",slug:"/tutorials/Modelling with Blender/Modelling-with-blender",permalink:"/ChromeEngine-Docs/docs/tutorials/Modelling with Blender/Modelling-with-blender",editUrl:"https://github.com/your-github-username/your-repo-name/edit/main/docs/docs/tutorials/02-Modelling with Blender/01-Modelling-with-blender.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"Interactive Game Elements",permalink:"/ChromeEngine-Docs/docs/tutorials/Platformer Tutorial/Interactive Game Elements"}},s=[{value:"Modelling your scene",id:"modelling-your-scene",children:[]},{value:"Blender to ChromeEngine coordinates",id:"blender-to-chromeengine-coordinates",children:[{value:"Preparing dynamic objects for ChromeEngine",id:"preparing-dynamic-objects-for-chromeengine",children:[]}]},{value:"Importing and exporting the mesh",id:"importing-and-exporting-the-mesh",children:[{value:"Exporting your mesh",id:"exporting-your-mesh",children:[]},{value:"Importing your mesh",id:"importing-your-mesh",children:[]},{value:"Moving the dynamic objects back",id:"moving-the-dynamic-objects-back",children:[]}]},{value:"Importing multiple meshes using <code>obj file data</code> input",id:"importing-multiple-meshes-using-obj-file-data-input",children:[]},{value:"Pre-compiling on Turbowarp and exporting with <code>ExportScene</code>",id:"pre-compiling-on-turbowarp-and-exporting-with-exportscene",children:[]},{value:"Materials",id:"materials",children:[{value:"Exporting an MTL file",id:"exporting-an-mtl-file",children:[]},{value:"Importing an MTL file",id:"importing-an-mtl-file",children:[]}]}],c=(m="ScratchBlocks",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var m;const p={toc:s},d="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"modelling-with-blender"},"Modelling with Blender"),(0,i.kt)("p",null,"Whilst the built in tools for creating scene geometry are great, if you want to make bigger scenes it will be easier to make them first in a 3D modelling tool and then import them into the engine. One of the best 3D modelling tools out there is Blender, so here's quick tutorial on how to use it with Chrome Engine"),(0,i.kt)("h2",{id:"modelling-your-scene"},"Modelling your scene"),(0,i.kt)("p",null,"We're not going to cover how you make the scene as there are plenty of ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=nIoXOplUvAw"},"great Blender tutorials")," out there. We'll assume you have your scene ready to go. Here's an example scene from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/Platformer%20Tutorial/Intro"},"Platformer Tutorial"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Blender Screenshot of spikes and enemy",src:n(2779).Z,title:"Spikes and Enemies"})),(0,i.kt)("h2",{id:"blender-to-chromeengine-coordinates"},"Blender to ChromeEngine coordinates"),(0,i.kt)("p",null,"Whilst modelling details or setting positions you might want to specify specific coordinates. Unfortunately you can't get the coordinate of vertices yet in ChromeEngine however you can do this in Blender."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Enter ",(0,i.kt)("inlineCode",{parentName:"li"},"Edit Mode")," and right click on a vertex"),(0,i.kt)("li",{parentName:"ol"},"press ",(0,i.kt)("inlineCode",{parentName:"li"},"N")," to open properties, and from there you can see the coordinates of the vertex.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Tip: make sure to set to Global!"))),(0,i.kt)("li",{parentName:"ol"},"ChromeEngine and Blender use different coordinate systems but you can easily convert them by just swapping the y and z value. And multiplying the new z by negative 1.")),(0,i.kt)("h3",{id:"preparing-dynamic-objects-for-chromeengine"},"Preparing dynamic objects for ChromeEngine"),(0,i.kt)("p",null,"When you import your scene into ChromeEngine the transform origin of each object will always be the origin. This can be problematic, as when we try to transform these objects and their transform center lies at the origin instead of the center of the object, our transformations will be wrong."),(0,i.kt)("p",null,"To fix this we must reposition our dynamic objects so that their center of rotation is at the origin. We can do this like this:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Object Properties")," tab in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Properties")," panel."),(0,i.kt)("li",{parentName:"ol"},"Write down the current Location value, so that we can reposition back to this location later."),(0,i.kt)("li",{parentName:"ol"},"Set the Location to 0, 0, 0")),(0,i.kt)("p",null,"Here's what this looks like for the example scene from before:\n",(0,i.kt)("img",{alt:"Blender Screenshot of transform origin",src:n(4308).Z,title:"Set transform Origin"})),(0,i.kt)("h2",{id:"importing-and-exporting-the-mesh"},"Importing and exporting the mesh"),(0,i.kt)("h3",{id:"exporting-your-mesh"},"Exporting your mesh"),(0,i.kt)("p",null,"Once you've finished designing your game scene in Blender, export it as an .obj file."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select your objects."),(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"File")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Export")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Wavefront (.obj)"),"."),(0,i.kt)("li",{parentName:"ol"},"In the export settings, make sure to disable exporting normals or UVs. ")),(0,i.kt)("h3",{id:"importing-your-mesh"},"Importing your mesh"),(0,i.kt)("p",null,"Now that you have your beautiful .obj file, let's bring it into your ChromeEngine game. To do this we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"import_from_OBJ_file")," block:"),(0,i.kt)(c,{mdxType:"ScratchBlocks"},"\nGameObjects.import_from_OBJ_file \\( CW orientated? <> scale [1] align_center <> .obj file data \\(leave blank if using _OBJ list\\) []\\) :: custom\n"),(0,i.kt)("p",null,"This block when placed within ",(0,i.kt)("inlineCode",{parentName:"p"},"Setup Scene objects")," will let you import a mesh as a ChromeEngine GameObject. It has the following inputs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CW orientated?"),' indicates whether your object has clockwise or anticlockwise orientated faces. If your model appears "inside-out" it\'s probably because this is set wrong'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scale")," - this is the size of the model on load. ChromeEngine uses BSP and expects all your vertices to be on a normalized scale between -1 to 1. If you find BSP messed up your mesh you should try changing the scale."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"align-centre")," - this will re-centre your mesh, which is helpful if you want to apply rotations to your object, or your mesh file isn't your own."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".obj file data")," - used if you want to copy and paste obj file data into an input instead of setting the _OBJ file data.")),(0,i.kt)("p",null,"To import the file, assign the function to a variable, right-click on ",(0,i.kt)("inlineCode",{parentName:"p"},"_OBJ"),", select ",(0,i.kt)("inlineCode",{parentName:"p"},"import from file"),", and choose the .obj file you exported earlier."),(0,i.kt)("h3",{id:"moving-the-dynamic-objects-back"},"Moving the dynamic objects back"),(0,i.kt)("p",null,"Previously we moved all the dynamic objects to 0,0,0 so that their rotation centres would be the same as their local origins. However now we need to move them back. The recommended way to do this is to go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Logic")," sprite, and add to ",(0,i.kt)("inlineCode",{parentName:"p"},"GameObjects.setup()")," custom block a ",(0,i.kt)("inlineCode",{parentName:"p"},"setPosition")," block for each dynamic object, to set it's position back to what it used to be. Thankfully we made sure to write down all the old positions! Remember ChromeEngine and blender don't have the same coordinate system so you will need to convert the coordinates (reminder: we do this by swapping the y and z value. And multiplying the new z by negative 1). Here's an example of how to re-position a dynamic object back to it's old location:"),(0,i.kt)(c,{mdxType:"ScratchBlocks"},"\ndefine GameObjects.setup\\(\\):\n    GameObject.setPosition \\( object name [Platform 3] position  [0.6] [3.6] [-5.2] \\) :: custom\n"),(0,i.kt)("h2",{id:"importing-multiple-meshes-using-obj-file-data-input"},"Importing multiple meshes using ",(0,i.kt)("inlineCode",{parentName:"h2"},"obj file data")," input"),(0,i.kt)("p",null,"Importing our .obj file to ",(0,i.kt)("inlineCode",{parentName:"p"},"_OBJ")," and loading it once works fine if you have one single level but often your game will need to have many levels, so how would you do this? Thankfully ChromeEngine has you covered. Instead of importing your .obj file into the _OBJ list simply copy and paste it and put it in the optional ",(0,i.kt)("inlineCode",{parentName:"p"},".obj file data")," input in the ",(0,i.kt)("inlineCode",{parentName:"p"},"GameObjects.importFromOBJFile")," block!"),(0,i.kt)(c,{mdxType:"ScratchBlocks"},"\nGameObjects.importFromOBJFile \\( CW orientated? <> scale [1] align_center <> .obj file data \\( leave blank if using _OBJ list \\) [Copy and paste your .obj file here, instead of importing it to _OBJ]\\) :: custom\n"),(0,i.kt)("h2",{id:"pre-compiling-on-turbowarp-and-exporting-with-exportscene"},"Pre-compiling on Turbowarp and exporting with ",(0,i.kt)("inlineCode",{parentName:"h2"},"ExportScene")),(0,i.kt)("p",null,"If your mesh is very complex, the BSP tree generation will take forever on regular scratch so we recommend you use turbowarp to generate your BSP tree and then import it into ChromeEngine. To import an obj file along with a pregenerated bsp tree use ",(0,i.kt)("inlineCode",{parentName:"p"},"ExportScene")),(0,i.kt)(c,{mdxType:"ScratchBlocks"},"\n_OBJ = exportScene\\(\\) :: custom\n"),(0,i.kt)("p",null,'All you need to do is click the green flag and wait for your game to be "compiled" via ChromeEngine on turbowarp, then click on the ',(0,i.kt)("inlineCode",{parentName:"p"},"ExportScene"),", and your new custom ChromeEngine .obj file will be stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"_OBJ")," list. You can now right click the list, click export and then use this .txt file in your regular Scratch version instead. If you use an obj file which is of the ChromeEngineOBJ format ChromeEngine automatically detects this and loads your BSP tree from the file instead of generating it, which makes loading times much faster."),(0,i.kt)("h2",{id:"materials"},"Materials"),(0,i.kt)("h3",{id:"exporting-an-mtl-file"},"Exporting an MTL file"),(0,i.kt)("p",null,"Materials play a crucial role in defining the appearance of 3D objects. They determine their color, texture, and surface properties like shininess. To create materials, we'll be using Blender, a powerful software. We can then export these materials into ChromeEngine scenes using a file format called MTL."),(0,i.kt)("p",null,'To ensure proper export, remember to use the "Principled BSDF" shader when setting up materials in Blender. Here\'s a step-by-step guide on exporting an MTL file:'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Open Blender and create or modify your materials using the "Principled BSDF" shader.'),(0,i.kt)("li",{parentName:"ol"},"Once you're satisfied with your materials, navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"File > Export > Wavefront (.obj)"),"."),(0,i.kt)("li",{parentName:"ol"},"In the export options panel, make sure to enable the ",(0,i.kt)("inlineCode",{parentName:"li"},"Write Materials")," option, and then proceed with the export.")),(0,i.kt)("h3",{id:"importing-an-mtl-file"},"Importing an MTL file"),(0,i.kt)("p",null,"Now that you have your MTL file, it's time to import it into ChromeEngine. Follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open the MTL file with a text editor of your choice."),(0,i.kt)("li",{parentName:"ol"},"Copy the material data from the file."),(0,i.kt)("li",{parentName:"ol"},"Paste the copied data into the ",(0,i.kt)("inlineCode",{parentName:"li"},"Materials.importFromMtlFile")," function within ChromeEngine.")),(0,i.kt)("p",null,"Here's an example of how it should look:"),(0,i.kt)(c,{mdxType:"ScratchBlocks"},"\nMaterials.importFromMTL\\(.MTL file data [your file data goes here]\\) :: custom\n"))}h.isMDXComponent=!0},4308:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/set-transform-origin-c6ca15fbc27013c26313cfd6fa5e7696.png"},2779:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/spikes-and-enemy-770eff68a5cb860e19a473b8222d0f14.png"}}]);