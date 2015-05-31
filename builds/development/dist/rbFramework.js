angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("builds/development/js/directives/about.html","\n\n\n\n<div class=\"container-fluid full home\" ng-class=\"{\'item-horizontal\': isVertical()}\"> \n\n<div class=\"bubble-image\">\n  <img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/profile.jpg\"/>\n</div>\n \n  <h1>Welcome to my online portfolio. </h1>\n  <p>I am a designer and developer working out of Cincinnati, Ohio. I currently focus my efforts on User Experience design and full-stack development. I enjoy finding patterns and connections through principles of visual perception, information architechture and modular development.</p>\n<p>I have an undegrad degree in Fine Arts, several years of professional experience as a Graphic Designer and several more as a Web Developer. I operate a small scale letterpress business from my home and am currently pursuing a Masters of Design degree at the University of Cincinnati\'s DAAP program.</p>\n<p>When I\'m not designing, coding or printing stuff, I spend as much time as possible with my two children, Kennedy and Holden.</p>\n<p>I\'m also a huge sports fan, especially Bengals, listen to lots of music (mostly indie), and go to Art Museums whenever possible.</p>\n</div>");
$templateCache.put("builds/development/js/directives/artwork.html","\n\n\n\n<div class=\"container-fluid full\" ng-class=\"{\'item-horizontal\': isVertical()}\"> \n\n\n <div class=\"display-images\">\n  <img ng-src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/artwork/{{device}}.png\"/>\n  <div class=\"device-selection\">\n     \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'charcoal\'}\"\n      ng-click=\"isCharcoal()\">Charcoal 1</button>\n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'charcoal-two\'}\"\n      ng-click=\"isCharcoalTwo()\">Charcoal 2</button>\n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'oil\'}\"\n      ng-click=\"isOil()\">Oil</button>\n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'print\'}\"\n      ng-click=\"isPrint()\">Print</button>\n      \n      \n      \n    </div>\n  <div>\n\n  <div class=\"description\">\n    <p>The human expression is a powerful thing. I greatly admire the work of John Singer Sargent and Robert Henri. The majority of my undergraduate career was spent studying the figure and portraiture.</p>\n  </div>\n  \n<div class=\"wrapper\">  \n  \n<div class=\"row\">  \n  <div class=\"subHead col-md-8\">\n    <h1>Context</h1>\n    <p>While fine art may seem completely unrelated to design and development, that\'s not the case at all. Drawing and Painting is a skill of reducing the form to shapes, lines, weights of strokes etc. These are all methods of abstraction and pattern detection...which are relate directly to information architecture and writing modular code. Not to mention composition, contrast, color theory...etc. I\'ll always consider myself a designer before a developer and an artist before a designer. In the end though, all of these areas boil down to abstracting a complex issue into the most effective means of communication and structure.</p>\n    \n  </div>\n  \n  \n <div class=\"sidebar col-md-4\">\n<div class=\"subHead\">\n    <h1>Awards</h1>\n     <h3>2009</h3>\n    <ul>Bridges Interdisciplinary Journal\n      <li><strong>First Place and Grant</strong></li>\n    </ul>\n    <ul>Archarios Magazine\n      <li><strong>Best of Show</strong></li>\n    </ul>\n    \n    <h3>2008</h3>\n    <ul>Archarios Magazine\n      <li><strong>Best of Show</strong></li>\n    </ul>\n    <h1>Exhibitions</h1>\n    <h3>2012</h3>\n    <ul>The Fire House Gallery of Louisville, Georgia\n      <li>20/20 Vision 5th Edition, The Art of Contemporary University Printmaking</li>\n    </ul>\n    \n    \n    </div>\n    \n    \n    \n \n</div> \n\n</div>\n  \n </div>\n  </div>\n  </div>\n  </div>\n");
$templateCache.put("builds/development/js/directives/coffey-communications.html","\n\n<div class=\"container-fluid full\" ng-class=\"{\'item-horizontal\': isVertical()}\"> \n\n\n <div class=\"display-images\">\n  <img ng-src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/coffey/{{device}}.png\"/>\n  <div class=\"device-selection\">\n     \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'heart\'}\"\n      ng-click=\"isIllustration1()\">Illustration 1</button>\n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'cover-detail\'}\"\n      ng-click=\"isIllustration2()\">Illustration 2</button>\n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'cover-1\'}\"\n      ng-click=\"isCover1()\">Cover 1</button>\n\n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'spread-1\'}\"\n      ng-click=\"isCover2()\">Cover 2</button>\n      \n    \n      <a target=\"blank\" href=\"https://vineyardsandbox.s3.amazonaws.com/Rob/coffey/SouthwestHealth-Fall2013.pdf\"><button class=\"btn\"><i class=\"fa fa-file\"></i></button></a>\n      \n      <a target=\"blank\" href=\"http://www.coffeycomm.com/\"><button class=\"btn\"><i class=\"fa fa-link\"></i></button></a>\n      \n    </div>\n  <div>\n\n  <div class=\"description\">\n    <p>In the Fall of 2011 I ventured across the country to Walla Walla, Washington. I held the position of Graphic Designer for 2 years, the latter part of which I worked remotely from Cincinnati, Ohio. I had the opportunity to work on a variety of publications with a small creative team. We worked iteratively in a collaborative manner, critiquing, sharing ideas and refining based on peer feedback and client feedback.</p>\n  </div>\n  \n<div class=\"wrapper\">  \n  \n  <div class=\"subHead\">\n    <h1>Context</h1>\n    <p>While at Coffey Communications I was able to take on a variety of projects, the majority of which were magazines, but also illustrative work and working with Art Directors on new client templates. The work displayed shows a small sample size of some of my favorite work while I was at Coffey Communications.</p>\n    \n  </div>\n  \n  <div class=\"row\">\n  <div class=\"subHead col-md-8\">\n    <h1>Scope</h1>\n    \n    <p>The role of Graphic Designer was very focused at Coffey Communications. There were many members that conrtibuted to a team for each publication. This generally included a Graphic Designer, Art Director, Copy Editor and Client Contact Manager. Each publication typically spanned 1-2 weeks from start to finish and I typically had several projects concurrently.</p>\n\n    <h1 class=\"float-margin\">Responsibilites</h1>\n    <ul>\n      <li>Design</li>\n      <li>Illustration</li>\n      <li>Concept</li>\n      <li>Photo Correction</li>\n      <li>Print Preperation</li>\n    </ul>\n  </div>\n\n\n<div class=\"sidebar col-md-4\">\n<div class=\"subHead\">\n    <h1>Awards</h1>\n     <h3>2013</h3>\n    <ul>Healthcare Advertising Awards\n      <li><strong>Platinum Award</strong></li>\n    </ul>\n  \n    \n    \n    \n    </div>\n    \n    \n    \n \n</div> \n \n</div>\n \n\n  \n   <div id=\"technology\" class=\"subHead\">\n    <h1>Technology</h1>\n    <div class=\"gallery\">\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/indesign.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/illustrator.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/photoshop.png\" alt></div>\n\n    </div>\n  </div>\n  \n </div>\n  </div>\n  </div>\n  </div>\n");
$templateCache.put("builds/development/js/directives/esh.html","\n\n\n\n<div class=\"container-fluid full\" ng-class=\"{\'item-horizontal\': isVertical()}\"> \n\n\n <div class=\"display-images\">\n  <img ng-src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/esh/{{device}}.png\"/>\n  <div class=\"device-selection\">\n     \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'desktop\'}\"\n      ng-click=\"isDesktop()\">Desktop</button>\n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'print-ad\'}\"\n      ng-click=\"isPrintAd()\">Print Ad</button>\n      \n      \n\n      \n      <a target=\"blank\" href=\"http://www.nationalunderwriter.com/\"><button class=\"btn\"><i class=\"fa fa-link\"></i></button></a>\n      \n    </div>\n  <div>\n\n  <div class=\"description\">\n    <p>EasternShoreHousing.com was a small start-up attempt for a new construction home buying site, which ultimately failed. I was one of two designers on the project, in charge of the UX design and print materials.</p>\n  </div>\n  \n<div class=\"wrapper\">  \n  \n  <div class=\"subHead\">\n    <h1>Context</h1>\n    <p>In the summer of my Junior year I had the opportunity to work with a very small startup group. Small being a total of 3 people and myself. I was one of two designers and was able to help conceive the front-end design for a social media housing page. The page centered around new construction on the Delmarva penninsula. We had lofty ambitions and it was a learning experience in design as well as start-ups. Along with being a front-end developer I was in charge of the print and web marketing.</p>\n    \n  </div>\n  \n  <div class=\"row\">\n  <div class=\"subHead col-md-12\">\n    <h1>Scope</h1>\n    \n    <p>Start-ups can be excited and consuming. The team and I spent countless nights as well as the typical 40 hour work week preparing EasternShoreHousing.com for launch. I worked out of Delaware at the time with  a designer in NYC. We would send eachother mock-ups back and forth and work with an off-shore development team to help realize our design into a working site.</p>\n\n    <h1 class=\"float-margin\">Responsibilites</h1>\n    <ul>\n      <li>UX Design</li>\n      <li>Print Desing</li>\n      <li>Concept Development</li>\n      <li>Flash Animation</li>\n      <li>Print Preperation</li>\n    </ul>\n  </div>\n\n\n \n</div>\n \n\n  \n   <div id=\"technology\" class=\"subHead\">\n    <h1>Technology</h1>\n    <div class=\"gallery\">\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/indesign.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/illustrator.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/photoshop.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/flash.png\" alt></div>\n\n    </div>\n  </div>\n  \n </div>\n  </div>\n  </div>\n  </div>\n");
$templateCache.put("builds/development/js/directives/healingCenter.html","\n\n\n<div class=\"container-fluid full\" ng-class=\"{\'item-horizontal\': isVertical()}\"> \n\n\n <div class=\"display-images\">\n  <img ng-src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/healing-center/{{device}}.png\"/>\n  <div class=\"device-selection\">\n     \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'desktop\'}\"\n      ng-click=\"isDesktop()\">Desktop</button>\n      \n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'tablet\'}\"\n      ng-click=\"isTablet()\">Tablet</button>\n      \n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'phone\'}\"\n      ng-click=\"isPhone()\">Phone</button>\n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'desktop-two\'}\"\n      ng-click=\"isDesktopTwo()\">Desktop 2</button>\n      \n      <a target=\"blank\" href=\"http://www.healingcentercincinnati.org\"><button class=\"btn\"><i class=\"fa fa-link\"></i></button></a>\n      \n    </div>\n    \n     <div class=\"device-selection\">\n     \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'admin-one\'}\"\n      ng-click=\"isAdminOne()\">CMS 1</button>\n      \n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'admin-two\'}\"\n      ng-click=\"isAdminTwo()\">CMS 2</button>\n      \n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'admin-three\'}\"\n      ng-click=\"isAdminThree()\">CMS 3</button>\n      \n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'admin-four\'}\"\n      ng-click=\"isAdminFour()\">CMS 4</button>\n      \n\n      \n    </div>\n    \n  <div>\n\n  <div class=\"description\">\n    <p>The Healing Center of Cincinnati helps people in times of need by providing groceries, job placement and much more. The site redesign involved a good amount of client interaction and input.</p>\n  </div>\n  \n<div class=\"wrapper\">  \n  \n  <div class=\"subHead\">\n    <h1>Context</h1>\n    <p>The Healing Center was in need of an updated site that matched the spirit of the organization and worked responsively. The prior site appeared dated and was a burden on the staff to manage and update.</p>\n    \n  </div>\n  \n  \n<div class=\"row\">  \n  \n  <div class=\"subHead col-md-8\">\n    <h1>Scope</h1>   \n    <p>This project consisted of a discovery, design and development phase. I carried out the entire project which spanned 9 months and resulted in the responsive design and development of the site. The site includes a custom CMS build and a Spanish to English toggle (currrently waiting on Spanish translation of content) and many additional features. \n    </p>\n    <p>\n    At project completion, the site checked in at just under 10,000 lines of code, an improvement of over the previous site which contained over 100,000 lines of code. This makes for a much more maintainable site now and down the road. 99% of the content is also editable through the custom built CMS, which gives the Healing Center the ability to manage their own content without needing to rely on a developer.</p>\n    \n    <h1 class=\"float-margin\">Responsibilites</h1>\n    <ul>\n      <li>Discovery</li>\n      <li>UX design</li>\n      <li>UI design and development</li>\n      <li>NoSQL database design</li>\n      <li>Node.js REST API back-end build</li>\n      <li>Custom CMS build</li>\n      <li>Angular.js front-end build</li>\n      <li>Pre-render.io SEO setup</li>\n      <li>Heroku hosting</li>\n    </ul>\n  </div>\n\n\n\n<div class=\"sidebar col-md-4\">\n\n<div class=\"additional\"><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/healing-center/admin.png\"/>\n    <div class=\"additonal-caption\">\n    <p>A custom admin build was created for easy maintenance and updates. A REST API was created using a mongoDB database and node.js backend.</p>\n    </div>\n    </div>\n    \n    \n  <div class=\"additional\"><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/healing-center/archive.png\" alt>\n    <div class=\"additonal-caption\">\n    <p>The prior site was non-responsive and hard to navigate, content was lengthy and non-direct. The site was also very difficult to update. The back-end was merged into Vineyard Cincinnati\'s but only partially completed, many records were updated directly in the database or hard-coded.</p>\n    </div>\n    </div>  \n    \n    \n    \n  </div>\n    \n</div>\n \n\n  \n   <div id=\"technology\" class=\"subHead\">\n    <h1>Technology</h1>\n    <div class=\"gallery\">\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/angularjs.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/nodejs-logo.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/npm.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/express.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/bower.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/mongodb.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/sass.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/susy.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/compass-logo.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/gulp.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/git-logo.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/github.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/heroku-Logo.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/googleapi.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/jquery.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/html5.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/css3.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/analytics.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/photoshop.png\" alt></div>\n    </div>\n  </div>\n  \n<!--\n<div id=\"live-view\" class=\"subHead\">\n    <h1>Live&nbsp;View</h1>  \n   <iframe src=\"http://www.healingcentercincinnati.org\" width=\"100%\" height=\"500\">\n  <p>Your browser does not support iframes.</p>\n</iframe>\n</div>  \n-->\n\n<div id=\"project-notes\" class=\"subHead\">\n    <h1>Project&nbsp;Notes</h1>\n    <h3>Discovery Phase</h3>\n    <p>Sometimes projects don\'t always progress in a linear path. The redesign and redevelopment of the healing center was a large undertaking and there were many stakeholders involved. The initial plan of progression was to work iteratively and meet with the Board of Directors once a month to review progress and discuss revisions. While this worked well initially, it was quickly realized that there were too many competing, voices and ideas. It was also evident that there wasn\'t a clear target I was designing for. After several months, I took a step back from the project to make sure everyone agreed on the values of the Healing Center and the goals of the site. I also decided that in order to move forward effectively, we needed one decision maker instead of many, this decision maker, the Executive Director, was now my one point of contact for the project progression instead of a half-dozen decision makers. While the Executive Director did not ignore the rest of the board\'s opinions, she had the final decision making ability. From this point on, the project moved forward at a steady pace, the scope was defined and agreed upon.</p> \n    \n    <p>In hindsight, the initial discovery phase would not have just been on my end, from a designers perspective, but would have been a thorough research and discovery phase with client participation. <a href=\"https://vineyardsandbox.s3.amazonaws.com/Rob/healing-center/case-study.pdf\">View Case Study <i class=\"fa fa-file\"></i></a></p>\n    \n    <h3>Calendar</h3>\n    <p>The events calendar is a very important component of the site. Initially a custom calendar was incorporated into the back-end and CMS. Upon further discussion, we realized the majority of events were re-occuring, which would require a good amount of development to configure that logic. Another realization was that the Healing Center already had all of their events in a Google Calendar for staff. I decided that it made the most sense to leverage that calendar. I built on top of the sourcecode for <a href=\"http://fullcalendar.io/\"> fullcalendar.io</a>, which has great integration with Google Calendar, but no mobile version. I also separated their calendar out so that it could be filterable. The end result was a responsive calendar which required no additional work for the Healing Center. They just have to update their Google Calendars as they had been doing and this would be reflected on the site.</p>\n    \n    \n    <h3>CMS</h3>\n    <p>The custom CMS has been a huge success. To quote a Healing Center volunteer, \"Wow this is really easy to use!\" Using desciptive placeholder text as well as <a href=\"https://github.com/CodeSeven/toastr\">\"Toastr.js\" notifications</a> helps users know with confidence when a change has succesfully been made. Red and green go a long way, initially an edit button colored red threw a user off, \"It looks like the delete button,\" they said. Keeping in mind that there are colors which are intuitive to users as positive and negative can help guide the user through the interface.</p>\n    \n    <h3>English to Spanish</h3>\n    <p>A feature which the Healing Center was very excited about incorporating was an English to Spanish toggle. This seemed like a lofty proposition, but as my confidence in Angular.js and REST API\'s grew, I realized a solution. The toggle would set a cookie on the browser to true or false. If true (for Spanish), a call stack of functions would execute, one of which would append a \"sp\" to the API url of all HTTP calls. In the back-end the English API was duplicated, with \"sp\" appended to each of them. The user flow would now be exactly they same and thanks to Angular\'s two way binding, the transition was seemless, without any delay or page refresh to the user. The trasition also works seemlessly on the back-end. A caveat to this logic is that the Spanish and English records for each entry must share a url, for example: /about/missions-and-values would pull do a GET request to api/about for english and api/about-sp for Spanish. The only duplicate content between each record is the url \"/about/missions-and-values\". This allows for looping through content and pulling back the Spanish record that has the mathcing URL on toggle.</p>\n  <p>This feature is currently hidden from the user until the Healing Center is able to translate the Spanish content.</p>\n    \n    \n    \n\n    \n   \n   \n  </div>\n\n</div>\n</div>");
$templateCache.put("builds/development/js/directives/home.html","\n\n\n<div class=\"container-fluid full home\" ng-class=\"{\'item-horizontal\': isVertical()}\"> \n\n  <h1>Welcome to my online portfolio. </h1>\n  <p>I am a designer and developer working out of Cincinnati, Ohio. I currently focus my efforts on User Experience design and full-stack development. I enjoy finding patterns and connections through principles of visual perception, information architechture and modular development.</p>\n\n</div>");
$templateCache.put("builds/development/js/directives/illuminationsite.html","\n\n\n<div class=\"container-fluid full\" ng-class=\"{\'item-horizontal\': isVertical()}\"> \n\n<div class=\"status in-progress\">This site is currently being redesigned and redeveloped.</div>\n\n <div class=\"display-images\">\n  <img ng-src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/illumination-site/{{device}}.png\"/>\n  <div class=\"device-selection\">\n     \n       <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'desktop\'}\"\n      ng-click=\"isDesktop()\">Desktop</button>\n      \n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'tablet\'}\"\n      ng-click=\"isTablet()\">Tablet</button>\n      \n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'phone\'}\"\n      ng-click=\"isPhone()\">Phone</button>\n      \n      \n<!--      <a target=\"blank\" href=\"http://www.byrd-design.com/illumination/\"><button class=\"btn\"><i class=\"fa fa-link\"></i></button></a>-->\n      \n    </div>\n  <div>\n\n  <div class=\"description\">\n    <p>This site came about as a necessity to go along with my letterpress business. Clients needed a place to view my work and also learn about the process of letterpress. This site aims to be eductional, informative and also showcase the work I have done.</p>\n  </div>\n  \n<div class=\"wrapper\">  \n  \n  <div class=\"subHead\">\n    <h1>Context</h1>\n    <p>My previous experience with HTML and CSS before building this site was emails designed for previous employers. The site underwent several versions as my experience knowledge of responsive design and javascript grew. While this site was a huge acomplishment at the time, I am much more knowledgable and versed in development and design practices a few years later. A redesign and development is planned for the near future, for now the site has been taken down as it doesn\'t accurately reflect Illumination Letterpress as I would like for it to.</p>\n    \n  </div>\n  \n  <div class=\"row\">\n  <div class=\"subHead col-md-12\">\n    <h1>Scope</h1>\n    \n    <p>This site was a challenge to learn as much as possible, as quick as possible to have a website live that could reflect Illumination Letterpress and communicate it\'s message effectively. The site which took around a month was probably 90% learning through tutorials and 10% coding and design. This site served as a launching point for my development career as I quickly grasped the concepts of HTML and CSS and was eager to understand Javascript better so I could execute my design background more effectively. \n    </p>\n    \n    \n    <h1 class=\"float-margin\">Responsibilites</h1>\n    <ul>\n      <li>Design</li>\n      <li>Responsive Front-end on Bootstrap</li>\n      <li>Hosting</li>\n    </ul>\n  </div>\n\n\n\n \n</div>\n  \n   <div id=\"technology\" class=\"subHead\">\n    <h1>Technology</h1>\n    <div class=\"gallery\">\n<!--\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/django.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/python.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/mysql.png\" alt></div>\n-->\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/html5.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/css3.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/js.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/bootstrap.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/photoshop.png\" alt></div>\n<!--\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/jquery.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/susy.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/gulp.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/git-logo.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/github.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/heroku-Logo.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/npm.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/bower.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/mongodb.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/sass.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/susy.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/compass-logo.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/gulp.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/git-logo.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/heroku-Logo.png\" alt></div>\n-->\n      \n    </div>\n  </div>\n  \n<!--\n<div id=\"live-view\" class=\"subHead\">\n    <h1>Live&nbsp;View</h1>  \n   <iframe src=\"http://www.byrd-design.com/illumination/\" width=\"100%\" height=\"500\">\n  <p>Your browser does not support iframes.</p>\n</iframe>\n</div>  \n-->\n</div>\n</div>");
$templateCache.put("builds/development/js/directives/letterpress.html","\n\n\n\n<div class=\"container-fluid full\" ng-class=\"{\'item-horizontal\': isVertical()}\"> \n\n\n <div class=\"display-images\">\n  <img ng-src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/letterpress/{{device}}.png\"/>\n  <div class=\"device-selection\">\n     \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'wedding\'}\"\n      ng-click=\"isWedding()\">Wedding</button>\n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'lighthouse\'}\"\n      ng-click=\"isLighthouse()\">Lighthouse</button>\n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'birth-announcement\'}\"\n      ng-click=\"isBirthAnnouncement()\">Birth Announcement</button>\n      \n      \n      \n    </div>\n    \n    \n     <div class=\"device-selection\">\n     \n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'business-card\'}\"\n      ng-click=\"isBusinessCard()\">Business Card</button>\n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'roy\'}\"\n      ng-click=\"isRoy()\">Lichtenstein</button>\n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'peace\'}\"\n      ng-click=\"isHoliday()\">Holiday</button>\n      \n      \n    </div>\n    \n    \n  <div>\n\n  <div class=\"description\">\n    <p>Illumination Letterpress is a small letterpress business that I run out of my residence. I focus primarily on wedding invitations, birth announcements and greeting cards. Everything is printed on a half-ton 1897 Challenge-Gordon platen letterpress.</p>\n  </div>\n  \n<div class=\"wrapper\">  \n  \n  <div class=\"subHead\">\n    <h1>Context</h1>\n    <p>With a background in drawing, design and typography, for several years I had imagined starting my own letterpress company. I was able to find a press on craigslist in the summer of 2014. The press needed a good amount of restoration and parts that had to be reverse-engineered by local companies.</p>\n    \n  </div>\n  \n  <div class=\"row\">\n  <div class=\"subHead col-md-8\">\n    <h1>Scope</h1>\n    \n    <p>Many of my projects involve an initial breif with the clients. This initial brief is typically information seeking on my part and informing them of the options and capabilities of the press. This then results in several design options before ordering materials for the client. Printing on the restored letterpress is a lot of fun, the only restriction is time. In the future I\'d like to accelerate the business, the first year has been a learning experience, I hope to push my designs further to explore all of the capabilites a large letterpress has.</p>\n\n    <h1 class=\"float-margin\">Responsibilites</h1>\n    <ul>\n      <li>Design</li>\n      <li>Illustration</li>\n      <li>Concept</li>\n      <li>Client Interaction</li>\n      <li>Project Management</li>\n      <li>Letterpress Printing</li>\n    </ul>\n  </div>\n\n\n<div class=\"sidebar col-md-4\">\n<div class=\"additional\"><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/letterpress/press.png\" alt>\n    <div class=\"additonal-caption\">\n    <p>Everything is printed on a restored 1897 Challenge-Gordon letterpress.</p>\n    </div>\n    </div>\n    \n    \n    \n \n</div> \n \n</div>\n \n\n  \n   <div id=\"technology\" class=\"subHead\">\n    <h1>Technology</h1>\n    <div class=\"gallery\">\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/indesign.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/photoshop.png\" alt></div>\n    </div>\n  </div>\n  \n </div>\n  </div>\n  </div>\n  </div>\n");
$templateCache.put("builds/development/js/directives/nigeria.html","\n\n\n<div class=\"container-fluid full\" ng-class=\"{\'item-horizontal\': isVertical()}\"> \n\n <div class=\"display-images\">\n  <img ng-src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/nigeria/{{device}}.png\"/>\n  <div class=\"device-selection\">\n     \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'desktop\'}\"\n      ng-click=\"isDesktop()\">Desktop</button>\n      \n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'tablet\'}\"\n      ng-click=\"isTablet()\">Tablet</button>\n      \n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'phone\'}\"\n      ng-click=\"isPhone()\">Phone</button>\n      \n      <a target=\"blank\" href=\"https://www.vineyardcincinnati.com/index.php?vcpgid=nigeria-map\"><button class=\"btn\"><i class=\"fa fa-link\"></i></button></a>\n      \n    </div>\n    \n    <div class=\"device-selection\">\n     \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'map\'}\"\n      ng-click=\"isMap()\">Map View</button>\n      \n      \n    </div>\n  <div>\n\n  <div class=\"description\">\n    <p>H2O Nigeria is a project that aims to provide sources for clean drinking water in villages in and around Jos, Nigeria. Vineyard Cincinnati, in partnership with Self Sustaining Enterprises Nigeria launched the project in 2008. The project, which spanned 7 years helped drill 80 boreholes to provide clean drinking water.</p>\n  </div>\n  \n<div class=\"wrapper\">  \n  \n  <div class=\"subHead\">\n    <h1>Context</h1>\n    <p>As the H2O Nigeria project came to a close, I was concurrently working on several other sites. The project breif was very simple, create a google map had markers to visualize the boreholes throughout Nigeria. The project quickly became very meaningful and given a week and a half project deadline, I used an archive of images, videos and a spreadsheet of data to put the site together leveraging Google Maps API and Angular.js</p>\n    \n  </div>\n  \n  \n<div class=\"row\">  \n  \n  <div class=\"subHead <col-md-12>  2</col-md-12>\">\n    <h1>Scope</h1>   \n    <p>This project spanned a week in length. My previous experience with Google Maps API and Angular.js helped speed up the development of the site. A responsive design was also incorporated since Google Analytics show mobile devices hitting the Vineyard site at nearly 50%. Due to the site consisting of a single page for navigation and one type of data, which likely would not alter in the future, an internal JSON file was used to pass data into Angular.js.  \n    </p>\n   \n    \n    <h1 class=\"float-margin\">Responsibilites</h1>\n    <ul>\n      <li>UX design</li>\n      <li>UI design and development</li>\n      <li>Angular.js, responsive front-end build</li>\n    </ul>\n  </div>\n\n\n\n\n    \n</div>\n \n\n  \n   <div id=\"technology\" class=\"subHead\">\n    <h1>Technology</h1>\n    <div class=\"gallery\">\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/angularjs.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/googleapi.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/jquery.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/foundation3.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/html5.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/css3.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/photoshop.png\" alt></div>\n    </div>\n  </div>\n  \n  \n  <div id=\"project-notes\" class=\"subHead\">\n    <h1>Project&nbsp;Notes</h1>\n    <p>This video, which was put together by the Vineyard productions team, explains project H2O in greater detail.</p>\n    \n   <iframe ng-if=\"!mobile\" src=\"https://player.vimeo.com/video/101029511\" frameborder=\"0\" width=\"680\" height=\"382\"></iframe>\n   \n   <iframe ng-if=\"mobile\" src=\"https://player.vimeo.com/video/101029511\" frameborder=\"0\" width=\"430\" height=\"242\"></iframe>\n   \n  </div>\n  \n  \n<!--\n<div id=\"live-view\" class=\"subHead\">\n    <h1>Live&nbsp;View</h1>  \n   <iframe src=\"https://www.vineyardcincinnati.com/index.php?vcpgid=nigeria-map\" width=\"100%\" height=\"500\">\n  <p>Your browser does not support iframes.</p>\n</iframe>\n</div>  \n-->\n</div>\n</div>");
$templateCache.put("builds/development/js/directives/smallthings.html","\n\n\n<div class=\"container-fluid full\" ng-class=\"{\'item-horizontal\': isVertical()}\"> \n\n\n <div class=\"display-images\">\n  <img ng-src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/smallthings/{{device}}.png\"/>\n  <div class=\"device-selection\">\n     \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'desktop\'}\"\n      ng-click=\"isDesktop()\">Desktop</button>\n      \n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'tablet\'}\"\n      ng-click=\"isTablet()\">Tablet</button>\n      \n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'phone\'}\"\n      ng-click=\"isPhone()\">Phone</button>\n      \n      <a target=\"blank\" href=\"http://www.smallthingsgreatlove.com\"><button class=\"btn\"><i class=\"fa fa-link\"></i></button></a>\n      \n    </div>\n  <div>\n\n  <div class=\"description\">\n    <p>This website was created as part of an annual outreach program done by Vineyard Cincinnati. Thousands of free bottles of water are handed out with \"smallthingsgreatlove.com\" printed on them. The website is meant to serve as a place for more information as well as a place to share stories of how the outrach has impacted their lives.</p>\n  </div>\n  \n<div class=\"wrapper\">  \n  \n  <div class=\"subHead\">\n    <h1>Context</h1>\n    <p>smallthingsgreatlove.com was in need of a re-design. The site was very outdated in appearance and did not offer clear enough content and site architecture to be very useful. The original site was also created before smartphones or modern browsers. A responsive, engaging, well structured hierarchy was the overarching goal.</p>\n    \n  </div>\n  \n  <div class=\"row\">\n  <div class=\"subHead col-md-8\">\n    <h1>Scope</h1>\n    \n    <p>The goal of this website is to present straightforward and direct content, since the majority of people accessing the site will be on a mobile device, a mobile-first design was a high priority. A participatory aspect of sharing stories would help echo the impact of the outreach. This would require the inclusion of a \"stories\" section. A form to enter stories and a CMS built with all CRUD operations for a content editor to be able to easily manage the site.   \n    </p>\n    <p>\n      Since this site\'s goal was quick access to a small amount of content, a flat hierarchy was structured with minimal naviagtion. The CMS was also very small, with no foreign key relations or constraints, but still needed to be intuitive to use and perform all CRUD operations. A large concern was that the previous site did not reflect the spirit of the outreach. A bright, engaging and clear layout was designed and executed with subtle CSS transitions to add interest.\n      \n    </p>\n    \n    <h1 class=\"float-margin\">Responsibilites</h1>\n    <ul>\n      <li>UX design</li>\n      <li>MySQL Database design</li>\n      <li>Custom CMS build</li>\n      <li>Responsive Front-end on Foundation</li>\n      <li>Heroku hosting</li>\n    </ul>\n  </div>\n\n\n<div class=\"sidebar col-md-4\">\n<div class=\"additional\"><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/smallthings/admin.png\" alt>\n    <div class=\"additonal-caption\">\n    <p>A custom admin build was created to review stories submitted and add them to the site. The CMS performs CRUD operations through object-oriented PHP with a MYSQL database.</p>\n    </div>\n    </div>\n    \n    \n    <div class=\"additional\"><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/smallthings/archive.png\" alt>\n    <div class=\"additonal-caption\">\n    <p>The old site felt very outdated. There was a limited amount of useful content and the design did not acccurately reflect the outreach program.</p>\n    </div>\n    </div>\n \n</div> \n \n</div>\n  \n   <div id=\"technology\" class=\"subHead\">\n    <h1>Technology</h1>\n    <div class=\"gallery\">\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/php.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/mysql.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/html5.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/css3.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/jquery.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/foundation3.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/heroku-Logo.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/analytics.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/photoshop.png\" alt></div>\n    </div>\n  </div>\n  \n<!--\n<div id=\"live-view\" class=\"subHead\">\n    <h1>Live&nbsp;View</h1>  \n   <iframe src=\"http://smallthingsgreatlove.com\" width=\"100%\" height=\"500\">\n  <p>Your browser does not support iframes.</p>\n</iframe>\n</div>  \n-->\n</div>\n</div>");
$templateCache.put("builds/development/js/directives/summit-media.html","\n\n\n<div class=\"container-fluid full\" ng-class=\"{\'item-horizontal\': isVertical()}\"> \n\n\n <div class=\"display-images\">\n  <img ng-src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/summit/{{device}}.png\"/>\n  <div class=\"device-selection\">\n     \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'logos\'}\"\n      ng-click=\"isLogos()\">Logos</button>\n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'ad\'}\"\n      ng-click=\"isAdvertisement()\">Advertisement</button>\n      \n      \n\n      \n      <a target=\"blank\" href=\"http://www.nationalunderwriter.com/\"><button class=\"btn\"><i class=\"fa fa-link\"></i></button></a>\n      \n    </div>\n  <div>\n\n  <div class=\"description\">\n    <p>Summit Business Media was my first professional level design experience. There was a good range of work, from branding to animation and advertisements.</p>\n  </div>\n  \n<div class=\"wrapper\">  \n  \n  <div class=\"subHead\">\n    <h1>Context</h1>\n    <p>Coming out of undergraduate school I had my eyes set on becoming a Flash Designer. I really enjoyed the challenge that came with translating static media into animation. Unfortunately, around the same time, it became evident that Flash was not going to be prevalent much longer. Nowadays, many of the Flash ads I had designed would be disregardered as an annoyance on the side of a web page; however, years later the experience in Actionscript would prove very useful in learning Javascript. </p>\n    \n  </div>\n  \n  <div class=\"row\">\n  <div class=\"subHead col-md-8\">\n    <h1>Scope</h1>\n    \n    <p>I worked on a wide variety of collateral material at Summit Business Media. I also had the opportunity to design flash banners on high-traffic sites. With this being my first professional experience post-college, it was an invaluable learning experience as I was able to work with many different Art Directors and projects.</p>\n\n    <h1 class=\"float-margin\">Responsibilites</h1>\n    <ul>\n      <li>Design</li>\n      <li>Illustration</li>\n      <li>Concept</li>\n      <li>Flash Animation</li>\n      <li>Print Preperation</li>\n    </ul>\n  </div>\n\n\n<div class=\"sidebar col-md-4\">\n<div class=\"subHead\">\n    <h1>Awards</h1>\n     <h3>2011</h3>\n    <ul>Company Logo redesign\n      <li><strong>First Place</strong></li>\n    </ul>\n  \n    \n    \n    \n    </div>\n    \n    \n    \n \n</div> \n \n</div>\n \n\n  \n   <div id=\"technology\" class=\"subHead\">\n    <h1>Technology</h1>\n    <div class=\"gallery\">\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/indesign.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/illustrator.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/photoshop.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/flash.png\" alt></div>\n\n    </div>\n  </div>\n  \n </div>\n  </div>\n  </div>\n  </div>\n");
$templateCache.put("builds/development/js/directives/tempo-future.html","\n\n<div class=\"container-fluid full\" ng-class=\"{\'item-horizontal\': isVertical()}\"> \n\n\n <div class=\"display-images\">\n  <img ng-src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/tempo/future/{{device}}.png\"/>\n  <div class=\"device-selection\">\n     \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'cover\'}\"\n      ng-click=\"isCover()\">Cover</button>\n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'cover-detail\'}\"\n      ng-click=\"isCoverDetail()\">Cover Detail</button>\n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'contents\'}\"\n      ng-click=\"isContents()\">Contents</button>\n\n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'spread-1\'}\"\n      ng-click=\"isSpread1()\">Spread 1</button>\n      \n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'spread-2\'}\"\n      ng-click=\"isSpread2()\">Spread 2</button>\n      \n      \n      \n      \n      \n      <a target=\"blank\" href=\"https://vineyardsandbox.s3.amazonaws.com/Rob/tempo/future/Spring2008Tempo.pdf\"><button class=\"btn\"><i class=\"fa fa-file\"></i></button></a>\n      \n    </div>\n  <div>\n\n  <div class=\"description\">\n    <p>During my last two years at Coastal Carolina University I had the opportunity to work as the Art Director of the Universities \"feature\" magazine, Tempo. Tempo was a bi-annual publication intended to represent the voice of the student body. I worked with two Editors each semester to develop a publication from concept to printed publication, with the only guidelines being a budget of around $10,000 each semester. My advisor and design mentor, Paul Olsen, helped me succeed in this role in a very hands-off manner. During my two-year tenure, Tempo won many national awards for design and editorial and turned to a point of pride for the University.</p>\n  </div>\n  \n<div class=\"wrapper\">  \n  \n  <div class=\"subHead\">\n    <h1>Context</h1>\n    <p>This issues theme was \"The Future\". The concept for this cover and contents page was to show the vast amount of interpretations, dreams and ambitions of the student body. For this image I asked hundreds of students around campus to complete the phrase, The Future is.... </p>\n    \n  </div>\n  \n  <div class=\"row\">\n  <div class=\"subHead col-md-8\">\n    <h1>Scope</h1>\n    \n    <p>Each of the four issues of Tempo involved creating the publication from initial concept to published product. There were no parameters or restrictions other than content had to be appropriate for the University and we had work with our assigned budget. The position as Art Director helped me grow as a designer tremendously by presenting many challenging layouts concepts and mastering Adobe Creative Suite through practice and necesity to execute. The position also gave me a good amount of experience with project management and working with local printers to determine, binding, paper weight and type.</p>\n\n    <h1 class=\"float-margin\">Responsibilites</h1>\n    <ul>\n      <li>Art Direction</li>\n      <li>Concept</li>\n      <li>Design</li>\n      <li>Student ollaboration Coordination</li>\n      <li>Print Management and Oversight</li>\n    </ul>\n  </div>\n\n\n<div class=\"sidebar col-md-4\">\n<div class=\"subHead\">\n    <h1>Awards</h1>\n     <h3>2009</h3>\n    <ul>College News and Design\n      <li><strong>Runner Up: Designer of the Year</strong></li>\n      <li><strong>2 First Place Awards</strong></li>\n      <li>2 Honorable Mention Award</li>\n    </ul>\n    <ul>Best of Collegiate Design\n      <li><strong>First Place Award</strong></li>\n    </ul>\n    <ul>Addy© Awards\n      <li>Regional Student Gold Award</li>\n      <li>3 District Student Silver Awards</li>\n      <li>National Finalist</li>\n    </ul>\n    \n    <h3>2008</h3>\n    <ul>College News and Design\n      <li><strong>Designer of the Year and Grant</strong></li>\n      <li>Second Place Award</li>\n      <li>Honorable Mention Award</li>\n    </ul>\n    <ul>Best of Collegiate Design\n      <li>Second Place Award</li>\n      <li>2 Fourth Place Awards</li>\n    </ul>\n    <ul>Addy© Awards\n      <li>2 Regional Student Gold Awards</li>\n      <li>2 District Student Silver Awards</li>\n      <li>2 National Finalist Awards</li>\n    </ul>\n    \n    \n    \n    </div>\n    \n    \n    \n \n</div> \n \n</div>\n \n \n <div id=\"project-notes\" class=\"subHead row\">\n    <h1>Project&nbsp;Notes</h1>\n    \n    <div class=\"sidebar col-md-6\">\n<div class=\"additional\"><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/tempo/future/project-note-1.png\">\n    <div class=\"additonal-caption\">\n    <p>I\'ve always been inspired by Maya Lin\'s design for the Vietnam Memorial. It is powerful in many ways, I appreciate the design most for it\'s simplicity and impressiveness in the sheer number of names. The memorial forces the viewer to consider each one of the names written on the wall and attach a life to it.\n</p><p>\nThe number of drafts and ideas on how to visualize the theme of the future were numerous. The word future means something entirely different to everyone. The predicment was how to show the future, such a broad idea in a way the audience of tempo could relate to</p>\n    </div>\n    </div>\n    </div>\n    \n    \n     <div class=\"sidebar col-md-6\">\n<div class=\"additional\"><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/tempo/future/project-note-2.png\">\n   <div class=\"additonal-caption\">\n    <p>I decided to ask hundreds of students to complete a simple statement the future is... The variety of interpretations on how to answer the question were amazing. They were sincere, optimistic, funny and clever.</p>\n    </div>\n    </div>\n </div>\n</div> \n \n \n  \n \n \n  \n\n \n  \n   <div id=\"technology\" class=\"subHead\">\n    <h1>Technology</h1>\n    <div class=\"gallery\">\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/indesign.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/illustrator.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/photoshop.png\" alt></div>\n\n    </div>\n  </div>\n  </div>\n </div>\n");
$templateCache.put("builds/development/js/directives/tempo-generation.html","\n\n<div class=\"container-fluid full\" ng-class=\"{\'item-horizontal\': isVertical()}\"> \n\n\n <div class=\"display-images\">\n  <img ng-src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/tempo/generation/{{device}}.png\"/>\n  <div class=\"device-selection\">\n     \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'cover\'}\"\n      ng-click=\"isCover()\">Cover</button>\n\n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'spread-1\'}\"\n      ng-click=\"isSpread1()\">Spread 1</button>\n      \n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'spread-2\'}\"\n      ng-click=\"isSpread2()\">Spread 2</button>\n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'spread-3\'}\"\n      ng-click=\"isSpread3()\">Spread 3</button>\n      \n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'spread-4\'}\"\n      ng-click=\"isSpread4()\">Spread 4</button>\n      \n      \n      \n      \n      \n      \n      <a target=\"blank\" href=\"https://vineyardsandbox.s3.amazonaws.com/Rob/tempo/generation/Tempo_Fall08_lowres.pdf\"><button class=\"btn\"><i class=\"fa fa-file\"></i></button></a>\n      \n    </div>\n  <div>\n\n  <div class=\"description\">\n    <p>During my last two years at Coastal Carolina University I had the opportunity to work as the Art Director of the Universities \"feature\" magazine, Tempo. Tempo was a bi-annual publication intended to represent the voice of the student body. I worked with two Editors each semester to develop a publication from concept to printed publication, with the only guidelines being a budget of around $10,000 each semester. My advisor and design mentor, Paul Olsen, helped me succeed in this role in a very hands-off manner. During my two-year tenure, Tempo won many national awards for design and editorial and turned to a point of pride for the University.</p>\n  </div>\n  \n<div class=\"wrapper\">  \n  \n  <div class=\"subHead\">\n    <h1>Context</h1>\n    <p>This issues theme was \"The Future\". The concept for this cover and contents page was to show the vast amount of interpretations, dreams and ambitions of the student body. For this image I asked hundreds of students around campus to complete the phrase, The Future is.... </p>\n    \n  </div>\n  \n  <div class=\"row\">\n  <div class=\"subHead col-md-8\">\n    <h1>Scope</h1>\n    \n    <p>Each of the four issues of Tempo involved creating the publication from initial concept to published product. There were no parameters or restrictions other than content had to be appropriate for the University and we had work with our assigned budget. The position as Art Director helped me grow as a designer tremendously by presenting many challenging layouts concepts and mastering Adobe Creative Suite through practice and necesity to execute. The position also gave me a good amount of experience with project management and working with local printers to determine, binding, paper weight and type.</p>\n\n    <h1 class=\"float-margin\">Responsibilites</h1>\n    <ul>\n      <li>Art Direction</li>\n      <li>Concept</li>\n      <li>Design</li>\n      <li>Student ollaboration Coordination</li>\n      <li>Print Management and Oversight</li>\n    </ul>\n  </div>\n\n\n<div class=\"sidebar col-md-4\">\n<div class=\"subHead\">\n    <h1>Awards</h1>\n     <h3>2009</h3>\n    <ul>College News and Design\n      <li><strong>Runner Up: Designer of the Year</strong></li>\n      <li><strong>2 First Place Awards</strong></li>\n      <li>2 Honorable Mention Award</li>\n    </ul>\n    <ul>Best of Collegiate Design\n      <li><strong>First Place Award</strong></li>\n    </ul>\n    <ul>Addy© Awards\n      <li>Regional Student Gold Award</li>\n      <li>3 District Student Silver Awards</li>\n      <li>National Finalist</li>\n    </ul>\n    \n    <h3>2008</h3>\n    <ul>College News and Design\n      <li><strong>Designer of the Year and Grant</strong></li>\n      <li>Second Place Award</li>\n      <li>Honorable Mention Award</li>\n    </ul>\n    <ul>Best of Collegiate Design\n      <li>Second Place Award</li>\n      <li>2 Fourth Place Awards</li>\n    </ul>\n    <ul>Addy© Awards\n      <li>2 Regional Student Gold Awards</li>\n      <li>2 District Student Silver Awards</li>\n      <li>2 National Finalist Awards</li>\n    </ul>\n    \n    \n    \n    </div>\n    \n    \n    \n \n</div> \n \n</div>\n \n \n <div id=\"technology\" class=\"subHead\">\n    <h1>Technology</h1>\n    <div class=\"gallery\">\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/indesign.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/illustrator.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/photoshop.png\" alt></div>\n\n    </div>\n  </div>\n \n <div id=\"project-notes\" class=\"subHead row\">\n    <h1>Project&nbsp;Notes</h1>\n    <h3>Cover Design</h3>\n    <div class=\"sidebar col-md-6\">\n<div class=\"additional\"><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/tempo/generation/project-note-1.png\">\n    <div class=\"additonal-caption\">\n    <p>Brainstorming for ideas on the theme of Our Generation began with searching for inspiration. The New York Times Magazine College Issue really stood out to me when I first saw it. It\'s cluttered and has an overwhelming amount of visual imagery, but it works. It stands apart from typical covers, it suits the imagery of a college scene and overall it\'s very engaging.</p>\n<p>\nI assume the designer had a similar predicament as I did with Tempo\'s theme. How do you sum up such a broad topic into an engaging and clear image? </p>\n    </div>\n    </div>\n    </div>\n    \n    \n     <div class=\"sidebar col-md-6\">\n<div class=\"additional\"><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/tempo/generation/project-note-2.png\">\n   <div class=\"additonal-caption\">\n    <p>During my daily browsing of design blogs and websites I come across many striking images. I keep many of these on hand to browse through when searching for inspiration. This quiet, meditative image seemed perfect to counterbalance the chaotic collage that had begun to take shape for the cover.</p>\n\n<p>The key now was to take ownership of this inspiration.</p>\n   <br><br><br>\n    </div>\n    </div>\n </div>\n \n  <div class=\"sidebar col-md-6\">\n<div class=\"additional\"><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/tempo/generation/project-note-3.png\">\n   <div class=\"additonal-caption\">\n    <p>Banksy is a very intriguing artist. Graffiti which is seen by many as a nuisance has been brought to the forefront of contemporary art thanks in a large part to his work. The technique was the perfect solution to take ownership of the imagery and tie into the concept of our generation. Amongst the chaos of media and events that left their impression on our generation this image would serve as a quiet reflection and mark to say <i>we were here</i>.</p>\n    </div>\n    </div>\n </div>\n \n \n  <div class=\"sidebar col-md-6\">\n<div class=\"additional\"><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/tempo/generation/project-note-4.png\">\n   <div class=\"additonal-caption\">\n    <p>And so the collage began! The editorial team and I decided on a handful of events we felt had left an impression on our generation. I scoured google for newspaper images and began to compile them into a collage that served as more of a textured background rather than giving preference to any certain event.</p>\n    </div>\n    </div>\n </div>\n \n \n  <div class=\"sidebar col-md-6\">\n<div class=\"additional\"><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/tempo/generation/cover.png\">\n   <div class=\"additonal-caption\">\n    <p>The rest of the process involved tying everything together in photoshop. The contrast between the background and graffiti imagery were balanced and a few additional elements were added to add interest.</p>\n\n<p>The design theme of the cover helped lay the groundword for the rest of the publication and it was echoed throughout.</p>\n    </div>\n    </div>\n </div>\n \n \n</div> \n \n \n  </div>\n \n \n  \n\n \n  \n   \n  \n </div>\n");
$templateCache.put("builds/development/js/directives/tempo-vices.html","\n\n<div class=\"container-fluid full\" ng-class=\"{\'item-horizontal\': isVertical()}\"> \n\n\n <div class=\"display-images\">\n  <img ng-src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/tempo/vices/{{device}}.png\"/>\n  <div class=\"device-selection\">\n     \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'cover\'}\"\n      ng-click=\"isCover()\">Cover</button>\n      \n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'spread-1\'}\"\n      ng-click=\"isSpread1()\">Spread 1</button>\n      \n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'spread-2\'}\"\n      ng-click=\"isSpread2()\">Spread 2</button>\n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'spread-3\'}\"\n      ng-click=\"isSpread3()\">Spread 3</button>\n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'back-cover\'}\"\n      ng-click=\"isBackCover()\">Back</button>\n      \n      <a target=\"blank\" href=\"https://vineyardsandbox.s3.amazonaws.com/Rob/tempo/vices/Tempo_2009_low_res.pdf\"><button class=\"btn\"><i class=\"fa fa-file\"></i></button></a>\n      \n    </div>\n  <div>\n\n  <div class=\"description\">\n    <p>During my last two years at Coastal Carolina University I had the opportunity to work as the Art Director of the Universities \"feature\" magazine, Tempo. Tempo was a bi-annual publication intended to represent the voice of the student body. I worked with two Editors each semester to develop a publication from concept to printed publication, with the only guidelines being a budget of around $10,000 each semester. My advisor and design mentor, Paul Olsen, helped me succeed in this role in a very hands-off manner. During my two-year tenure, Tempo won many national awards for design and editorial and turned to a point of pride for the University.</p>\n  </div>\n  \n<div class=\"wrapper\">  \n  \n  <div class=\"subHead\">\n    <h1>Context</h1>\n    <p>This issues theme was \"Vices and Virtues\". This publication was the final of 4, that I oversaw the Art Direction and design of. This publication totaling 62 pages, nearly double the size Tempo had been in the past was a testimate to the interest that the publication had grown due in a large part to the staff and my efforts in past semesters.</p>\n    \n  </div>\n  \n  <div class=\"row\">\n  <div class=\"subHead col-md-8\">\n    <h1>Scope</h1>\n    \n    <p>Each of the four issues of Tempo involved creating the publication from initial concept to published product. There were no parameters or restrictions other than content had to be appropriate for the University and we had work with our assigned budget. The position as Art Director helped me grow as a designer tremendously by presenting many challenging layouts concepts and mastering Adobe Creative Suite through practice and necesity to execute. The position also gave me a good amount of experience with project management and working with local printers to determine, binding, paper weight and type.</p>\n\n    <h1 class=\"float-margin\">Responsibilites</h1>\n    <ul>\n      <li>Art Direction</li>\n      <li>Concept</li>\n      <li>Design</li>\n      <li>Student ollaboration Coordination</li>\n      <li>Print Management and Oversight</li>\n    </ul>\n  </div>\n\n\n<div class=\"sidebar col-md-4\">\n<div class=\"subHead\">\n    <h1>Awards</h1>\n     <h3>2009</h3>\n    <ul>College News and Design\n      <li><strong>Runner Up: Designer of the Year</strong></li>\n      <li><strong>2 First Place Awards</strong></li>\n      <li>2 Honorable Mention Award</li>\n    </ul>\n    <ul>Best of Collegiate Design\n      <li><strong>First Place Award</strong></li>\n    </ul>\n    <ul>Addy© Awards\n      <li>Regional Student Gold Award</li>\n      <li>3 District Student Silver Awards</li>\n      <li>National Finalist</li>\n    </ul>\n    \n    <h3>2008</h3>\n    <ul>College News and Design\n      <li><strong>Designer of the Year and Grant</strong></li>\n      <li>Second Place Award</li>\n      <li>Honorable Mention Award</li>\n    </ul>\n    <ul>Best of Collegiate Design\n      <li>Second Place Award</li>\n      <li>2 Fourth Place Awards</li>\n    </ul>\n    <ul>Addy© Awards\n      <li>2 Regional Student Gold Awards</li>\n      <li>2 District Student Silver Awards</li>\n      <li>2 National Finalist Awards</li>\n    </ul>\n    \n    \n    \n    </div>\n    \n    \n    \n \n</div> \n \n</div>\n  \n   <div id=\"technology\" class=\"subHead\">\n    <h1>Technology</h1>\n    <div class=\"gallery\">\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/indesign.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/illustrator.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/photoshop.png\" alt></div>\n\n    </div>\n  </div>\n  \n \n</div>\n</div>");
$templateCache.put("builds/development/js/directives/vinblog.html","\n\n\n<div class=\"container-fluid full\" ng-class=\"{\'item-horizontal\': isVertical()}\"> \n\n\n <div class=\"display-images\">\n  <img ng-src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/blog/{{device}}.png\"/>\n  <div class=\"device-selection\">\n     \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'desktop\'}\"\n      ng-click=\"isDesktop()\">Desktop</button>\n      \n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'tablet\'}\"\n      ng-click=\"isTablet()\">Tablet</button>\n      \n      \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'phone\'}\"\n      ng-click=\"isPhone()\">Phone</button>\n      \n      <a target=\"blank\" href=\"http://blog.vineyardcincinnati.com\"><button class=\"btn\"><i class=\"fa fa-link\"></i></button></a>\n      \n    </div>\n  <div>\n\n  <div class=\"description\">\n    <p>The Vineyard Blog is an external site with hosts the articles and stories of various staff members. The site helps the church connect with their users and echoes the voice of the Vineyard.</p>\n  </div>\n  \n<div class=\"wrapper\">  \n  \n  <div class=\"subHead\">\n    <h1>Context</h1>\n    <p>In an increased effort to connect with users an external blog was created for the staff. The site could be accessed directly, but would often serve as a way to link article to the Vineyard\'s social media pages. While a WordPress blog was the brought up by the team, I did not want to limit us to WordPress template, widgets and security concerns that come along with WordPress. This site was a perfect candidate for a smaller Django CMS site, in which we could customize it to fit our needs. The site also had to tie into the current site design and be setup to easily change styles once the new Vineyard website was completed.</p>\n    \n  </div>\n  \n  <div class=\"row\">\n  <div class=\"subHead col-md-8\">\n    <h1>Scope</h1>\n    \n    <p>This project consisted in length of several weeks from start of code to final DNS transfer and hosting in Heroku. The site navigation is very minimal and came about from asking questions from content editors regarding what type of content they will be adding, what features would be beneficial in the CMS, how often they will be posting, what categories, how many categories etc... \n    </p>\n    <p>\n    At completion the site sees much higher traffic than expected. A mobile-first, clean and clear design helps users focus on the content and easily navigate the site. The CMS ended up being much easier for the contentmanagers to use than WordPress blog pages they were used to working in.</p>\n    \n    <h1 class=\"float-margin\">Responsibilites</h1>\n    <ul>\n      <li>UX design</li>\n      <li>MySQL Database design</li>\n      <li>Custom CMS build</li>\n      <li>Responsive Front-end with Susy and Breakpoint</li>\n      <li>Heroku hosting</li>\n    </ul>\n  </div>\n\n\n<div class=\"sidebar col-md-4\">\n<div class=\"additional\"><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/blog/admin.png\" alt>\n    <div class=\"additonal-caption\">\n    <p>Django provides an admin page based on the database design of the models. A simple WYSIWG editor was added and scheduling of posts. User Registration is also a feature Django helps by providing boilerplate models.</p>\n    </div>\n    </div>\n    \n \n</div> \n \n</div>\n  \n   <div id=\"technology\" class=\"subHead\">\n    <h1>Technology</h1>\n    <div class=\"gallery\">\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/django.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/python.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/mysql.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/html5.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/css3.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/jquery.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/susy.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/gulp.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/git-logo.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/github.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/heroku-Logo.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/analytics.png\" alt></div>\n    </div>\n  </div>\n  \n<!--\n<div id=\"live-view\" class=\"subHead\">\n    <h1>Live&nbsp;View</h1>  \n   <iframe target=\'_top\' src=\"http://blog.vineyardcincinnati.com/\" width=\"100%\" height=\"500\">\n  <p>Your browser does not support iframes.</p>\n</iframe>\n</div>  \n-->\n</div>\n</div>");
$templateCache.put("builds/development/js/directives/visiblelanguage.html","\n\n\n<div class=\"container-fluid full\" ng-class=\"{\'item-horizontal\': isVertical()}\"> \n\n<div class=\"status in-progress\">This project is currently ongoing.</div>\n\n <div class=\"display-images\">\n  <img ng-src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/visiblelanguage/{{device}}.png\"/>\n  <div class=\"device-selection\">\n     \n      <button class=\"btn\" \n      ng-class=\"{\'active\': device === \'desktop\'}\"\n      ng-click=\"isDesktop()\">Desktop</button>\n      \n      \n      <a target=\"blank\" href=\"http://visiblelanguagejournal.com/subscribe/\"><button class=\"btn\"><i class=\"fa fa-link\"></i></button></a>\n      \n    </div>\n  <div>\n\n  <div class=\"description\">\n    <p>In 2014 the University of Cincinnati inherited the longest running design journal, Visible Language Journal from the Rhode Island School of design. As part of a Graduate Assistanship I was awarded by the University of Cincinnati, I was hired to extend the development and eventual redesign of the website they had inherited from the Rhode Island School of design.</p>\n  </div>\n  \n<div class=\"wrapper\">  \n  \n  <div class=\"subHead\">\n    <h1>Context</h1>\n    <p>The website that the university had inherited was built in Python and Django with a mySQL database. It had a responsive design and admin system for entering articles, issues, volumes and authors with a properly normalized databse, but was lacking a much needed subscriber database and online ordering system. There are several hundred subscribers to the journal all over the world, managing their orders had become a large burden on the administrative staff as well fulfilling orders without credit card payment. </p>\n    \n  </div>\n  \n  <div class=\"row\">\n  <div class=\"subHead col-md-8\">\n    <h1>Scope</h1>\n    \n    <p>This project was a large undertaking, mostly due to the framework and language it was built in being unfamiliar. There were many front-end and back-end feature extensions which were needed. It was determined that the back-end features, a subscriber database and online ordering system were the top priority and the front-end redesign would follow. Before any coding was done, I began by familiarizing myself with Python, then Django and then the website structure itself. \n    </p>\n    <p>\n      There are many challenges that come with inheriting a project. Fortunately Django has great documentation. The website subscriber base, shopping cart and credit card authorization were completed over the course of the first two semesters as well as maintenance and enhancement to the front-end. A complete re-design and extension on features on the fron-tnd are planned for the 2015-2016 school year.  \n    </p>\n    \n    \n    <h1 class=\"float-margin\">Responsibilites</h1>\n    <ul>\n      <li>MySQL Database design</li>\n      <li>Custom CMS build</li>\n      <li>Responsive Front-end on Bootstrap</li>\n      <li>Heroku hosting</li>\n    </ul>\n  </div>\n\n\n<div class=\"sidebar col-md-4\">\n<div class=\"additional\"><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/visiblelanguage/admin.png\" alt>\n    <div class=\"additonal-caption\">\n    <p>Building the subscriber database, user registration and shopping cart was a challenge of database normalization which encouraged a large overview, strategic approach.</p>\n    </div>\n    </div>\n    \n \n</div> \n \n</div>\n  \n   <div id=\"technology\" class=\"subHead\">\n    <h1>Technology</h1>\n    <div class=\"gallery\">\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/django.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/python.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/mysql.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/html5.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/css3.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/git-logo.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/github.png\" alt></div>\n      <div><img src=\"https://vineyardsandbox.s3.amazonaws.com/Rob/logos/heroku-Logo.png\" alt></div>\n\n    </div>\n  </div>\n  \n<!--\n<div id=\"live-view\" class=\"subHead\">\n    <h1>Live&nbsp;View</h1>  \n   <iframe src=\"http://visiblelanguage.herokuapp.com/subscribe/\" width=\"100%\" height=\"500\">\n  <p>Your browser does not support iframes.</p>\n</iframe>\n</div>  \n-->\n</div>\n</div>");}]);



angular.module('app').directive('rbVisibleLanguage', function(){
    return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/visiblelanguage.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'desktop';
      console.log('called');
      scope.isDesktop = function(){
        scope.device = 'desktop';
      };
      
      scope.isTablet = function(){
        scope.device = 'tablet';
      };
      
      scope.isPhone = function(){
        scope.device = 'phone';
      };
      
     
    }
  }
});



angular.module('app').directive('rbVinBlog', function(){
    return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/vinblog.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'desktop';
      
      scope.isDesktop = function(){
        scope.device = 'desktop';
      };
      
      scope.isTablet = function(){
        scope.device = 'tablet';
      };
      
      scope.isPhone = function(){
        scope.device = 'phone';
      };
      
     
    }
  }
});



angular.module('app').directive('rbTempoVices', function(){
    return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/tempo-vices.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'cover';
      
      scope.isCover = function(){
        scope.device = 'cover';
      };
      
      scope.isSpread1 = function(){
        scope.device = 'spread-1';
      };
      
      scope.isSpread2 = function(){
        scope.device = 'spread-2';
      };
      
      scope.isSpread3 = function(){
        scope.device = 'spread-3';
      };
      
      scope.isBackCover = function(){
        scope.device = 'back-cover';
      };
      
     
    }
  }
});


angular.module('app').directive('rbTempoGeneration', function(){
    return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/tempo-generation.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'cover';
      
      scope.isCover = function(){
        scope.device = 'cover';
      };
      
      scope.isSpread1 = function(){
        scope.device = 'spread-1';
      };
      
      scope.isSpread2 = function(){
        scope.device = 'spread-2';
      };
      
      scope.isSpread3 = function(){
        scope.device = 'spread-3';
      };
      
      scope.isSpread4 = function(){
        scope.device = 'spread-4';
      };
      
      
     
      
     
    }
  }
});





angular.module('app').directive('rbTempoFuture', function(){
    return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/tempo-future.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'cover';
      
      scope.isCover = function(){
        scope.device = 'cover';
      };
      
       scope.isContents = function(){
        scope.device = 'contents';
      };
      
      scope.isSpread1 = function(){
        scope.device = 'spread-1';
      };
      
      scope.isSpread2 = function(){
        scope.device = 'spread-2';
      };
      
      scope.isCoverDetail = function(){
        scope.device = 'cover-detail';
      };
      
     
      
     
    }
  }
});




angular.module('app').directive('rbSummitMedia', function(){
  return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/summit-media.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'logos';
      
       scope.isLogos = function(){
        scope.device = 'logos';
      };
      
      
      scope.isAdvertisement = function(){
        scope.device = 'ad';
      };
      
      

     
    }
  }
});


angular.module('app').directive('rbSmallThings', function(){
    return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/smallthings.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'desktop';
      
      scope.isDesktop = function(){
        scope.device = 'desktop';
      };
      
      scope.isTablet = function(){
        scope.device = 'tablet';
      };
      
      scope.isPhone = function(){
        scope.device = 'phone';
      };
      
     
    }
  }
});


angular.module('app').directive('rbNigeria', function(){
    return{
    scope:{
      image: '@',
      mobile: '='
    },
    templateUrl: 'js/directives/directiveTemplates/nigeria.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'desktop';
      
      scope.isDesktop = function(){
        scope.device = 'desktop';
      };
      
      scope.isTablet = function(){
        scope.device = 'tablet';
      };
      
      scope.isPhone = function(){
        scope.device = 'phone';
      };
      
      scope.isMap = function(){
        scope.device = 'map';
      };
     console.log(scope.mobile);
    }
  }
});

angular.module('app').directive('rbLetterpress', function(){
    return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/letterpress.html',
      
    link: function(scope, el, attr, ctrl){
      
      scope.device = 'wedding';
      
      scope.isWedding = function(){
        scope.device = 'wedding';
      };
      
      scope.isLighthouse = function(){
        scope.device = 'lighthouse';
      };
      
      scope.isBirthAnnouncement = function(){
        scope.device = 'birth-announcement';
      };
      
      scope.isBusinessCard = function(){
        scope.device = 'business-card';
      };
      
      scope.isRoy = function(){
        scope.device = 'roy';
      };
      
      scope.isHoliday = function(){
        scope.device = 'peace';
      };
     
    }
  }
});

angular.module('app').directive('rbIlluminationSite', function(){
    return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/illuminationsite.html',
    link: function(scope, el, attr, ctrl){
      
      
      scope.device = 'desktop';
      
      scope.isDesktop = function(){
        scope.device = 'desktop';
      };
      
      scope.isTablet = function(){
        scope.device = 'tablet';
      };
      
      scope.isPhone = function(){
        scope.device = 'phone';
      };
      
     
    }
  }
});

angular.module('app').directive('rbHome', function(){
    return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/home.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'desktop';
      
      scope.isDesktop = function(){
        scope.device = 'desktop';
      };
      
      scope.isTablet = function(){
        scope.device = 'tablet';
      };
      
      scope.isPhone = function(){
        scope.device = 'phone';
      };
      
     
    }
  }
});

angular.module('app').directive('rbHealingCenter', function(){
  return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/healingCenter.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'desktop';
      
      scope.isDesktop = function(){
        scope.device = 'desktop';
      };
      
      scope.isDesktopTwo = function(){
        scope.device = 'desktop-two';
      };
      
      scope.isTablet = function(){
        scope.device = 'tablet';
      };
      
      scope.isPhone = function(){
        scope.device = 'phone';
      };
      
      scope.isAdminOne = function(){
        scope.device = 'admin-one';
      };
      
      scope.isAdminTwo = function(){
        scope.device = 'admin-two';
      };
      
      scope.isAdminThree = function(){
        scope.device = 'admin-three';
      };
      
      scope.isAdminFour = function(){
        scope.device = 'admin-four';
      };
     
    }
  }
});



angular.module('app').directive('rbEsh', function(){
  return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/esh.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'desktop';
      
       scope.isDesktop = function(){
        scope.device = 'desktop';
      };
      
      
      scope.isPrintAd = function(){
        scope.device = 'print-ad';
      };
      
      

     
    }
  }
});



angular.module('app').directive('rbCoffeyCommunications', function(){
  return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/coffey-communications.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'heart';
      
      scope.isIllustration1 = function(){
        scope.device = 'heart';
      };
      
       scope.isIllustration2 = function(){
        scope.device = 'migraine';
      };
      
      scope.isCover1 = function(){
        scope.device = 'cover-1';
      };
      
      scope.isCover2 = function(){
        scope.device = 'cover-2';
      };
      
     
    }
  }
});



angular.module('app').directive('rbArtwork', function(){
  return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/artwork.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'charcoal';
      
       scope.isCharcoal = function(){
        scope.device = 'charcoal';
      };
      
      scope.isCharcoalTwo = function(){
        scope.device = 'charcoal-two';
      };
      
      scope.isOil = function(){
        scope.device = 'oil';
      };
      
      
      scope.isPrint = function(){
        scope.device = 'print';
      };
      

     
    }
  }
});


angular.module('app').directive('rbAbout', function(){
  return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/about.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'desktop';
      
      scope.isDesktop = function(){
        scope.device = 'desktop';
      };
      
      scope.isTablet = function(){
        scope.device = 'tablet';
      };
      
      scope.isPhone = function(){
        scope.device = 'phone';
      };
      
     
    }
  }
});
angular.module('rbMenu', ['ngAnimate']);

angular.module('rbMenu').directive('rbMenuItem', function(){
  return{
    require: '^rbMenu',
    scope:{
      label: '@',
      icon: '@',
      route: '@'
    },
    templateUrl: 'ext-modules/rbMenu/rbMenuItemTemplate.html',
    link: function(scope, el, attr, ctrl){
      
      scope.isActive = function(){
        return el === ctrl.getActiveElement();
      };
      
      scope.isVertical = function(){
        return ctrl.isVertical() || el.parents('.subitem-section').length > 0;
      }
      
      el.on('click', function(evt){
        evt.stopPropagation();
        evt.preventDefault();
        scope.$apply(function(){
          ctrl.setActiveElement(el);
          ctrl.setRoute(scope.route, scope.label);
        });
      });
    }
  };
});

angular.module('rbMenu').directive('rbMenuGroup', function(){
  return{
      require: '^rbMenu',
      transclude: true,
      scope:{
        label: '@',
        icon: '@',
        route: '@'
      },
      templateUrl: 'ext-modules/rbMenu/rbMenuGroupTemplate.html',
      link: function(scope, el, attrs, ctrl){
          scope.isOpen = false;
        
          scope.closeMenu = function(){
            scope.isOpen = false;
          };
        
          scope.clicked = function(){
            scope.isOpen = !scope.isOpen;
            
            if(el.parents('.subitem-section').length == 0){
                scope.setSubmenuPosition();
            }
            
            ctrl.setOpenMenuScope(scope);
            
          };
        
          scope.isVertical = function(){
            return ctrl.isVertical() || el.parents('.subitem-section').length > 0;
          }
          
          scope.setSubmenuPosition = function(){
            var pos = el.offset();
            $('.subitem-section').css({'left':pos.left + 20, 'top':36});
          };
        
        
        
      }
  }
});
angular.module('rbMenu').directive('rbMenu', ["$timeout", function($timeout){
  return{
    scope:{
      
    },
    transclude: true,
    templateUrl: 'ext-modules/rbMenu/rbMenuTemplate.html',
    controller: 'rbMenuController',
    link: function(scope, el, attr){
        var item = el.find('.selectable-item:first');
        $timeout(function(){
          item.trigger('click');
        }, 0);
    }
  };
}]);

angular.module('rbMenu').controller('rbMenuController', 
["$scope", "$rootScope", "$location", "$window", function($scope, $rootScope, $location, $window){
  
    var width = Math.max($($window).width(), $window.innerWidth);
    
    
    $scope.openMenuScope = null;
    $scope.isVertical = true;
  
  
    
     if(width >= 768){
      $scope.showMenu = true; 
     }else{
       $scope.showMenu = false;
     };
  
    this.getActiveElement = function(){
        return $scope.activeElement;
    };
  
    
  
    this.setActiveElement = function(el){
        $scope.activeElement = el;
        
    };   
  
    this.isVertical = function(){
        return $scope.isVertical;
    }
    
    this.setRoute = function(route, label){
        $rootScope.$broadcast('menu-item-selected-event',
              {route: route,
              title: label});
    };
  
  
    this.setOpenMenuScope = function(scope){
        $scope.openMenuScope = scope;
    }
  
    $scope.toggleMenuOrientation = function(){
        
        if($scope.openMenuScope){
            $scope.openMenuScope.closeMenu();
        }
        
        $scope.isVertical = !$scope.isVertical;
        $rootScope.$broadcast('rb-menu-orientation-changed-event',
              {isMenuVertical: $scope.isVertical});
    };
  
    angular.element(document).bind('click', function(e){
      if($scope.openMenuScope && !$scope.isVertical){
        if($(e.target).parent().hasClass('selectable-item')){
          return;
        }
        $scope.$apply(function(){
          $scope.openMenuScope.closeMenu();
        });
        e.preventDefault();
        e.stopPropagation();
      }
    });
  
    $scope.$on('menu-show', function(evt, data){
      $scope.showMenu = data.show;
      $scope.isVertical = data.isVertical;
      $scope.allowHorizontalToggle = data.allowHorizontalToggle;
    });
  

  
}]);
angular.module('rbFramework', ['rbMenu', 'rbDashboard']);

angular.module('rbFramework').directive('rbFramework', function(){
  return {
    transclude: true,
    scope: {
      title: '@',
      subtitle: '@',
      iconFile: '@'
    },
    controller: 'rbFrameworkController',
    templateUrl: 'ext-modules/rbFramework/rbFrameworkTemplate.html'
  };
});

angular.module('rbFramework')
.controller('rbFrameworkController', ["$scope", "$rootScope", "$window", "$timeout", "$location", "$routeParams", "$route", function($scope, $rootScope, $window, $timeout, $location, $routeParams, $route){
  
    $scope.isMenuVisible = true;
    $scope.isMenuButtonVisible = true;
    $scope.isMenuVertical = true;
    $scope.allowHorizontalToggle = true;
    $scope.aboutActive = true;
    $scope.isMobile = true;
  
    $scope.$on('menu-item-selected-event', function(evt, data){
        $scope.routeString = data.route;
        $scope.routeTitle = data.title;
        $location.path(data.route);
        checkWidth();
        broadcastMenuState();
    });
    
    var viewLoaded = false;
    var url = $location.$$url;
  
    $scope.$on('$locationChangeSuccess', function(){
      viewLoaded = true;  
      determineViewWidth();
     $timeout(function(){ 
        if($location.$$url === '/about'){
          $scope.aboutActive = true;
        }else{
          $scope.aboutActive = undefined;
        }
      },10);  
      
      $timeout(function(){ 
        $('.menu-area-vertical').css('height', $('.view').height() + 40)
      },420);  
      
      
    });
    

    if(!viewLoaded){
        $route.reload();  
    }
    
    
  
  
    $scope.$on('rb-menu-orientation-changed-event', function(evt, data){
        $scope.isMenuVertical = data.isMenuVertical;
    });
  
    $($window).on('resize.rbFramework', function(){
      $scope.$apply(function(){
        checkWidth();
        broadcastMenuState();
        determineViewWidth();
//        broadcastMobileState();
      });
    });
  
    
    $scope.$on('$destroy', function(){
      $($window).off('resize.rbFramework'); //remove the handler
    })
    
    var checkWidth = function(){
      var width = Math.max($($window).width(), $window.innerWidth);
      $scope.isMenuVisible = (width >= 768);
      $scope.isMenuButtonVisible = !$scope.isMenuVisible;
      $scope.isMobile = (width <= 460);
    };
  
    $scope.menuButtonClicked = function(){
      $scope.isMenuVisible = !$scope.isMenuVisible;
      broadcastMenuState();
    }
    

    
    var broadcastMenuState = function(){
      $rootScope.$broadcast('menu-show', 
        {
          show: $scope.isMenuVisible,
          isVertical: $scope.isMenuVertical,
          allowHorizontalToggle: !$scope.isMenuButtonVisible
        });
    }
    
    
     var determineViewWidth = function(){ 
       
      $timeout(function(){
        
        var menuWidth = ($('.menu-area-vertical').outerWidth() / $('body').width()) * 100;
        var viewWidth = 100;
        if(Math.max($($window).width(), $window.innerWidth) >= 768){
        $('.view').css('width', ((viewWidth - menuWidth) + '%'));
        }else{
        $('.view').css('width', ((viewWidth) + '%'));
        }
      },1);
      }

     determineViewWidth();
     
    $timeout(function(){
      checkWidth();
      broadcastMenuState();
    },0);
  
  
}]);
angular.module('rbDashboard', []);