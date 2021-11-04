# dataDyne - Code Louisville

The plan for this project is to build a landing website for a fictional mega corporation from a game called Perfect Dark on the Nintendo64. The corporation has a vast research department and weapons program. 

The plan is to design something sleak with good menu functionality, a parallax effect on one (or more) of the pages, good scalability and of course some javascript features. I will also include a hamburger menu for mobile, because I hear hamburgers are pretty tasty these days. The first phase will be to build a basic, clean website with the navigation bar built in, with links to the extra pages for some of the products.

    Features included in project - 

I have found that commenting out for organization helps my thought process with things, so expect a lot of comments. 

Below I am going to keep a documentation of my process throughout the project, with thoughts, mistakes and lessons learned..etc. 


    Part 1: The 'I have no idea what I am doing' phase

I had a general idea of the content and style in my head going into the project, but I was a little all over the place implementing it. By the time any experienced developer reads this, they will likely look at my code and think 'what in the hell is going on' because everything just feels all over the place. Once I had the navigation bar figured out and the images in, it started to come together. I spent a lot of time making minor adjustments to the margins and padding to make everything fit really well into the mobile version. I did spend a considerable amount of time exploring the web for assets I could use on the site, and I think I have all of that covered going forward. I did use an image editor to remake the main logo. Paint 3D is an abomination, by the way. 

    Part 2: Navigation bar is complete 

Next I want to build the index, copy the footer and possibly some other content over to the other pages to get them rolling. After I'm satisfied with the index, I want to start implementing some cool stuff on each page to hit the project requirements. After class tonight, I had a deeper understanding of how I should approach images and the mobile versions of the site. Originally, I used massive images and just used 'cover' on the backgrounds of the pages, with absolute positions. Later I switched that to attach the images to the background so they wouldn't scroll. I like this a lot more. 

    Part 4: Anthony went down the rabbit hole

I have been watching a million youtube videos, reading W3Schools, looking at websites and decided to change up the layout I was going for a bit because I found these really cool 3d models that I could embed into the page, so I want to build a gallery on the featured page. The assets dont really go together, some are from video games unrelated to Perfect Dark, but it doesn't really matter. It's all just fake content for presentation and functionality. I'm putting the footer off for now. Partly because we haven't talked much JS in class yet and I want to have some JS built into a newsletter subscribe button, and mainly because I feel a little lost when I start working on other parts of the pages before I have it designed from 'top to bottom'... which may not be a good way to approach this, but it's working for me right now. 

    Phase 5: Converting my brain from a pile of mush into something useful, also included: converting images

    Part 1: Realizing that I have worked a little too far ahead for the content we have covered.. aka, not using best practices

Tonight, Doug and Jef talked a lot about images, best practices and how to approach responsive design. I admit, I watched the section on images at 2x speed while working on my website. Hello, have you met Mr. Know it All yet? Anyone reading this? Anyways, I will review the pluralsight vids on images. I took a lot of notes and have a clearer understanding of what I need to do to make my website responsive, while not using background images that are 9000 pixels giga-big. I will be converting images to appropriate sizes to scale with Iphone 6/7/8, Ipad, and up to desktop size stopping at 1080p. Also - when I first threw my site together, I designed it from desktop first... which was a bit backwards. I will be taking some time to address this and have more thoughts on how I re-arranged it later. The game plan is to take the contents of the media query for Iphone 6/7/8 and implement them as the overall CSS - then take everything I did for desktop and dump it into the media query for 1080p - then I will bridge the gap with an Ipad display size between them. 



As of Oct. 26 I am working on cleaning up the media queries, the site will scale down from 1080 one will be change the layout a bit at the Ipad size 810x, which will remove the inner nav link banner text "datadyne" and its associated page name to allow room for the links to slide over properly, and the last query will be at 375x812 (Iphone 12/13 Pro Max) --- also added images for footer links. Added an image to k7 page to start filling out the content for the pages. 

So it's november 3rd and we have just a few weeks left. The plan is to implement the javascript for an image slider and I think I have all the requirements met. I trimmed the site down quite a bit just to focus on certain things, deleted a few pages that I was going to build but won't have time for at this point. I think I am going to follow along with the w3 schools image slider and adapt it to my needs.

Things left to do: Add JS newsletter type box into footer.
                   Adjust media query to remove image gallery and instead just display the images
                   in a column down the page. 







Assets: 

Product render art from:   https://www.deviantart.com/everlastingabyss/gallery
Bubble-shield render from: https://www.deviantart.com/xinfectionx/art/Halo-Online-Bubble-Shield-2-541917621
Sick Nasty Vector Art Backgrounds from: https://www.123freevectors.com
Other assets include original game art from the original box. (Rare)
Main logo design referenced from Rare art, created wtih Paint 3D from Microsoft.






