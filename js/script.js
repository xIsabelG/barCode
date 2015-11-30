$('#reader').html5_qrcode(function(id){
         console.log(id);
    },
    function(error){
        //show read errors 
    }, function(videoError){
        //the video stream could be opened
    }
);
