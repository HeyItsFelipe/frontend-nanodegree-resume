/*

This is file with content for building index.html

*/

/* Objects containing content */

var bio = {
	"name" : "Felipe Fernandez",
	"role" : "Front-End Web Developer",
	"contacts" : {
		"mobile" : "760-792-8765",
		"email" : "heyitsfelipe@gmail.com",
		"github" : "HeyItsFelipe",
		"location" : "Chino, CA"
	},
	"welcomeMessage" : "Welcome to Felipe's online resume!",
	"skills" : [
		"HTML", "CSS", "JavaScript", "Bootstrap", "JQuery"
	],
		"bioPic" : "images/me_300x300.jpg"
}

var education = {
	"schools" : [
		{
			"name" : "California State Polytechnic, Pomona",
			"location" : "Pomona, CA",
			"degree" : "Bachelor's",
			"majors" : ["Computer Engineering"],
			"dates" : "Graduated: June 2009",
			"url" : "http://www.csupomona.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Introduction to Programming Nanodegree",
			"school" : "Udacity",
			"dates" : "Completed: October 2015",
			"url" : "http://www.udacity.com/"
		},
		{
			"title" : "Front-End Web Design Nanodegree",
			"school" : "Udacity",
			"dates" : "In Progress",
			"url" : "http://www.udacity.com/"
		}
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "Sylvan Learning Center",
			"title" : "Teacher",
			"location" : "Chino, CA",
			"dates" : "August 2015 - Present",
			"description" : "Teaching children mathematics, reading, and writing."
		},
		{
			"employer" : "IES Engineering",
			"title" : "Instrumentation and Controls Engineer",
			"location" : "Bakersfield, CA",
			"dates" : "May 2014 - February 2015",
			"description" : "Delivered pizza."
		},
		{
			"employer" : "WorleyParsons",
			"title" : "Engineer I",
			"location" : "Arcadia, CA",
			"dates" : "September 2011 - August 2013",
			"description" : "Delivered pizza."
		},
		{
			"employer" : "Multi-Cultural Dance Center",
			"title" : "Dance Instructor",
			"location" : "Hesperia, CA",
			"dates" : "July 2011 - December 2011",
			"description" : "Delivered pizza."
		},
		{
			"employer" : "Mobile Binaries",
			"title" : "Telemarketer",
			"location" : "Irvine, CA",
			"dates" : "February 2011 - April 2011",
			"description" : "Delivered pizza."
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Intro to Programming Nanodegree Notes",
			"dates" : "Completed: October 2015",
			"description" : "Notes of my Intro to Programming Nanodegree Udacity course.",
			"images" : [
				"images/project1_400x200.jpg"
			]
		}
	]
}

bio.display = function() {

	/* Appending Header */

	var formattedheaderName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedheaderName);

	var formattedheaderRole = HTMLheaderRole.replace("%data%", bio.role);
	$(formattedheaderRole).insertAfter("#name");

	/* Appending Contacts to the top and footer */

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGitHub);
	$("#footerContacts").append(formattedGitHub);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

	/* Bio Pic and Welcome Message */

	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcome);

	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedPic);

	/* Appending Skills */

	if(bio["skills"].length > 0) {

		$("#header").append(HTMLskillsStart);

		for (skill in bio.skills) {

			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}

work.display = function() {

	for (job in work.jobs) {

		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);


		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}


education.display = function() {

	for (school in education.schools) {

		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
		$(".education-entry:last").append(formattedSchoolNameDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedSchoolMajor);
	}


	$("#education").append(HTMLonlineClasses);

	for (course in education.onlineCourses) {

		$("#education").append(HTMLschoolStart);

		var formattedCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedCourseTitleSchool = formattedCourseTitle + formattedCourseSchool;
		$(".education-entry:last").append(formattedCourseTitleSchool);

		var formattedCourseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedCourseDates);

		var formattedCourseURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedCourseURL);
	}
}

projects.display = function() {

	for (project in projects.projects) {

		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formattedImage);
	}
}

/* Display functions to display data */

bio.display();
work.display();
projects.display();
education.display();

/* Adding the map at the end */

$("#mapDiv").append(googleMap);


