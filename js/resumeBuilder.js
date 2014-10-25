var name = "MartianKnight";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Front-End Ninja";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
