# Rigid Body Physics


## What is it?
ChromeEngine contains a powerful 3D rigid body physics engine. It is a simplified 3D version of Randy Gaul's [ImpulseEngine](https://github.com/RandyGaul/ImpulseEngine). Critically this engine operates fully under the assumption that all forces during a collision are the same as an objects impulse value during a collision.

## `Physics` pseudo code

1. Update the players velocity
    1. Iterate over the `@player_forces` list and determine the element wise sum of all the forces, then add this to the Players physical velocity.
    1. Add the force vector as set by the first three items of the `@player_forces_controlled` list to the Players controlled velocity.
    1. Update the player velocity to be a combination of it's physical and controlled velocity. The physical velocity is multiplied by `delta_t` to account for frame rate.
    1. Dampen both controlled and physical velocity
2. Update player position using it's velocity
3. Detect all collisions (discussed in detail in the [Collision Tests](/docs/system_docs/Physics/Collision%20Tests) section)
4. Resolve the collision with earliest time of impact.
5. Resolve remaining collisions in random order

## `Collision resolution` pseudo code

Collision resolution involves the following steps:

1. Retrieve the collision information
2. If the collision penetrated deeper than `@penetration_thresh`, move the player backwards along the collision normal so it is no longer penetrating
3. Add the collision forces associated with the collision.
    1. If the object is moving then we find the Angular and tangential velocity of the object's moving/spinning bounding sphere at the players location.
    2. We calculate the magnitude of the collision force as the dot product of the player's velocity minus the objects velocity and the collision normal.
    3. We add a force with this magnitude in the direction of the collision normal multiplied 1 + the `_restitution` value of the materia to the `@player_forces` list
        1. since we want it to apply a force which cancels out all the forwards velocity of the player and then additional force (`_restitution`) which bounces it backwards.
    4.  We calculate the magnitude of the collision force again like before but using the players physical velocity only
    5. We calculate the tagential component of the collision force by subtracting the main collision force from the players physical velocity minus the objects velocity. We add this tangential force to the `@player_forces` list.
        1. We also prefix it's label with a "t:" to make it clear that it's tagential force.