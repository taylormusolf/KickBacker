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
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('projects')

user1 = User.create!(username:'Demo User', email: 'demo@demo', password: '123456', bio: 'Just your basic user.')
user2 = User.create!(username:'Taylor Musolf', email: 't@email.com', password: '123456', bio: 'Bay Area based friendly, mild-mannered content creator')
user3 = User.create!(username:'Karisa Musolf', email: 'k@email.com', password: '123456', bio: 'Bay Area based cooking personality that loves baking!')
user4 = User.create!(username:'Bobs YourNeighbor', email: 'b@email.com', password: '123456', bio: 'Bob loves smart products.  Give Bob what he wants.')
user5 = User.create!(username:'WorldsTiniest', email: 'WorldsTiniest@WorldsTiniest.com', password: '123456', bio:'At Worlds Tiniest, it’s our mission to make the smallest and most functional everyday carry, while limiting our impact on the environment. We design our products by combining versatile tools with the most durable materials to disrupt old trends and change the way you carry.')
user6 = User.create!(username:'Gamma Jacket', email: 'GammaJacket@GammaJacket.com', password: '123456', bio: 'GAMMA by Wear Graphene. Support us today!')
user7 = User.create!(username:'Aswad Aarif', email: 'Aswad@Aarif.com', password: '123456', bio: 'My name is Aswad and I am an artist, maker, writer and restorative justice practitioner from Oakland Ca.')
user8 = User.create!(username:'Kim', email: 'kimmy@kimmy.com', password: '123456', bio: 'Just a crazy pet lady with big dreams to help others')
user9 = User.create!(username:'D-CELL GAMES', email: 'buddy@D-CELL GAMES.com', password: '123456', bio: '')
user10 = User.create!(username:'Project SOAPBOTTLE', email: 'soapy@ProjectSOAPBOTTLE.com', password: '123456', bio: 'Jonna Breitenhuber created and developed the concept SOAPBOTTLE during her master studies. Through her work as a packaging designer for cosmetic products, she was frustrated that there is hardly any sustainable packaging for liquid personal care products.')
user11 = User.create!(username:'Chris Lin', email: 'chris@greensalt.com', password: '123456', bio: 'Co-founder of Green Salt, a healthy salt alternative made from Salicornia and Founder at AMOR Handmade, a collaboration that empowers women through artisan dog collars. Based in Los Angeles and Ensenada, Mexico.')
user12 = User.create!(username:'Unbound', email: 'unbound@unbound.com', password: '123456', bio: 'Hi, were Unbound, the crowdfunding publisher. We bring writers and readers closer together. Authors pitch their ideas, we choose the best ones and if enough people pledge, we turn them into great books.')
user13 = User.create!(username:'Third Editions', email: '3rd@thirdeditions.com', password: '123456', bio: 'Third Éditions is a French publisher dedicated to video games and popular culture, founded in 2015 by Nicolas Courcier and Mehdi El Kanafi, both lovers of quality books and video games.')
user14 = User.create!(username:'Josh Yeo', email: 'josh@makeartnow.com', password: '123456', bio: 'Josh Yeo is the Artist behind Youtube Channel, MAKE ART NOW. He has a "hands on", DIY approach to most crafts, including cinematography, storytelling, and creative projects. He is an autodidact Polymath, and this is his first time making a physical product.')

project1 = Project.create!(title: "Orbit: A suspended Orbiting Camera Dolly",
    description: "What tool does a cinematographer build for himself? A stealthy silent, bluetooth controlled, orbiting camera dolly with lighting.",
    campaign: "The ORBIT is a suspended camera system that ORBITS around people, objects, or environments, at variable speeds and distances",
    updates: "Wow. We did it, we met our funding goal!  I'm speachless",
    faq: "Q: How do you film large objects with the Orbit Pro? A: So this is a perfect set up for the Orbit Pro. With the Pro, the Arms are a little bit longer, and will give you the reach that you need in order for get far enough out from the pianist playing. I'm assuming the goal being, get a wide enough field of view so you can see the piano, see his face, and orbit around him to see his hands move. But you don't want too wide so you see the orbit motor or the scaffold.", 
    location: "Los Angeles, CA", 
    start_date: Date.new(2021,3,15),
    end_date: Date.new(2021,4,15), 
    funding_goal: 7500,
    creator_id: user14.id
)
file1 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/orbit.gif")
project1.photo.attach(io: file1, filename: "#{project1.id}.gif")

project2 = Project.create!(title: "ForeverPen",
    description: "Ever needed a pen and couldn’t find one? This one sits on your keys and never needs refilling - No ink, no waste!",
    campaign: "We’re extremely passionate about minimising our everyday carry and committed to doing everything we can to make the ForeverPen a reality.

    Ensuring we complete production on time is one of the key goals to successfully running a Kickstarter, so we’ve ensured we have a number of large suppliers and manufacturers who are ready for any number of pens you pledge for.",
    updates: "Thank you for backing our ForeverPen project!

    We want to give a huge shoutout to the first 100 of you that have supported us in hitting and surpassing our goal in just short of 60 minutes!
    
    We LOVE the Kickstarter community and we can’t wait to bring you the most amazing pen that'll last a lifetime!",
    faq: "", 
    location: "Manchester, UK", 
    start_date: Date.new(2021,3,30),
    end_date: Date.new(2021,4,30), 
    funding_goal: 3500,
    creator_id: user5.id
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
    creator_id: user6.id
)

file3 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/gamma.gif")
project3.photo.attach(io: file3, filename: "#{project3.id}.gif")

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
    creator_id: user7.id
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
    creator_id: user8.id
)

file5 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/ruffmuffs.jpg")
project5.photo.attach(io: file5, filename: "#{project5.id}.jpg")

project6 = Project.create!(title: "UNBEATABLE - A game where music is illegal and you do crimes",
    description: "An anime-juiced rhythm adventure with a heavy focus on music and Emotions.",
    campaign: "As a big thank you, all backers will get exclusive customizable profile elements (a flashy animated title, avatar, and background) for the leaderboards and community features! Honestly I think FOMO is kind of a toxic concept and I don't want people to feel bad for not being in on the ground floor, but you really only will get these extremely non-important but Very Cool things if you back on Kickstarter. Those are the rules, and I apologize for enforcing them.",
    updates: "BEFORE WE GO FURTHER: Yes, White Label Episode 1 is late, and yes, it's coming very soon! BUT ALSO, from now till the release on Saturday (bug...fixes) we'll have this",
    faq: "Q: What is Unbeatable[white lable] A: It's a standalone episodic side-story game set in the UNBEATABLE universe. We'll be regularly updating it throughout the Kickstarter (and afterwards!) and on its completion it will be a complete game roughly the length of a full episode of UNBEATABLE. Episode 1 drops on April 10th!", 
    location: "Centreville, VA", 
    start_date: Date.new(2021,6,22),
    end_date: Date.new(2021,8,22), 
    funding_goal: 55000,
    creator_id: user9.id
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
    creator_id: user10.id
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
    creator_id: user11.id
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
    creator_id: user12.id
)

file9 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/42_douglas_adams.gif")
project9.photo.attach(io: file9, filename: "#{project9.id}.gif")

project10 = Project.create!(title: "Third Editions: the Anime Library - JoJo's Bizarre Adventure",
    description: "We are back with a new and exciting project, dedicated to the translation of our French essay about the JoJo's Bizarre Adventure manga.",
    campaign: "This is our seventh Kickstarter campaign, and that in itself is a testament to our experience. We have delivered all the rewards from our first campaigns and we have learned a lot in the process.

    Our book-publishing house is located in France, so we have a strong grasp of the production chain here. With new territories, come new risks, but we're more prepared than ever to face them.",
    updates: "",
    faq: "", 
    location: "Toulouse, France", 
    start_date: Date.new(2021,4,13),
    end_date: Date.new(2021,5,13), 
    funding_goal: 5000,
    creator_id: user13.id
)

file10 = URI.open("https://kickbacker-seeds.s3-us-west-1.amazonaws.com/jojo_bizarre.jpg")
project10.photo.attach(io: file10, filename: "#{project10.id}.jpg")