# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'open-uri'


demo_user = User.create(first_name: "AWSTest", last_name: "AWS", email:"AWSTESTER",password:"password", birthday:"1st January 2018")

file = open('https://fakedbook-seeds.s3-us-west-1.amazonaws.com/default_profile.png')

demo_user.photo.attach(io:file, filename: 'default_profile.png');


demo_user1 = User.create(first_name: "Test", last_name: "test", email:"test@test.com",password:"password", birthday:"1st January 2018")

file = open('https://fakedbook-seeds.s3-us-west-1.amazonaws.com/default_profile.png')

demo_user1.photo.attach(io:file, filename: 'default_profile.png');


demo_user2 = User.create(first_name: "Test1", last_name: "test1", email:"test1@test.com",password:"password", birthday:"1st January 2018")

file = open('https://fakedbook-seeds.s3-us-west-1.amazonaws.com/default_profile.png')

demo_user2.photo.attach(io:file, filename: 'default_profile.png');

