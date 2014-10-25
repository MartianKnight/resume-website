var education = {};
education["name"] = "nove";

$("#main").append(education.name);



var name = "MartianKnight";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Front-End Ninja";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// dot object notation
/*
bio.city = "Mountain View";
$("#main").append(bio.city);

// bracket object notation
bio["email"] = "test@email.com";
$("#main").append(bio["email"]);
*/


// Work
var work = {
  "jobs": [
    {
      "employer": "test",
      "title": "all title",
      "location": "Scotland",
      "dates": 2013,
      "description": "fun"
    }
  ]
}

// Projects
var projects = {
  "projects": [
    {
      "title": "yes",
      "dates": 2013,
      "description": "fun"
    }
  ]
}

// Bio
var bio = {
  "name": "MartianKnight",
  "role": "front-end",
  "welcomeMessage": "Afternoon Naps",
  "contacts": {
    "mobile": "555",
    "email": "example@email.com",
    "github": "MartianKnight",
    "twitter": "@yes",
    "location": "Mars"
  },
  "skills": ["Awesome","Sleepy"]
}

// Education
var education = {
  "schools": [
    {
      "name": "UNCC",
      "location": "Charlotte",
      "degree": "BS",
      "majors": ["CS"],
      "dates": 2009,
      "url": "http://example.com"
    },
    {
      "name": "Udacity",
      "location": "Online",
      "degree": "BS",
      "majors": ["CS"],
      "dates": 2014,
      "url": "http://example.com"
    }
  ]
,
  "onlineCourses": [
    {
      "title": "Udacity",
      "school": "Online",
      "dates": 2014,
      "url": "http://example.com"
    }
  ]
}

var formattedEducationName = HTMLschoolName.replace("%data%", education.name);
$("#education").append(formattedEducationName);
