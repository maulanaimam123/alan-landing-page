$(document).ready(function () {
  // make go-up button appears after certain threshold
  var goUpButton = $(".go-up-btn");
  function toggleGoUpButton() {
    var scrollY = $(document).scrollTop();
    if (scrollY > 400) {
      $(goUpButton).removeClass("invisible");
    } else {
      $(goUpButton).addClass("invisible");
    }
  }
  document.addEventListener("scroll", toggleGoUpButton);

  // make navbar collapsible through hamburger button
  $(".hamburger-btn").click(function () {
    $(".navbar").slideToggle("slow");
    $(".hamburger-icon").toggle();
    $(".x-icon").toggle();
  });
});
