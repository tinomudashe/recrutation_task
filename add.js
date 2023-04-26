// Get a reference to the Bootstrap map element
const mapElement = document.querySelector('.map');

// Create a new div element
const newDiv = document.createElement('div');

// Add some CSS styles to the new div
newDiv.style.display = 'flex';
newDiv.style.alignItems = 'center';
newDiv.style.justifyContent = 'center';
newDiv.style.padding = "20px";

// Set the class of the new div to "map-button"
newDiv.className = 'map-button';

// Create a new button element
const newButton = document.createElement('button');

newButton.style.backgroundColor = "violet";
newButton.style.color = "#fff";
newButton.style.border = "none";
newButton.style.padding = "10px";
newButton.style.borderRadius = "5px";
newButton.style.cursor = "pointer";

// Set the text of the button to "View on Google Maps"
newButton.textContent = 'linking do Google maps';

// Set the class of the button to "btn btn-primary"
newButton.className = 'btn btn-primary';

// Set the link of the button to Google Maps
newButton.onclick = function() {
    window.open('https://maps.google.com');
};

// Add the button to the new div
newDiv.appendChild(newButton);

// Add the new div to the map element
mapElement.appendChild(newDiv);