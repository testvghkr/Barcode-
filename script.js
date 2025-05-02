document.getElementById("pakketForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const naam = document.getElementById('naam').value;
    const code = document.getElementById('code').value;
    const bedrijf = document.getElementById('bedrijf').value;
    const bestemming = document.getElementById('bestemming').value;

    // Maak een pakketobject
    const pakket = {
        naam: naam,
        code: code,
        bedrijf: bedrijf,
        bestemming: bestemming
    };

    // Voeg het pakket toe aan de lijst (client-side)
    const pakketList = document.getElementById("pakketList");
    const listItem = document.createElement("li");
    listItem.textContent = `Pakket: ${naam}, Code: ${code}, Bedrijf: ${bedrijf}, Bestemming: ${bestemming}`;
    pakketList.appendChild(listItem);

    // Hier zou je de data naar de server moeten sturen
    // Voor nu voegen we het lokaal toe aan de lijst
    alert("Pakket toegevoegd!");
});