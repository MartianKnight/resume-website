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
      "employer": "Future Homes",
      "title": "Explorer",
      "location": "Mars",
      "dates": 2013,
      "description": "We know"
    },
    {
      "employer": "The 9th Planet",
      "title": "Navigator",
      "location": "Pluto",
      "dates": 2013,
      "description": "I know"
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

$("#header").append(HTMLskillsStart);

for (skill in bio.skills) {
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
  $("#skills").append(formattedSkill);
}

for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

  $(".work-entry:last").append(formattedEmployerTitle);
  $(".work-entry:last").append(formattedDates);
  $(".work-entry:last").append(formattedDescription);
}
