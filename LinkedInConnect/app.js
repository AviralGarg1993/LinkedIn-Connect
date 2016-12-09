// Every 1 second, click all the connect buttons on the result page 
window.setInterval(function () {
    $("a:contains('Connect')").each(function (index, a) {
        $(this).trigger('click')
    });

    //Scroll down to the button of the page
    window.scrollTo(0, document.body.scrollHeight);
}, 1000);

//Click Next after every 5 seconds
window.setInterval(function () {
    $("a:contains('Next >')")[0].click();
}, 5000);
