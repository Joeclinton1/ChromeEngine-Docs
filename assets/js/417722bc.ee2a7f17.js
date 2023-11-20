"use strict";(self.webpackChunkchrome_engine_docs=self.webpackChunkchrome_engine_docs||[]).push([[430],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=c(a),h=o,p=u["".concat(s,".").concat(h)]||u[h]||m[h]||i;return a?n.createElement(p,l(l({ref:t},d),{},{components:a})):n.createElement(p,l({ref:t},d))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:o,l[1]=r;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4316:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const i={},l="Modelling the Game Scene",r={unversionedId:"tutorials/Platformer Tutorial/Create the Platforms",id:"tutorials/Platformer Tutorial/Create the Platforms",isDocsHomePage:!1,title:"Modelling the Game Scene",description:"Normally modelling a game scene could take a while but in ChromeEngine it's super Easy! Once again here's the scene we're going to be making:",source:"@site/docs/tutorials/01-Platformer Tutorial/02-Create the Platforms.md",sourceDirName:"tutorials/01-Platformer Tutorial",slug:"/tutorials/Platformer Tutorial/Create the Platforms",permalink:"/ChromeEngine-Docs/docs/tutorials/Platformer Tutorial/Create the Platforms",editUrl:"https://github.com/your-github-username/your-repo-name/edit/main/docs/docs/tutorials/01-Platformer Tutorial/02-Create the Platforms.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"Intro",permalink:"/ChromeEngine-Docs/docs/tutorials/Platformer Tutorial/Intro"},next:{title:"The Player",permalink:"/ChromeEngine-Docs/docs/tutorials/Platformer Tutorial/The Player"}},s=[{value:"First add a player",id:"first-add-a-player",children:[]},{value:"Adding colour using materials",id:"adding-colour-using-materials",children:[]},{value:"Coordinate System in ChromeEngine",id:"coordinate-system-in-chromeengine",children:[]},{value:"Making the platforms with <code>createCuboid</code>",id:"making-the-platforms-with-createcuboid",children:[]},{value:"Modelling the spikes using <code>createCone</code>",id:"modelling-the-spikes-using-createcone",children:[]},{value:"Modelling our Enemy",id:"modelling-our-enemy",children:[{value:"Modelling the enemies body using <code>createCuboid</code>",id:"modelling-the-enemies-body-using-createcuboid",children:[]},{value:"Giving our enemy an eye using <code>create3DPoint</code>",id:"giving-our-enemy-an-eye-using-create3dpoint",children:[]}]},{value:"Modelling the flag",id:"modelling-the-flag",children:[{value:"Modelling the flag pole using <code>create3DLine</code>",id:"modelling-the-flag-pole-using-create3dline",children:[]},{value:"Modelling the flag fabric using <code>createTri/Quad</code>",id:"modelling-the-flag-fabric-using-createtriquad",children:[]},{value:"Finishing the Flag using <code>setDoubleSided</code>",id:"finishing-the-flag-using-setdoublesided",children:[]}]},{value:"Wrapping up and Additional Resources",id:"wrapping-up-and-additional-resources",children:[]}],c=(d="ScratchBlocks",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const u={toc:s},m="wrapper";function h(e){let{components:t,...i}=e;return(0,o.kt)(m,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modelling-the-game-scene"},"Modelling the Game Scene"),(0,o.kt)("p",null,"Normally modelling a game scene could take a while but in ChromeEngine it's super Easy! Once again here's the scene we're going to be making:\n",(0,o.kt)("img",{alt:"Diagram of Platformer Scene",src:a(153).Z,title:"The plan"})),(0,o.kt)("p",null,"It has a start and end platform, 5 in between platforms, two spikes and an enemy. "),(0,o.kt)("p",null,"In ChromeEngine, all code for modelling the scene should be placed in the aptly named sprite ",(0,o.kt)("inlineCode",{parentName:"p"},"Setup")," within the custom block ",(0,o.kt)("inlineCode",{parentName:"p"},"setup scene objects")," . We're going to do all our modelling via code which is nice and easy for our simple platformer, however we recommend you use 3D modelling software like Blender for bigger game scenes as it'll make your life alot easier. To see how to do that go ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/Modelling%20with%20Blender/Modelling-with-blender"},"here")),(0,o.kt)("h2",{id:"first-add-a-player"},"First add a player"),(0,o.kt)("p",null,"The first step in any ChromeEngine project should be to make sure you have a player as otherwise we won't be able to play the game! If you're using the blank ChromeEngine project then by default we create a player object. If you don't have one then in the ",(0,o.kt)("inlineCode",{parentName:"p"},"setup scene objects")," custom block add the following"),(0,o.kt)(c,{mdxType:"ScratchBlocks"},"\nGameObjects.createPlayer \\( position [0] [1] [0] first person view? <> Fixed shadow? <not <>>\\) :: custom\n"),(0,o.kt)("p",null,"This sets our players initial position to be ",(0,o.kt)("inlineCode",{parentName:"p"},"0,1,0")," (aka 1 unit above the origin) and tells ChromeEngine that we want our player to have a shadow which stays at a fixed distance. The fixed distance shadow is important when making a platformer, as otherwise ChromeEngine will project the shadow onto the ground plane, which won't look very good."),(0,o.kt)("h2",{id:"adding-colour-using-materials"},"Adding colour using materials"),(0,o.kt)("p",null,"In order to tell ChromeEngine what colour we want each of the objects in our scene to be we need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"Materials"),". In ChromeEngine we can make a new material using the following block:"),(0,o.kt)(c,{mdxType:"ScratchBlocks"},"\nMaterials.newMaterial \\(label [] pointer to secondary colour material [ ] sfx sound name [ ] texture costume name [ ] Colour \\(R,G,B,A\\) [] no collider? [ ] bounciness \\(0-1\\) [ ]) :: custom\n"),(0,o.kt)("p",null,"For our purposes the only input we care about is the Colour input and Label input. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Label")," - the name of the material. This MUST be specified or you won't be able to use the material later."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Colour")," - This is where we specify what colour we want our object or primitive to have. We input colours as comma seperated RGBA value. E.g for Red we input 255,0,0,1. If you leave out the A component, and just input the RGB E.g 255,0,0 ChromeEngine will assume an alpha (transparency) of 1. In most cases we will only input the RGB as we rarely need our materials to have transparency.")),(0,o.kt)("p",null,"We'll be making yellow, blue, and green platforms aswell as red enemies and spikes so lets make one material for each of these 4 colours. Here's the specific code we'll use for this:"),(0,o.kt)(c,{mdxType:"ScratchBlocks"},"\nMaterials.newMaterial \\(label [Yellow] pointer to secondary colour material [ ] sfx sound name [ ] texture costume name [ ] Colour \\(R,G,B,A\\) [230,255,20] no collider? [ ] bounciness \\(0-1\\) [ ]) :: custom\nMaterials.newMaterial \\(label [Green] pointer to secondary colour material [ ] sfx sound name [ ] texture costume name [ ] Colour \\(R,G,B,A\\) [0,255,0 ] no collider? [ ] bounciness \\(0-1\\) [ ]) :: custom\nMaterials.newMaterial \\(label [Blue] pointer to secondary colour material [ ] sfx sound name [ ] texture costume name [ ] Colour \\(R,G,B,A\\) [0,140,255] no collider? [ ] bounciness \\(0-1\\) [ ]) :: custom\nMaterials.newMaterial \\(label [Red] pointer to secondary colour material [ ] sfx sound name [ ] texture costume name [ ] Colour \\(R,G,B,A\\) [255,0,0] no collider? [ ] bounciness \\(0-1\\) [ ]) :: custom\n"),(0,o.kt)("h2",{id:"coordinate-system-in-chromeengine"},"Coordinate System in ChromeEngine"),(0,o.kt)("p",null,"The coordinate system used by ChromeEngine is based on the system used by OpenGL. It is a right-handed system, which means that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The x-axis goes from left (negative values) to right (positive values)."),(0,o.kt)("li",{parentName:"ul"},"The y-axis goes from bottom (negative values) to top (positive values)."),(0,o.kt)("li",{parentName:"ul"},"The z-axis goes from far (negative values) to near (positive values).")),(0,o.kt)("p",null,"This is important to understand when setting positions or rotations of your game objects."),(0,o.kt)("h2",{id:"making-the-platforms-with-createcuboid"},"Making the platforms with ",(0,o.kt)("inlineCode",{parentName:"h2"},"createCuboid")),(0,o.kt)("p",null,"We're going to try to make some platforms which match the drawing at the top of this page. For this we're going to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"createCuboid")," block:"),(0,o.kt)(c,{mdxType:"ScratchBlocks"},"\nGameObjects.createCuboid \\(Scale [ ] [ ] [ ] Position [ ] [ ] [ ] Rotation [ ] [ ] [ ] Material [ ] name [ ]\\) :: custom\n"),(0,o.kt)("p",null,"This lets us specify Scale, Position and one of our previously create materials. ChromeEngine doesn't have a visual scene modelling environment, so for find the right Scale and Position values for our platforms we apply trial and error. (For more complex scenes we recommend you model your scene in Blender, which you can learn how to do with our ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/Modelling%20with%20Blender/Modelling-with-blender"},"Blender Modelling tutorial"),")"),(0,o.kt)("p",null,"We encourage you to try and see if you can make these platforms on your own, but if you get stuck you can just copy the below code."),(0,o.kt)(c,{mdxType:"ScratchBlocks"},"\nGameObjects.createCuboid \\(Scale [2] [0.2] [2] Position [0] [0] [0] Rotation [ ] [ ] [ ] Material [Yellow] name [Start]\\) :: custom\nGameObjects.createCuboid \\(Scale [1.6] [0.2] [1.2] Position [1.2] [1.4] [-2.5] Rotation [ ] [ ] [ ] Material [Blue] name [Platform 2]\\) :: custom\nGameObjects.createCuboid \\(Scale [1.2] [0.2] [1.2] Position [0.6] [3.6] [-5.2] Rotation [ ] [ ] [ ] Material [Blue] name [Platform 3]\\) :: custom\nGameObjects.createCuboid \\(Scale [0.5] [0.2] [3] Position [0] [5.2] [-9.2] Rotation [ ] [ ] [ ] Material [Blue] name [Platform 4]\\) :: custom\nGameObjects.createCuboid \\(Scale [1.3] [0.2] [6.4] Position [0] [5.6] [-14.6] Rotation [ ] [ ] [ ] Material [Blue] name [Platform 5]\\) :: custom\nGameObjects.createCuboid \\(Scale [2.4] [0.2] [3.4] Position [0] [5.2] [-20] Rotation [ ] [ ] [ ] Material [Blue] name [Platform 6]\\) :: custom\nGameObjects.createCuboid \\(Scale [1.3] [0.2] [6.4] Position [0] [5.6] [-14.6] Rotation [ ] [ ] [ ] Material [Green] name [End]\\) :: custom\n"),(0,o.kt)("p",null,"Now when we click play we get our first look at our 3D platformer!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Platforms",src:a(9578).Z})),(0,o.kt)("h2",{id:"modelling-the-spikes-using-createcone"},"Modelling the spikes using ",(0,o.kt)("inlineCode",{parentName:"h2"},"createCone")),(0,o.kt)("p",null,"For our spikes, we'll use a cone mesh, with 4 sides. In ChromeEngine to add a cone shaped GameObject we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"GameObjects.createCone")," block:"),(0,o.kt)(c,{mdxType:"ScratchBlocks"},"\nGameObjects.createCone \\(Radius [] Height [] Number of sides [] Position [ ] [ ] [ ] Rotation [ ] [ ] [ ] Material [ ] name [ ]\\) :: custom\n"),(0,o.kt)("p",null,"To make our spikes we'll use two of these each with Radius 0.2, height 0.3 and 4 sides. We'll assign them both the ",(0,o.kt)("inlineCode",{parentName:"p"},"Red")," material. Make sure that your cones are positioned above the platformer and don't intersect with it."),(0,o.kt)(c,{mdxType:"ScratchBlocks"},"\nGameObjects.createCone \\(Radius [0.2] Height [0.3] Number of sides [4] Position [0] [5.3] [-8.6] Rotation [ ] [ ] [ ] Material [Red] name [Spike 1]\\) :: custom\nGameObjects.createCone \\(Radius [0.2] Height [0.3] Number of sides [4] Position [0] [5.3] [-9.8] Rotation [ ] [ ] [ ] Material [Red] name [Spike 2]\\) :: custom\n"),(0,o.kt)("p",null,"Here's what our spikes should look like:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Spikes",src:a(2773).Z})),(0,o.kt)("h2",{id:"modelling-our-enemy"},"Modelling our Enemy"),(0,o.kt)("h3",{id:"modelling-the-enemies-body-using-createcuboid"},"Modelling the enemies body using ",(0,o.kt)("inlineCode",{parentName:"h3"},"createCuboid")),(0,o.kt)("p",null,"For our enemies body we'll once again use the ",(0,o.kt)("inlineCode",{parentName:"p"},"GameObjects.createCuboid")," block:"),(0,o.kt)(c,{mdxType:"ScratchBlocks"},"\nGameObjects.createCuboid \\(Scale [0.4] [0.4] [0.4] Position [0] [5.6] [-20] Rotation [ ] [ ] [ ] Material [Red] name [Enemy]\\) :: custom\n"),(0,o.kt)("h3",{id:"giving-our-enemy-an-eye-using-create3dpoint"},"Giving our enemy an eye using ",(0,o.kt)("inlineCode",{parentName:"h3"},"create3DPoint")),(0,o.kt)("p",null,"Our Enemy's a little boring at the moment so lets bring it to life by giving it an eye! We can do this easily in ChromeEngine using 3D points which are points in 3D space either rendered as a dot with pen or as a stamped image. In our case lets use a stamped image, because then we can make our eye more complex."),(0,o.kt)("p",null,"We'll be using the following image for the eye."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Eye",src:a(5968).Z,title:"Eye"})),(0,o.kt)("p",null,"Save this to your computer, then import it as a costume in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Render")," sprite, and rename to ",(0,o.kt)("inlineCode",{parentName:"p"},"Eye"),"."),(0,o.kt)("p",null,"To use this as a texture we need to create a material using it. We do this in the same way that we created a Colour Material but this time we need to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"texture costume name")," input to ",(0,o.kt)("inlineCode",{parentName:"p"},"Eye")),(0,o.kt)(c,{mdxType:"ScratchBlocks"},"\nMaterials.newMaterial \\(label [Eye] pointer to secondary colour material [ ] sfx sound name [ ] texture costume name [Eye] Colour \\(R,G,B,A\\) [] no collider? [ ] bounciness \\(0-1\\) [ ]) :: custom\n"),(0,o.kt)("p",null,"We can then create the eye using the ",(0,o.kt)("inlineCode",{parentName:"p"},"GameObjects.create3DPoint")," block:"),(0,o.kt)(c,{mdxType:"ScratchBlocks"},"\nGameObjects.create3DPoint \\(material name [Eye] radius [0.2] scale y [] position [0] [0] [-0.3] parent [enemy] shadow offset dist [] name [Eye]) :: custom\n"),(0,o.kt)("p",null,"We set the set the material to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Eye")," material we made earlier. To make sure our ",(0,o.kt)("inlineCode",{parentName:"p"},"Eye")," is always at a fixed offset from the Enemy body we parent it to the Enemy and specify the position as an offset of ",(0,o.kt)("inlineCode",{parentName:"p"},"0, 0, -0.3")," rather than a global coordinate.  parent it ",(0,o.kt)("inlineCode",{parentName:"p"},"Enemy"),",  and set it to being rendered with a stamped costume rather than the pen."),(0,o.kt)("p",null,"Here's what our finished enemy should look like:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Enemy",src:a(6718).Z})),(0,o.kt)("h2",{id:"modelling-the-flag"},"Modelling the flag"),(0,o.kt)("h3",{id:"modelling-the-flag-pole-using-create3dline"},"Modelling the flag pole using ",(0,o.kt)("inlineCode",{parentName:"h3"},"create3DLine")),(0,o.kt)("p",null,"Our flag pole is a vertical cylinder of height 0.9. In ChromeEngine to improve the performance we use 3D lines instead of cylinders. To make a 3D line we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"GameObjects.create3DLine")," block. Here's how we can use it to make a flag pole in the centre of our final platform:"),(0,o.kt)(c,{mdxType:"ScratchBlocks"},"\nGameObjects.create3DLine \\(Pt A [0] [5.2] [-23] Pt B [0] [6.4] [-23] material [Yellow] radius [0.02] parent [] name [Flag Pole]\\) :: custom\n"),(0,o.kt)("p",null,"Points A and B are the end points of our 3D line and Radius is the thickness of it."),(0,o.kt)("h3",{id:"modelling-the-flag-fabric-using-createtriquad"},"Modelling the flag fabric using ",(0,o.kt)("inlineCode",{parentName:"h3"},"createTri/Quad")),(0,o.kt)("p",null,"On top of our flag pole we want a single green rectangle for the flag fabric. To make a single triangle or quad in ChromeEngine you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"createTri/Quad")," block. Here's how it can be used for to make the flag fabric:"),(0,o.kt)(c,{mdxType:"ScratchBlocks"},"\nGameObjects.createTri/Quad \\(Pt A [0] [6.1] [-23] Pt B [0] [6.4] [-23] Pt C [-0.5] [6.4] [-23] Pt D \\(leave blank if tri\\) [-0.5] [6.1] [-23] parent [Flag Pole] material [Flag] name [Flag Fabric]\\) :: custom\n"),(0,o.kt)("h3",{id:"finishing-the-flag-using-setdoublesided"},"Finishing the Flag using ",(0,o.kt)("inlineCode",{parentName:"h3"},"setDoubleSided")),(0,o.kt)("p",null,"By default in Chrome Engine all primitives are single sided, meaning they are invisible if viewed from the back, however we don't want this for our flag so we need to change this. In ChromeEngine we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Materials.setDoubleSided")," block to create materials which force primitives to be double sided. First we make a new material for our flag and then we make it a double sided material using ",(0,o.kt)("inlineCode",{parentName:"p"},"Materials.setDoubleSided"),":"),(0,o.kt)(c,{mdxType:"ScratchBlocks"},"\nMaterials.newMaterial \\(label [Flag] pointer to secondary colour material [ ] sfx sound name [ ] texture costume name [ ] Colour \\(R,G,B,A\\) [0,255,0] no collider? [ ] bounciness \\(0-1\\) [ ]) :: custom\nMaterials.setDoubleSided \\( [Flag] \\):: custom\n"),(0,o.kt)("p",null,"Finally here's our finished flag!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Flag Finished",src:a(9110).Z})),(0,o.kt)("h2",{id:"wrapping-up-and-additional-resources"},"Wrapping up and Additional Resources"),(0,o.kt)("p",null,"Congratulations! If you did all the steps correctly, you should now have something that looks a bit like this when you click the green flag:\n",(0,o.kt)("img",{alt:"Scene Finished",src:a(9617).Z})),(0,o.kt)("p",null,"Here's the finished code you should have after completing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Setting the Scene")," tutorial stage."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Finished Code",src:a(7341).Z})),(0,o.kt)("p",null,"For more detailed information on setting up the scene in ChromeEngine, you can visit ",(0,o.kt)("a",{parentName:"p",href:"/docs/user_docs/Modelling"},"Creating The Scene")," in our documentation."),(0,o.kt)("p",null,"In the next part of this tutorial, we'll add movement and interaction to our game! Keep learning, and happy coding!"))}h.isMDXComponent=!0},6718:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/enemy-8d8099638398786dc7acf490b4cc939e.png"},5968:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAFTWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwMCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjEwMCIKICAgZXhpZjpDb2xvclNwYWNlPSIxIgogICB0aWZmOkltYWdlV2lkdGg9IjEwMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAwIgogICB0aWZmOlJlc29sdXRpb25Vbml0PSIyIgogICB0aWZmOlhSZXNvbHV0aW9uPSI3Mi4wIgogICB0aWZmOllSZXNvbHV0aW9uPSI3Mi4wIgogICBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIgogICBwaG90b3Nob3A6SUNDUHJv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"},7341:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/finished-code-61d1fe6e3015aa0a55eb198e18be3ee6.png"},9110:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/flag-finished-3663f4e1ce04ab16637e94e6015fc46a.png"},9578:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/platforms-23807cbbbde052a84ed75f62e2d0fb4a.png"},9617:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/scene-finished-ea092c0a797283fe283268c3177e7950.png"},2773:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/spikes-642b457f0c6c58625a4ecf9f198f8b17.png"},153:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/the-plan-bef52d47fd373c56957acd20f2807bbe.png"}}]);