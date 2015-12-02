window.addEventListener("load", function() {
var art = new Array ({  // 0
                        title: "Nachtwacht",
                        // picture: "https://www.onlinegalerij.nl/de-top-10-beroemdste-schilderijen-aller-tijden/",
                        
                        description: "test"
                    });
				    ({  // 1
                        title: "De Schepping van Adam",
                        // picture: "https://www.onlinegalerij.nl/de-top-10-beroemdste-schilderijen-aller-tijden/",
                        description: "test1"
                    });
				    ({  // 2
                        title: "De geboorte van Venus",
                        // picture: "https://www.onlinegalerij.nl/de-top-10-beroemdste-schilderijen-aller-tijden/",
                        description: "test2"
                    });
				    ({  // 3
                        title: "De Schreeuw",
                        // picture: "https://www.onlinegalerij.nl/de-top-10-beroemdste-schilderijen-aller-tijden/",
                        description: "test3"
                    });


document.getElementById("reader").innerHTML = art[id];
$('#reader').html5_qrcode(function(id){
        var artwork = art[id];

        var titleElement = document.querySelector("#Nachtwacht");
        // var descriptionElement = document.querySelector("#NachtwachtDescription");
        // var pictureElement = document.querySelector("#");

        titleElement.innerHTML = artwork.title;
        // descriptionElement.innerHTML = artwork.description;
    },
    function(error){
        //show read errors 
    }, function(videoError){
        //the video stream could be opened
    }
);
});
