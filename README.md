Music of the Night Sky
=========

Creative Coding Final

The Concept: As we gaze into the night sky we often find ourselves connecting the points of light. We take these connections and usually turn them into pictorial representations of mythic animals or people. But what if there was another way which we could experience the patterns of stars. With this project we will transform a nights sky into a musical instrument allowing us to create the songs of the cosmos.      

The Details: A nights sky passes across the viewport. Within the sky are stars which call out with little rings around themselves. These stars can be connected to each other allowing for a melody to be created. The more stars that are connected the longer the melody becomes. The stars are constantly moving across the screen and once a star passes off the screen the note stops playing. 

=========

LAYERS
Static vector dots (p5 or two.js)
Atmospheric canvas background (p5 load img)

STARS
Subtle parallax effect
Back, middle, and front layer or stars stacked on top of one another
Change x and y position of stars based on mouseX and mouseY
Star layers are produced by random array
Clickable stars will be obviously clickable
Stars animate/glow to indicate hover state or selected state


SOUND
Assign specific notes of a scale to x-heights within the screen (stacked)
Dot stores sound
Dot sounds reflect the note are they’re assigned to
Arpeggio sound layering: how do we base arpeggios on time if we are layering them?
Can you have multiple arpeggios in one experience before clearing?
How to synthesize sound with an object?

INTERACTION 
Dat GUI to change speed of arpeggio (maybe by ¼ note, etc.)
Can we make it prettier?
Hover over star to hear the note that is assigned to that star
Click on the star and it will sound and make a connecting line to the next star clicked
Ability to clear settings and connections
Clicking on an empty space indicates the end of the current arpeggio sequence

Breakdown:

Audience comes to site and is met with the instrument name and brief description, which fades after a few moments. When scene comes into view, it will automatically have slight motion (subtle parallax effect). Hover over a star, watch it glow as it sounds the note it is assigned. Click on the star, and it will connect to the next star clicked. Audience clicks on star progression. 

Each star will connect visually and audibly, creating an arpeggio. Clicking in an empty space will indicate the end of that arpeggio sequence, so the user can start their next arpeggio. Option to “clear” settings (dat GUI) and any previous star connection arpeggios made. 

=========

Assignments:

VISUAL - Emilee
Background star layers, random array sprays stars across screen
Parallax effect based on mouseX and mouseY
Animation/glow effect for hover and selected state

VISUAL INTERACTION - Sam
Forground star layers (larger dots) become hoverable and clickable
Stars are connected by lines to connect the dots
Click off of screen to clear connections

SOUND - Scott
Separate screen into sections (window height divided equally)
Assign notes to sections of the screen
Load sounds onto note sections

SOUND INTERACTION - Ryan
Assign dots to sound sections
Get arpeggio to play loop
Sound triggers when dot is hovered or clicked

EXTRA - if we have time
dat GUI timing slider

