/*
---------------
  WORK SECTION
---------------
*/
var work = {
  "jobs": [
    {
      "employer": "Duke Energy",
      "title": "Mobile Application Developer",
      "location": "Charlotte, NC",
      "dates": 2014,
      "description": "Mobile Apps"
    },
    {
      "employer": "Netapp",
      "title": "Technical Marketing Engineer",
      "location": "Raleigh, NC",
      "dates": 2013,
      "description": "Website Dashboard"
    },
    {
      "employer": "Netapp",
      "title": "Intern",
      "location": "Raleigh, NC",
      "dates": 2012,
      "description": "Performance Testing in Powershell"
    }
  ]
}

work.display = function() {
  // Start manipulating the work json
  $("#workExperience").append(HTMLworkStart);
  for (job in work.jobs) {

    // Format data by replacing the %data% in the variables defined inside of helper.js
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
      "description": "Tracked ants in a video frame",
      "image": "http://placehold.it/100x100"
    },
    {
      "title": "Mens Homeless Shelter",
      "dates": 2012,
      "description": "Visual Basic script for volunteer login",
      "image": "http://placekitten.com/100/100"
    },
    {
      "title": "NightShift",
      "dates": 2015,
      "description": "Worked in a team to created an open source project",
      "image": "http://placepuppy.it/100/100"
    }
  ]
}

projects.display = function() {
  // Start manipulating the projects json
  $("#projects").append(HTMLprojectStart);
  for (project in projects.projects) {

    // Format data by replacing the %data% in the variables defined inside of helper.js
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
  // Manipulating the bio json
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
  var formattedPic = HTMLbioPic.replace("%data%", bio.contacts.picture);
  $("#header").prepend(formattedMessage);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  // Manipulating the bio.contacts json
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

  // There are two areas to add the contacts information
  var idStrings = ["#topContacts", "#footerContacts"];
  for (var i=0, id; id = idStrings[i]; i++) {
    $(id).append(formattedMobile);
    $(id).append(formattedEmail);
    $(id).append(formattedTwitter);
    $(id).append(formattedGithub);
    $(id).append(formattedBlog);
    $(id).append(formattedLocation);
  }

  $("#header").append(HTMLskillsStart);
  $("#skillsChart").append(HTMLskillsList);

  for (var i=0; i < bio.skills.length; i++) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
  }
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
  // Start manipulating the education json
  $("#education").append(HTMLschoolStart);

  // Grab the school json node
  for (school in education.schools) {

    // Format data by replacing the %data% in the variables defined inside of helper.js
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

  // Grab the online json node
  for (course in education.onlineCourses) {

    // Format data by replacing the %data% in the variables defined inside of helper.js
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
  "organizations": [
    {
      "name": "Habitat for Humanity",
      "location": "Raleigh, NC",
      "dates": "2013 - 2014",
      "url": "http://www.habitatcharlotte.org/",
      "description": "Fix up houses"
    },
    {
      "name": "Citizens School",
      "location": "Charlotte, NC",
      "dates": "2014",
      "url": "http://www.citizenschools.org/",
      "description": "Taught electricity to middle school kids"
    },
    {
      "name": "Mens Homeless Shelter",
      "location": "Charlotte, NC",
      "dates": "2014 - Future",
      "url": "http://www.mensshelterofcharlotte.org/",
      "description": "Help made meals"
    },
    {
      "name": "Toastmasters",
      "location": "Charlotte, NC",
      "dates": "2014 - Future",
      "url": "http://highenergy.toastmastersclubs.org/",
      "description": "Engaged in membership drives"
    },
    {
      "name": "Habitat for Young Professionials",
      "location": "Charlotte, NC",
      "dates": "2014 - Future",
      "url": "http://www.hypcharlotte.org/",
      "description": "HYP member"
    },
    {
      "name": "Assistant Soccer Coach",
      "location": "Charlotte, NC",
      "dates": "2011 - Future",
      "url": "#",
      "description": "Coach high school and middle school soccer"
    }
  ]
}

volunteer.display = function() {
  // Start manipulating the volunteer json
  $("#volunteer").append(HTMLvolunteerStart);
  for (voluntee in volunteer.organizations) {

    // Format data by replacing the %data% in the variables defined inside of helper.js
    var formattedName = HTMLvolunteerName.replace("%data%", volunteer.organizations[voluntee].name);
    formattedName = formattedName.replace("%url%", volunteer.organizations[voluntee].url);
    var formattedDates = HTMLvolunteerDates.replace("%data%", volunteer.organizations[voluntee].dates);
    var formattedLocation = HTMLvolunteerLocation.replace("%data%", volunteer.organizations[voluntee].location);
    var formattedDescription = HTMLvolunteerDescription.replace("%data%", volunteer.organizations[voluntee].description);

    $(".volunteer-entry:last").append(formattedName);
    $(".volunteer-entry:last").append(formattedDates);
    $(".volunteer-entry:last").append(formattedLocation);
    $(".volunteer-entry:last").append(formattedDescription);
  }
}

volunteer.display();

// Change a name to allow different cases
function inName(name) {
  var name = bio.name;
  var nameParts = name.split(" ");
  nameParts[0] = nameParts[0].charAt(0).toUpperCase() + nameParts[0].slice(1).toLowerCase();
  nameParts[1] = nameParts[1].toUpperCase();
  name = nameParts.join(" ");
  return name;
}

$("#mapDiv").append(googleMap);
