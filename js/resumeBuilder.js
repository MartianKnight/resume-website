/*
---------------
  NOTES SECTION
---------------
// dot object notation
bio.city = "Mountain View";
$("#main").append(bio.city);

// bracket object notation
bio["email"] = "test@email.com";
$("#main").append(bio["email"]);

// What is the last object notation?
*/

/*
---------------
  WORK SECTION
---------------
*/
var work = {
  "jobs": [
    {
      "employer": "Future Homes",
      "title": "Explorer",
      "location": "Charlotte, NC",
      "dates": 2014,
      "description": "Mobile Apps"
    },
    {
      "employer": "The 9th Planet",
      "title": "Navigator",
      "location": "Raleigh, NC",
      "dates": 2013,
      "description": "Website Dashboard"
    },
    {
      "employer": "The 9th Planet",
      "title": "Intern",
      "location": "Raleigh, NC",
      "dates": 2012,
      "description": "Performance Testing in Powershell"
    }
  ]
}
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
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);
  }
}

work.display();

/*
---------------
  PROJECTS SECTION
---------------
*/
var projects = {
  "projects": [
    {
      "title": "UNCC Research Lab",
      "dates": 2011,
      "description": "Tracking ants",
      "image": "http://placehold.it/100x100"
    },
    {
      "title": "Mens Homeless Shelter",
      "dates": 2012,
      "description": "Visual Basic script for volunteer login",
      "image": "http://placekitten.com/100/100"
    },
    {
      "title": "Built lab",
      "dates": 2013,
      "description": "fun",
      "image": "http://placepuppy.it/100/100"
    }
  ]
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

/*
---------------
  BIO SECTION
---------------
*/
var bio = {
  "name": "Martian Knight",
  "role": "front-end",
  "welcomeMessage": "Afternoon Naps",
  "contacts": {
    "mobile": "555",
    "email": "example@email.com",
    "github": "MartianKnight",
    "twitter": "@AfternoonNaps",
    "location": "Charlotte, NC"
  },
  "skills": ["Naps","Sleep","Hammocks","Closed Eyes"]
}
bio.display = function() {
  // Header
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
  var formattedPic = HTMLbioPic.replace("%data%", bio.contacts.picture);
  $("#header").prepend(formattedMessage);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  // Contacts
  //$("#footerContacts").append(HTMLcontactGeneric);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

  var idStrings = ["#topContacts", "#footerContacts"];
  for (var i=0, id; id=idStrings[i]; i++) {
    $(id).append(formattedMobile);
    $(id).append(formattedEmail);
    $(id).append(formattedTwitter);
    $(id).append(formattedGithub);
    $(id).append(formattedBlog);
    $(id).append(formattedLocation);
  }

  $("#header").append(HTMLskillsStart);
  $("#skillsChart").append(HTMLskillsList);
  //$("#skillsChart").append(HTMLskillsStart);
  for (var i=0; i < bio.skills.length; i++) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);

    $("#skills").append(formattedSkill);
    /*
    console.log(formattedSkill);

    var idStrings = ["#skills", "#skillsList"];
    for (var i=0, id; id=idStrings[i]; i++) {
      $(id).append(formattedSkill);
      console.log("in loop" + i);
    }
    */
  }

  //var HTMLcontactGeneric = "<li class='flex-item'><span class='orange-text'>%contact%</span><span class='white-text'>%data%</span></li>";

}

bio.display();

/*
---------------
  EDUCATION SECTION
---------------
*/
var education = {
  "schools": [
    {
      "name": "UNCC",
      "location": "Charlotte, NC",
      "degree": "BS",
      "majors": ["Computer Science"],
      "dates": "2009 - 2012",
      "url": "http://www.uncc.edu/"
    },
    {
      "name": "Georgia Tech",
      "location": "Atlanta, GA",
      "degree": "MS",
      "majors": ["Computer Science"],
      "dates": "2015 - Future",
      "url": "http://www.gatech.edu/"
    }
  ]
  ,
  "onlineCourses": [
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": "October 2014",
      "url": "https://www.udacity.com/course/ud804"
    },
    {
      "title": "UX Design for Mobile Developers",
      "school": "Udacity and Google",
      "dates": "October 2014",
      "url": "https://www.udacity.com/course/ud849"
    },
    {
      "title": "How to Use Git and GitHub",
      "school": "Udacity",
      "dates": "October 2014",
      "url": "https://www.udacity.com/course/ud775"
    },
    {
      "title": "Intro to HTML and CSS",
      "school": "Udacity",
      "dates": "October 2014",
      "url": "https://www.udacity.com/course/ud304"
    },
    {
      "title": "Object-Oriented JavaScript",
      "school": "Udacity and Hack Reactor",
      "dates": "October 2014",
      "url": "https://www.udacity.com/course/ud015"
    }
  ]
}
education.display = function() {
  // Schools
  $("#education").append(HTMLschoolStart);
  for (school in education.schools) {
    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    formattedName = formattedName.replace("%url%", education.schools[school].url);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[0]);
    var formattedNameDegree = formattedName + formattedDegree;

    $(".education-entry:last").append(formattedNameDegree);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedLocation);
    $(".education-entry:last").append(formattedMajor);
  }

  // Online
  $("#education").append(HTMLonlineClasses);
  $("#education").append(HTMLonlineStart);
  for (course in education.onlineCourses) {

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    formattedTitle = formattedTitle.replace("%url%", education.onlineCourses[course].url);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);

    var formattedTitleSchool = formattedTitle + formattedSchool;

    $(".online-entry:last").append(formattedTitleSchool);
    $(".online-entry:last").append(formattedDates);
  }
}

education.display();

/*
---------------
  VOLUNTEER SECTION
---------------
*/
var volunteer = {
  //add json
}


function inName(name) {
  var name = bio.name;
  var nameParts = name.split(" ");
  nameParts[0] = nameParts[0].charAt(0).toUpperCase() + nameParts[0].slice(1).toLowerCase();
  nameParts[1] = nameParts[1].toUpperCase();
  name = nameParts.join(" ");
  return name;
}

$("#mapDiv").append(googleMap);
