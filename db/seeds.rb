# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Fish.create(common_name:'Adolfos Catfish', scientific_name: 'Corydoras adolfoi', ph:'4.0-6.0', quantity: 5)
Fish.create(common_name:'Altum Angelfish', scientific_name: 'Pterophyllum altum', ph:'4.5-5.8', quantity: 12)
Fish.create(common_name:'Freshwater Angelfish', scientific_name: 'Pterophyllum scalare', ph:'6.0-7.0', quantity: 15)