$(document).ready(function(){ 

    var userFeed = new Instafeed({
        get: 'user',
        userId: '8788911311',
        accessToken: '8788911311.1677ed0.7445b02a483740658179b5ed09579475',
        resolution: 'standard_resolution',
        limit: 23
    });
    
    userFeed.run();
    
    setTimeout(function(){
        $('.instafeed').addClass('shadowed');
    }, 100);

});