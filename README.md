🔶𝐓𝐞𝐜𝐡𝐧𝐢𝐜𝐚𝐥 𝐀𝐬𝐩𝐞𝐜𝐭𝐬 :
 
Firstly, there is a 𝗺𝗮𝗶𝗻 element 𝘁𝗮𝗴 that serves as the primary content section.

Inside the 𝗺𝗮𝗶𝗻 element, there's a .𝗯𝗼𝘅 div working as the container for the entire form. Within the .𝗯𝗼𝘅, the .𝗶𝗻𝗻𝗲𝗿-𝗯𝗼𝘅 div is positioned absolutely at the center using the 𝘁𝗼𝗽, 𝗹𝗲𝗳𝘁 and 𝘁𝗿𝗮𝗻𝘀𝗹𝗮𝘁𝗲(𝘅, 𝘆) properties.
 
Within the .𝗶𝗻𝗻𝗲𝗿-𝗯𝗼𝘅, two div elements exist : the .𝗳𝗼𝗿𝗺𝘀-𝘄𝗿𝗮𝗽𝗽𝗲𝗿 div, which is positioned absolutely, occupies 45% of the .𝗶𝗻𝗻𝗲𝗿-𝗯𝗼𝘅 width, and the .𝗰𝗮𝗿𝗼𝘂𝘀𝗲𝗹 div, which is also positioned absolutely, to the right of the .𝗳𝗼𝗿𝗺𝘀-𝘄𝗿𝗮𝗽𝗽𝗲𝗿, takes up 55% of the .𝗶𝗻𝗻𝗲𝗿-𝗯𝗼𝘅 width.
 
◻ 𝗙𝗼𝗿𝗺𝘀 𝘄𝗿𝗮𝗽𝗽𝗲𝗿 :
 
The .𝗳𝗼𝗿𝗺𝘀-𝘄𝗿𝗮𝗽𝗽𝗲𝗿 div is a grid container, two forms are stacked on top of each other inside it : the .𝘀𝗶𝗴𝗻-𝗶𝗻-𝗳𝗼𝗿𝗺 and the .𝘀𝗶𝗴𝗻-𝘂𝗽-𝗳𝗼𝗿𝗺 using CSS 𝗴𝗿𝗶𝗱. By default, only the .𝘀𝗶𝗴𝗻-𝗶𝗻-𝗳𝗼𝗿𝗺 is visible. These forms can be made visible or invisible (with opacity set to 𝟬 𝗼𝗿 𝟭) based on the user's requirement.
 
When a user clicks on "Sign up," 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 adds the .𝘀𝗶𝗴𝗻-𝘂𝗽-𝗺𝗼𝗱𝗲 class to the 𝗺𝗮𝗶𝗻 element. This class triggers a transition effect on the .𝗳𝗼𝗿𝗺𝘀-𝘄𝗿𝗮𝗽𝗽𝗲𝗿 div (smoothly shifting its position to the 𝗹𝗲𝗳𝘁) and on the .𝗰𝗮𝗿𝗼𝘂𝘀𝗲𝗹 div (smoothly shifting its position to the 𝗿𝗶𝗴𝗵𝘁). In the middle of this transition, the .𝘀𝗶𝗴𝗻-𝘂𝗽-𝗳𝗼𝗿𝗺 becomes visible (opacity: 𝟭), while the .𝘀𝗶𝗴𝗻-𝗶𝗻-𝗳𝗼𝗿𝗺 slides out of view (opacity: 𝟬).
 
◻ 𝗙𝗹𝗼𝗮𝘁𝗶𝗻𝗴 𝗹𝗮𝗯𝗲𝗹 :
 
The input label 𝘀𝗹𝗶𝗱𝗲𝘀 𝘂𝗽 when the user 𝗳𝗼𝗰𝘂𝘀𝗲𝘀 on the input fields.
 
◻ 𝗖𝗮𝗿𝗼𝘂𝘀𝗲𝗹 :
 
It consists of two div elements : an .𝗶𝗺𝗮𝗴𝗲-𝘄𝗿𝗮𝗽𝗽𝗲𝗿 containing images and a .𝘁𝗲𝘅𝘁-𝘀𝗹𝗶𝗱𝗲𝗿 displaying text line by line.
 
◻ 𝗜𝗺𝗮𝗴𝗲 𝘄𝗿𝗮𝗽𝗽𝗲𝗿 :
 
The .𝗶𝗺𝗮𝗴𝗲-𝘄𝗿𝗮𝗽𝗽𝗲𝗿 is a grid container holding three images, stacked on top of each other, with only one image visible at a time. These images are made visible or invisible (with opacity set to 𝟬 𝗼𝗿 𝟭) by toggling .𝘀𝗵𝗼𝘄 class (controlled by 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 ). This class also includes transformations like 𝘁𝗿𝗮𝗻𝘀𝗹𝗮𝘁𝗲, 𝘀𝗰𝗮𝗹𝗲, and 𝗿𝗼𝘁𝗮𝘁𝗲 to create dynamic visual effects.
 
◻ 𝗧𝗲𝘅𝘁 𝘀𝗹𝗶𝗱𝗲𝗿 :
 
For each image change, the .𝘁𝗲𝘅𝘁-𝗴𝗿𝗼𝘂𝗽 inside the .𝘁𝗲𝘅𝘁-𝘀𝗹𝗶𝗱𝗲𝗿 is translated vertically by a multiple of 𝟮.𝟮𝗿𝗲𝗺, smoothly revealing the lines of text.
 
◻ 𝗡𝗮𝘃𝗶𝗴𝗮𝘁𝗶𝗼𝗻 𝗯𝘂𝗹𝗹𝗲𝘁𝘀 :
 
The 𝗻𝗮𝘃𝗶𝗴𝗮𝘁𝗶𝗼𝗻 𝗯𝘂𝗹𝗹𝗲𝘁𝘀 help users to navigate through the images, allowing them to control the content they see in the .𝗰𝗮𝗿𝗼𝘂𝘀𝗲𝗹 div.

# Preview :



![login](https://github.com/Bilal-Ishtiyaque/modern-UI-Login-Registration-Form/assets/139645574/c9c2cc59-1b9d-41ce-a6d6-4efe1ab46abf)
