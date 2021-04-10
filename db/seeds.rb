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

user1 = User.create!(username:'demouser', email: 'demo@demo', password: '123456')
user2 = User.create!(username:'taylor', email: 't@email.com', password: '123456')
user3 = User.create!(username:'karisa', email: 'k@email.com', password: '123456')
user4 = User.create!(username:'bob', email: 'b@email.com', password: '123456')


project1 = Project.create!(title: "Orbit: A suspended Orbiting Camera Dolly",
    description: "What tool does a cinematographer build for himself? A stealthy silent, bluetooth controlled, orbiting camera dolly with lighting.",
    campaign: "The ORBIT is a suspended camera system that ORBITS around people, objects, or environments, at variable speeds and distances",
    updates: "Wow. We did it, we met our funding goal!  I'm speachless",
    faq: "Q: How do you film large objects with the Orbit Pro? A: So this is a perfect set up for the Orbit Pro. With the Pro, the Arms are a little bit longer, and will give you the reach that you need in order for get far enough out from the pianist playing. I'm assuming the goal being, get a wide enough field of view so you can see the piano, see his face, and orbit around him to see his hands move. But you don't want too wide so you see the orbit motor or the scaffold.", 
    location: "Lost Angeles, CA", 
    start_date: Date.new(2021,7,12),
    end_date: Date.new(2021,8,12), 
    funding_goal: 7500,
    creator_id: user2.id
)
project2 = Project.create!(title: "Orbit Gum",
    description: "What tool does a cinematographer build for himself? A stealthy silent, bluetooth controlled, orbiting camera dolly with lighting.",
    campaign: "The ORBIT is a suspended camera system that ORBITS around people, objects, or environments, at variable speeds and distances",
    updates: "Wow. We did it, we met our funding goal!  I'm speachless",
    faq: "Q: How do you film large objects with the Orbit Pro? A: So this is a perfect set up for the Orbit Pro. With the Pro, the Arms are a little bit longer, and will give you the reach that you need in order for get far enough out from the pianist playing. I'm assuming the goal being, get a wide enough field of view so you can see the piano, see his face, and orbit around him to see his hands move. But you don't want too wide so you see the orbit motor or the scaffold.", 
    location: "Lost Angeles, CA", 
    start_date: Date.new(2021,7,12),
    end_date: Date.new(2021,8,12), 
    funding_goal: 7500,
    creator_id: user4.id
)