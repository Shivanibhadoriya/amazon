
// for arranging the navigation bar 

$(document).ready(function(){
    // Prevent default behavior of tab links
    $('#myTabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    // Activate a specific tab (e.g., "profile")
    $('#myTabs a[href="#profile"]').tab('show');
});

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Remove active class from all links
            links.forEach(link => link.classList.remove('active'));

            // Add active class to the clicked link
            this.classList.add('active');
        });
    });
});

// here I have settled the menu bar clickable

