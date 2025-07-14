$(document).ready(function() {
  $("#toggleBtn").click(function() {
    $("body").toggleClass("dark-mode");

    if ($("body").hasClass("dark-mode")) {
      $("#toggleBtn").text("☀️ Light Mode");
    } else {
      $("#toggleBtn").text("🌙 Dark Mode");
    }
  });
});
