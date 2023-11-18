## Customizing Settings

The easiest way to customize your engine is by modifying the settings in the settings sprite. All settings are denoted by an `@` symbol before the variable name. You can adjust these values to change the behaviour and characteristics of the engine. All the settings are set within the `settings` sprite, and grouped by functionality, making it easy to change the engine settings.

**Direct Engine Modifications:** While the engine settings should cover a lot of ground for customization, you might find yourself in a situation where these are just not enough. The real beauty of ChromeEngine being coded entirely in Scratch is the ability to dive in and directly modify how the engine works.
We've provided detailed [System Documentation](/docs/system_docs/Intro) covering some of the more complex parts of the engine to help you with this process.

### General Settings

<ScratchBlocks>
{`
set [@shadows? v] to (1)
`}
</ScratchBlocks>

`@shadows?`: This variable toggles shadow effects. Set it to `1` to enable shadows and `0` to disable them.

<ScratchBlocks>
{`
set [@show_tris? v] to (0)
`}
</ScratchBlocks>

`@show_tris?`: This variable toggles the display of triangles in your 3D models. `1` shows the triangles, and `0` hides them.

<ScratchBlocks>
{`
set [@res v] to (2)
`}
</ScratchBlocks>

`@res`: Controls the resolution of the engine. Higher values increase the resolution.

<ScratchBlocks>
{`
set [@fast_shading v] to (1)
`}
</ScratchBlocks>

`@fast_shading`: This setting toggles fast shading. Set to `1` for fast shading, and `0` for more precise shading.

<ScratchBlocks>
{`
set [@edit_mode? v] to (1)
`}
</ScratchBlocks>

`@edit_mode?`: This setting toggles the edit mode of the engine. Setting it to `1` turns the edit mode on while `0` turns it off.

<ScratchBlocks>
{`
set [@show_prims/dynamic/objs v] to (0)
`}
</ScratchBlocks>

`@show_prims/dynamic/objs`: This controls the visibility of dynamic primitives and objects. If you set this to `1`, they'll be shown; if set to `0`, they'll be hidden.

<ScratchBlocks>
{`
set [@fps v] to (30)
`}
</ScratchBlocks>

`@fps`: Controls the frames per second (fps) in your game. A higher value will make the game run smoother, but may also require more processing power.

<ScratchBlocks>
{`
set [@glide/walk v] to (1)
`}
</ScratchBlocks>

`@glide/walk`: This setting toggles between gliding and walking in the game. If you set it to `1`, the characters will glide; if set to `0`, they will walk.

### Camera Settings

<ScratchBlocks>
{`
set [@C_roll v] to (0)
`}
</ScratchBlocks>

`@C_roll`: This setting controls the camera roll. Adjust this to change the rotation of the camera around the front-to-back axis.

<ScratchBlocks>
{`
set [@C_pitch v] to (0)
`}
</ScratchBlocks>

`@C_pitch`: This setting controls the pitch of the camera. You can change it to move the camera up and down.

<ScratchBlocks>
{`
set [@C_yaw v] to (0)
`}
</ScratchBlocks>

`@C_yaw`: Adjust this setting to control the camera's yaw, which will make the camera move left and right.

<ScratchBlocks>
{`
set [@cam_tilt v] to (20)
`}
</ScratchBlocks>

`@cam_tilt`: This setting controls the tilt of the camera. You can adjust the tilt angle with this setting.

<ScratchBlocks>
{`
set [@camX v] to (0)
`}
</ScratchBlocks>

`@camX`: This determines the X-coordinate of the camera in your game's 3D space.

<ScratchBlocks>
{`
set [@camY v] to (1)
`}
</ScratchBlocks>

`@camY`: Similar to the `@camX` setting, this sets the Y-coordinate of the camera in your game's 3D space.

<ScratchBlocks>
{`
set [@camZ v] to (10)
`}
</ScratchBlocks>

`@camZ`: This setting sets the Z-coordinate of the camera in your game's 3D space, affecting the depth of the camera.

<ScratchBlocks>
{`
set [@z_near v] to (-2)
`}
</ScratchBlocks>

`@z_near`: Defines the closest distance that the camera can render an object. Objects closer than this value will not be displayed.

<ScratchBlocks>
{`
set [@z_far v] to (100)
`}
</ScratchBlocks>

`@z_far`: Defines the farthest distance that the camera can render an object. Objects farther than this value will not be displayed.

<ScratchBlocks>
{`
set [@cam_z_offset v] to (1.7)
`}
</ScratchBlocks>

`@cam_z_offset`: Determines the distance between the camera and the position it is looking at along the Z-axis.

<ScratchBlocks>
{`
set [@z_clip_dist v] to (-0.01)
`}
</ScratchBlocks>

`@z_clip_dist`: Determines the Z-distance at which objects are clipped from the camera view. 

### Light Direction and Strength Settings

<ScratchBlocks>
{`
set [@lightX v] to ([1] * ([sqrt v] of ([1] / [4])))
`}
</ScratchBlocks>

`@lightX`: Controls the X-direction of the light source in the game. You can change the value for different lighting effects.

<ScratchBlocks>
{`
set [@lightY v] to ([1] * ([sqrt v] of ([5] / [12])))
`}
</ScratchBlocks>

`@lightY`: This setting is similar to `@lightX` but controls the Y-direction of the light source.

<ScratchBlocks>
{`
set [@lightZ v] to ([1] * ([sqrt v] of ([1] / [3])))
`}
</ScratchBlocks>

`@lightZ`: Similarly, this setting manages the Z-direction of the light source.

<ScratchBlocks>
{`
set [@ambient_max v] to (0.6)
`}
</ScratchBlocks>

`@ambient_max`: Sets the maximum ambient light level in the game. A higher value will make the overall lighting of the game brighter.

<ScratchBlocks>
{`
set [@time_of_day v] to (12)
`}
</ScratchBlocks>

`@time_of_day`: Simulates different times of the day. It can take values from `0` (midnight) to `24` (end of day). 


### Physics Engine Settings

<ScratchBlocks>
{`
set [@player_r v] to (0.2)
`}
</ScratchBlocks>

`@player_r`: This setting represents the player's radius for collision detection purposes. A larger radius means the player is more likely to collide with other objects.

<ScratchBlocks>
{`
set [@μ v] to (0.1)
`}
</ScratchBlocks>

`@μ`: This sets the coefficient of friction used in the physics engine. Higher values result in more friction between objects.

<ScratchBlocks>
{`
set [@penetration_thresh v] to (0.0001)
`}
</ScratchBlocks>

`@penetration_thresh`: This is the penetration threshold for collision detection. If the distance between two colliding objects is smaller than this value, they are considered to be penetrating each other.

<ScratchBlocks>
{`
set [@restitution v] to (0.2)
`}
</ScratchBlocks>

`@restitution`: This controls the restitution (bounciness) of an object after a collision. A higher value results in a greater bounce after a collision.

<ScratchBlocks>
{`
set [@gravity_x v] to (0)
`}
</ScratchBlocks>

`@gravity_x`: This sets the horizontal component of gravity. A non-zero value will cause objects to move horizontally even when no forces are applied.

<ScratchBlocks>
{`
set [@gravity v] to (-0.008)
`}
</ScratchBlocks>

`@gravity`: Sets the vertical acceleration due to gravity in the game. You can adjust it to simulate different gravitational fields.

<ScratchBlocks>
{`
set [@ground_y v] to (0)
`}
</ScratchBlocks>

`@ground_y`: Determines the Y-position of the ground in your game world.

<ScratchBlocks>
{`
set [@ground_has_collider? v] to (1)
`}
</ScratchBlocks>

`@ground_has_collider?`: If set to 1, the ground is considered in collision detection. If set to 0, the player and other objects can pass through the ground.

<ScratchBlocks>
{`
set [@collision_sounds? v] to (1)
`}
</ScratchBlocks>

`@collision_sounds?`: If set to 1, sounds are played upon collision. If set to 0, collisions will be silent.

<ScratchBlocks>
{`
set [@collision_pitch/volume? v] to (1)
`}
</ScratchBlocks>

`@collision_pitch/volume?`: Controls the pitch and volume of the collision sounds. Higher values result in louder and higher pitched sounds.

### BSP (Binary Space Partitioning) Settings

<ScratchBlocks>
{`
set [@gen_BSP? v] to (1)
`}
</ScratchBlocks>

`@gen_BSP?`: If set to 1, the engine generates a Binary Space Partitioning tree. This is a data structure used in 3D computer graphics to quickly determine what objects are potentially visible.

<ScratchBlocks>
{`
set [@coplanar_thresh v] to (0.023)
`}
</ScratchBlocks>

`@coplanar_thresh`: Sets the tolerance for considering two planes as coplanar in the BSP tree. Lower values mean that planes have to be very similar to be considered coplanar.