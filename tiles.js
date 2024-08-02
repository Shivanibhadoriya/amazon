// Your JavaScript code in your_script.js
document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to item links
    var itemLinks = document.querySelectorAll(".item-link");
    itemLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var itemId = link.getAttribute("data-item-id");
            loadItemDetails(itemId);
        });
    });
});

function loadItemDetails(itemId) {
    // Fetch item details based on itemId
    // For demonstration purposes, let's assume item details are hardcoded
    var itemDetails = {
        name: "Example Item",
        description: "This is an example item.",
        price: "$99.99"
        // Add more details as needed
    };

    // Update the main content container with item details
    var mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
        <h2>${itemDetails.name}</h2>
        <p>${itemDetails.description}</p>
        <p>${itemDetails.price}</p>
        <!-- Add more HTML for item details as needed -->
    `;
}