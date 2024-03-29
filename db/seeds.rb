# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Project.destroy_all
Backing.destroy_all
Reward.destroy_all
Category.destroy_all

puts 'Tables destroyed'

#reset the primary key sequence
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('projects')
ActiveRecord::Base.connection.reset_pk_sequence!('backings')
ActiveRecord::Base.connection.reset_pk_sequence!('rewards')
ActiveRecord::Base.connection.reset_pk_sequence!('categories')

puts 'Creating Users...'
user1 = User.create!(username:'Demo User', email: 'demo@demo.com', password: '123456', bio: 'Just your basic user.')
user2 = User.create!(username:'Taylor Musolf', email: 't@email.com', password: '123456', bio: 'Bay Area based friendly, mild-mannered content creator')
user3 = User.create!(username:'Karisa Musolf', email: 'k@email.com', password: '123456', bio: 'Bay Area based cooking personality that loves baking!')
user4 = User.create!(username:'Bobs YourNeighbor', email: 'b@email.com', password: '123456', bio: 'Bob loves smart products.  Give Bob what he wants.')
user5 = User.create!(username:'WorldsTiniest', email: 'WorldsTiniest@WorldsTiniest.com', password: '123456', bio:'At Worlds Tiniest, it’s our mission to make the smallest and most functional everyday carry, while limiting our impact on the environment. We design our products by combining versatile tools with the most durable materials to disrupt old trends and change the way you carry.')
user6 = User.create!(username:'Gamma Jacket', email: 'GammaJacket@GammaJacket.com', password: '123456', bio: 'GAMMA by Wear Graphene. Support us today!')
user7 = User.create!(username:'Aswad Aarif', email: 'Aswad@Aarif.com', password: '123456', bio: 'My name is Aswad and I am an artist, maker, writer and restorative justice practitioner from Oakland Ca.')
user8 = User.create!(username:'Kim', email: 'kimmy@kimmy.com', password: '123456', bio: 'Just a crazy pet lady with big dreams to help others')
user9 = User.create!(username:'D-CELL GAMES', email: 'buddy@D-CELLGAMES.com', password: '123456', bio: 'We make game (singular). Help support our upcoming rhythm-adventure game, UNBEATABLE! unbeatablegame.com/kickbacker')
user10 = User.create!(username:'Project SOAPBOTTLE', email: 'soapy@ProjectSOAPBOTTLE.com', password: '123456', bio: 'Jonna Breitenhuber created and developed the concept SOAPBOTTLE during her master studies. Through her work as a packaging designer for cosmetic products, she was frustrated that there is hardly any sustainable packaging for liquid personal care products.')
user11 = User.create!(username:'Chris Lin', email: 'chris@greensalt.com', password: '123456', bio: 'Co-founder of Green Salt, a healthy salt alternative made from Salicornia and Founder at AMOR Handmade, a collaboration that empowers women through artisan dog collars. Based in Los Angeles and Ensenada, Mexico.')
user12 = User.create!(username:'Unbound', email: 'unbound@unbound.com', password: '123456', bio: 'Hi, were Unbound, the crowdfunding publisher. We bring writers and readers closer together. Authors pitch their ideas, we choose the best ones and if enough people pledge, we turn them into great books.')
user13 = User.create!(username:'Third Editions', email: '3rd@thirdeditions.com', password: '123456', bio: 'Third Éditions is a French publisher dedicated to video games and popular culture, founded in 2015 by Nicolas Courcier and Mehdi El Kanafi, both lovers of quality books and video games.')
user14 = User.create!(username:'Josh Yeo', email: 'josh@makeartnow.com', password: '123456', bio: 'Josh Yeo is the Artist behind Youtube Channel, MAKE ART NOW. He has a "hands on", DIY approach to most crafts, including cinematography, storytelling, and creative projects. He is an autodidact Polymath, and this is his first time making a physical product.')
user15 = User.create!(username:'Nimble', email: 'nim@nimble.com', password: '123456', bio: 'Nimble utilizes pioneering technology to perfectly paint and dry your nails from the comfort of home.')
user16 = User.create!(username:'Elaine Tai', email: 'el@tai.com', password: '123456', bio: 'Librarian, book-lover, and wannabe patron-of-the-arts. Proponent of empathy and believer that all is better when we care about each other.')
user17 = User.create!(username:'C is for Cthulhu', email: 'c@cthulhu.com', password: '123456', bio: 'We create Cthulhu and H.P. Lovecraft themed books and toys for young and old ones alike! We think kids should be exposed to the fantastic and weird at a young age. They love monsters and mythology -- why shouldnt their alphabet books and toy shelves also be filled with these things? Thats why weve been creating fun, quality Lovecraft and horror themed products that the whole family will enjoy since 2014!')
user18 = User.create!(username:'Nikki Darling', email: 'n@nikkidarling.com', password: '123456', bio: 'Evan Coben is the owner and founder if Nikki Darling Confections, a handmade candy company in Chicago IL.')
user19 = User.create!(username:'Zero Cool Films', email: 'r@ZeroCoolFilms.com', password: '123456', bio: 'Zero Cool Films is a boutique film outfit that specializes in content about the stuff that we love. Whether it is technology, pop culture or family, Zero Cool Films centers in on our passions and shares them with the world usually though unique, human-centered journey.')
user20 = User.create!(username:'Susan Joyce', email: 'susan@joyce.com', password: '123456', bio: 'I have combined a career in magazine publishing with a love of writing about life on Maggies Farm with dogs, cats, goats and chickens. Billys story was the first to unfold as a childrens book, however there has been some grumbling among the other animals, so they might have their own books someday.')
user21 = User.create!(username:'Vacas Creamery', email: 'susan@vacas.com', password: '123456', bio: 'We are Chicago\'s first all-vegan ice cream shop!')
user22 = User.create!(username:'Arvis Games Inc.', email: 'meric@arvis.com', password: '123456', bio: 'Arvis Games Inc. A passionate gaming company to bring innovative magical experiences.')
user23 = User.create!(username:'Nasir Campbell', email: 'nasir@gmail.com', password: '123456', bio: 'Nasir Campbell is a native of Brooklyn, New York where he received his formal dance training under the mentorship of Joe Antony Cavise, and Jamel Gaines. He is the youngest of five children. Nasir began dancing at a tender age of 3 in his father’s church. He is a graduate from Dr. Susan S McKinney Secondary School of the Arts and is graduate of the University of the Arts in Philadelphia, under the direction of Donna Faye Burchfield where he worked with choreographers such as Thurman Katie Swords, Sidra Bell, Juel D. Lane, Paz, Maria Jimena, Douglas Becker, Sheridan Michael, and Gary W. Jeter II.')
user24 = User.create!(username:'Gordon Griffin', email: 'gordygriff@gmail.com', password: '123456', bio: 'I come from a family of artists. Photography, Art and Design is in my blood. Originally from England, I have been lucky enough to travel the world and see things that I wouldn not remember if it had not been for a trusty camera by my side. Photography is not just about taking a photo. It goes beyond that! Many would say that the hard work begins in the editing room afterwards. Take a beef patty for instance! Its not a BURGER till you ad a bun, lettuce, tomato and cheese right? For me, photography is the same. By using the right ingredients at the right time the outcome will be amazing!')
user25 = User.create!(username:'Kimberly Mesa', email: 'kimm@gmail.com', password: '123456', bio: "I'm a 24 year old entrepreneur.")

puts 'Creating Categories...'
category1 = Category.create!(name: "Arts", description: "Discover the artists and organizations using Kickbacker to realize ambitious projects in visual art and performance.");
category2 = Category.create!(name: "Comics & Illustration", description:"Explore fantastical worlds and original characters from Kickbacker’s community of comics creators and illustrators.");
category3 = Category.create!(name: "Design & Tech", description:"From fine design to innovative tech, discover projects from creators working to build a more beautiful future.");
category4 = Category.create!(name: "Film", description:"Join forces with the intrepid filmmakers and festival creators changing the way stories get told on screen.");
category5 = Category.create!(name: "Food & Craft", description:"See how artisans and entrepreneurs are using Kickbacker to break new ground in food, fashion, and crafts.");
category6 = Category.create!(name: "Games", description:"From tabletop adventures to beloved revivals, discover the projects forging the future of gameplay.");
category7 = Category.create!(name: "Music", description:"Discover new albums, performances, and independent venues from creators using Kickbacker to shape the future of sound.");
category8 = Category.create!(name: "Publishing", description:"Explore how writers and publishers are using Kickbacker to bring new literature, periodicals, podcasts, and more to life.");


puts 'Creating Projects...'
project1 = Project.create!(title: "Orbit: A suspended Orbiting Camera Dolly",
    description: "What tool does a cinematographer build for himself? A stealthy silent, bluetooth controlled, orbiting camera dolly with lighting.",
    campaign: "The ORBIT is a suspended camera system that ORBITS around people, objects, or environments, at variable speeds and distances",
    updates: "Wow. We did it, we met our funding goal!  I'm speachless",
    faq: "Q: How do you film large objects with the Orbit Pro? A: So this is a perfect set up for the Orbit Pro. With the Pro, the Arms are a little bit longer, and will give you the reach that you need in order for get far enough out from the pianist playing. I'm assuming the goal being, get a wide enough field of view so you can see the piano, see his face, and orbit around him to see his hands move. But you don't want too wide so you see the orbit motor or the scaffold.", 
    location: "Los Angeles, CA", 
    start_date: Date.new(2021,3,15),
    end_date: Date.new(2021,4,15), 
    funding_goal: 7500,
    creator_id: user2.id,
    category_id: category3.id
)
file1 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/orbit.jpg")
project1.photo.attach(io: file1, filename: "#{project1.id}.jpg")

project2 = Project.create!(title: "ForeverPen",
    description: "Ever needed a pen and couldn’t find one? This one sits on your keys and never needs refilling - No ink, no waste!",
    campaign: "We’re extremely passionate about minimising our everyday carry and committed to doing everything we can to make the ForeverPen a reality.

    Ensuring we complete production on time is one of the key goals to successfully running a Kickbacker, so we’ve ensured we have a number of large suppliers and manufacturers who are ready for any number of pens you pledge for.",
    updates: "Thank you for backing our ForeverPen project!

    We want to give a huge shoutout to the first 100 of you that have supported us in hitting and surpassing our goal in just short of 60 minutes!
    
    We LOVE the Kickbacker community and we can’t wait to bring you the most amazing pen that'll last a lifetime!",
    faq: "", 
    location: "Manchester, UK", 
    start_date: Date.new(2021,3,30),
    end_date: Date.new(2021,4,30), 
    funding_goal: 3500,
    creator_id: user5.id,
    category_id: category3.id
)
file2 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/forever_pen.jpg")
project2.photo.attach(io: file2, filename: "#{project2.id}.jpg")

project3 = Project.create!(title: "GAMMA: All-Season 100% Graphene Infused Heated Jacket",
    description: "The complete high-performance heated jacket: Graphene-infused, lightweight, waterproof, breathable, durable, with 10 smart pockets!",
    campaign: "We have had ample experience in design, manufacturing, and sales in the past. We believe we will be able to successfully fulfill Gamma once the campaign ends. However, we do acknowledge that we have not had ample crowdfunding experience and realize that there may be unexpected challenges down the road..",
    updates: "Thank you all for your support again this past week! We can't even believe it, but it feels like we're nearing the $1M threshold which we could have done without all your support. We do not take your support lightly! Our team has been busy working overtime to keep up with all your comments and queries and have been hard at work prototyping and expanding our product line based on customer feedback.",
    faq: "Q:How are the heated elements powered? A:Gamma's heaters are powered by any power bank. There is an input USB A cable inside the inner chest pocket that you can plug into a heater. Once plugged in, you can activate one of the three heat settings.

    Benefits of this approach:
    1) Universal battery compatibility: you can use any power bank, your own, your friends, or just hop into a store to recharge!
    2) Flexible choices in power bank size: you can use a smaller and lighter power bank for shorter trips or large ones that will last you days with a bigger one.
    3) Charge your phone / devices inside the inner chest pocket: since it's still a power bank, you can keep all your electronics in one pocket near one of the heaters, which will help them stay warm and keep battery life optimal. You can also keep your phone charged easily since your charger is right there
    4) Machine washable: no electronics or batteries you need to worry about
    5) TSA / metal detector safe: batteries can get finnicky when traveling or going through metal detectors. Graphene and our heated elements don't trigger any systems.", 
    location: "Hong Kong, Hong Kong", 
    start_date: Date.new(2021,4,21),
    end_date: Date.new(2021,5,21), 
    funding_goal: 5000,
    creator_id: user6.id,
    category_id: category3.id
)

file3 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/gamma.jpg")
project3.photo.attach(io: file3, filename: "#{project3.id}.jpg")

project4 = Project.create!(title: "100 Conversations about Antiracism",
    description: "Conversations about race, equity and justice made easier.",
    campaign: "THE TIME IS NOW

    Everyone can agree that racism is wrong. It hurts our schools, our communities and divides our nation. More and more people are realizing that it is not enough to simply be not racist. If we are to heal and grow we must all do our part to be actively ANTI-RACIST.  We see the effects of racism every day as it threatens to tear us further apart. From protests ignited by the killing of George Floyd to the storming of our capitol by white supremacists, it is clear we can no longer ignore the cost of racism. The time is right to talk about the racism before it is too late.  ",
    updates: "I’m so excited to make these cards availble to thr public. Let’s make it happen folks!",
    faq: "", 
    location: "Oakland, CA", 
    start_date: Date.new(2021,4,21),
    end_date: Date.new(2021,5,21), 
    funding_goal: 10000,
    creator_id: user7.id,
    category_id: category6.id
)

file4 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/conversations_about_antiracism.png")
project4.photo.attach(io: file4, filename: "#{project4.id}.png")

project5 = Project.create!(title: "Ruffmuffs",
    description: "Earmuffs for sound sensitive dogs.",
    campaign: "This cute yet effective design product is to help dogs who are sensitive to loud noises. I've come up with this idea to help my dog through loud holidays like the 4th of JULY and New Year fireworks. I also use it when my dog travels on loud transportation and after her baths when I have to blow dry her.

    I've also used this product on nervous dogs that I've fostered in my home to help them feel they are in a safe space without physical contact until they feel more safe and comfortable.",
    updates: "",
    faq: "", 
    location: "San Francisco, CA", 
    start_date: Date.new(2021,3,22),
    end_date: Date.new(2021,4,22), 
    funding_goal: 500,
    creator_id: user8.id,
    category_id: category5.id
)

file5 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/ruffmuffs.jpg")
project5.photo.attach(io: file5, filename: "#{project5.id}.jpg")

project6 = Project.create!(title: "UNBEATABLE - A game where music is illegal and you do crimes",
    description: "An anime-juiced rhythm adventure with a heavy focus on music and Emotions.",
    campaign: "As a big thank you, all backers will get exclusive customizable profile elements (a flashy animated title, avatar, and background) for the leaderboards and community features! Honestly I think FOMO is kind of a toxic concept and I don't want people to feel bad for not being in on the ground floor, but you really only will get these extremely non-important but Very Cool things if you back on Kickbacker. Those are the rules, and I apologize for enforcing them.",
    updates: "BEFORE WE GO FURTHER: Yes, White Label Episode 1 is late, and yes, it's coming very soon! BUT ALSO, from now till the release on Saturday (bug...fixes) we'll have this",
    faq: "Q: What is Unbeatable[white lable] A: It's a standalone episodic side-story game set in the UNBEATABLE universe. We'll be regularly updating it throughout the Kickbacker (and afterwards!) and on its completion it will be a complete game roughly the length of a full episode of UNBEATABLE. Episode 1 drops on April 10th!", 
    location: "Centreville, VA", 
    start_date: Date.new(2021,6,22),
    end_date: Date.new(2021,8,22), 
    funding_goal: 55000,
    creator_id: user9.id,
    category_id: category6.id
)

file6 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/unbeatable.png")
project6.photo.attach(io: file6, filename: "#{project6.id}.png")


project7 = Project.create!(title: "S O A P B O T T L E",
    description: "A new line of sustainable care products filled in a packaging made from soap.",
    campaign: "We are creating a product that introduces a whole new category of personal care products. This means that we are exploring a new area in the industry that requires extensive material research and the time-costly registration of our products. Nevertheless, we are committed to realize our project: The design and functionality of our first product line is already envisioned and the right people for the project have been lined up. As we are yet to finalize our product, there can be slight changes in the appearance, components, or features to improve the final product. Be sure that we will always strive to protect the soul and character of SOAPBOTTLE during the entire development process.",
    updates: "Help us share the project with more friends, making more people be aware of our innovation and be part of it!

    More pledges also mean that we can start in the product development sooner and find the best materials to change this plastic-packaging world!",
    faq: "Q: Why do we need crowdfunding? A: We are developing a product that URI.opens an entirely new product category in the personal care market. Meaning that we have extensive material research, tests and the time-costly registration of our products ahead of us. Nevertheless, we are committed to realizing the concept. Because we have a clear vision and, in the end, we just know it will be worth it. But we need you!", 
    location: "Amsterdam, Netherlands", 
    start_date: Date.new(2021,3,22),
    end_date: Date.new(2021,4,22), 
    funding_goal: 11900,
    creator_id: user10.id,
    category_id: category5.id
)

file7 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/soapbottle.jpg")
project7.photo.attach(io: file7, filename: "#{project7.id}.jpg")

project8 = Project.create!(title: "Green Salt: the healthy salt alternative",
    description: "Green Salt is a low-sodium salt that's high in protein and fiber. Made from 100% dehydrated Salicornia.",
    campaign: "Salt makes food delicious. But, it's high in sodium.  High sodium intake increases our chances of high blood pressure, which can lead to heart disease and stroke: two leading causes of death in Americans (CDC.gov) .  According to the American Heart Association, nearly half of US adults have high blood pressure! Green Salt is a plant-based salt with 50% less sodium than salt. It's better for you while still giving you the same salty taste. ",
    updates: "Hello Green Salt backers!

    Hope you all had a great Easter weekend! 
    
    I want to thank you for your incredible support and feedback! We've gone above and beyond our funding goal.  We're really excited to begin shipping you Green Salt once this campaign ends.  We appreciate the feedback we got regarding the reach goal and packaging design.  Based on your feedback, we'll be changing our packaging design to a more minimalist and natural look that shows off the actual product in the design.",
    faq: "", 
    location: "Los Angeles, CA", 
    start_date: Date.new(2021,2,22),
    end_date: Date.new(2021,4,22), 
    funding_goal: 5000,
    creator_id: user11.id,
    category_id: category5.id
)

file8 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/greensalt.jpeg")
project8.photo.attach(io: file8, filename: "#{project8.id}.jpeg")

project9 = Project.create!(title: "42: the wildly improbable ideas of Douglas Adams",
    description: "A full colour, large format hardback, featuring never-seen-before extracts from Douglas's extraordinary archive.",
    campaign: "A book for all fans of Douglas Adams offering a unique insight into his life and work.

    After his death in 2001, Douglas Adams's papers were loaned to his old Cambridge college, St John's – over 60 boxes full of notebooks, research, letters, scripts, jokes, speeches, to-do lists, hard drives and even poems.  ",
    updates: "Dear all,

    We thought you would like to be made aware of an argument related to the book that is currently raging* in the UK press. A page from the archive that we sent out when announcing the launch of the book included Douglas complaining about being fed up with writing and referring to Arthur Dent as a burk. His peevishness doesn’t last long as you can read on the image below, but it is the spelling of the word burk that has caused the controversy.",
    faq: "Q: Will this book go on general retail? A: Yes the book will be on general retail around Autumn 2022, RRP to be confirmed.", 
    location: "London, UK", 
    start_date: Date.new(2021,4,22),
    end_date: Date.new(2021,5,21), 
    funding_goal: 5000,
    creator_id: user12.id,
    category_id: category8.id
)

file9 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/42_douglas_adams.jpg")
project9.photo.attach(io: file9, filename: "#{project9.id}.jpg")

project10 = Project.create!(title: "Third Editions: the Anime Library - JoJo's Bizarre Adventure",
    description: "We are back with a new and exciting project, dedicated to the translation of our French essay about the JoJo's Bizarre Adventure manga.",
    campaign: "This is our seventh Kickbacker campaign, and that in itself is a testament to our experience. We have delivered all the rewards from our first campaigns and we have learned a lot in the process.

    Our book-publishing house is located in France, so we have a strong grasp of the production chain here. With new territories, come new risks, but we're more prepared than ever to face them.",
    updates: "",
    faq: "", 
    location: "Toulouse, France", 
    start_date: Date.new(2021,4,13),
    end_date: Date.new(2021,5,13), 
    funding_goal: 5000,
    creator_id: user13.id,
    category_id: category2.id
)

file10 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/jojo_bizarre.jpg")
project10.photo.attach(io: file10, filename: "#{project10.id}.jpg")

project11 = Project.create!(title: "NIMBLE | Salon Quality Nails From The Comfort of Your Home.",
    description: "Nimble utilizes pioneering technology to perfectly paint and completely dry your nails in a fraction of the time.",
    campaign: "We’ve been developing Nimble for over 4 years. Our device has successfully completed the prototypes, molding, pilot production process and over a year of beta testing with a diverse group of beta testers. We are completely confident that Nimble is now ready for mass production. With our current production capabilities, we should be able to produce the units sold on Kickbacker within 5 - 6 months after the campaign ends. However, we are well aware there’s always room for improvement, that is why we are still constantly receiving feedback from our testers, improving the product and adding more features to it as we go!",
    updates: "",
    faq: "", 
    location: "New York, NY", 
    start_date: Date.new(2021,4,13),
    end_date: Date.new(2021,5,28), 
    funding_goal: 25000,
    creator_id: user15.id,
    category_id: category3.id
)

file11 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/nimble.png")
project11.photo.attach(io: file11, filename: "#{project11.id}.png")

project12 = Project.create!(title: "Yes Means Yes! A picture book about consent",
    description: "Teaching kids (and maybe adults) about understanding and respecting bodily autonomy",
    campaign: "A few years ago as the #MeToo movement reached its peak, a few different things came up. As a Librarian I’ve watched strangers touch childrens’ faces while their parents watched, since it was innocent enough from a grandmother-figure. As a woman I listened to friends talk about times they experienced scenarios that have not been identified as assault but were clearly not consent, and recognized them in my own experiences. As a bookseller, I helped a mother who came in to look for picture books on consent, when title searches kept bringing up titles that were literally the opposite. As I watched and listened in anger about the many stories of assault coming from people all over, and watched and listened in anger as people debated whether or something was actually considered consensual, I thought about how poorly we’ve been taught to understand control over our own bodies and others’.",
    updates: "We're overwhelmed and thrilled with the support for this book so far! Thank you so much to everyone who has backed the project and/or shared it out in their communities.

    We already have a couple small updates: 
    
    With request, we've now added an e-book edition, which can be backed alone or as an add-on with any other reward! 
    We updated a couple images, and will continue to work toward making sure this book is the best it can be. 
    Thanks so much again to all of you,
    
    Elaine and Kai",
    faq: "", 
    location: "San Jose, CA", 
    start_date: Date.new(2021,3,3),
    end_date: Date.new(2021,4,3), 
    funding_goal: 25000,
    creator_id: user16.id,
    category_id: category8.id
)

file12 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/yes_means_yes.jpg")
project12.photo.attach(io: file12, filename: "#{project12.id}.jpg")

project13 = Project.create!(title: "Counting, Colors & Cthulhu Hardcover Board Book",
    description: "Rhyming Lovecraftian board book teaching numbers, colors and the mythos, from makers of C is for Cthulhu & Sweet Dreams Cthulhu!",
    campaign: "This is the 9th Kickbacker campaign by the C is for Cthulhu team and the 21th campaign run by ComixTribe publisher Tyler James. While every campaign has its own unique challenges, we've taken several steps to mitigate the risks for this project.",
    updates: "Okay, we're doing it!

    One of the most popular products we've ever produced has been sold out for a while... but we're bringing back a small production run for those of you who missed it!
    
    The C is for Cthulhu Blanket Stuffed-Pillow is now available as a PLEDGE or an ADD-ON to any pledge!",
    faq: "", 
    location: "Newburyport, MA", 
    start_date: Date.new(2021,3,3),
    end_date: Date.new(2021,3,31), 
    funding_goal: 15000,
    creator_id: user1.id,
    category_id: category8.id
)

file13 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/cthulhu.png")
project13.photo.attach(io: file13, filename: "#{project13.id}.png")

project14 = Project.create!(title: "Nikki Darling Confections - New Kitchen",
    description: "The New Nostalgia in Candy. Handcrafted in Chicago. It's how you remember candy tasting. It's how you imagine candy should taste.",
    campaign: "Nikki Darling Confections is the new nostalgia in candy. We make handcrafted candies using traditional American techniques. I, Evan Coben, am the owner and founder, and am proud to lead this woman-owned, people-first business.",
    updates: "",
    faq: "", 
    location: "Chicago, IL", 
    start_date: Date.new(2021,3,3),
    end_date: Date.new(2021,3,31), 
    funding_goal: 15000,
    creator_id: user18.id,
    category_id: category5.id
)

file14 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/nikki_darling.PNG")
project14.photo.attach(io: file14, filename: "#{project14.id}.PNG")

project15 = Project.create!(title: "FAKING FILMATION",
    description: "The evolution of cartoons, rise & fall of Filmation & one man's quest to release his unofficial cartoon despite looming legal threats.",
    campaign: "Faking Filmation is a documentary that explores the depths of fandom, intellectual property and the dangerous intersection between them while tracing the origin and evolution of cartoons, the history of Filmation and one man's mission to create the ultimate love letter to the creators of his favorite cartoon show.",
    updates: "Hey folks! Just wanted to take a minute and say “thank you” to everyone for your unending support and faith in us and this documentary project. I never thought we would be at this point in the campaign or if we would ever raise this amount to begin with given all the things happening in the world. It’s humbling, incredible, overwhelming and so much more. James and I have been talking a lot each night with complete awe about the sheer number of backers and rewards you’ve all selected and it means the world to both of us. While James isn’t officially part of the production, of course, one can see how supporting this documentary endeavor in turn helps supports his efforts now and going forward.",
    faq: "", 
    location: "Chicago, IL", 
    start_date: Date.new(2021,3,3),
    end_date: Date.new(2021,3,31), 
    funding_goal: 30000,
    creator_id: user1.id,
    category_id: category4.id
)

file15 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/faking_filmation.PNG")
project15.photo.attach(io: file15, filename: "#{project15.id}.PNG")

project16 = Project.create!(title: "Billy the Rescue Dog",
    description: "A picture book about Billy, a Treeing Walker Coonhound, and his adventures and challenges as he embarks on his new life.",
    campaign: "Billy the Rescue Dog is the true story of Billy, a Treeing Walker Coonhound. It tells of the adventures he experiences and the challenges he faces as he embarks on life with his new family: a black Lab named Oliver; two cats, Luke and Hazel; three goats, Aria, Gus and Gwendolyn; and 18 unnamed but well-loved chickens.",
    updates: "In just over 48 hours we are halfway to our goal. Thank you so much for your support of Billy the Rescue Dog. We will share updates on our progress, but I wanted to take this opportunity to let you know how much we appreciate all of you. :)",
    faq: "", 
    location: "Chicago, IL", 
    start_date: Date.new(2021,3,3),
    end_date: Date.new(2021,5,31), 
    funding_goal: 6000,
    creator_id: user20.id,
    category_id: category2.id
)

file16 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/billy_the_rescue_dog.jpg")
project16.photo.attach(io: file16, filename: "#{project16.id}.jpg")

project17 = Project.create!(title: "Vaca's Vegan Creamery x All Tomorrow's Pastries Cakebook",
    description: "A picture book about Billy, a Treeing Walker Coonhound, and his adventures and challenges as he embarks on his new life.",
    campaign: "Vaca's Creamery is Chicago's first 100% vegan ice cream shop, opening May 2021! We are also publishing a vegan Cakebook!",
    updates: "1) if you get a physical copy of the Cakebook, we will also send you a PDF as soon as it's ready!

    2) we thought you could pledge multiple times if you wanted, but it turns out you can't. We are including add-ons, so if you have already pledged, you can go back to your pledge and add something else. The only thing you can't do is add on a physical book to a digital reward. If you want a physical book after it's made, we will have copies for sale, though!",
    faq: "", 
    location: "Chicago, IL", 
    start_date: Date.new(2021,3,3),
    end_date: Date.new(2021,5,1), 
    funding_goal: 15000,
    creator_id: user21.id,
    category_id: category5.id
)

file17 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/vacas.jpg")
project17.photo.attach(io: file17, filename: "#{project17.id}.jpg")

project18 = Project.create!(title: "Board Royale - New Expansions & Second Printing",
    description: "The next chapter of Board Royale offers competitive, collaborative & a peaceful competition to all players and all playstyles.",
    campaign: "Board Royale has been a super cutthroat survival card game where you fight against your friends until there is one survivor remains. Not anymore! We are presenting new collaborative and peaceful competitive expansions that will add a new meaning to survival.",
    updates: "First Stretch Goal Unlocked!  


    We are truly astonished by the rate of this campaign evolving. 
    
    Thank you so much to all that have joined this journey!
    
    
    We are happy to announce that we have unlocked our first stretch goal and added 5 new cards to the Wild Hunt Pack.  The Wild Hunt expansion pack card count increased from 60 to 65.
    
    Also, we have revealed the next stretch goal.",
    faq: "", 
    location: "Montreal, Canada", 
    start_date: Date.new(2021,3,3),
    end_date: Date.new(2021,5,6), 
    funding_goal: 24000,
    creator_id: user22.id,
    category_id: category6.id
)
file18 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/board_royale.jpeg")
project18.photo.attach(io: file18, filename: "#{project18.id}.jpeg")

project19 = Project.create!(title: "Cardlax EarBuds Washer - Automatic Cleaning Tool for TWS",
    description: "A whole new cleaning solution for your wireless stereo. It turns them nice and clean in minutes.",
    campaign: "At this stage, we’re ready to go into production as our materials are sourced and we have confirmed the schedule with our reliable manufacturer. However, our solid plan might still meet with some unexpected problems that can possibly cause a delay, and the unpredictable coronavirus situation can also put a risk in our production timeline. If anything comes up, we will make sure of transparent communication with our backers to keep all of you informed and find out viable solutions as soon as we can. Feel free to talk to us about your concerns any time you want.",
    updates: "We are excited to annoy, we reached our target goal in just XX minutes. Thank you all so much for an amazing support! We are all very happy to see so many backers and your enthusiasm to our campaign, and to Kickbacker.",
    faq: "", 
    location: "Dover, DE", 
    start_date: Date.new(2021,4,3),
    end_date: Date.new(2021,6,6), 
    funding_goal: 5000,
    creator_id: user1.id,
    category_id: category3.id
)

file19 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/cardlax.jpg")
project19.photo.attach(io: file19, filename: "#{project19.id}.jpg")

project20 = Project.create!(title: "GripBeats: Turn Your Hands Into A Musical Instrument!",
    description: "Learn the art of making music through your hands' movements and touch by using our refined and versatile wearable music technology.",
    campaign: "GripBeats® isn't just any ordinary musical instrument; it's wearable. And because it's wearable, it uses your hands' movements and touch to make music. Everything you thought you could do with an instrument before you can do now, but without it!",
    updates: "We built GripBeats® to encourage music creativity and promote self-expression through music with the help of motion and touch technology. We're so pleased that we can now implement a feature that allows users to do this now with their very own controls. GripBeats® just became a whole lot more immersive and personalized!",
    faq: "Q: Different hand sizes? A: For kids' size GripBeats® is adjustable enough to fit hands of width size as small as 6cm / 2.3\" and with the same device, a hand as large as width 11cm / 4.3\". This measurement is the width of the hand. The single strap and slidable loop mechanism allows GripBeats® to be adjusted to practically any sized hand and still allows full access to all the sensors. The length of the wrist strap section (where it connects at the wrist like a watch) is 26cm / 10\"). If these dimensions aren't on your range, please contact us and we should be able to make a slight adjustment. These are the latest measurements.  :)", 
    location: "Dover, DE", 
    start_date: Date.new(2021,4,3),
    end_date: Date.new(2021,6,6), 
    funding_goal: 10000,
    creator_id: user2.id,
    category_id: category3.id
)

file20 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/gripbeats.png")
project20.photo.attach(io: file20, filename: "#{project20.id}.png")

project21 = Project.create!(title: "Maliek Dance Theater Building Funds",
    description: "Help Secure Maliek Dance Theater Future",
    campaign: "I am Nasir Campbell the owner & artistic director of the Maliek Dance Theater LLC, located in Brooklyn, New York. Our mission is to encourage all students that Fear Is False & you can do anything you set your mind to. Also, we are committed to encouraging all dancers to strive for excellence and enjoy the journey along the way. We want to give students an enriching and inspiring course that will educate and benefit the mind, body and soul.",
    updates: "",
    faq: "", 
    location: "Brooklyn, NY", 
    start_date: Date.new(2021,5,6),
    end_date: Date.new(2021,6,6), 
    funding_goal: 3600,
    creator_id: user23.id,
    category_id: category1.id
)

file21 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/maliek_dance.jpg")
project21.photo.attach(io: file21, filename: "#{project21.id}.jpg")

project22 = Project.create!(title: "Posture Tee | Perfect Your Posture Comfortably & Fashionably",
    description: "A subtle fashionable wearable tee that can teach & remind the body to move and keep a proper position.",
    campaign: "Posture Reminder Zipper T-Shirt is a project that Cristiano and Mohsen started developing more than 2 years ago.

    The idea started with Mohsen's bad posture which was a direct result of gaming and working with computers for more than 8 hours a day for 20+ years, overusing some muscles and underusing some other muscles led to his bad posture. ",
    updates: "",
    faq: "", 
    location: "Los Angeles, CA", 
    start_date: Date.new(2021,6,6),
    end_date: Date.new(2021,7,6), 
    funding_goal: 5000,
    creator_id: user23.id,
    category_id: category3.id
)

file22 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/posture_tee.jpg")
project22.photo.attach(io: file22, filename: "#{project22.id}.jpg")

project23 = Project.create!(title: "Kimberly's Cupcakes (Sugar Bloom Cakery) Expansion Project",
    description: "We need your help to design and build a larger, more equipped bakery space, to accommodate the growth we've received over the years.",
    campaign: "I'm Kimberly, the owner and founder of Sugar Bloom Cakery & Coffee. I started baking at the age of 15 and really became passionate about it. My dedication for baking grew so much that after college it was a no brainer to continue practicing my craft. Being self taught and growing my business in the last 2 years makes this an even more exciting time for my business because I have worked so hard for this moment.",
    updates: "",
    faq: "", 
    location: "Redlands, CA", 
    start_date: Date.new(2021,6,6),
    end_date: Date.new(2021,7,6), 
    funding_goal: 20000,
    creator_id: user25.id,
    category_id: category5.id
)

file23 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/kimberly.jpg")
project23.photo.attach(io: file23, filename: "#{project23.id}.jpg")

project24 = Project.create!(title: "Play Everyday Magazine",
    description: "Recreational Sports Medicine Journalism",
    campaign: "Our Magazine, Events, Podcast and Future Netflix Series are All Invitations to Come Back to Your Own Body.
    We took Our Experience in Sports Medicine, Yoga, Athletic Training, Bodywork and Group Fitness to Create Mixed Yoga Arts, PE's Own Movement, Mobility and Nutritional Methodology.
    MYA is a Sacred, Athletic, Somatic, Personal and Communal Experience that Honors the True Roots of Yoga; Inner Freedom and Knowing.",
    updates: "",
    faq: "", 
    location: "San Diego, CA", 
    start_date: Date.new(2021,6,6),
    end_date: Date.new(2021,7,6), 
    funding_goal: 111111,
    creator_id: user1.id,
    category_id: category8.id
)

file24 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/play_everyday.png")
project24.photo.attach(io: file24, filename: "#{project24.id}.png")

project25 = Project.create!(title: "Gordon Griffin Photography",
    description: "I would like to set up a photography business concentrating on weddings, head shots and corporate opportunities",
    campaign: "I have been practicing photography since 2008 and am now ready to start the business of creating memories for life.  I believe that photography isn't just a 'picture' it's a feeling, it's a memory, it's an image that takes you back to a time. Can I go as far as to say its almost like time travel?",
    updates: "",
    faq: "", 
    location: "Red Deer, Canada", 
    start_date: Date.new(2021,6,6),
    end_date: Date.new(2021,8,6), 
    funding_goal: 5000,
    creator_id: user24.id,
    category_id: category1.id
)

file25 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/gordon_photography.jpg")
project25.photo.attach(io: file25, filename: "#{project25.id}.jpg")

project26 = Project.create!(title: "String and Shadow Puppet Theater: Fauna Fantastique",
    description: "String and Shadow Puppet Theater is creating a giant puppet pageant with masks, larger-than-life-puppets and live music",
    campaign: "We make giant puppet shows that combine visual art with live music, dance, and storytelling. This summer, we are working with a live band and a five-person cast to create a giant puppet pageant set to original live music that will be performed outdoors every weekend from July 9th-August 1st at Lions Park in Olympia, Washington.",
    updates: "",
    faq: "", 
    location: "Olympia, WA", 
    start_date: Date.new(2021,6,6),
    end_date: Date.new(2021,8,6), 
    funding_goal: 9000,
    creator_id: user3.id,
    category_id: category1.id
)

file26 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/string_puppet_theater.jpg")
project26.photo.attach(io: file26, filename: "#{project26.id}.jpg")

project27 = Project.create!(title: "The Walk: ‘The Most Ambitious Public Artwork of Our time’",
    description: "Help a giant puppet walk 8,000km across 8 countries from the Turkey-Syria border to the UK in support of refugees.",
    campaign: "The Walk is a once-in-a-generation international festival of art and hope that will bring together hundreds of celebrated artists, major cultural institutions and humanitarian organisations from around the world to create one of the most innovative, adventurous and ambitious public artworks ever attempted.",
    updates: "",
    faq: "", 
    location: "Gaziantep, Turkey", 
    start_date: Date.new(2021,6,6),
    end_date: Date.new(2021,9,6), 
    funding_goal: 42000,
    creator_id: user19.id,
    category_id: category1.id
)

file27 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/the_walk.jpg")
project27.photo.attach(io: file27, filename: "#{project27.id}.jpg")

project28 = Project.create!(title: "FOREST FOLK - All Ages Book of Quirky Animal Comic Strips",
    description: "Sunday Funnies crash headlong into Looney Tunes. Whimsically madcap misadventures of a Fox and Elf.",
    campaign: "Meet Filburt the Fox, a jokester and a know-it-all with a knack for finding trouble. Lucky for Filburt that his best friend is Thomas, a happy-go-lucky elf, who's magic drawing quill can conjure the solution to any of their woes. MOST of the time...

    In this collection of 105 strips, follow the shenanigans of Filburt and Thomas, along with the rest of the peculiar cast, including no-nonsense Barry the Bearista, Grumpy Cat Gus, and nerdy Benni the Bunny. Watch as they deal with playful misunderstandings and wacky hijinks during spirited adventures in the forest they all call home.",
    updates: "",
    faq: "", 
    location: "Toronto, Canada", 
    start_date: Date.new(2021,6,6),
    end_date: Date.new(2021,10,6), 
    funding_goal: 17000,
    creator_id: user4.id,
    category_id: category2.id
)

file28 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/forest_folk.png")
project28.photo.attach(io: file28, filename: "#{project28.id}.png")

project29 = Project.create!(title: "The Lost Sunday - a fairy tale comic book about burnout",
    description: "In an enchanted world, the best day of the week is missing. Legend says an evil witch stole it – but Nina is determined to find it!",
    campaign: "In an enchanted world, the best day of the week is missing. Legend says an evil witch stole it – but Nina is determined to get it back! The Lost Sunday is a comic book about working too much, told through stories and inspiration from old folklore, myths and tales. The project is finished - we are here to ask for your support to print The Lost Sunday in English and Romanian.",
    updates: "",
    faq: "", 
    location: "Cluj-Napoca, Romania", 
    start_date: Date.new(2021,6,6),
    end_date: Date.new(2021,10,6), 
    funding_goal: 8000,
    creator_id: user2.id,
    category_id: category2.id
)

file29 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/lost_sunday.png")
project29.photo.attach(io: file29, filename: "#{project29.id}.png")

project30 = Project.create!(title: "NORTHERN SHADE",
    description: "A disenchanted Army vet emerges from isolation when his younger brother is recruited by an extremist militia.",
    campaign: "NORTHERN SHADE is a neo-noir feature film set in Connecticut during the pandemic. It takes place - and was filmed - during the Covid-19 pandemic.

    Why the hell would you want to do that?!
    
    Like post-war noir films of the 1940s, we're highlighting this point in our lives when tensions run high, anxiety and uncertainty is the constant variable, and veterans assimilating to civilian life at home are met with a world they might not recognize.",
    updates: "A very special thanks to Thimble Island Brewery in Branford, CT, who donated several cases of their finest brews for our movie. Our main character Justin is a bit of a drinker, and it was important to us to feature a local brewery. And since Thimble Island's American Ale is a quintessential Connecticut go-to, it was awesome to have their support. Thank you to Greg Page and the entire Thimble Island team!",
    faq: "", 
    location: "New Haven, CT", 
    start_date: Date.new(2021,4,6),
    end_date: Date.new(2021,5,6), 
    funding_goal: 20000,
    creator_id: user7.id,
    category_id: category4.id
)

file30 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/northern_shade.jpg")
project30.photo.attach(io: file30, filename: "#{project30.id}.jpg")

project31 = Project.create!(title: "CIECO - An Animated horror film",
    description: "A little fox girl gets lured into the deep nordic woods, Nothing is what it seems to be..",
    campaign: "Cieco is a 30minute animated horror film in production by a small Animation Studio in Sweden. What happens to creatures that go into the deepest darkest part of the nordic woods and why are they never to be seen again? Why is there an ethereal being encased in stone and how did it come to be? Who can you trust at the end - or are everybody in it for their own gain? Nothing is what it seems to be...",
    updates:"We have been live for a few hours now and we are already almost at 20%!! Let's keep this tempo going and make sure to share this project around between friends and family!",
    faq: "Q: How long is it going to be? A: It is going to be 30min + creidt", 
    location: "Stockholm, Sweden", 
    start_date: Date.new(2021,4,6),
    end_date: Date.new(2021,7,6), 
    funding_goal: 42000,
    creator_id: user8.id,
    category_id: category4.id
)

file31 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/cieco.PNG")
project31.photo.attach(io: file31, filename: "#{project31.id}.PNG")

project32 = Project.create!(title: "VALENTINE | A short film",
    description: "As Corey grows increasingly uncomfortable with his gender identity, he and his girlfriend Mia struggle to redefine their relationship.",
    campaign: "VALENTINE is a short film about a couple that heads to the Catskills for a romantic getaway. However, over the course of the night, issues surrounding gender & identity threaten to unravel the seams of the relationship.",
    updates:"WOW!!!! THANK YOU!!!! We can’t believe we’re writing this update right now, but thanks to your overwhelming generosity, love, and support during these first five days, we have successfully met our initial $17,000 Kickbacker goal for VALENTINE!!! Earlier in the year, if you had told us that any of this would be happening, we never would have believed you. Even just a couple of months ago, Beck and I simply couldn’t imagine a world without quarantine, never mind a world where we might be able to raise the budget necessary to make our film. But now, thanks to your help, we have the funds needed to move into production this June, and to do so safely. THANK YOU SO MUCH!!!!",
    faq: "", 
    location: "New York, NY", 
    start_date: Date.new(2021,5,20),
    end_date: Date.new(2021,8,20), 
    funding_goal: 17000,
    creator_id: user11.id,
    category_id: category4.id
)

file32 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/valentine.jpg")
project32.photo.attach(io: file32, filename: "#{project32.id}.jpg")

project33 = Project.create!(title: "Um, Actually - The Game of Nerdy Corrections",
    description: "Finally! A board game version of CollegeHumor's game show you can play at home!",
    campaign: "From Gloomhaven to Blood Raven, nerds are passionate about a lot of things… but there's one thing they love above all else, and that is correcting people. 

    CollegeHumor is joining forces with Wiggles 3D to bring you the long-awaited home version of their popular game show, Um, Actually! Featuring 100% new questions never seen on the show before!
    
    Um, Actually presents you with statements about the fictional worlds of popular movies, TV shows and books. They all sound right... but listen carefully, because each one has a mistake hidden in it somewhere! It's your job to figure out what's wrong and announce it before anyone else, starting, of course, with the magic phrase: Um, actually... 
    
    But even if you know nothing about Sailor Moon or Star Wars, you'll find yourself making wild guesses, stumbling into answers, and having laughs along the way!",
    updates:"It's day two and we've already got something fun for you!


    Every week on Wednesdays we'll be hosting challenges for you to participate in. See, here's the thing: we're making a Community Deck of 60 questions. (You can read all about it on the front page.) And we want you, dear backers, to be the ones who choose what topics go into it. You'll be building it, topic by topic, together.
    
    
    With the weekly challenges, we'll give you two different topics. We're going to put six questions from one of those topics into the Community Deck. It's up to YOU to determine which topic is going to get in. 
    
    How? So glad you asked. Simply complete the challenge that corresponds to the topic you want to win. Make sure to use the hashtag when you post on social media (Twitter, Facebook, or Instagram). The topic that gets the most participants will be added to the Community Deck.",
    faq: "Q: Are the questions reused from the show or are they new questions? A: All of the questions will be brand new. None of them will be repeats of questions used on the show… although they may touch on similar topics, naturally!", 
    location: "London, Canada", 
    start_date: Date.new(2021,5,20),
    end_date: Date.new(2021,8,20), 
    funding_goal: 25000,
    creator_id: user20.id,
    category_id: category6.id
)

file33 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/um_actually.png")
project33.photo.attach(io: file33, filename: "#{project33.id}.png")

project34 = Project.create!(title: "Alex Soto, Nuevo Álbum",
    description: "Ayúdame a producir mi segundo disco. Hagamos música juntos!!",
    campaign: "Hola a todos!

    Antes que nada quisiera agradecer que estés por acá, gracias por querer apoyar mi carrera ó por interesarte en alguna de las recompensas, quisiera contarte la razón por la que estoy haciendo esta campaña de fondeo.",
    updates:"A petición popular y porque sí tengo muchas ganas de compartirles trucos de magia para hacer canciones, el nuevo precio del Curso de Composición es de $1,999

    Además esta recompensa incluye los 2 Álbumes (Duro y Dale, y el Nuevo por grabar) Nombre en los agradecimientos y el Kit digital de Wallpeppers",
    faq: "", 
    location: "Mexico City, Mexico", 
    start_date: Date.new(2021,5,20),
    end_date: Date.new(2021,9,20), 
    funding_goal: 6000,
    creator_id: user11.id,
    category_id: category7.id
)

file34 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/alex_soto.jpg")
project34.photo.attach(io: file34, filename: "#{project34.id}.jpg")

project35 = Project.create!(title: "Five Iron Frenzy album Until This Shakes Apart",
    description: "Help Five Iron Frenzy make a new album",
    campaign: "If you don't know us, we hail from the land of ice and snow Denver, Colorado. If you do know us, thanks sticking with us for the past 7 years following the release of Engines of a Million Plots. With that project, we reunited after a 9 year hiatus. Having that support through Kickstarter and rocking out with us at our shows has been the highlight of our lives! 

        We now have new dream! Releasing another full length album, Until This Shakes Apart and you can be a part of this effort!",
    updates:"",
    faq: "", 
    location: "Denver, CO", 
    start_date: Date.new(2021,1,20),
    end_date: Date.new(2021,3,20), 
    funding_goal: 60000,
    creator_id: user3.id,
    category_id: category7.id
)

file35 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/five_iron.jpg")
project35.photo.attach(io: file35, filename: "#{project35.id}.jpg")

project36 = Project.create!(title: "MC Lars - Blockchain Planet",
    description: "Help MC Lars create an album about fatherhood, the pandemic and late-stage capitalism. His most personal album to date.",
    campaign: "In 2020, I returned home from another tour with Schäffer the Darklord and the Doubleclicks to a world that had drastically changed.  To everyone's surprise, we were all suddenly locked down in an unprecedented quarantine, while my wife and I had our first son during the COVID19 pandemic.  We worked from home, watching as the country became more divided, hoping things would return to normal.  Meanwhile, I started writing new songs, wondering what kind of life our son would have and imagining what the world would be like after this was all over.  Suddenly, I had an album of personal songs ready that documented the whole experience.",
    updates:"",
    faq: "", 
    location: "Oakland, CA", 
    start_date: Date.new(2021,1,20),
    end_date: Date.new(2021,5,20), 
    funding_goal: 5000,
    creator_id: user14.id,
    category_id: category7.id
)

file36 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/mc_lars.jpg")
project36.photo.attach(io: file36, filename: "#{project36.id}.jpg")

project37 = Project.create!(title: "Soft Bits In: Tribute to The Flaming Lips",
    description: "A recreation of 'The Soft Bulletin' by The Flaming Lips using a Nintendo and a Gameboy, pressed to vinyl.",
    campaign: "'The Soft Bulletin' by The Flaming Lips was named by NME Magazine as 1999's 'Album of the Year' and is considered to this day to be the band's masterpiece record, as well as the release that would define their sound for decades to come.

    This project and the resulting album, 'Soft Bits In', takes the capabilities of retro video game hardware to the limits in order to create a faithful instrumental chiptune arrangement of the entirety of that record. Every track was created using only the sound chips inside of a Nintendo Entertainment System (NES) and a Gameboy (DMG).",
    updates:"",
    faq: "", 
    location: "Philadelphia, PA", 
    start_date: Date.new(2021,1,20),
    end_date: Date.new(2021,5,20), 
    funding_goal: 8000,
    creator_id: user16.id,
    category_id: category7.id
)

file37 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/soft_bits.jpg")
project37.photo.attach(io: file37, filename: "#{project37.id}.jpg")

puts 'Creating Rewards...'
reward1 = Reward.create!(
    title: "Digital High Five", 
    description: "You don't need one, but you want us to succeed anyway. Score yourself my respect and a digital high five from MAKE ART NOW for helping us reach the goal.",
    project_id: project1.id, 
    cost: 10)

reward2 = Reward.create!(
    title: "SUPER EARLY BIRD - ORBIT - BASE STATION", 
    description: "Orbit Mk1 - Base Station
    + FREE SHIPPING IN USA
    (1) High Precision Wireless Stealth Motor + Remote control
    (1) Ceiling Mount Plate
    (1) Adjustable Vertical Ceiling Bar. (40\"- 62\" vertical travel)
    (2) Standard length foldable arms (15\"/19\"). Aircraft grade aluminum, slotted teeth for excellent hold.
    (4) Ceiling hooks + ratchet straps. Necessary for uneven ceilings, or higher speeds.
    (1) Slidable Counter Weight. 3lbs
    (1) Sliding Camera Mount with Adjustable Ball head assembly. Fits 1/4 20 mounts, or Hot Shoe Mounts.
    (1) Iphone Mount.
    (4) Velcro Straps. (used for long lenses, or for attaching accessories)",
    project_id: project1.id, 
    cost: 799)

reward3 = Reward.create!(
    title: "ONE PACK", 
    description: "Choose your material from Titanium, Copper or Brass.

    Choices taken in the pledge manager after the campaign ends.
    
    INCLUDES:
    ForeverPen™
    Free Shipping",
    project_id: project2.id, 
    cost: 28)

reward4 = Reward.create!(
    title: "1 x Early Bird Gamma Jacket", 
    description: "1 x Gamma Graphene Heated Jacket

    41% OFF retail prices in any size of your choice only for Early Bird Kickbacker supporters.
    
    Future Retail Price: $500
    Pre-order Now and Save $205 on MSRP
    
    Sizes, shipping address, and other details will be finalized after the campaign ends through post-crowdfunding surveys at which point shipping costs will be calculated.",
    project_id: project3.id, 
    cost: 295)

reward4 = Reward.create!(
    title: "1 x Gamma Jacket ", 
    description: "1 x Gamma Graphene Heated Jacket 

    Missed our Early Bird pledges? Don't worry about it - our Kickbacker supporters still get 35% OFF retail prices in any size of your choice!
    
    Future Retail Price: $500
    Pre-order Now and Save $175 on MSRP
    
    Sizes, shipping address, and other details will be finalized after the campaign ends through post-crowdfunding surveys at which point shipping costs will be calculated.",
    project_id: project3.id, 
    cost: 325)

reward5 = Reward.create!(
    title: "Join the Conversation Early", 
    description: "Get your own deck of 100 Conversations about Antiracism before anyone else.",
    project_id: project4.id, 
    cost: 25)

reward6 = Reward.create!(
    title: "Gift Pack", 
    description: "2 decks of 100 Conversations about Anti-Racism. Receive a deck for yourself and one for a friend.",
    project_id: project4.id, 
    cost: 25)

reward7 = Reward.create!(
    title: "Supporter", 
    description: "Just chipping in to help us out! Have a sweet wallpaper pack + a special role on discord-cell games as thanks!

    INCLUDES:
    UNBEATABLE Wallpaper Pack
    Discord Role",
    project_id: project6.id, 
    cost: 2)

reward8 = Reward.create!(
    title: "Supporter", 
    description: "Get a PC copy of UNBEATABLE when it releases. That's pretty much it! And you'll get the wallpaper pack too don't worry

    INCLUDES:
    A digital PC copy of UNBEATABLE
    Discord Role",
    project_id: project6.id, 
    cost: 27)

reward9 = Reward.create!(
    title: "Just for believing in Ruffmuffs", 
    description: "Thank you for believing in us in hopes to help many dogs one day.",
    project_id: project5.id, 
    cost: 5)

reward10 = Reward.create!(
    title: "Early bird of manufactured RuffMuffs", 
    description: "Get one early that is perfect sewn to fit your dogs needs!",
    project_id: project5.id, 
    cost: 30)

reward11 = Reward.create!(
    title: "The SOAPBOTTLE Set | Early-Bird", 
    description: "Surprise your loved one with a gift and nice discount for you: the whole SOAPBOTTLE Original family in one set.

    You will receive all 3 SOAPBOTTLE Original colors, which contains 100ml of soft body wash made from natural ingredients.
    
    Shipping fee will be collected post campaign.
    
    INCLUDES:
    3× SOAPBOTTLE Original 100ml
    3× Metal closure
    3× Sustainable ribbon",
    project_id: project7.id, 
    cost: 47)

reward12 = Reward.create!(
    title: "The SOAPBOTTLE Set", 
    description: "Surprise your loved one with a gift or enjoy them all by yourself: the whole SOAPBOTTLE Original family in one set.

    You will receive all 3 SOAPBOTTLE Original colors, which contains 100ml of soft body wash made from natural ingredients.
    
    By choosing this package, you are not only making pre-orders, but most importantly, you are helping us to realize our project!
    
    Shipping fee will be collected post campaign.",
    project_id: project7.id, 
    cost: 53)

reward13 = Reward.create!(
    title: "Green Salt Sample Bag (2oz-50g)", 
    description: "Try a sample bag of Green Salt! Equivalent to 140 pinches of salt.",
    project_id: project8.id, 
    cost: 7)
reward14 = Reward.create!(
    title: "1 bag of Green Salt (9oz-250g)", 
    description: "Get a bag of Green Salt! Equivalent to 700 pinches of salt.",
    project_id: project8.id, 
    cost: 20)
reward15 = Reward.create!(
    title: "Ebook", 
    description: "The ebook edition of the book. Plus:• Your name printed in the book as a supporter",
    project_id: project9.id, 
    cost: 21)
reward16 = Reward.create!(
    title: "Hardback", 
    description: "The hardback edition of the book. Plus:
    • Your name printed in the book as a supporter
    • The ebook",
    project_id: project9.id, 
    cost: 42)  
reward17 = Reward.create!(
    title: "One book - Standard Edition", 
    description: "The book JoJo in Standard Edition.",
    project_id: project10.id, 
    cost: 40)
reward18 = Reward.create!(
    title: "One book - First Print Collector Edition", 
    description: "The book JoJo in Collector Edition.

    INCLUDES:
    Limited Edition
    Variant Cover",
    project_id: project10.id, 
    cost: 46)
reward19 = Reward.create!(
    title: "Partners in Consent", 
    description: "Helping us get to our goal! You'll get stickers and huge amounts of gratitude from us.

    INCLUDES:
    Consent Badge Sticker Sheet
    Bookmark",
    project_id: project12.id, 
    cost: 15)

reward20 = Reward.create!(
    title: "Yes Means Yes!", 
    description: "Hot off the presses!

    INCLUDES:
    Unsigned Copy of Yes Means Yes!
    Bookmark",
    project_id: project12.id, 
    cost: 27)

reward21 = Reward.create!(
    title: "Nimble | Super Early Bird", 
    description: "SAVE $170 on Nimble ($399 retail)
    Plus 3 FREE Capsule Sets ($30 value)
    -
    Select your colors after the campaign ends.
    
    INCLUDES:
    Nimble Device
    3× Capsule Sets
    Companion App
    Charging Cable",
    project_id: project11.id, 
    cost: 248)

reward22 = Reward.create!(
    title: "Counting, Colors & Cthulhu Board Book", 
    description: "Get your hands on a PHYSICAL COPY of the first edition of COUNTING, COLORS & CTHULHU, a premium hardcover board book that will make the perfect addition your Lovecraftian library. This is a must have book for Lovecraft or Cthulhu fans of all ages, and especially for the little monsters out there who are learning their numbers, colors...and mythos! Also includes the the Digital Deluxe eBook packed with digital-only extras, including concept sketches and other making-of bonus material. FREE US SHIPPING!",
    project_id: project13.id, 
    cost: 20)
reward23 = Reward.create!(
    title: "Sticker + 3pc Marshmallow or 4pc Candy", 
    description: "A beautiful sticker and either 3 pieces of our classic Vanilla Bean Marshmallows or 4 pieces of Dulce De Leche Caramels! (can accommodate vegan dietary needs too)",
    project_id: project14.id, 
    cost: 15)
reward24 = Reward.create!(
    title: "All Flavors - Marshmallows or Caramels!", 
    description: "Enjoy either all 3 core flavors of marshmallows (Vanilla Bean, Chocolate, and Butterscotch) in 6 piece bags or both flavors of caramels (Vanilla Bean Sea Salt and Dulce De Leche) in 20 piece bags. And, of course, a sticker!

    INCLUDES:
    6pc Marshmallow - All 3 Flavors!
    20pc Caramels - Both Flavors!
    Sticker!",
    project_id: project14.id, 
    cost: 15)

reward24 = Reward.create!(
    title: "Billy the Rescue Dog hardcover book", 
    description: "Own a first edition, hot off the presses! One copy; shipping included.",
    project_id: project16.id, 
    cost: 25)
reward25 = Reward.create!(
    title: "DVD STANDARD EDITION!", 
    description: "Enjoy a copy of documentary on DVD with exciting, long gestating bonus features on a collectible physical package. PLUS, get access to our digital material as well!",
    project_id: project15.id, 
    cost: 35)
reward26 = Reward.create!(
    title: "VHS Copy of the Film!", 
    description: "Enjoy a limited edition signed copy of our film on VHS! You'll also get access to our Digital film and bonus content too!",
    project_id: project15.id, 
    cost: 57)    

reward26 = Reward.create!(
    title: "Vaca's Soft Opening Ticket + Treat", 
    description: "You will know first about our exclusive soft opening weekend + any 1 menu item of your choice for free! If you can't make it that weekend, you can still get a free item later.",
    project_id: project17.id, 
    cost: 15)

reward27 = Reward.create!(
    title: "Survival 101", 
    description: "Get an early copy of the Board Royale 2nd print base game and Kickbacker Exclusive Secret Weapons Expansion Pack”.

    Total of 300 Cards (140 Resources, 160 Items) + Stretch goals.
    
    %30 off the retail worth!
    
    Shipping is not included, For shipping information please check the shipping section on the campaign page.",
    project_id: project18.id, 
    cost: 32)
reward28 = Reward.create!(
    title: "Cardlax Buds Washer X1 Super Early Bird", 
    description: "Limited quantities.
    Get your Automatic Buds Washer x 1 at the BEST price! Save 44%!
    Global shipping is provided. The shipping fees range around $6-$15, depending on where you are.
    We will send you a survey to collect your mailing address and shipping fees after the campaign ends.
    Stay tuned! :)",
    project_id: project19.id, 
    cost: 33) 
reward29 = Reward.create!(
    title: "Cardlax Super Bundle", 
    description: "Earbuds Washer x 1
    Cardlax Card Massager V2 x 1
    Save 63%!
    
    Cardlax Card Massager, valued at $99, now on sales as bundle with Earbuds Washer.
    Global shipping is provided. The shipping fees range around $6-$15, depending on where you are.
    We will send you a survey to collect your mailing address and shipping fees after the campaign ends.
    Stay tuned! :)",
    project_id: project19.id, 
    cost: 59) 

reward30 = Reward.create!(
    title: "GripBeats® Solo | Early Bird", 
    description: "Save $80 on an individual GripBeats®!",
    project_id: project20.id, 
    cost: 119) 
reward31 = Reward.create!(
    title: "GripBeats® Solo | Standard Retail Price", 
    description: "This is the price GripBeats® will sell at after Kickbacker.",
    project_id: project20.id, 
    cost: 199)

reward32 = Reward.create!(
    title: "The Chanterelle", 
    description: "Receive a hand printed linocut card, signed by the cast and a screen-printed patch on durable canvas with this year's String and Shadow t-shirt design!",
    project_id: project26.id, 
    cost: 25)
reward32 = Reward.create!(
    title: "The Elvin Saddle", 
    description: "Receive one ticket to our summer show in Olympia, Washington & a String and Shadow t-shirt in the size of your choosing! Our shirts were designed and screen-printed by us with a two-tone design of white and gold ink on rust colored 100% cotton Belle & Canvas shirts. Plus a signed card from the cast!

    We will be in touch to figure out which performance date you would like to attend to make sure you are on the list!",
    project_id: project26.id, 
    cost: 50)

puts 'Creating Backings...'
#randomize and generate backings
projects = Project.all.to_a
backers = User.all.to_a
backings = Hash.new {|h,k| h[k] = []}
projects.each do |project|
    random_backings = rand(1..10)
    until backings[project.id].length == random_backings
        backer = backers.sample
        if !backings[project.id].include?(backer.id) && project.creator_id != backer.id
                backings[project.id] << backer.id
        end
    end
    backings[project.id].each do |backer|
        if project.rewards[0]
            Backing.create!(amount_pledged: project.rewards[0].cost, backer_id: backer, reward_id: project.rewards[0].id, project_id: project.id)
        end
    end
    backer = backers.sample
    amount = rand(100..100000)
    if !backings[project.id].include?(backer.id) && project.creator_id != backer.id
        Backing.create!(amount_pledged: amount, backer_id: backer.id, project_id: project.id)
    end
end
puts 'Seeding Complete!'