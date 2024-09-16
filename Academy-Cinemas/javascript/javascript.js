
/* Initialize popovers*/
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

popoverTriggerList.forEach(function(element) {
    var imgSrc = element.getAttribute('data-bs-img');
    var content = "<img class='star-rating' src='" + imgSrc + "'>";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover'
    });
});

/* Initailze Toast*/
var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl)
})

// Function to display toast with selected options
function displaySelectedMovieOptions() {
    var movie = document.getElementById("movieSelect").options[document.getElementById('movieSelect').selectedIndex].text;
    var time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text;
    var quantity = document.getElementById('quantity').value;

    var message = "Purchase confirmed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity;

    // Display Toast
    var toastBody = document.getElementById('toastBody');
    toastBody.textContent = message;
    var toast = new bootstrap.Toast(document.getElementById('toastDisplay'));
    toast.show()
}

function buyTickets() {
    displaySelectedMovieOptions();
}

/* Initialize tool tips */
var movieSelectTT = document.getElementById('movieSelect');
var showTimesTT = document.getElementById('timeSelect');
var ticketQtTT = document.getElementById('quantity');

var msTooltip = new bootstrap.Tooltip(movieSelectTT);
var stTooltip = new bootstrap.Tooltip(showTimesTT);
var tqTooltip = new bootstrap.Tooltip(ticketQtTT);