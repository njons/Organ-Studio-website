# Website for Organ studio 

## Brief 
The website for Organ was developed as a small one-page site providing a short introduction and primary contact details. Although small, it needed to feature moving image, sound and large-scale photos to best capture the multidisciplinary nature of their work.

## Idea 
The design required a video landing page paired with ambient sound and a custom cursor as a sample of work (as referenced [here](http://n-o-o-n.co.uk)), following this landing page a second page containing the required content and one further sample of still photography was requested. 

## Execution
**Specs:** 
- The site was built using Sass and jQuery
- The final website uses a Kirby content management system

---
**Sound:**
- The sound was embedded using the HTML5 audio tag
- It has a script that makes it fade slower than the video and deliberately lingers during transition between the landing page and content page 

---
**Video:** 
- The video was embedded using HTML5 video tag, set to autoplay and mute
- Video has been deliberately disabled on tablet and mobile (below 870px) 
- A still of the first video frame has been added for slow connections
- The video has a script that triggers an automatic fade of the video 5 sec before its end

**Fullscale video:** 
- Fullscale was achieved through Sass and [this](https://github.com/TricomB2B/object-fit-videos) open source polyfill for CSS (allowing the application of CSS properties to the video element and providing support in IE9).

---

**Content page:** 
- The content page is based on two columns using flexbox
- The sliding accordion menu was built with a script that uses the 'this' keyword and traverses the DOM

---

## Details 

**Collaborators**
- Design by Organ
- Development by Nathalie Jonsson

**Browser support:** The website works fully on Chrome and Firefox and without sound on Safari and IE 


