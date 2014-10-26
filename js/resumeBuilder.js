
$("#main").append(internationalizeButton);


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
      "location": "Charlotte, NC",
      "dates": 2013,
      "description": "We know"
    },
    {
      "employer": "The 9th Planet",
      "title": "Navigator",
      "location": "Raleigh, NC",
      "dates": 2013,
      "description": "I know"
    }
  ]
}

// Projects
var projects = {
  "projects": [
    {
      "title": "not the truth",
      "dates": 2013,
      "description": "fun",
      "image": ""
    },
    {
      "title": "the true",
      "dates": 2013,
      "description": "fun",
      "image": ""
    }
  ]
}

// Bio
var bio = {
  "name": "Martian Knight",
  "role": "front-end",
  "welcomeMessage": "Afternoon Naps",
  "contacts": {
    "mobile": "555",
    "email": "example@email.com",
    "github": "MartianKnight",
    "twitter": "@yes",
    "location": "Charlotte, NC"
  },
  "skills": ["Awesome","Sleepy"]
}

// Education
var education = {
  "schools": [
    {
      "name": "UNCC",
      "location": "Charlotte, NC",
      "degree": "BS",
      "majors": ["CS"],
      "dates": 2009,
      "url": "http://example.com"
    },
    {
      "name": "Georgia Tech",
      "location": "Atlanta, GA",
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

bio.display = function() {
  $("#header").append(HTMLskillsStart);

  for (skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formattedSkill);
  }
}

bio.display();

work.display = function() {
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
}

work.display();

function inName(name) {
  var name = bio.name;
  var nameParts = name.split(" ");
  nameParts[0] = nameParts[0].charAt(0).toUpperCase() + nameParts[0].slice(1).toLowerCase();
  nameParts[1] = nameParts[1].toUpperCase();
  name = nameParts.join(" ");
  return name;
}

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].description);


    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDates);
    $(".project-entry:last").append(formattedDescription);
  }
}

projects.display();

$("#mapDiv").append(googleMap);
