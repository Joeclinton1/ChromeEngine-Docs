# Collision Tests

ChromeEngine's collision tests are based on the code found at https://realtimecollisiondetection.net/. So if you want more information just go there.

## Pseudo code

1. For each primitive `_*prim` that is a) not the player b) is a polygon c) has a material with collisions turned on
    1. If the distance the player travelled in one frame is greater than it's radius, then we apply anti_tunneling
        1. Cast a ray between the players old and new position and find the closest point on that ray to `_*prim`
        1. Use the closest point location for the players bounding sphere centre instead of it's actual centre.
    2. Perform a sphere to sphere-bounded polygon collision test
        1. Check if the sphere of the player and bounding-sphere of the polygon are closer than the sum of their radii. If no return.
        1. Perform a sphere-polygon collision test (exactly the same as 5.2.8 Testing Sphere against Polygon of RTCD)
            1. Check if the sphere intersects the polygon's plane. If no return.
            1. Test if the sphere intersects any of the polygons edges. 
                1. If yes return the edge intersection point and the closest point on the sphere to the edge
            2. Find an axis plane which is not orthogonal to the polygon's plane. 
            3. Project the polygon onto it by removing either the x,y or z component for each polygon vertex depending on which plane was chosen. Also project the sphere centre onto the same plane with the same method.
            3. If the projected Polygon is a tri perform a PointInTri test Else perform a PointInPolygon test. 