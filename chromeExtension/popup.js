document.addEventListener('DOMContentLoaded', function () {
    console.log("1 clicked");
    var connectMeButton = document.getElementById('connectMe');
    connectMeButton.addEventListener('click', function () {
        console.log("2 clicked");
        //Download jQuery and include it with your extension. Loading things from an 
        //  external resource is a security issue.
        chrome.tabs.executeScript({file:"jquery-3.1.1.min.js"});
        chrome.tabs.executeScript({file:"contentScript.js"});
    }, false);
}, false);