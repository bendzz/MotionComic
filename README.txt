README UPDATED: 5:35 PM 2/26/2015

This github repo has example files and the requisite scripts to create Flash CC animation with smart HTML5 videos and controls, plus smooth rapid Blender 2D animations.

The included Teaser Comic.fla has about 1k lines of extra Javascript inside. It works online and off in most browsers (see the compatibility text doc). Haven't attempted mobile (yet).
The photoshop+blender animations take far less than one day each (even with so little practice!). It seems a very powerful method of animation.

At the very least, take a look through the scripts folder for some goodies.



TECHNIQUE:
There's a lot of steps and scripts.

Photoshop: Draw the animation images or "puppet pieces", consolidate them into 'smart objects' for export. One comic page will need between 5-20 images, for several animations.

Flash CC: Import the PS file and set up tween animations, OR...

Blender 3D: Export the PS layers as images with the included script. Load and position in Blender with scripts. Chop the images into polygons and use 'Blend Shapes' to animate them, plus texture nodes for image swapping/blending. Render as AVI Raw. Total time, 1.5-5 hours in blender per video. Convert to WEBM for web, plus MP4 for Safari. Then...

Flash CC VIDEOS: Flash CC exports to HTML5 and javascript, but can't run videos. I added code to track videos to image Symbol Instances you place in Flash. Check the code in the 'Video Triggers' layer for instructions and examples. The code lines at the bottom are what YOU use for videos. Sounds are similar. Comic navigation is controlled by the Labels on the 'Frame Labels' layer, and code snippets on the 'Flow control code' layer. Have fun =)




PHOTOSHOP DOCUMENTS - DROPBOX LINKS
(These files are too huge for GitHub)
You can look through these to see the setups I used to create the images for animation.


shot3 _export.psd			https://www.dropbox.com/s/bsokp9dsn9tcpd9/shot3%20_export.psd?dl=0
272 MB
Most interesting one, page 3 of the motion comic. I've pretty much got it all nailed down.
I use the script in the github folder to export each smart object/layer as a separate image. I tweaked the script to name + number the images and maintain transparency.
Open a smart object layer like "top copy" and look at the 'minimum' filter on the colors smart object. That automatically fills in holes in the coloring. Neat eh? =)

shot2.psd				https://www.dropbox.com/s/9ztmh83g4971hp6/shot2.psd?dl=0
124 MB

p1_additions.psd			https://www.dropbox.com/s/gpsjb8g6fc4emk4/p1_additions.psd?dl=0
6.55 MB

page1 _final _pieces _small.psd		https://www.dropbox.com/s/m43l930j30621nt/page1%20_final%20_pieces%20_small.psd?dl=0
402 MB
The first page, and the messiest. I tried to tween animate 40 images at once. Don't do that. It's huge and slow compared to videos.

Post GIF.psd				https://www.dropbox.com/s/obax9whq1go76zm/Post%20GIF.psd?dl=0
89.9 MB
Assembling a GIF for DeviantArt.

Controls1.psd				https://www.dropbox.com/s/02ex8iqim49iq5x/Controls1.psd?dl=0
11.8 MB
So you can make your own control images. Careful to leave the little bright spots in the top left of each button intact. Those size the images to line up with the Flash buttons.