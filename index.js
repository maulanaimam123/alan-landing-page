// make go-up button appears after certain threshold
function toggleGoUpButton() {
  var goUpButton = $("a")[8];
  var scrollY = $(document).scrollTop();
  if (scrollY > 400) {
    $(goUpButton).removeClass("invisible");
  } else {
    $(goUpButton).addClass("invisible");
  }
}
document.addEventListener("scroll", toggleGoUpButton);
