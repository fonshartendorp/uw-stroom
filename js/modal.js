// Create modal for the right offerte.
function createOfferteModal(pakket) {
    $('#title').html(pakket);

    if (pakket == 'monitoring') {
        $('#offerte_content').html(
            "  Het <strong>monitoring</strong> pakket bestaat enkel uit een <strong>monitoringsysteem</strong>. Door Uw-Stroom te laten monitoren, hoeft u zelf niet meer naar de installatie om te kijken en kunt u zorgeloos genieten van de zon."
        );
    } else if (pakket == 'normaal') {
        $('#offerte_content').html(
            "  Het <strong>normaal</strong> pakket bestaat uit een <strong>monitoringsysteem</strong>, <strong>onderhoud en garantie</strong> en <strong>PPA advies</strong>."
        );
    } else if (pakket == 'premium') {
        $('#offerte_content').html(
            "  Het <strong>premium</strong> pakket bestaat uit een <strong>monitoringsysteem</strong>, <strong>onderhoud en garantie</strong> en <strong>PPA advies</strong>. Daarnaast eventuele aanvullende eisen. Wij kunnen maatwerk leveren op aanvullende eisen. Denk aan extra keuringen na noodweer etc"
        );
    }

    // Add hidden textinput to the form.
    $('<input>').attr({
        type: 'hidden',
        id: 'pakket-offerte',
        name: 'pakket-offerte',
        value: pakket
    }).appendTo('#offerte');

}
