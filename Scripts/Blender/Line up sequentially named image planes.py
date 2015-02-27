off = 0.0
for o in bpy.data.objects:
    if not "shot3" in o.name:
        continue
    off = off + .003
    o.location = Vector((0,5.0+off,0))
    o.rotation_euler = Vector((1.570797,0,0))