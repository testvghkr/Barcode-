document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("pakketForm");
    const barcodeCanvas = document.getElementById("barcode");
    const pakketLijst = document.getElementById("pakketLijst");

    function toonPakketten() {
        const pakketten = JSON.parse(localStorage.getItem("pakketten") || "[]");
        pakketLijst.innerHTML = "";
        pakketten.forEach((pakket, index) => {
            const div = document.createElement("div");
            div.className = "pakket";
            div.innerHTML = `
                <div>
                    <strong>${pakket.naam}</strong><br>
                    <span>${pakket.code}</span>
                </div>
                <button onclick="verwijderPakket(${index})">Verwijder</button>
            `;
            pakketLijst.appendChild(div);
        });
    }

    window.verwijderPakket = function(index) {
        const pakketten = JSON.parse(localStorage.getItem("pakketten") || "[]");
        pakketten.splice(index, 1);
        localStorage.setItem("pakketten", JSON.stringify(pakketten));
        toonPakketten();
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const naam = document.getElementById("pakketNaam").value;
        const code = document.getElementById("barcodeInput").value;

        JsBarcode(barcodeCanvas, code, { format: "CODE128", displayValue: true, fontSize: 36 });

        const pakketten = JSON.parse(localStorage.getItem("pakketten") || "[]");
        pakketten.push({ naam, code });
        localStorage.setItem("pakketten", JSON.stringify(pakketten));

        document.getElementById("pakketNaam").value = "";
        document.getElementById("barcodeInput").value = "";
        toonPakketten();
    });

    toonPakketten();
});
