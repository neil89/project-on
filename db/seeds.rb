# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#
#

  ############
  ## PEOPLE ##
  ############
  p1 = Person.new()
  p1.name = "Daniel"
  p1.place = "Irlanda"
  p1.email = "daniel@example.com"
  p1.password = "123456"
  p1.academic = "Ingeniero Tecnico en Informatica de Sistemas"
  p1.professional = "Fundecor"
  p1.knowledge = "html, css, javascript, jquery, ember"
  p1.icon_url = "http://imageshack.us/a/img196/6619/xckl.jpg"
  p1.save()
                
  p2 = Person.new()
  p2.name = "Francisco"
  p2.place = "Cordoba"
  p2.email = "fran@example.com"
  p2.password = "abcdef"
  p2.academic = "Ingeniero Tecnico en Informatica de Sistemas"
  p2.professional = "NoSoloSoftware Network"
  p2.knowledge = "ruby on rails, rspec, cucumber"
  p2.icon_url = "http://imageshack.us/a/img266/382/zy7f.jpg"
  p2.save()
                
  p3 = Person.new()
  p3.name = "Violeta" 
  p3.place = "Malaga" 
  p3.email = "violeta@example.com" 
  p3.password = "uvwxyz" 
  p3.academic = "Licenciatura en Bellas Artes" 
  p3.professional = "" 
  p3.knowledge = "photoshop, illustrator, indesign" 
  p3.icon_url = "http://imageshack.us/a/img12/9519/k4n7.jpg"
  p3.save()

  p1.friends << p2
  p1.friends << p3
  p2.friends << p1
  p2.friends << p3
  p3.friends << p1
  p3.friends << p2

  ##############
  ## PROJECTS ##
  ##############
  pj1 = Project.new()
  pj1.title = "Videojuego"
  pj1.starting_date = "03/06/2013"
  pj1.ending_date = nil
  pj1.description = "Sin determinar"
  pj1.creator_id = 1
  pj1.save()

  pj2 = Project.new()
  pj2.title = "Actualize"
  pj2.starting_date = "10/03/2012"
  pj2.ending_date = nil
  pj2.description = "Plataforma de soporte para usuarios"
  pj2.creator_id = 2
  pj2.save()

  p2.projects << pj1
  p3.projects << pj1


  ##############
  ## PROFILES ##
  ##############
  personPf1 = Profile.new()
  personPf1.name = "Frontend"
  personPf1.tools = "html, css, javascript, jquery"
  personPf1.number = 0
  personPf1.save()

  personPf2 = Profile.new()
  personPf2.name = "Desarrollador movil" 
  personPf2.tools = "Rhomobile, Ruby on Rails, Phone Gap"
  personPf2.number = 0
  personPf2.save()

  personPf3 = Profile.new()
  personPf3.name = "Backend" 
  personPf3.tools = "Ruby on Rails, MySQL, Oracle, PHP"
  personPf3.number = 0
  personPf3.save()

  personPf4 = Profile.new()
  personPf4.name = "Disenador" 
  personPf4.tools = "Adobe Photoshop, Adobe Illustrator, Mockups"
  personPf4.number = 0
  personPf4.save()

  personPf5 = Profile.new()
  personPf5.name = "Maquetador" 
  personPf5.tools = "CSS, Handlebars, ERB, HAML"
  personPf5.number = 0
  personPf5.save()

  projectPf1 = Profile.new()
  projectPf1.name = "Desarrollador" 
  projectPf1.tools = "C++, Scripting, Objective-c"
  projectPf1.number = 2
  projectPf1.save()

  projectPf2 = Profile.new()
  projectPf2.name = "Disenador" 
  projectPf2.tools = "Adobe Photoshop, Adobe Illustrator, Adobe After Effects"
  projectPf2.number = 1
  projectPf2.save()

  projectPf3 = Profile.new()
  projectPf3.name = "Modelador/Infografista 3D" 
  projectPf3.tools = "Adobe Photoshop, 3D Studio Max, Maya"
  projectPf3.number = 1
  projectPf3.save()

  projectPf4 = Profile.new()
  projectPf4.name = "Frontend" 
  projectPf4.tools = "html, css, jquery, HAML"
  projectPf4.number = 2
  projectPf4.save()

  projectPf5 = Profile.new()
  projectPf5.name = "Desarrollador movil" 
  projectPf5.tools = "Rhomobile, Ruby on Rails, Phone Gap"
  projectPf5.number = 2
  projectPf5.save()

  projectPf6 = Profile.new()
  projectPf6.name = "Backend" 
  projectPf6.tools = "Ruby on Rails, MySQL, Oracle, PHP"
  projectPf6.number = 1
  projectPf6.save()

  projectPf7 = Profile.new()
  projectPf7.name = "Maquetador" 
  projectPf7.tools = "CSS, HAML"
  projectPf7.number = 1
  projectPf7.save()

  p1.profiles << personPf1
  p1.profiles << personPf3
  p1.profiles << personPf5
  p2.profiles << personPf2
  p2.profiles << personPf3
  p3.profiles << personPf4

  pj1.profiles << projectPf1
  pj1.profiles << projectPf2
  pj1.profiles << projectPf3
  pj2.profiles << projectPf4
  pj2.profiles << projectPf5
  pj2.profiles << projectPf6
  pj2.profiles << projectPf7
