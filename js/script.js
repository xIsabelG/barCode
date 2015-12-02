window.addEventListener("load", function () {
    var art = [
        {},
        {  // 1 in barcode
            title: "Nachtwacht",
            src: "https://www.onlinegalerij.nl/wp-content/uploads/2014/09/Rembrandt-De-Nachtwacht-600x500.jpg",
            description: "De Nachtwacht is het bekendste schilderij en meesterwerk van Rembrandt van Rijn en is ze zien in de Eregalerij van het Rijksmuseum. Rembrandt schilderde het tussen 1639 en 1642. De officiële naam luidt: De compagnie van kapitein Frans Banning Cocq en luitenant Willem van Ruytenburgh maakt zich gereed om uit te marcheren. Dit werk, een schuttersstuk, werd door een compagnie uit de schuttersgilde als groepsportret besteld. Het werd waarschijnlijk rond 1796/1797 voor het eerst De Nachtwacht genoemd. Volgens Ernst van de Wetering is het werk in zekere zin mislukt. De waarde van het schilderij kan niet in geld uitgedrukt worden. Het is niet te koop of ooit te koop geweest. De schutterij die destijds de opdracht aan Rembrandt verstrekte was een stedelijke instelling en De Nachtwacht is sindsdien eigendom van de gemeente Amsterdam, in eeuwigdurende bruikleen aan het Rijksmuseum."

        },
        {  // 2 in barcode
            title: "De Schepping van Adam",
            src: "https://onlinegalerij.nl/wp-content/uploads/2013/04/Creation-of-Adam.jpg",
            description: "De schepping van Adam is een onderdeel van het fresco op het gewelf van de Sixtijnse Kapel in Vaticaanstad geschilderd door Michelangelo rond 1511. Het werk is de uitbeelding van het Bijbels verhaal uit het boek Genesis waarin God de Vader leven blaast in Adam. Van de fresco zijn naar Genesis in de Sixtijnse Kapel is het chronologisch in het verhaal de vierde afbeelding. Michelangelo werkte deze fresco als een van de laatsten in de reeks af. Het werk meet 4,8 op 2,3 meter."


        },
        {  // 3 in barcode
            title: "De geboorte van Venus",
            src: "https://www.onlinegalerij.nl/wp-content/uploads/2013/04/De-Geboorte-van-Venus-is-een-schilderij-van-de-Italiaanse-kunstschilder-Sandro-Botticelli.-600x376.jpg",
            description: "De Geboorte van Venus is een schilderij van de Italiaanse kunstschilder Sandro Botticelli. Het hangt in de Uffizi galerij in de Italiaanse stad Florence. Het schilderij is vervaardigd met tempera op canvas en meet 172,5 cm bij 278,5 cm. Het beeldt de godin Venus die oprijst uit de zee als een volgroeide vrouw, zoals deze beschreven wordt in de Griekse mythologie. De naam van het werk is echter niet helemaal in overeenkomst met de gebeurtenis die erop staat afgebeeld, aangezien Venus volgens de legende uit het zeeschuim zou zijn geboren. Deze afbeelding toont echter haar aankomst in Cyprus, staande op een schelp. Er zijn ook verschillende verwijzingen naar Ovidius‘ Metamorphosen en Fasti en naar Angelo Poliziano‘s “Verzen”.Dit schilderij werd in opdracht van Lorenzo de Medici gemaakt voor Lorenzo di Pierfrancesco de Medicis Villa di Castello, rond 1483 of vroeger. Sommige specialisten beweren echter dat de Venus bestemd voor Pierfrancesco en het werk vermeld door Giorgio Vasari twee verschillende schilderijen zouden zijn, waarbij er een verloren zou zijn geraakt. Anderen denken dan weer dat het een ode aan de grote liefde van Giuliano di Piero de Medici, Simonetta Cattaneo Vespucci, zou zijn.In de klassieke oudheid was een schelp een metafoor voor een vagina. De pose van Botticellis Venus doet denken aan de Venus de Medici, een marmeren sculptuur uit de klassieke oudheid in de Medici collectie, die Botticelli had bestudeerd. Een detail van het schilderij is gebruikt als afbeelding op een van de Italiaanse euromunten."
        },
        {  // 4 in barcode
            title: "De Schreeuw",
            src: "https://www.onlinegalerij.nl/wp-content/uploads/2013/04/713px-The_Scream.jpg",
            description: "De Schreeuw is de naam van een viertal schilderijen en een lithografie van Edvard Munch uit 1893. De oorspronkelijke versie van de schreeuw uit 1893 hangt in het Nationaal kunstmuseum (Nasjonalgalleriet) in Oslo. Het geldt als het aangrijpendste schilderij van Munch. Het drukt het geestelijke leed en de emotionele kwelling uit die de schilder tijdens bepaalde perioden in zijn leven heeft gevoeld. Munch was een voorloper van het expressionisme, een stijl die emoties wilde weergeven. De Schreeuw is een psychisch zelfportret van Edvard Munch. Het is een schilderij gebaseerd op een eigen traumatische ervaring. Op een avond wandelde Munch met vrienden terug naar de stad Oslo. Ze bleven staan op een brug. Terwijl zijn vrienden doorliepen bleef Edvard staan, aangegrepen door het landschap en de lucht met de ondergaande zon. Hij hoorde en voelde het landschap rondom hem schreeuwen. Hij kreeg een onmachtig en depressief gevoel. Deze gebeurtenis maakte zo veel indruk op hem dat hij deze gebeurtenis later vastlegde op doek.Hij schilderde De Schreeuw in een periode na een bijzonder pijnlijke liefdesverhouding met een getrouwde vrouw genaamd Millie Thaulow. Tijdens de door jaloezie, achterdocht en pijn getekende relatie schilderde de kunstenaar een aantal doeken die het verloop van de verhouding illustreren. Toen zijn relatie met Millie Thaulow definitief voorbij was schilderde hij De Schreeuw. De ontzette, tot wanhoop gedreven figuur is dus eigenlijk Edvard Munch zelf.Het doek toont een in felle kleuren geschilderd en uit golvende lijnen opgebouwd landschap, waarin een spookachtige figuur de kijker aankijkt. Ook het lichaam van het wezentje kronkelt mee met het kronkelende landschap. De angst overheerst in de panische penseeltrekken die de geluidsgolven van de tomeloze schreeuw weergeven. De combinatie van felle en zachte kleuren verhoogt dit effect.Rechts op het schilderij bracht Edvard Munch een verticale balk aan om het schilderij smaller te doen lijken."
        }
    ];

    $('#reader').html5_qrcode(function (id) {
            var title = document.getElementById("title");
            var description = document.getElementById("description");
            var img = document.getElementById("img");

            img.innerHTML = '<img src="' + art[id].src + '">';
            title.innerHTML = art[id].title;
            description.innerHTML = art[id].description;
        },
        function (error) {
            //show read errors
        }, function (videoError) {
            //the video stream could be opened
        }
    );
});
