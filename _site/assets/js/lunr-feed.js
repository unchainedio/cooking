var hostname = "";
var index = lunr(function () {
    this.field('title')
    this.field('content', {boost: 10})
    this.field('category')
    this.field('tags')
    this.ref('id')
});



    index.add({
        title: "Sample Data",
        category: ["dessert"],
        content: "\n\nMarkdown (or Textile), Liquid, HTML &amp; CSS go in. Static sites come out ready for deployment.\n\nHeadings\n\nHeading 1\n\nHeading 2\n\nHeading 3\n\nHeading 4\n\nHeading 5\n\nHeading 6\n\nBlockquote\n\n\n  No more databases, comment moderation, or pesky updates to install—just your content.\n\n\n\n  2 lbs strawberries, hulled and halved\n  2 stalks rhubarb, sliced\n  1/2 cup sugar\n  3 cups flour (I used pastry)\n  2 teaspoons baking powder\n  1 teaspoon baking soda\n  2 tablespoons sugar\n  1/2 teaspoon salt\n  8 tablespoons (1 stick) unsalted butter, cut into small pieces\n  2 cups buttermilk\n\n\nUnordered List\n\n\n  Jekyll\n  Ruby\n  Markdown\n  Liquid\n\n\nOrdered List\n\n\n  Jekyll\n  Ruby\n  Markdown\n  Liquid\n\n\nLink\n\nThis is an example inline link.\n\nParagraph w/ strong, em, etc.\n\nThese are just a few of the available configuration options. Many configuration options can either be specified as flags on the command line, or alternatively (and more commonly) they can be specified in a _config.yml file at the root of the source directory. Jekyll will automatically use the options from this file when run. For example, if you place the following lines in your _config.yml file.\n\nImage\n\n\t\n\tPhoto by Geo Darwin.\n\n\nVideo\n\n\n\nDefault Code Block\n\nThis is code blog.\n\n\n\nDefinition Lists\n\n\n    Definition Title\n    Definition Description\n\n\nParagraphs w/ Aligned Images\n\nThe Jekyll gem makes a jekyll executable available to you in your Terminal window. You can use this command in a number of ways.\n\n\n\t\n\tPhoto by Niklas Rhöse.\n\n\nThis site aims to be a comprehensive guide to Jekyll. We’ll cover topics such as getting your site up and running, creating and managing your content, customizing the way your site works and looks, deploying to various environments, and give you some advice on participating in the future development of Jekyll itself.\n\nJekyll is a simple, blog-aware, static site generator. It takes a template directory containing raw text files in various formats, runs it through a converter (like Markdown) and our Liquid renderer, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server. Jekyll also happens to be the engine behind GitHub Pages, which means you can use Jekyll to host your project’s page, blog, or website from GitHub’s servers for free.\n\n\n\t\n\tPhoto by Stefan Johnson.\n\n\nThroughout this guide there are a number of small-but-handy pieces of information that can make using Jekyll easier, more interesting, and less hazardous. Here’s what to look out for.\n\nIf you come across anything along the way that we haven’t covered, or if you know of a tip you think others would find handy, please file an issue and we’ll see about including it in this guide.\n\nThe front matter is where Jekyll starts to get really cool. Any file that contains a YAML front matter block will be processed by Jekyll as a special file. The front matter must be the first thing in the file and must take the form of valid YAML set between triple-dashed lines.\n\nThe Jekyll gem makes a jekyll executable available to you in your Terminal window. You can use this command in a number of ways.\n\nIf you come across anything along the way that we haven’t covered, or if you know of a tip you think others would find handy, please file an issue and we’ll see about including it in this guide.\n",
        tags: ["ham","muffin"],
        id: 0
    });
    

    index.add({
        title: "Documentation - Configuration & First Steps",
        category: ["soup"],
        content: "\n\n\n  2 lbs strawberries, hulled and halved\n  2 stalks rhubarb, sliced\n  1/2 cup sugar\n  3 cups flour (I used pastry)\n  2 teaspoons baking powder\n  1 teaspoon baking soda\n  2 tablespoons sugar\n  1/2 teaspoon salt\n  8 tablespoons (1 stick) unsalted butter, cut into small pieces\n  2 cups buttermilk\n\n\nConfiguration\nAll configuration options are in the _config.yml file.\n\nGeneral Settings\n\n  logo: Site logo.\n  name: Site name.\n  description: Site description.\n  site_owner_name: Your name. Used by default when no post author is set.\n  email: Your email. There are two cases where email is used. First, if you entered the email and you’ve activated show_email option the end result will be a visible social email icon in the sidebar. The second use of your email is when you do not set your own avatar. In this case your email is used by the gravatar plugin to automatically fetch your gravatar.\n  favicon: Want a favicon? Enter the full path here. For example http://mysite.com/blog/assets/favicon.ico.\n  twitter_handler: Add your Twitter username without the @. It will be used for Twitter Cards. The default card type for “Delicious” is Summary Card with Large Image.\n  analytics_code: Add your Google Analytics Tracking ID. Example ID: UA-XXXXXXX-2.\n  disqus: Add your website shortname from Disqus.\n\n\nImportant Note: Keep in mind that name, twitter_handler and some of the post specific variables are used as default meta data in some cases.\n\nSocial Accounts\n\n  social_networks: Here you can find the list of all the available social networks that you can currently use. Of course you can always add a new one by yourself or ask for it to be available in the next version of the theme. If you don’t want a specific social network to be seen, just leave the url value empty or delete the line.\n\n\nImportant: Do not change the names of the social networks!\n\nModules Settings\nOne thing to remember - 1 is on, 0 is off.\n\n\n  show_tags: If it is on and you’ve added tags in the post itself the tags will be visible. If it is off and you’ve added tags in the post they will be hidden. This option is helpful if you want to turn on/off tags for all your posts at once.\n  show_email: If this is turned on and you’ve entered an email value in email, an email icon will appear next to your social media accounts and all your readers will be able to contact you.\n  show_rss: If this is turned on, a new RSS button will appear next to your social media accounts.\n  show_comments: If it is on and you’ve added comments: true in the post itself the comments will be visible. If it is off and you’ve added comments: true in the post the comments will be hidden. This option is helpful if you want to turn on/off comments for all your posts at once.\n\n\nDefaults\n\n  defaults: The only available option at the moment is whether to enable the comments automatically in the post or not. The default value is true.\n\n\nServing\nThese options are pretty important, so take a closer look. If you experience any problems with your paths you should check them here.\n\n\n  url: Enter your domain! Example: https://mysite.com\n  baseurl: The baseurl can remain empty if you’re not going to host your site in a subfolder. But if you want your site to be something like htttp://mysite.com/blog you should write down /blog here.\n\n\nIncludes\n\n\n  include: Force the inclusion of the pages directory.\n\n\nOutputting\n\n\n  permalink: By default your links will look like this http://mysite.com/categories/post-name.html. If you want a different permalink check Jekyll documentation.\n  category_dir: The default directory is categories, so for example if you go to random category index you will see something like this http://mysite.com/categories/category-name/postname.html.\n\n\nPagination\n\n  paginate: You should enter a number that stands for the number of posts per page.\n  paginate_path: The default path is /all/:num/, so for example if you go to second page you will see something like this http://mysite.com/all/2/.\n\n\nImportant Note: Pagination is currently working only on home page due to Jekyll limitations.\n\nConversion\n\n  markdown: Choose your Markdown renderer. Different Markdown renderers supported by Jekyll sometimes have extra options available. I suggest to stick with the default.\n\n\nAssets Settings\n\n  sass: Choose the path to all of yours SCSS partials and the compression method for the final file.\n\n\nIf you need extra help, just check out the official Jekyll documentation.\n\nAdditional Configuration &amp; Information\n\n\n\tHow Facebook knows which image to use for sharing?\n\tBy default the script gets the first image in the post so take that in mind when you write a blog post.\n\t\n\tHow the post's thumbnail are generated?\n    By default the script gets the first image in the post and make it post's thumbnail.\n    \n    How the post's category images are generated?\n    Again, dynamically. The script match your category name with available ones and display it.\n    \n    How the recipe ingredients list is generated?\n    By default the script gets the first ul in the post so take that in mind.\n\n\nAdding Post\n\nThe next thing after you are done with the configuration file is to add your first post. You will need to have at least basic knowledge of HTML or Markdown.\n\nAll you need to do is to create a new file with name YYYY-MM-DD-my-first-post and .markdown or .md extension. Create it in the _posts folder. By default the name of the file is composed by date and title but you can overwrite these in the post’s front matter.\n\nIn the beginning of the every post you have a so called front matter block which contains some data about the post. Here is the short description of the options.\n\nlayout: The post layout.\n\ndate: Exact date when the post is published. The date is actually pretty important and I suggest you never change it. Specific date helps Jekyll to order correctly all the posts. Also, the date is used to generate a unique ID, so Disqus can always get the right comments for the right post, even when you change the title.\n\ntitle: Post’s title.\n\nauthor: Post’s author. In the _data/users.yml file you can more authors. If no author is specified the author name will be your site_owner_name name and your avatar will be set to your gravatar via your email.\n\ndescription: Meta description used for better SEO.\n\ncomments: By default they are always true, but if you want to turn them off for a specific post just set this to false.\n\ncategory: List the category in which you want your post to appear. Only one category can be set. Here is the list of preset categories:\n\n\n  asian\n  bbq\n  beer\n  breakfast\n  cocktail\n  coffee\n  dessert\n  drink\n  fruit\n  junk\n  main\n  meat\n  pasta\n  pizza\n  salad\n  seafood\n  snack\n  soup\n  tea\n  vegetarian\n  vegan\n\n\ntags: List your tags here.\n\nAdding Page\n\nAdding page is even simpler than adding post. Just create a sub-folder to the pages directory and inside that sub-folder create index.md file. The folder name is your page name. Every folder must contain index file. Pages are also using front matter to add information to your page.\n\nlayout: The page layout.\n\ntitle: Page’s title.\n\npermalink: This is important. If you do not enter the permalink, your url will be something like this http://example.com/_pages/about. Enter the permalink and get rid of /_pages/ part. Do not forget the trailing slash!\n\nThat’s it! Do not hesitate to ask if you have any questions. Also you can send me feature requests. Happy blogging!\n\n",
        tags: ["watermelon","cheese"],
        id: 1
    });
    

    index.add({
        title: "Installation",
        category: ["fruit"],
        content: "\n\nI assume you have already downloaded and installed Ruby. Here’s what you need to do next:\n\n\n  Run gem install jekyll bundler.\n  Copy the theme in your desired folder.\n  Enter into the folder by executing cd name-of-the-folder.\n  Run bundle install.\n  If you want to access and customize the theme, use bundle exec jekyll serve. This way it will be accessible on http://localhost:4000.\n  Upload the content of the compiled _site folder on your host server.\n\n\n\n    8 sheets toasted nori\n    1 peeled daikon radish\n    1 cucumber\n    1 cup sunflower sprouts\n    1 small mango\n    2 small avocados\n    24 sprigs mint\n    handful cilantro\n    (optional) 6 oz smoked wild salmon OR tofu\n\n",
        tags: ["banana","orange"],
        id: 2
    });
    

    index.add({
        title: "Salad with Blue Cheese and Marcona Almonds",
        category: ["salad"],
        content: "\n\nPreheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices or quarters in a bowl. Mix with extra honey, the remaining thyme, and the juice and zest of your small orange. Set aside.\n\nGrease your heated iron with butter or coconut oil. Pour a heaping cup of the batter and cook until golden and crispy on the outer edges. Transfer waffles to the oven to keep warm and repeat with remaining batter. To serve, smear with marscapone and top with a heap of gussied strawberries and a drizzle of honey.\n\n\n    8 sheets toasted nori\n    1 peeled daikon radish\n    1 cucumber\n    1 cup sunflower sprouts\n    1 small mango\n    2 small avocados\n    24 sprigs mint\n    handful cilantro\n    (optional) 6 oz smoked wild salmon OR tofu\n\n",
        tags: ["cheese"],
        id: 3
    });
    

    index.add({
        title: "Beef and Tomato",
        category: null,
        content: "\n\nPreheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices or quarters in a bowl. Mix with extra honey, the remaining thyme, and the juice and zest of your small orange. Set aside.\n\nGrease your heated iron with butter or coconut oil. Pour a heaping cup of the batter and cook until golden and crispy on the outer edges. Transfer waffles to the oven to keep warm and repeat with remaining batter. To serve, smear with marscapone and top with a heap of gussied strawberries and a drizzle of honey.\n\n\n    8 sheets toasted nori\n    1 peeled daikon radish\n    1 cucumber\n    1 cup sunflower sprouts\n    1 small mango\n    2 small avocados\n    24 sprigs mint\n    handful cilantro\n    (optional) 6 oz smoked wild salmon OR tofu\n\n",
        tags: ["nuts","sweets"],
        id: 4
    });
    

    index.add({
        title: "Tomatillo Soup",
        category: ["soup"],
        content: "\n\nPreheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices or quarters in a bowl. Mix with extra honey, the remaining thyme, and the juice and zest of your small orange. Set aside.\n\nGrease your heated iron with butter or coconut oil. Pour a heaping cup of the batter and cook until golden and crispy on the outer edges. Transfer waffles to the oven to keep warm and repeat with remaining batter. To serve, smear with marscapone and top with a heap of gussied strawberries and a drizzle of honey.\n\n\n    8 sheets toasted nori\n    1 peeled daikon radish\n    1 cucumber\n    1 cup sunflower sprouts\n    1 small mango\n    2 small avocados\n    24 sprigs mint\n    handful cilantro\n    (optional) 6 oz smoked wild salmon OR tofu\n\n",
        tags: ["tomato"],
        id: 5
    });
    

    index.add({
        title: "Popeye Salad",
        category: ["salad"],
        content: "\n\nPreheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices or quarters in a bowl. Mix with extra honey, the remaining thyme, and the juice and zest of your small orange. Set aside.\n\nGrease your heated iron with butter or coconut oil. Pour a heaping cup of the batter and cook until golden and crispy on the outer edges. Transfer waffles to the oven to keep warm and repeat with remaining batter. To serve, smear with marscapone and top with a heap of gussied strawberries and a drizzle of honey.\n\n\n    8 sheets toasted nori\n    1 peeled daikon radish\n    1 cucumber\n    1 cup sunflower sprouts\n    1 small mango\n    2 small avocados\n    24 sprigs mint\n    handful cilantro\n    (optional) 6 oz smoked wild salmon OR tofu\n\n",
        tags: ["eggs"],
        id: 6
    });
    

    index.add({
        title: "Meatballs Pasta",
        category: ["pasta"],
        content: "\n\nPreheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices or quarters in a bowl. Mix with extra honey, the remaining thyme, and the juice and zest of your small orange. Set aside.\n\nGrease your heated iron with butter or coconut oil. Pour a heaping cup of the batter and cook until golden and crispy on the outer edges. Transfer waffles to the oven to keep warm and repeat with remaining batter. To serve, smear with marscapone and top with a heap of gussied strawberries and a drizzle of honey.\n\n\n    8 sheets toasted nori\n    1 peeled daikon radish\n    1 cucumber\n    1 cup sunflower sprouts\n    1 small mango\n    2 small avocados\n    24 sprigs mint\n    handful cilantro\n    (optional) 6 oz smoked wild salmon OR tofu\n\n",
        tags: ["ham","chocolate"],
        id: 7
    });
    

    index.add({
        title: "Ham and Cheese Bruschetas",
        category: ["tea"],
        content: "\n\nPreheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices or quarters in a bowl. Mix with extra honey, the remaining thyme, and the juice and zest of your small orange. Set aside.\n\nGrease your heated iron with butter or coconut oil. Pour a heaping cup of the batter and cook until golden and crispy on the outer edges. Transfer waffles to the oven to keep warm and repeat with remaining batter. To serve, smear with marscapone and top with a heap of gussied strawberries and a drizzle of honey.\n\n\n    8 sheets toasted nori\n    1 peeled daikon radish\n    1 cucumber\n    1 cup sunflower sprouts\n    1 small mango\n    2 small avocados\n    24 sprigs mint\n    handful cilantro\n    (optional) 6 oz smoked wild salmon OR tofu\n\n",
        tags: ["nuts","fruit"],
        id: 8
    });
    

    index.add({
        title: "Midnight Breakfast",
        category: ["asian"],
        content: "\n\nPreheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices or quarters in a bowl. Mix with extra honey, the remaining thyme, and the juice and zest of your small orange. Set aside.\n\nGrease your heated iron with butter or coconut oil. Pour a heaping cup of the batter and cook until golden and crispy on the outer edges. Transfer waffles to the oven to keep warm and repeat with remaining batter. To serve, smear with marscapone and top with a heap of gussied strawberries and a drizzle of honey.\n\n\n    8 sheets toasted nori\n    1 peeled daikon radish\n    1 cucumber\n    1 cup sunflower sprouts\n    1 small mango\n    2 small avocados\n    24 sprigs mint\n    handful cilantro\n    (optional) 6 oz smoked wild salmon OR tofu\n\n",
        tags: ["shrimps"],
        id: 9
    });
    

    index.add({
        title: "Ham and Cheese Bruschetas",
        category: ["snack"],
        content: "\n\nPreheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices or quarters in a bowl. Mix with extra honey, the remaining thyme, and the juice and zest of your small orange. Set aside.\n\nGrease your heated iron with butter or coconut oil. Pour a heaping cup of the batter and cook until golden and crispy on the outer edges. Transfer waffles to the oven to keep warm and repeat with remaining batter. To serve, smear with marscapone and top with a heap of gussied strawberries and a drizzle of honey.\n\n\n    8 sheets toasted nori\n    1 peeled daikon radish\n    1 cucumber\n    1 cup sunflower sprouts\n    1 small mango\n    2 small avocados\n    24 sprigs mint\n    handful cilantro\n    (optional) 6 oz smoked wild salmon OR tofu\n\n",
        tags: ["ham","chocolate"],
        id: 10
    });
    

    index.add({
        title: "Mac and Cheese Pizza",
        category: ["pizza"],
        content: "\n\nPreheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices or quarters in a bowl. Mix with extra honey, the remaining thyme, and the juice and zest of your small orange. Set aside.\n\nGrease your heated iron with butter or coconut oil. Pour a heaping cup of the batter and cook until golden and crispy on the outer edges. Transfer waffles to the oven to keep warm and repeat with remaining batter. To serve, smear with marscapone and top with a heap of gussied strawberries and a drizzle of honey.\n\n\n    8 sheets toasted nori\n    1 peeled daikon radish\n    1 cucumber\n    1 cup sunflower sprouts\n    1 small mango\n    2 small avocados\n    24 sprigs mint\n    handful cilantro\n    (optional) 6 oz smoked wild salmon OR tofu\n\n",
        tags: ["tomato"],
        id: 11
    });
    

    index.add({
        title: "Seafood Hot Pot",
        category: ["asian"],
        content: "\n\nPreheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices or quarters in a bowl. Mix with extra honey, the remaining thyme, and the juice and zest of your small orange. Set aside.\n\nGrease your heated iron with butter or coconut oil. Pour a heaping cup of the batter and cook until golden and crispy on the outer edges. Transfer waffles to the oven to keep warm and repeat with remaining batter. To serve, smear with marscapone and top with a heap of gussied strawberries and a drizzle of honey.\n\n\n    8 sheets toasted nori\n    1 peeled daikon radish\n    1 cucumber\n    1 cup sunflower sprouts\n    1 small mango\n    2 small avocados\n    24 sprigs mint\n    handful cilantro\n    (optional) 6 oz smoked wild salmon OR tofu\n\n",
        tags: ["shrimp","chocolate"],
        id: 12
    });
    

    index.add({
        title: "Seafood Hot Pot",
        category: ["seafood"],
        content: "\n\nPreheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices or quarters in a bowl. Mix with extra honey, the remaining thyme, and the juice and zest of your small orange. Set aside.\n\nGrease your heated iron with butter or coconut oil. Pour a heaping cup of the batter and cook until golden and crispy on the outer edges. Transfer waffles to the oven to keep warm and repeat with remaining batter. To serve, smear with marscapone and top with a heap of gussied strawberries and a drizzle of honey.\n\n\n    8 sheets toasted nori\n    1 peeled daikon radish\n    1 cucumber\n    1 cup sunflower sprouts\n    1 small mango\n    2 small avocados\n    24 sprigs mint\n    handful cilantro\n    (optional) 6 oz smoked wild salmon OR tofu\n\n",
        tags: ["ham","chocolate"],
        id: 13
    });
    

    index.add({
        title: "Widowed Lentils Soup",
        category: ["soup"],
        content: "\n\nPreheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices or quarters in a bowl. Mix with extra honey, the remaining thyme, and the juice and zest of your small orange. Set aside.\n\nGrease your heated iron with butter or coconut oil. Pour a heaping cup of the batter and cook until golden and crispy on the outer edges. Transfer waffles to the oven to keep warm and repeat with remaining batter. To serve, smear with marscapone and top with a heap of gussied strawberries and a drizzle of honey.\n\n\n    8 sheets toasted nori\n    1 peeled daikon radish\n    1 cucumber\n    1 cup sunflower sprouts\n    1 small mango\n    2 small avocados\n    24 sprigs mint\n    handful cilantro\n    (optional) 6 oz smoked wild salmon OR tofu\n\n",
        tags: ["ham","chocolate"],
        id: 14
    });
    

    index.add({
        title: "Tiramisu with Goji Berries",
        category: ["dessert"],
        content: "\n\nHome-made chia seed pudding with soy milk, banana and crushed almonds. Vegan and totally yummy! You just need to mix chia seeds with the milk in a blender for about 2 minutes and keep the pudding over night in the refrigerator (no cooking needed).\n\n\n    8 sheets toasted nori\n    1 peeled daikon radish\n    1 cucumber\n    1 cup sunflower sprouts\n    1 small mango\n    2 small avocados\n    24 sprigs mint\n    handful cilantro\n    (optional) 6 oz smoked wild salmon OR tofu\n\n",
        tags: ["chocolate","apple"],
        id: 15
    });
    

    index.add({
        title: "Beef and Vegetables Pot",
        category: ["meat"],
        content: "\n\nHome-made chia seed pudding with soy milk, banana and crushed almonds. Vegan and totally yummy! You just need to mix chia seeds with the milk in a blender for about 2 minutes and keep the pudding over night in the refrigerator (no cooking needed).\n\n\n    8 sheets toasted nori\n    1 peeled daikon radish\n    1 cucumber\n    1 cup sunflower sprouts\n    1 small mango\n    2 small avocados\n    24 sprigs mint\n    handful cilantro\n    (optional) 6 oz smoked wild salmon OR tofu\n\n",
        tags: ["meat","cheese"],
        id: 16
    });
    

    index.add({
        title: "Raw Food Chili con Cacao",
        category: ["vegetarian"],
        content: "\n\nHome-made chia seed pudding with soy milk, banana and crushed almonds. Vegan and totally yummy! You just need to mix chia seeds with the milk in a blender for about 2 minutes and keep the pudding over night in the refrigerator (no cooking needed).\n\n\n    8 sheets toasted nori\n    1 peeled daikon radish\n    1 cucumber\n    1 cup sunflower sprouts\n    1 small mango\n    2 small avocados\n    24 sprigs mint\n    handful cilantro\n    (optional) 6 oz smoked wild salmon OR tofu\n\n",
        tags: ["cacao"],
        id: 17
    });
    

    index.add({
        title: "Apple and Ice-cream Dessert",
        category: ["dessert"],
        content: "\n\nHome-made chia seed pudding with soy milk, banana and crushed almonds. Vegan and totally yummy! You just need to mix chia seeds with the milk in a blender for about 2 minutes and keep the pudding over night in the refrigerator (no cooking needed).\n\n\n    8 sheets toasted nori\n    1 peeled daikon radish\n    1 cucumber\n    1 cup sunflower sprouts\n    1 small mango\n    2 small avocados\n    24 sprigs mint\n    handful cilantro\n    (optional) 6 oz smoked wild salmon OR tofu\n\n",
        tags: ["beer","meat","potato"],
        id: 18
    });
    

    index.add({
        title: "Raw Food Sweet Potato Gratin",
        category: ["seafood"],
        content: "\n\nFolks, this is killer. For what this cobbler lacks in beauty it makes up ten-fold in taste, especially after a full day on the move. Not much mise en place when it comes to camp cooking, and I wouldn’t want it any other way. Any summer fruit combination will do. I had strawberries and rhubarb on hand for this trip. I imagine peaches, plums, cherries, or blackberries will be fantastic as they come into season this summer.\n\n\n    2 lbs strawberries, hulled and halved\n    2 stalks rhubarb, sliced\n    1/2 cup sugar\n    3 cups flour (I used pastry)\n\n",
        tags: ["tuna"],
        id: 19
    });
    

    index.add({
        title: "Raw Food Dolmades with Tzatziki",
        category: ["vegetarian"],
        content: "\n\nPisco is a (typically) colorless grape brandy produced in Chile and Peru. It is the star of what both countries claim as their national cocktail, the Pisco Sour. In Puerto Natales, the closest township to Torres del Paine where we trekked, we met a young man who when asked about the Pisco Sour closed his eyes, touched his chest and said, “Ah, my Pisco, when you drink it you will feel a light your soul.” I happen to think he’s right, but the time and place seemed to have unusually persuasive powers. I have three takes on the Pisco Sour for you here today. The original, the de Campo with honey and ginger, and one to bookmark for summer with fresh mango and Seranno peppers. Each recipe serves one. Blend ingredients together until the ice is completely crushed and the mixture frothy. Serve in an old-fashioned glass with friends. Can be doubled, tripled, etc. and served family style.\n\n\n    2 fl oz (8 parts) Pisco\n    1 fl oz (4 parts) Lime juice\n    3/4 fl oz (3 part) Simple syrup (sugar and water)\n    1 Egg white\n    4 large ice cubes\n    2 fl oz (8 parts) Pisco\n    1 fl oz (4 parts) Lime juice\n    1 fl oz (4 parts) honey\n    1/2 flz oz (2 parts) grated fresh ginger\n    1 Egg white\n    4 large ice cubes\n\n",
        tags: ["potatoes"],
        id: 20
    });
    

    index.add({
        title: "Dessert Platter",
        category: ["dessert"],
        content: "\n\nBring 3 cups and a few extra tablespoons of water to a boil. Cook quinoa over medium heat for 15-18 minutes or until water is absorbed and the seed has germinated. Set aside to cool.\n\nPreheat the oven to 400.’ Rigorously wash the beets and radishes, as you will not be peeling them before roasting. Remove grimy tops and cut beets and radishes into fourths, then sixths or 8ths. You want large-ish, yet bit sized wedges. Cut fennel bulb in a similar fashion, top to bottom. Toss wedges of radish, beets, and fennel together with olive oil and salt in a parchment lined sheet pan. Roast in the oven for 20-30 minutes, turning veggies over to brown and soften on all sides.\n\nIn a large mixing bowl, combine chopped parsley, chives, diced red onion with cooled quinoa. In a small jar prepare the dressing by combining ½ cup olive oil, juice of 3 whole lemons, salt, pepper, and minced garlic cloves. Shake to combine.\n\n\n    1 ½ cups quinoa (dry)\n    6 small beets\n    6 radish bulbs\n    1 large head fennel, fronds reserved\n    1 bunch parsley, roughly chopped\n    1 small red onion, diced\n    ¼ cup minced chives\n    4-6 cloves garlic, minced\n    3 plump lemons\n    ½ cup + 3 tbsp olive oil\n    salt &amp; pepper to taste\n\n",
        tags: [],
        id: 21
    });
    

    index.add({
        title: "Chia Seed Banana Pudding with Almonds",
        category: ["drink"],
        content: "\n\nHome-made chia seed pudding with soy milk, banana and crushed almonds. Vegan and totally yummy! You just need to mix chia seeds with the milk in a blender for about 2 minutes and keep the pudding over night in the refrigerator (no cooking needed).\n\n\n    8 sheets toasted nori\n    1 peeled daikon radish \n    1 cucumber\n    1 cup sunflower sprouts\n    1 small mango\n    2 small avocados\n    24 sprigs mint\n    handful cilantro\n    (optional) 6 oz smoked wild salmon OR tofu\n\n",
        tags: [],
        id: 22
    });
    

    index.add({
        title: "French-Spanish Dips",
        category: ["snack"],
        content: "\n\nHome-made chia seed pudding with soy milk, banana and crushed almonds. Vegan and totally yummy! You just need to mix chia seeds with the milk in a blender for about 2 minutes and keep the pudding over night in the refrigerator (no cooking needed).\n\n\n    8 sheets toasted nori\n    1 peeled daikon radish \n    1 cucumber\n    1 cup sunflower sprouts\n    1 small mango\n    2 small avocados\n    24 sprigs mint\n    handful cilantro\n    (optional) 6 oz smoked wild salmon OR tofu\n\n",
        tags: ["croissant"],
        id: 23
    });
    

    index.add({
        title: "Sausage and Egg Casserole",
        category: ["bbq"],
        content: "\n\nMelt butter over low heat in a small saucepan, set aside. In a small bowl, mix and dissolve the yeast. In a larger bowl, combine salt and flour. Whisk together the yeast-water, milk, butter, egg yolks, and honey and combine with the dry ingredients. In another small bowl, beat the egg whites (like a crazy woman) until frothy. Fold into batter with 1/2 cup mascarpone, zest of half the orange, and leaves of 10 springs of thyme. Set aside, covered, for 10-20 minutes.\n\nPreheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices or quarters in a bowl. Mix with extra honey, the remaining thyme, and the juice and zest of your small orange. Set aside.\n\nGrease your heated iron with butter or coconut oil. Pour a heaping cup of the batter and cook until golden and crispy on the outer edges. Transfer waffles to the oven to keep warm and repeat with remaining batter. To serve, smear with marscapone and top with a heap of gussied strawberries and a drizzle of honey.\n\n\n    1  1/2 teaspoons active dry yeast\n    1 cup warm water\n    3 cups whole wheat flour\n    1/2 teaspoon sea salt\n    1 cup milk or milk alternative\n    1 stick unsalted butter, melted\n    2 large eggs, separated\n    1 orange, zest and juice\n    1 pint fresh strawberries\n    20 springs fresh thyme\n    1-2 cups mascarpone cheese\n    1/3 cup honey, plus more for finishing\n\n",
        tags: ["eggs","banana"],
        id: 24
    });
    

    index.add({
        title: "Blueberry and White Chocolate Pancakes",
        category: ["dessert"],
        content: "\n\nAt home: Mix together the dry ingredients, except sugar, and place in a bag or tupperware. Pack sugar separately. Measure out the buttermilk and transfer to a small container.\n\n\n    2 teaspoons baking powder\n    1 teaspoon baking soda\n    2 tablespoons sugar\n    1/2 teaspoon salt\n    8 tablespoons (1 stick) unsalted butter, cut into small pieces\n    2 cups buttermilk\n\n",
        tags: ["apple","cheese"],
        id: 25
    });
    

    index.add({
        title: "Raw Food Tacos",
        category: ["vegan"],
        content: "\n\nFolks, this is killer. For what this cobbler lacks in beauty it makes up ten-fold in taste, especially after a full day on the move. Not much mise en place when it comes to camp cooking, and I wouldn’t want it any other way. Any summer fruit combination will do. I had strawberries and rhubarb on hand for this trip. I imagine peaches, plums, cherries, or blackberries will be fantastic as they come into season this summer.\n\nAt home: Mix together the dry ingredients, except sugar, and place in a bag or tupperware. Pack sugar separately. Measure out the buttermilk and transfer to a small container.\n\n\n    2 lbs strawberries, hulled and halved\n    2 stalks rhubarb, sliced\n    1/2 cup sugar\n    3 cups flour (I used pastry)\n    2 teaspoons baking powder\n    1 teaspoon baking soda\n    2 tablespoons sugar\n    1/2 teaspoon salt\n    8 tablespoons (1 stick) unsalted butter, cut into small pieces\n    2 cups buttermilk\n\n",
        tags: ["tacos"],
        id: 26
    });
    

    index.add({
        title: "Chicken Fajitas",
        category: ["meat"],
        content: "\n\nFolks, this is killer. For what this cobbler lacks in beauty it makes up ten-fold in taste, especially after a full day on the move. Not much mise en place when it comes to camp cooking, and I wouldn’t want it any other way. Any summer fruit combination will do. I had strawberries and rhubarb on hand for this trip. I imagine peaches, plums, cherries, or blackberries will be fantastic as they come into season this summer.\n\nAt home: Mix together the dry ingredients, except sugar, and place in a bag or tupperware. Pack sugar separately. Measure out the buttermilk and transfer to a small container.\n\nIn camp: Set up the fire and place a grill about 4 inches above the flame. If you forget a grate (oops) create a rock formation to protect the iron from direct flame. Cut the fruit into chunks and toss with the sugar. Add the fruit to a heavy, cast-iron 5-quart Dutch oven or a deep cast-iron skillet.\n\nFor the biscuits, place the pre-mixed dry ingredients in a bowl. Cut the butter into the flour mixture until the butter is the size of small peas. Stir in the buttermilk, just until the batter comes together.\n\nDrop dollops of the dough in an even layer over the fruit. Cover the Dutch oven and put the cobbler over the fire pit. Cook until the biscuits are cooked all the way through, about 30 minutes.\n\n\n    2 lbs strawberries, hulled and halved\n    2 stalks rhubarb, sliced\n    1/2 cup sugar\n    3 cups flour (I used pastry)\n    2 teaspoons baking powder\n    1 teaspoon baking soda\n    2 tablespoons sugar\n    1/2 teaspoon salt\n    8 tablespoons (1 stick) unsalted butter, cut into small pieces\n    2 cups buttermilk\n\n",
        tags: [],
        id: 27
    });
    

    index.add({
        title: "Steak Pommes-Frites",
        category: ["meat"],
        content: "\n\nPreheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices or quarters in a bowl. Mix with extra honey, the remaining thyme, and the juice and zest of your small orange. Set aside.\n\nGrease your heated iron with butter or coconut oil. Pour a heaping cup of the batter and cook until golden and crispy on the outer edges. Transfer waffles to the oven to keep warm and repeat with remaining batter. To serve, smear with marscapone and top with a heap of gussied strawberries and a drizzle of honey.\n\n\n    8 sheets toasted nori\n    1 peeled daikon radish\n    1 cucumber\n    1 cup sunflower sprouts\n    1 small mango\n    2 small avocados\n    24 sprigs mint\n    handful cilantro\n    (optional) 6 oz smoked wild salmon OR tofu\n\n",
        tags: ["ham","shrimp"],
        id: 28
    });
    

    index.add({
        title: "Char Siu and Wonton Tossed Noodles",
        category: ["asian"],
        content: "\n\nFor the broth, mix together all ingredients (save for the miso) and simmer for 30 minutes. Mix in miso after 30 minutes and remove from heat. While the broth simmers, cook the noodles, slice the green onions, and poach an egg with your method of preference.\n\nCombine Noodles, 1 heaping cup of kimchi, 1/2 cup green onions and pour over 2 cups of broth and top with egg.\n\n\n    2 cups ramen or soba noodles\n    1/2 cup sliced green onion\n    1 poached egg\n    2 cups quick broth\n    4 cups water\n    1 onion\n    1/2 apple, sliced\n    3 lemon slices\n    1/4 cup sliced shallots\n    5 garlic cloves\n    1″ nub ginger\n    1/2 cup kimchi\n    3 tbsp miso paste\n\n",
        tags: [],
        id: 29
    });
    


var store = [{
    "title": "Sample Data",
    "link": "/dessert/sample-data.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["dessert"],
    "content": "<p><img src=\"http://farm4.staticflickr.com/3325/4606441280_7617930c63_b.jpg\" /></p>\n\n<p>Markdown (or Textile), Liquid, HTML &amp; CSS go in. Static sites come out ready for deployment.</p>\n\n<h4 id=\"headings\">Headings</h4>\n\n<h1 id=\"heading-1\">Heading 1</h1>\n\n<h2 id=\"heading-2\">Heading 2</h2>\n\n<h3 id=\"heading-3\">Heading 3</h3>\n\n<h4 id=\"heading-4\">Heading 4</h4>\n\n<h5 id=\"heading-5\">Heading 5</h5>\n\n<h6 id=\"heading-6\">Heading 6</h6>\n\n<h4 id=\"blockquote\">Blockquote</h4>\n\n<blockquote>\n  <p>No more databases, comment moderation, or pesky updates to install—just your content.</p>\n</blockquote>\n\n<ul>\n  <li>2 lbs strawberries, hulled and halved</li>\n  <li>2 stalks rhubarb, sliced</li>\n  <li>1/2 cup sugar</li>\n  <li>3 cups flour (I used pastry)</li>\n  <li>2 teaspoons baking powder</li>\n  <li>1 teaspoon baking soda</li>\n  <li>2 tablespoons sugar</li>\n  <li>1/2 teaspoon salt</li>\n  <li>8 tablespoons (1 stick) unsalted butter, cut into small pieces</li>\n  <li>2 cups buttermilk</li>\n</ul>\n\n<h4 id=\"unordered-list\">Unordered List</h4>\n\n<ul>\n  <li>Jekyll</li>\n  <li>Ruby</li>\n  <li>Markdown</li>\n  <li>Liquid</li>\n</ul>\n\n<h4 id=\"ordered-list\">Ordered List</h4>\n\n<ol>\n  <li>Jekyll</li>\n  <li>Ruby</li>\n  <li>Markdown</li>\n  <li>Liquid</li>\n</ol>\n\n<h4 id=\"link\">Link</h4>\n\n<p>This is <a href=\"http://example.com/\" title=\"Title\">an example</a> inline link.</p>\n\n<h4 id=\"paragraph-w-strong-em-etc\">Paragraph w/ strong, em, etc.</h4>\n\n<p>These are just a few of the <em>available</em> <strong>configuration</strong> options. Many <code>configuration</code> options can <strike>either</strike> be specified as flags on the <abbr title=\"Command Line Tool\">command line</abbr>, or alternatively (and more commonly) they can be specified in a _config.yml file at the root of the source directory. Jekyll will <a href=\"http://joro.me/\" target=\"_blank\">automatically use</a> the options from this file when run. For example, if you place the following lines in your _config.yml file.</p>\n\n<h4 id=\"image\">Image</h4>\n<figure class=\"aligncenter\">\n\t<img src=\"https://images.unsplash.com/photo-1444952483853-7c36e902e722?dpr=1&amp;auto=format&amp;crop=entropy&amp;fit=crop&amp;w=1500&amp;h=1125&amp;q=80&amp;cs=tinysrgb\" />\n\t<figcaption>Photo by <a href=\"https://unsplash.com/@geostablephl\" target=\"_blank\">Geo Darwin</a>.</figcaption>\n</figure>\n\n<h4 id=\"video\">Video</h4>\n\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/iWowJBRMtpc\" frameborder=\"0\" allowfullscreen=\"\"></iframe>\n\n<h4 id=\"default-code-block\">Default Code Block</h4>\n\n<div class=\"highlighter-rouge\"><pre class=\"highlight\"><code>This is code blog.\n</code></pre>\n</div>\n\n<h4 id=\"definition-lists\">Definition Lists</h4>\n\n<dl>\n    <dt>Definition Title</dt>\n    <dd>Definition Description</dd>\n</dl>\n\n<h4 id=\"paragraphs-w-aligned-images\">Paragraphs w/ Aligned Images</h4>\n\n<p>The Jekyll gem makes a jekyll executable available to you in your Terminal window. You can use this command in a number of ways.</p>\n\n<figure class=\"alignleft\">\n\t<img width=\"250\" src=\"https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?dpr=1&amp;auto=format&amp;crop=entropy&amp;fit=crop&amp;w=1500&amp;h=1125&amp;q=80&amp;cs=tinysrgb\" />\n\t<figcaption>Photo by <a href=\"https://unsplash.com/@blitzer\" target=\"_blank\">Niklas Rhöse</a>.</figcaption>\n</figure>\n\n<p>This site aims to be a comprehensive guide to Jekyll. We’ll cover topics such as getting your site up and running, creating and managing your content, customizing the way your site works and looks, deploying to various environments, and give you some advice on participating in the future development of Jekyll itself.</p>\n\n<p>Jekyll is a simple, blog-aware, static site generator. It takes a template directory containing raw text files in various formats, runs it through a converter (like Markdown) and our Liquid renderer, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server. Jekyll also happens to be the engine behind GitHub Pages, which means you can use Jekyll to host your project’s page, blog, or website from GitHub’s servers for free.</p>\n\n<figure class=\"alignright\">\n\t<img width=\"250\" src=\"https://images.unsplash.com/photo-1471253387723-35c53c9f97ca?dpr=1&amp;auto=format&amp;crop=entropy&amp;fit=crop&amp;w=1500&amp;h=2250&amp;q=80&amp;cs=tinysrgb\" />\n\t<figcaption>Photo by <a href=\"https://unsplash.com/@stefanjonhson\" target=\"_blank\">Stefan Johnson</a>.</figcaption>\n</figure>\n\n<p>Throughout this guide there are a number of small-but-handy pieces of information that can make using Jekyll easier, more interesting, and less hazardous. Here’s what to look out for.</p>\n\n<p>If you come across anything along the way that we haven’t covered, or if you know of a tip you think others would find handy, please file an issue and we’ll see about including it in this guide.</p>\n\n<p>The front matter is where Jekyll starts to get really cool. Any file that contains a YAML front matter block will be processed by Jekyll as a special file. The front matter must be the first thing in the file and must take the form of valid YAML set between triple-dashed lines.</p>\n\n<p>The Jekyll gem makes a jekyll executable available to you in your Terminal window. You can use this command in a number of ways.</p>\n\n<p>If you come across anything along the way that we haven’t covered, or if you know of a tip you think others would find handy, please file an issue and we’ll see about including it in this guide.</p>\n",
    "excerpt": "Markdown (or Textile), Liquid, HTML &amp; CSS go in. Static sites come out ready for deployment. Headings Heading 1 Heading..."
},{
    "title": "Documentation - Configuration & First Steps",
    "link": "/soup/documentation.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["soup"],
    "content": "<p><img src=\"http://farm4.staticflickr.com/3500/3747727389_9f23380810_b.jpg\" /></p>\n\n<ul>\n  <li>2 lbs strawberries, hulled and halved</li>\n  <li>2 stalks rhubarb, sliced</li>\n  <li>1/2 cup sugar</li>\n  <li>3 cups flour (I used pastry)</li>\n  <li>2 teaspoons baking powder</li>\n  <li>1 teaspoon baking soda</li>\n  <li>2 tablespoons sugar</li>\n  <li>1/2 teaspoon salt</li>\n  <li>8 tablespoons (1 stick) unsalted butter, cut into small pieces</li>\n  <li>2 cups buttermilk</li>\n</ul>\n\n<h3 id=\"configuration\">Configuration</h3>\n<p>All configuration options are in the <code>_config.yml</code> file.</p>\n\n<h5 id=\"general-settings\">General Settings</h5>\n<ul>\n  <li><strong>logo</strong>: Site logo.</li>\n  <li><strong>name</strong>: Site name.</li>\n  <li><strong>description</strong>: Site description.</li>\n  <li><strong>site_owner_name</strong>: Your name. Used by default when no post author is set.</li>\n  <li><strong>email</strong>: Your email. There are two cases where email is used. First, if you entered the email and you’ve activated <strong>show_email</strong> option the end result will be a visible social email icon in the sidebar. The second use of your email is when you do not set your own avatar. In this case your email is used by the gravatar plugin to automatically fetch your gravatar.</li>\n  <li><strong>favicon</strong>: Want a favicon? Enter the full path here. For example <code>http://mysite.com/blog/assets/favicon.ico</code>.</li>\n  <li><strong>twitter_handler</strong>: Add your Twitter username without the @. It will be used for <a href=\"https://dev.twitter.com/cards/overview\" target=\"_blank\">Twitter Cards</a>. The default card type for “Delicious” is <a href=\"https://dev.twitter.com/cards/types/summary-large-image\" target=\"_blank\">Summary Card with Large Image</a>.</li>\n  <li><strong>analytics_code</strong>: Add your Google Analytics Tracking ID. Example ID: <em>UA-XXXXXXX-2</em>.</li>\n  <li><strong>disqus</strong>: Add your website shortname from Disqus.</li>\n</ul>\n\n<p><strong>Important Note:</strong> Keep in mind that <strong>name</strong>, <strong>twitter_handler</strong> and some of the post specific variables are used as default meta data in some cases.</p>\n\n<h5 id=\"social-accounts\">Social Accounts</h5>\n<ul>\n  <li><strong>social_networks</strong>: Here you can find the list of all the available social networks that you can currently use. Of course you can always add a new one by yourself or ask for it to be available in the next version of the theme. If you don’t want a specific social network to be seen, just leave the url value empty or delete the line.</li>\n</ul>\n\n<p><strong>Important:</strong> Do not change the names of the social networks!</p>\n\n<h5 id=\"modules-settings\">Modules Settings</h5>\n<p>One thing to remember - 1 is <strong>on</strong>, 0 is <strong>off</strong>.</p>\n\n<ul>\n  <li><strong>show_tags</strong>: If it is on and you’ve added tags in the post itself the tags will be visible. If it is off and you’ve added tags in the post they will be hidden. This option is helpful if you want to turn on/off tags for all your posts at once.</li>\n  <li><strong>show_email</strong>: If this is turned on and you’ve entered an email value in <strong>email</strong>, an email icon will appear next to your social media accounts and all your readers will be able to contact you.</li>\n  <li><strong>show_rss</strong>: If this is turned on, a new RSS button will appear next to your social media accounts.</li>\n  <li><strong>show_comments</strong>: If it is on and you’ve added <code>comments: true</code> in the post itself the comments will be visible. If it is off and you’ve added <code>comments: true</code> in the post the comments will be hidden. This option is helpful if you want to turn on/off comments for all your posts at once.</li>\n</ul>\n\n<h5 id=\"defaults\">Defaults</h5>\n<ul>\n  <li><strong>defaults</strong>: The only available option at the moment is whether to enable the comments automatically in the post or not. The default value is <code>true</code>.</li>\n</ul>\n\n<h5 id=\"serving\">Serving</h5>\n<p>These options are pretty important, so take a closer look. If you experience any problems with your paths you should check them here.</p>\n\n<ul>\n  <li><strong>url</strong>: Enter your domain! Example: <code>https://mysite.com</code></li>\n  <li><strong>baseurl</strong>: The baseurl can remain empty if you’re not going to host your site in a subfolder. But if you want your site to be something like <code>htttp://mysite.com/blog</code> you should write down <code>/blog</code> here.</li>\n</ul>\n\n<h5 id=\"includes\">Includes</h5>\n\n<ul>\n  <li><strong>include</strong>: Force the inclusion of the pages directory.</li>\n</ul>\n\n<h5 id=\"outputting\">Outputting</h5>\n\n<ul>\n  <li><strong>permalink</strong>: By default your links will look like this <code>http://mysite.com/categories/post-name.html</code>. If you want a different permalink check <a href=\"https://jekyllrb.com/docs/permalinks/\" target=\"_blank\">Jekyll documentation</a>.</li>\n  <li><strong>category_dir</strong>: The default directory is <code>categories</code>, so for example if you go to random category index you will see something like this <code>http://mysite.com/categories/category-name/postname.html</code>.</li>\n</ul>\n\n<h5 id=\"pagination\">Pagination</h5>\n<ul>\n  <li><strong>paginate</strong>: You should enter a number that stands for the number of posts per page.</li>\n  <li><strong>paginate_path</strong>: The default path is <code>/all/:num/</code>, so for example if you go to second page you will see something like this <code>http://mysite.com/all/2/</code>.</li>\n</ul>\n\n<p><strong>Important Note:</strong> Pagination is currently working only on home page due to Jekyll limitations.</p>\n\n<h5 id=\"conversion\">Conversion</h5>\n<ul>\n  <li><strong>markdown</strong>: Choose your Markdown renderer. Different Markdown renderers supported by Jekyll sometimes have extra options available. I suggest to stick with the default.</li>\n</ul>\n\n<h5 id=\"assets-settings\">Assets Settings</h5>\n<ul>\n  <li><strong>sass</strong>: Choose the path to all of yours SCSS partials and the compression method for the final file.</li>\n</ul>\n\n<p>If you need extra help, just check out the <a href=\"https://jekyllrb.com/docs/home/\" target=\"_blank\">official Jekyll documentation</a>.</p>\n\n<h3 id=\"additional-configuration--information\">Additional Configuration &amp; Information</h3>\n\n<dl>\n\t<dt>How Facebook knows which image to use for sharing?</dt>\n\t<dd>By default the script gets the first image in the post so take that in mind when you write a blog post.</dd>\n\t\n\t<dt>How the post's thumbnail are generated?</dt>\n    <dd>By default the script gets the first image in the post and make it post's thumbnail.</dd>\n    \n    <dt>How the post's category images are generated?</dt>\n    <dd>Again, dynamically. The script match your category name with available ones and display it.</dd>\n    \n    <dt>How the recipe ingredients list is generated?</dt>\n    <dd>By default the script gets the first ul in the post so take that in mind.</dd>\n</dl>\n\n<h3 id=\"adding-post\">Adding Post</h3>\n\n<p>The next thing after you are done with the configuration file is to add your first post. You will need to have at least basic knowledge of HTML or Markdown.</p>\n\n<p>All you need to do is to create a new file with name <code>YYYY-MM-DD-my-first-post</code> and <code>.markdown</code> or <code>.md</code> extension. Create it in the <code>_posts</code> folder. By default the name of the file is composed by date and title but you can overwrite these in the post’s front matter.</p>\n\n<p>In the beginning of the every post you have a so called <a href=\"https://jekyllrb.com/docs/frontmatter/\" target=\"_blank\">front matter</a> block which contains some data about the post. Here is the short description of the options.</p>\n\n<p><strong>layout</strong>: The post layout.</p>\n\n<p><strong>date</strong>: Exact date when the post is published. The date is actually pretty important and I suggest you never change it. Specific date helps Jekyll to order correctly all the posts. Also, the date is used to generate a unique ID, so Disqus can always get the right comments for the right post, even when you change the title.</p>\n\n<p><strong>title</strong>: Post’s title.</p>\n\n<p><strong>author</strong>: Post’s author. In the <code>_data/users.yml</code> file you can more authors. If no author is specified the author name will be your <code>site_owner_name</code> name and your avatar will be set to your gravatar via your email.</p>\n\n<p><strong>description</strong>: Meta description used for better SEO.</p>\n\n<p><strong>comments</strong>: By default they are always <code>true</code>, but if you want to turn them off for a specific post just set this to <code>false</code>.</p>\n\n<p><strong>category</strong>: List the category in which you want your post to appear. Only one category can be set. Here is the list of preset categories:</p>\n\n<ul>\n  <li>asian</li>\n  <li>bbq</li>\n  <li>beer</li>\n  <li>breakfast</li>\n  <li>cocktail</li>\n  <li>coffee</li>\n  <li>dessert</li>\n  <li>drink</li>\n  <li>fruit</li>\n  <li>junk</li>\n  <li>main</li>\n  <li>meat</li>\n  <li>pasta</li>\n  <li>pizza</li>\n  <li>salad</li>\n  <li>seafood</li>\n  <li>snack</li>\n  <li>soup</li>\n  <li>tea</li>\n  <li>vegetarian</li>\n  <li>vegan</li>\n</ul>\n\n<p><strong>tags</strong>: List your tags here.</p>\n\n<h3 id=\"adding-page\">Adding Page</h3>\n\n<p>Adding page is even simpler than adding post. Just create a sub-folder to the pages directory and inside that sub-folder create index.md file. The folder name is your page name. Every folder must contain index file. Pages are also using front matter to add information to your page.</p>\n\n<p><strong>layout</strong>: The page layout.</p>\n\n<p><strong>title</strong>: Page’s title.</p>\n\n<p><strong>permalink</strong>: This is important. If you do not enter the permalink, your url will be something like this <code>http://example.com/_pages/about</code>. Enter the permalink and get rid of <code>/_pages/</code> part. Do not forget the trailing slash!</p>\n\n<p>That’s it! Do not hesitate to ask if you have any questions. Also you can send me feature requests. Happy blogging!</p>\n\n",
    "excerpt": "2 lbs strawberries, hulled and halved 2 stalks rhubarb, sliced 1/2 cup sugar 3 cups flour (I used pastry) 2..."
},{
    "title": "Installation",
    "link": "/fruit/installation.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["fruit"],
    "content": "<p><img src=\"http://farm6.staticflickr.com/5442/6898634122_e6747c9292_b.jpg\" /></p>\n\n<p>I assume you have already downloaded and installed Ruby. Here’s what you need to do next:</p>\n\n<ol>\n  <li>Run <code>gem install jekyll bundler</code>.</li>\n  <li>Copy the theme in your desired folder.</li>\n  <li>Enter into the folder by executing <code>cd name-of-the-folder</code>.</li>\n  <li>Run <code>bundle install</code>.</li>\n  <li>If you want to access and customize the theme, use <code>bundle exec jekyll serve</code>. This way it will be accessible on <code>http://localhost:4000</code>.</li>\n  <li>Upload the content of the compiled <code>_site</code> folder on your host server.</li>\n</ol>\n\n<ul>\n    <li>8 sheets toasted nori</li>\n    <li>1 peeled daikon radish</li>\n    <li>1 cucumber</li>\n    <li>1 cup sunflower sprouts</li>\n    <li>1 small mango</li>\n    <li>2 small avocados</li>\n    <li>24 sprigs mint</li>\n    <li>handful cilantro</li>\n    <li>(optional) 6 oz smoked wild salmon OR tofu</li>\n</ul>\n",
    "excerpt": "I assume you have already downloaded and installed Ruby. Here’s what you need to do next: Run gem install jekyll..."
},{
    "title": "Salad with Blue Cheese and Marcona Almonds",
    "link": "/salad/salad-with-blue-cheese-and-marcona-almonds.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["salad"],
    "content": "<p><img src=\"http://farm3.staticflickr.com/2414/2389280130_c0ac720b9a_b.jpg\" /></p>\n\n<p>Preheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices or quarters in a bowl. Mix with extra honey, the remaining thyme, and the juice and zest of your small orange. Set aside.</p>\n\n<p>Grease your heated iron with butter or coconut oil. Pour a heaping cup of the batter and cook until golden and crispy on the outer edges. Transfer waffles to the oven to keep warm and repeat with remaining batter. To serve, smear with marscapone and top with a heap of gussied strawberries and a drizzle of honey.</p>\n\n<ul>\n    <li>8 sheets toasted nori</li>\n    <li>1 peeled daikon radish</li>\n    <li>1 cucumber</li>\n    <li>1 cup sunflower sprouts</li>\n    <li>1 small mango</li>\n    <li>2 small avocados</li>\n    <li>24 sprigs mint</li>\n    <li>handful cilantro</li>\n    <li>(optional) 6 oz smoked wild salmon OR tofu</li>\n</ul>\n",
    "excerpt": "Preheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices..."
},{
    "title": "Beef and Tomato",
    "link": "/beef-and-tomato.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": null,
    "content": "<p><img src=\"http://farm1.staticflickr.com/27/51347942_f4df1ef3f4_b.jpg\" /></p>\n\n<p>Preheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices or quarters in a bowl. Mix with extra honey, the remaining thyme, and the juice and zest of your small orange. Set aside.</p>\n\n<p>Grease your heated iron with butter or coconut oil. Pour a heaping cup of the batter and cook until golden and crispy on the outer edges. Transfer waffles to the oven to keep warm and repeat with remaining batter. To serve, smear with marscapone and top with a heap of gussied strawberries and a drizzle of honey.</p>\n\n<ul>\n    <li>8 sheets toasted nori</li>\n    <li>1 peeled daikon radish</li>\n    <li>1 cucumber</li>\n    <li>1 cup sunflower sprouts</li>\n    <li>1 small mango</li>\n    <li>2 small avocados</li>\n    <li>24 sprigs mint</li>\n    <li>handful cilantro</li>\n    <li>(optional) 6 oz smoked wild salmon OR tofu</li>\n</ul>\n",
    "excerpt": "Preheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices..."
},{
    "title": "Tomatillo Soup",
    "link": "/soup/tomatillo-soup.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["soup"],
    "content": "<p><img src=\"http://farm3.staticflickr.com/2505/4100101848_84fb5f806d_b.jpg\" /></p>\n\n<p>Preheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices or quarters in a bowl. Mix with extra honey, the remaining thyme, and the juice and zest of your small orange. Set aside.</p>\n\n<p>Grease your heated iron with butter or coconut oil. Pour a heaping cup of the batter and cook until golden and crispy on the outer edges. Transfer waffles to the oven to keep warm and repeat with remaining batter. To serve, smear with marscapone and top with a heap of gussied strawberries and a drizzle of honey.</p>\n\n<ul>\n    <li>8 sheets toasted nori</li>\n    <li>1 peeled daikon radish</li>\n    <li>1 cucumber</li>\n    <li>1 cup sunflower sprouts</li>\n    <li>1 small mango</li>\n    <li>2 small avocados</li>\n    <li>24 sprigs mint</li>\n    <li>handful cilantro</li>\n    <li>(optional) 6 oz smoked wild salmon OR tofu</li>\n</ul>\n",
    "excerpt": "Preheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices..."
},{
    "title": "Popeye Salad",
    "link": "/salad/popeye-salad.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["salad"],
    "content": "<p><img src=\"http://farm3.staticflickr.com/2735/4436774834_ce8d865180_b.jpg\" /></p>\n\n<p>Preheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices or quarters in a bowl. Mix with extra honey, the remaining thyme, and the juice and zest of your small orange. Set aside.</p>\n\n<p>Grease your heated iron with butter or coconut oil. Pour a heaping cup of the batter and cook until golden and crispy on the outer edges. Transfer waffles to the oven to keep warm and repeat with remaining batter. To serve, smear with marscapone and top with a heap of gussied strawberries and a drizzle of honey.</p>\n\n<ul>\n    <li>8 sheets toasted nori</li>\n    <li>1 peeled daikon radish</li>\n    <li>1 cucumber</li>\n    <li>1 cup sunflower sprouts</li>\n    <li>1 small mango</li>\n    <li>2 small avocados</li>\n    <li>24 sprigs mint</li>\n    <li>handful cilantro</li>\n    <li>(optional) 6 oz smoked wild salmon OR tofu</li>\n</ul>\n",
    "excerpt": "Preheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices..."
},{
    "title": "Meatballs Pasta",
    "link": "/pasta/meatballs-pasta.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["pasta"],
    "content": "<p><img src=\"http://farm5.staticflickr.com/4008/5162621876_145f43abe2_b.jpg\" /></p>\n\n<p>Preheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices or quarters in a bowl. Mix with extra honey, the remaining thyme, and the juice and zest of your small orange. Set aside.</p>\n\n<p>Grease your heated iron with butter or coconut oil. Pour a heaping cup of the batter and cook until golden and crispy on the outer edges. Transfer waffles to the oven to keep warm and repeat with remaining batter. To serve, smear with marscapone and top with a heap of gussied strawberries and a drizzle of honey.</p>\n\n<ul>\n    <li>8 sheets toasted nori</li>\n    <li>1 peeled daikon radish</li>\n    <li>1 cucumber</li>\n    <li>1 cup sunflower sprouts</li>\n    <li>1 small mango</li>\n    <li>2 small avocados</li>\n    <li>24 sprigs mint</li>\n    <li>handful cilantro</li>\n    <li>(optional) 6 oz smoked wild salmon OR tofu</li>\n</ul>\n",
    "excerpt": "Preheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices..."
},{
    "title": "Ham and Cheese Bruschetas",
    "link": "/tea/banana-hemp-granola.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["tea"],
    "content": "<p><img src=\"http://farm5.staticflickr.com/4010/4643868705_63afd651e4_b.jpg\" /></p>\n\n<p>Preheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices or quarters in a bowl. Mix with extra honey, the remaining thyme, and the juice and zest of your small orange. Set aside.</p>\n\n<p>Grease your heated iron with butter or coconut oil. Pour a heaping cup of the batter and cook until golden and crispy on the outer edges. Transfer waffles to the oven to keep warm and repeat with remaining batter. To serve, smear with marscapone and top with a heap of gussied strawberries and a drizzle of honey.</p>\n\n<ul>\n    <li>8 sheets toasted nori</li>\n    <li>1 peeled daikon radish</li>\n    <li>1 cucumber</li>\n    <li>1 cup sunflower sprouts</li>\n    <li>1 small mango</li>\n    <li>2 small avocados</li>\n    <li>24 sprigs mint</li>\n    <li>handful cilantro</li>\n    <li>(optional) 6 oz smoked wild salmon OR tofu</li>\n</ul>\n",
    "excerpt": "Preheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices..."
},{
    "title": "Midnight Breakfast",
    "link": "/asian/midnight-breakfast.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["asian"],
    "content": "<p><img src=\"http://farm9.staticflickr.com/8030/7911989690_9c8849d82b_b.jpg\" /></p>\n\n<p>Preheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices or quarters in a bowl. Mix with extra honey, the remaining thyme, and the juice and zest of your small orange. Set aside.</p>\n\n<p>Grease your heated iron with butter or coconut oil. Pour a heaping cup of the batter and cook until golden and crispy on the outer edges. Transfer waffles to the oven to keep warm and repeat with remaining batter. To serve, smear with marscapone and top with a heap of gussied strawberries and a drizzle of honey.</p>\n\n<ul>\n    <li>8 sheets toasted nori</li>\n    <li>1 peeled daikon radish</li>\n    <li>1 cucumber</li>\n    <li>1 cup sunflower sprouts</li>\n    <li>1 small mango</li>\n    <li>2 small avocados</li>\n    <li>24 sprigs mint</li>\n    <li>handful cilantro</li>\n    <li>(optional) 6 oz smoked wild salmon OR tofu</li>\n</ul>\n",
    "excerpt": "Preheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices..."
},{
    "title": "Ham and Cheese Bruschetas",
    "link": "/snack/ham-and-cheese-bruschetas.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["snack"],
    "content": "<p><img src=\"http://farm1.staticflickr.com/23/28710835_baac4c650b_b.jpg\" /></p>\n\n<p>Preheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices or quarters in a bowl. Mix with extra honey, the remaining thyme, and the juice and zest of your small orange. Set aside.</p>\n\n<p>Grease your heated iron with butter or coconut oil. Pour a heaping cup of the batter and cook until golden and crispy on the outer edges. Transfer waffles to the oven to keep warm and repeat with remaining batter. To serve, smear with marscapone and top with a heap of gussied strawberries and a drizzle of honey.</p>\n\n<ul>\n    <li>8 sheets toasted nori</li>\n    <li>1 peeled daikon radish</li>\n    <li>1 cucumber</li>\n    <li>1 cup sunflower sprouts</li>\n    <li>1 small mango</li>\n    <li>2 small avocados</li>\n    <li>24 sprigs mint</li>\n    <li>handful cilantro</li>\n    <li>(optional) 6 oz smoked wild salmon OR tofu</li>\n</ul>\n",
    "excerpt": "Preheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices..."
},{
    "title": "Mac and Cheese Pizza",
    "link": "/pizza/mac-and-cheese-pizza.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["pizza"],
    "content": "<p><img src=\"http://farm5.staticflickr.com/4135/4820238049_8e830ec494_b.jpg\" /></p>\n\n<p>Preheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices or quarters in a bowl. Mix with extra honey, the remaining thyme, and the juice and zest of your small orange. Set aside.</p>\n\n<p>Grease your heated iron with butter or coconut oil. Pour a heaping cup of the batter and cook until golden and crispy on the outer edges. Transfer waffles to the oven to keep warm and repeat with remaining batter. To serve, smear with marscapone and top with a heap of gussied strawberries and a drizzle of honey.</p>\n\n<ul>\n    <li>8 sheets toasted nori</li>\n    <li>1 peeled daikon radish</li>\n    <li>1 cucumber</li>\n    <li>1 cup sunflower sprouts</li>\n    <li>1 small mango</li>\n    <li>2 small avocados</li>\n    <li>24 sprigs mint</li>\n    <li>handful cilantro</li>\n    <li>(optional) 6 oz smoked wild salmon OR tofu</li>\n</ul>\n",
    "excerpt": "Preheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices..."
},{
    "title": "Seafood Hot Pot",
    "link": "/asian/shrimp-springrolls.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["asian"],
    "content": "<p><img src=\"http://farm3.staticflickr.com/2453/3748516440_a64797c7d3_b.jpg\" /></p>\n\n<p>Preheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices or quarters in a bowl. Mix with extra honey, the remaining thyme, and the juice and zest of your small orange. Set aside.</p>\n\n<p>Grease your heated iron with butter or coconut oil. Pour a heaping cup of the batter and cook until golden and crispy on the outer edges. Transfer waffles to the oven to keep warm and repeat with remaining batter. To serve, smear with marscapone and top with a heap of gussied strawberries and a drizzle of honey.</p>\n\n<ul>\n    <li>8 sheets toasted nori</li>\n    <li>1 peeled daikon radish</li>\n    <li>1 cucumber</li>\n    <li>1 cup sunflower sprouts</li>\n    <li>1 small mango</li>\n    <li>2 small avocados</li>\n    <li>24 sprigs mint</li>\n    <li>handful cilantro</li>\n    <li>(optional) 6 oz smoked wild salmon OR tofu</li>\n</ul>\n",
    "excerpt": "Preheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices..."
},{
    "title": "Seafood Hot Pot",
    "link": "/seafood/seafood-hot-pot.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["seafood"],
    "content": "<p><img src=\"http://farm3.staticflickr.com/2548/3747728143_5a411ea5ed_b.jpg\" /></p>\n\n<p>Preheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices or quarters in a bowl. Mix with extra honey, the remaining thyme, and the juice and zest of your small orange. Set aside.</p>\n\n<p>Grease your heated iron with butter or coconut oil. Pour a heaping cup of the batter and cook until golden and crispy on the outer edges. Transfer waffles to the oven to keep warm and repeat with remaining batter. To serve, smear with marscapone and top with a heap of gussied strawberries and a drizzle of honey.</p>\n\n<ul>\n    <li>8 sheets toasted nori</li>\n    <li>1 peeled daikon radish</li>\n    <li>1 cucumber</li>\n    <li>1 cup sunflower sprouts</li>\n    <li>1 small mango</li>\n    <li>2 small avocados</li>\n    <li>24 sprigs mint</li>\n    <li>handful cilantro</li>\n    <li>(optional) 6 oz smoked wild salmon OR tofu</li>\n</ul>\n",
    "excerpt": "Preheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices..."
},{
    "title": "Widowed Lentils Soup",
    "link": "/soup/widowed-lentils-soup.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["soup"],
    "content": "<p><img src=\"http://farm9.staticflickr.com/8513/8424513624_10e2981476_b.jpg\" /></p>\n\n<p>Preheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices or quarters in a bowl. Mix with extra honey, the remaining thyme, and the juice and zest of your small orange. Set aside.</p>\n\n<p>Grease your heated iron with butter or coconut oil. Pour a heaping cup of the batter and cook until golden and crispy on the outer edges. Transfer waffles to the oven to keep warm and repeat with remaining batter. To serve, smear with marscapone and top with a heap of gussied strawberries and a drizzle of honey.</p>\n\n<ul>\n    <li>8 sheets toasted nori</li>\n    <li>1 peeled daikon radish</li>\n    <li>1 cucumber</li>\n    <li>1 cup sunflower sprouts</li>\n    <li>1 small mango</li>\n    <li>2 small avocados</li>\n    <li>24 sprigs mint</li>\n    <li>handful cilantro</li>\n    <li>(optional) 6 oz smoked wild salmon OR tofu</li>\n</ul>\n",
    "excerpt": "Preheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices..."
},{
    "title": "Tiramisu with Goji Berries",
    "link": "/dessert/tiramisu-with-goji-berries.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["dessert"],
    "content": "<p><img src=\"http://farm4.staticflickr.com/3499/3462053584_4c60d44c32_b.jpg\" /></p>\n\n<p>Home-made chia seed pudding with soy milk, banana and crushed almonds. Vegan and totally yummy! You just need to mix chia seeds with the milk in a blender for about 2 minutes and keep the pudding over night in the refrigerator (no cooking needed).</p>\n\n<ul>\n    <li>8 sheets toasted nori</li>\n    <li>1 peeled daikon radish</li>\n    <li>1 cucumber</li>\n    <li>1 cup sunflower sprouts</li>\n    <li>1 small mango</li>\n    <li>2 small avocados</li>\n    <li>24 sprigs mint</li>\n    <li>handful cilantro</li>\n    <li>(optional) 6 oz smoked wild salmon OR tofu</li>\n</ul>\n",
    "excerpt": "Home-made chia seed pudding with soy milk, banana and crushed almonds. Vegan and totally yummy! You just need to mix..."
},{
    "title": "Beef and Vegetables Pot",
    "link": "/meat/beef-and-vegetables-pot.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["meat"],
    "content": "<p><img src=\"http://farm4.staticflickr.com/3299/3658284817_058926d944_b.jpg\" /></p>\n\n<p>Home-made chia seed pudding with soy milk, banana and crushed almonds. Vegan and totally yummy! You just need to mix chia seeds with the milk in a blender for about 2 minutes and keep the pudding over night in the refrigerator (no cooking needed).</p>\n\n<ul>\n    <li>8 sheets toasted nori</li>\n    <li>1 peeled daikon radish</li>\n    <li>1 cucumber</li>\n    <li>1 cup sunflower sprouts</li>\n    <li>1 small mango</li>\n    <li>2 small avocados</li>\n    <li>24 sprigs mint</li>\n    <li>handful cilantro</li>\n    <li>(optional) 6 oz smoked wild salmon OR tofu</li>\n</ul>\n",
    "excerpt": "Home-made chia seed pudding with soy milk, banana and crushed almonds. Vegan and totally yummy! You just need to mix..."
},{
    "title": "Raw Food Chili con Cacao",
    "link": "/vegetarian/raw-food-chili-con-cacao.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["vegetarian"],
    "content": "<p><img src=\"http://farm4.staticflickr.com/3502/3462052136_9f483d6dcf_b.jpg\" /></p>\n\n<p>Home-made chia seed pudding with soy milk, banana and crushed almonds. Vegan and totally yummy! You just need to mix chia seeds with the milk in a blender for about 2 minutes and keep the pudding over night in the refrigerator (no cooking needed).</p>\n\n<ul>\n    <li>8 sheets toasted nori</li>\n    <li>1 peeled daikon radish</li>\n    <li>1 cucumber</li>\n    <li>1 cup sunflower sprouts</li>\n    <li>1 small mango</li>\n    <li>2 small avocados</li>\n    <li>24 sprigs mint</li>\n    <li>handful cilantro</li>\n    <li>(optional) 6 oz smoked wild salmon OR tofu</li>\n</ul>\n",
    "excerpt": "Home-made chia seed pudding with soy milk, banana and crushed almonds. Vegan and totally yummy! You just need to mix..."
},{
    "title": "Apple and Ice-cream Dessert",
    "link": "/dessert/apple-and-ice-cream-dessert.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["dessert"],
    "content": "<p><img src=\"http://farm5.staticflickr.com/4148/4847915204_955fa3bbd4_b.jpg\" /></p>\n\n<p>Home-made chia seed pudding with soy milk, banana and crushed almonds. Vegan and totally yummy! You just need to mix chia seeds with the milk in a blender for about 2 minutes and keep the pudding over night in the refrigerator (no cooking needed).</p>\n\n<ul>\n    <li>8 sheets toasted nori</li>\n    <li>1 peeled daikon radish</li>\n    <li>1 cucumber</li>\n    <li>1 cup sunflower sprouts</li>\n    <li>1 small mango</li>\n    <li>2 small avocados</li>\n    <li>24 sprigs mint</li>\n    <li>handful cilantro</li>\n    <li>(optional) 6 oz smoked wild salmon OR tofu</li>\n</ul>\n",
    "excerpt": "Home-made chia seed pudding with soy milk, banana and crushed almonds. Vegan and totally yummy! You just need to mix..."
},{
    "title": "Raw Food Sweet Potato Gratin",
    "link": "/seafood/raw-food-sweet-potato-gratin.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["seafood"],
    "content": "<p><img src=\"http://farm4.staticflickr.com/3546/3462051642_67f8580d26_b.jpg\" /></p>\n\n<p>Folks, this is killer. For what this cobbler lacks in beauty it makes up ten-fold in taste, especially after a full day on the move. Not much mise en place when it comes to camp cooking, and I wouldn’t want it any other way. Any summer fruit combination will do. I had strawberries and rhubarb on hand for this trip. I imagine peaches, plums, cherries, or blackberries will be fantastic as they come into season this summer.</p>\n\n<ul>\n    <li>2 lbs strawberries, hulled and halved</li>\n    <li>2 stalks rhubarb, sliced</li>\n    <li>1/2 cup sugar</li>\n    <li>3 cups flour (I used pastry)</li>\n</ul>\n",
    "excerpt": "Folks, this is killer. For what this cobbler lacks in beauty it makes up ten-fold in taste, especially after a..."
},{
    "title": "Raw Food Dolmades with Tzatziki",
    "link": "/vegetarian/raw-food-dolmades-with-tzatziki.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["vegetarian"],
    "content": "<p><img src=\"http://farm4.staticflickr.com/3598/3461234685_3ff44b2cf3_b.jpg\" /></p>\n\n<p>Pisco is a (typically) colorless grape brandy produced in Chile and Peru. It is the star of what both countries claim as their national cocktail, the Pisco Sour. In Puerto Natales, the closest township to Torres del Paine where we trekked, we met a young man who when asked about the Pisco Sour closed his eyes, touched his chest and said, “Ah, my Pisco, when you drink it you will feel a light your soul.” I happen to think he’s right, but the time and place seemed to have unusually persuasive powers. I have three takes on the Pisco Sour for you here today. The original, the de Campo with honey and ginger, and one to bookmark for summer with fresh mango and Seranno peppers. Each recipe serves one. Blend ingredients together until the ice is completely crushed and the mixture frothy. Serve in an old-fashioned glass with friends. Can be doubled, tripled, etc. and served family style.</p>\n\n<ul>\n    <li>2 fl oz (8 parts) Pisco</li>\n    <li>1 fl oz (4 parts) Lime juice</li>\n    <li>3/4 fl oz (3 part) Simple syrup (sugar and water)</li>\n    <li>1 Egg white</li>\n    <li>4 large ice cubes</li>\n    <li>2 fl oz (8 parts) Pisco</li>\n    <li>1 fl oz (4 parts) Lime juice</li>\n    <li>1 fl oz (4 parts) honey</li>\n    <li>1/2 flz oz (2 parts) grated fresh ginger</li>\n    <li>1 Egg white</li>\n    <li>4 large ice cubes</li>\n</ul>\n",
    "excerpt": "Pisco is a (typically) colorless grape brandy produced in Chile and Peru. It is the star of what both countries..."
},{
    "title": "Dessert Platter",
    "link": "/dessert/dessert-platter.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["dessert"],
    "content": "<p><img src=\"http://farm4.staticflickr.com/3016/2976850896_0ce2e1d68f_b.jpg\" /></p>\n\n<p>Bring 3 cups and a few extra tablespoons of water to a boil. Cook quinoa over medium heat for 15-18 minutes or until water is absorbed and the seed has germinated. Set aside to cool.</p>\n\n<p>Preheat the oven to 400.’ Rigorously wash the beets and radishes, as you will not be peeling them before roasting. Remove grimy tops and cut beets and radishes into fourths, then sixths or 8ths. You want large-ish, yet bit sized wedges. Cut fennel bulb in a similar fashion, top to bottom. Toss wedges of radish, beets, and fennel together with olive oil and salt in a parchment lined sheet pan. Roast in the oven for 20-30 minutes, turning veggies over to brown and soften on all sides.</p>\n\n<p>In a large mixing bowl, combine chopped parsley, chives, diced red onion with cooled quinoa. In a small jar prepare the dressing by combining ½ cup olive oil, juice of 3 whole lemons, salt, pepper, and minced garlic cloves. Shake to combine.</p>\n\n<ul>\n    <li>1 ½ cups quinoa (dry)</li>\n    <li>6 small beets</li>\n    <li>6 radish bulbs</li>\n    <li>1 large head fennel, fronds reserved</li>\n    <li>1 bunch parsley, roughly chopped</li>\n    <li>1 small red onion, diced</li>\n    <li>¼ cup minced chives</li>\n    <li>4-6 cloves garlic, minced</li>\n    <li>3 plump lemons</li>\n    <li>½ cup + 3 tbsp olive oil</li>\n    <li>salt &amp; pepper to taste</li>\n</ul>\n",
    "excerpt": "Bring 3 cups and a few extra tablespoons of water to a boil. Cook quinoa over medium heat for 15-18..."
},{
    "title": "Chia Seed Banana Pudding with Almonds",
    "link": "/drink/chia-seed-banana-pudding-with-almonds.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["drink"],
    "content": "<p><img src=\"http://farm9.staticflickr.com/8262/8608634625_6e80e57a1e_b.jpg\" /></p>\n\n<p>Home-made chia seed pudding with soy milk, banana and crushed almonds. Vegan and totally yummy! You just need to mix chia seeds with the milk in a blender for about 2 minutes and keep the pudding over night in the refrigerator (no cooking needed).</p>\n\n<ul>\n    <li>8 sheets toasted nori</li>\n    <li>1 peeled daikon radish </li>\n    <li>1 cucumber</li>\n    <li>1 cup sunflower sprouts</li>\n    <li>1 small mango</li>\n    <li>2 small avocados</li>\n    <li>24 sprigs mint</li>\n    <li>handful cilantro</li>\n    <li>(optional) 6 oz smoked wild salmon OR tofu</li>\n</ul>\n",
    "excerpt": "Home-made chia seed pudding with soy milk, banana and crushed almonds. Vegan and totally yummy! You just need to mix..."
},{
    "title": "French-Spanish Dips",
    "link": "/snack/french-spanish-dips.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["snack"],
    "content": "<p><img src=\"http://farm6.staticflickr.com/5325/9629238275_38e02155bc_b.jpg\" /></p>\n\n<p>Home-made chia seed pudding with soy milk, banana and crushed almonds. Vegan and totally yummy! You just need to mix chia seeds with the milk in a blender for about 2 minutes and keep the pudding over night in the refrigerator (no cooking needed).</p>\n\n<ul>\n    <li>8 sheets toasted nori</li>\n    <li>1 peeled daikon radish </li>\n    <li>1 cucumber</li>\n    <li>1 cup sunflower sprouts</li>\n    <li>1 small mango</li>\n    <li>2 small avocados</li>\n    <li>24 sprigs mint</li>\n    <li>handful cilantro</li>\n    <li>(optional) 6 oz smoked wild salmon OR tofu</li>\n</ul>\n",
    "excerpt": "Home-made chia seed pudding with soy milk, banana and crushed almonds. Vegan and totally yummy! You just need to mix..."
},{
    "title": "Sausage and Egg Casserole",
    "link": "/bbq/sausage-and-egg-casserole.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["bbq"],
    "content": "<p><img src=\"http://farm4.staticflickr.com/3411/3651738513_9c5c1b3ae2_b.jpg\" /></p>\n\n<p>Melt butter over low heat in a small saucepan, set aside. In a small bowl, mix and dissolve the yeast. In a larger bowl, combine salt and flour. Whisk together the yeast-water, milk, butter, egg yolks, and honey and combine with the dry ingredients. In another small bowl, beat the egg whites (like a crazy woman) until frothy. Fold into batter with 1/2 cup mascarpone, zest of half the orange, and leaves of 10 springs of thyme. Set aside, covered, for 10-20 minutes.</p>\n\n<p>Preheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices or quarters in a bowl. Mix with extra honey, the remaining thyme, and the juice and zest of your small orange. Set aside.</p>\n\n<p>Grease your heated iron with butter or coconut oil. Pour a heaping cup of the batter and cook until golden and crispy on the outer edges. Transfer waffles to the oven to keep warm and repeat with remaining batter. To serve, smear with marscapone and top with a heap of gussied strawberries and a drizzle of honey.</p>\n\n<ul>\n    <li>1  1/2 teaspoons active dry yeast</li>\n    <li>1 cup warm water</li>\n    <li>3 cups whole wheat flour</li>\n    <li>1/2 teaspoon sea salt</li>\n    <li>1 cup milk or milk alternative</li>\n    <li>1 stick unsalted butter, melted</li>\n    <li>2 large eggs, separated</li>\n    <li>1 orange, zest and juice</li>\n    <li>1 pint fresh strawberries</li>\n    <li>20 springs fresh thyme</li>\n    <li>1-2 cups mascarpone cheese</li>\n    <li>1/3 cup honey, plus more for finishing</li>\n</ul>\n",
    "excerpt": "Melt butter over low heat in a small saucepan, set aside. In a small bowl, mix and dissolve the yeast...."
},{
    "title": "Blueberry and White Chocolate Pancakes",
    "link": "/dessert/blueberry-and-white-chocolate-pancakes.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["dessert"],
    "content": "<p><img src=\"http://farm2.staticflickr.com/1280/4608672449_546c396433_b.jpg\" /></p>\n\n<p>At home: Mix together the dry ingredients, except sugar, and place in a bag or tupperware. Pack sugar separately. Measure out the buttermilk and transfer to a small container.</p>\n\n<ul>\n    <li>2 teaspoons baking powder</li>\n    <li>1 teaspoon baking soda</li>\n    <li>2 tablespoons sugar</li>\n    <li>1/2 teaspoon salt</li>\n    <li>8 tablespoons (1 stick) unsalted butter, cut into small pieces</li>\n    <li>2 cups buttermilk</li>\n</ul>\n",
    "excerpt": "At home: Mix together the dry ingredients, except sugar, and place in a bag or tupperware. Pack sugar separately. Measure..."
},{
    "title": "Raw Food Tacos",
    "link": "/vegan/raw-food-tacos.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["vegan"],
    "content": "<p><img src=\"http://farm4.staticflickr.com/3482/3462048736_0ef84fcd6b_b.jpg\" /></p>\n\n<p>Folks, this is killer. For what this cobbler lacks in beauty it makes up ten-fold in taste, especially after a full day on the move. Not much mise en place when it comes to camp cooking, and I wouldn’t want it any other way. Any summer fruit combination will do. I had strawberries and rhubarb on hand for this trip. I imagine peaches, plums, cherries, or blackberries will be fantastic as they come into season this summer.</p>\n\n<p>At home: Mix together the dry ingredients, except sugar, and place in a bag or tupperware. Pack sugar separately. Measure out the buttermilk and transfer to a small container.</p>\n\n<ul>\n    <li>2 lbs strawberries, hulled and halved</li>\n    <li>2 stalks rhubarb, sliced</li>\n    <li>1/2 cup sugar</li>\n    <li>3 cups flour (I used pastry)</li>\n    <li>2 teaspoons baking powder</li>\n    <li>1 teaspoon baking soda</li>\n    <li>2 tablespoons sugar</li>\n    <li>1/2 teaspoon salt</li>\n    <li>8 tablespoons (1 stick) unsalted butter, cut into small pieces</li>\n    <li>2 cups buttermilk</li>\n</ul>\n",
    "excerpt": "Folks, this is killer. For what this cobbler lacks in beauty it makes up ten-fold in taste, especially after a..."
},{
    "title": "Chicken Fajitas",
    "link": "/meat/chicken-fajitas.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["meat"],
    "content": "<p><img src=\"http://farm5.staticflickr.com/4015/4589449172_eb046a7f2a_b.jpg\" /></p>\n\n<p>Folks, this is killer. For what this cobbler lacks in beauty it makes up ten-fold in taste, especially after a full day on the move. Not much mise en place when it comes to camp cooking, and I wouldn’t want it any other way. Any summer fruit combination will do. I had strawberries and rhubarb on hand for this trip. I imagine peaches, plums, cherries, or blackberries will be fantastic as they come into season this summer.</p>\n\n<p>At home: Mix together the dry ingredients, except sugar, and place in a bag or tupperware. Pack sugar separately. Measure out the buttermilk and transfer to a small container.</p>\n\n<p>In camp: Set up the fire and place a grill about 4 inches above the flame. If you forget a grate (oops) create a rock formation to protect the iron from direct flame. Cut the fruit into chunks and toss with the sugar. Add the fruit to a heavy, cast-iron 5-quart Dutch oven or a deep cast-iron skillet.</p>\n\n<p>For the biscuits, place the pre-mixed dry ingredients in a bowl. Cut the butter into the flour mixture until the butter is the size of small peas. Stir in the buttermilk, just until the batter comes together.</p>\n\n<p>Drop dollops of the dough in an even layer over the fruit. Cover the Dutch oven and put the cobbler over the fire pit. Cook until the biscuits are cooked all the way through, about 30 minutes.</p>\n\n<ul>\n    <li>2 lbs strawberries, hulled and halved</li>\n    <li>2 stalks rhubarb, sliced</li>\n    <li>1/2 cup sugar</li>\n    <li>3 cups flour (I used pastry)</li>\n    <li>2 teaspoons baking powder</li>\n    <li>1 teaspoon baking soda</li>\n    <li>2 tablespoons sugar</li>\n    <li>1/2 teaspoon salt</li>\n    <li>8 tablespoons (1 stick) unsalted butter, cut into small pieces</li>\n    <li>2 cups buttermilk</li>\n</ul>\n",
    "excerpt": "Folks, this is killer. For what this cobbler lacks in beauty it makes up ten-fold in taste, especially after a..."
},{
    "title": "Steak Pommes-Frites",
    "link": "/meat/steak-pommes-frites.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["meat"],
    "content": "<p><img src=\"http://farm2.staticflickr.com/1288/4659211175_2534bc4944_b.jpg\" /></p>\n\n<p>Preheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices or quarters in a bowl. Mix with extra honey, the remaining thyme, and the juice and zest of your small orange. Set aside.</p>\n\n<p>Grease your heated iron with butter or coconut oil. Pour a heaping cup of the batter and cook until golden and crispy on the outer edges. Transfer waffles to the oven to keep warm and repeat with remaining batter. To serve, smear with marscapone and top with a heap of gussied strawberries and a drizzle of honey.</p>\n\n<ul>\n    <li>8 sheets toasted nori</li>\n    <li>1 peeled daikon radish</li>\n    <li>1 cucumber</li>\n    <li>1 cup sunflower sprouts</li>\n    <li>1 small mango</li>\n    <li>2 small avocados</li>\n    <li>24 sprigs mint</li>\n    <li>handful cilantro</li>\n    <li>(optional) 6 oz smoked wild salmon OR tofu</li>\n</ul>\n",
    "excerpt": "Preheat the oven to 200′. Turn on your waffle iron to medium-high heat. As it warms, cut strawberries into slices..."
},{
    "title": "Char Siu and Wonton Tossed Noodles",
    "link": "/asian/char-siu-and-wonton-tossed-noodles.html",
    "image": null,
    "date": "15 Sep, 2016",
    "category": ["asian"],
    "content": "<p><img src=\"http://farm4.staticflickr.com/3201/3087383373_b68e790059_b.jpg\" /></p>\n\n<p>For the broth, mix together all ingredients (save for the miso) and simmer for 30 minutes. Mix in miso after 30 minutes and remove from heat. While the broth simmers, cook the noodles, slice the green onions, and poach an egg with your method of preference.</p>\n\n<p>Combine Noodles, 1 heaping cup of kimchi, 1/2 cup green onions and pour over 2 cups of broth and top with egg.</p>\n\n<ul>\n    <li>2 cups ramen or soba noodles</li>\n    <li>1/2 cup sliced green onion</li>\n    <li>1 poached egg</li>\n    <li>2 cups quick broth</li>\n    <li>4 cups water</li>\n    <li>1 onion</li>\n    <li>1/2 apple, sliced</li>\n    <li>3 lemon slices</li>\n    <li>1/4 cup sliced shallots</li>\n    <li>5 garlic cloves</li>\n    <li>1″ nub ginger</li>\n    <li>1/2 cup kimchi</li>\n    <li>3 tbsp miso paste</li>\n</ul>\n",
    "excerpt": "For the broth, mix together all ingredients (save for the miso) and simmer for 30 minutes. Mix in miso after..."
}]

jQuery(document).ready(function() {
    jQuery('#search-input').on('keyup', function () {
        jQuery('#results-container').show();
        var resultdiv = jQuery('#mCSB_1_container');
        if (!resultdiv.is(':visible'))
            resultdiv.show();
        var query = jQuery(this).val();
        var result = index.search(query);
        resultdiv.empty();

        for (var item in result) {
            var ref = result[item].ref;
            var searchitem =
                '<li>' +
                    '<a class="clear" href="'+ hostname + store[ref].link+'">' +
                        '<figure style="background-image: url('+ jQuery(store[ref].content).find('img:first-of-type').attr('src') +');"></figure>' +
                        '<h2 itemprop="name headline">' + store[ref].title + '</h2>' +
                        '<time itemprop="datePublished">' + store[ref].date + '</time>' +
                        '<span class="category">' + store[ref].category + '</span>' +
                    '</a>' +
                '</li>';
            resultdiv.append(searchitem);
        }
    });
});
