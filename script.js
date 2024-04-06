document.addEventListener("DOMContentLoaded", function() {
    const planets = [
        { name: "Mercury", description: "Mercury is the smallest planet in the Solar System and the closest to the Sun." },
        { name: "Venus", description: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty." },
        { name: "Earth", description: "Earth is the third planet from the Sun and the only astronomical object known to harbor life." },
        { name: "Mars", description: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System." },
        { name: "Jupiter", description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System." },
        { name: "Titan", description: "Titan is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter." }
    ];

    const planetContainer = document.getElementById("planetContainer");

    planets.forEach(planet => {
        const planetDiv = document.createElement("div");
        planetDiv.classList.add("planet");

        const planetImage = document.createElement("img");
        planetImage.src = `images/${planet.name.toLowerCase()}.jpg`;
        planetImage.alt = planet.name;
        planetDiv.appendChild(planetImage);

        const planetDescription = document.createElement("p");
        planetDescription.textContent = planet.description;
        planetDiv.appendChild(planetDescription);

        planetContainer.appendChild(planetDiv);
    });
});
function browseAPI() {
    const selectedDate = document.getElementById('selectedDate').value;
    
    window.location.href = `browse_api.html?date=${selectedDate}`;
}
