$("#main").append(internationalizeButton);

// dot object notation
/*
bio.city = "Mountain View";
$("#main").append(bio.city);

// bracket object notation
bio["email"] = "test@email.com";
$("#main").append(bio["email"]);
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

/*
---------------
  PROJECTS SECTION
---------------
*/
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
    "twitter": "@yes",
    "location": "Charlotte, NC"
  },
  "skills": ["Awesome","Sleepy","More"]
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
      "title": "ud804",
      "school": "Udacity",
      "dates": 2014,
      "url": "http://example.com"
    }
  ]
}
education.display = function() {
  // Schools
  $("#education").append(HTMLschoolStart);
  for (school in education.schools) {
    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

    $(".education-entry:last").append(formattedName);
    $(".education-entry:last").append(formattedDegree);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedLocation);
    $(".education-entry:last").append(formattedMajor);
  }

  // Online
  $("#education").append(HTMLonlineClasses);
  $("#education").append(HTMLonlineStart);
  for (course in education.onlineCourses) {

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

    $(".online-entry:last").append(formattedTitle);
    $(".online-entry:last").append(formattedSchool);
    $(".online-entry:last").append(formattedDates);
    $(".online-entry:last").append(formattedURL);
  }
}

education.display();

function inName(name) {
  var name = bio.name;
  var nameParts = name.split(" ");
  nameParts[0] = nameParts[0].charAt(0).toUpperCase() + nameParts[0].slice(1).toLowerCase();
  nameParts[1] = nameParts[1].toUpperCase();
  name = nameParts.join(" ");
  return name;
}

$("#mapDiv").append(googleMap);
