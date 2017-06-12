document.addEventListener('DOMContentLoaded', function() {
	//console.log('hi')
  document.getElementById("checkPage").addEventListener('click', () => {

    function modifyDOM() {
        //You can play with your DOM here or check URL against your regex
        //return document.body.innerHTML;

        //define passive voice text to find and mark
        var passives = [
		"is\\s+being\\s+\\w+en\\b",
		"is\\s+being\\s+\\w+ed\\b",
		"has\\s+been\\s+\\w+en\\b",
		"has\\s+been\\s+\\w+ed\\b",
		"was\\s+\\w+ed\\b",
		"was\\s+\\w+en\\b",
		"were\\s+\\w+en\\b",
		"is\\s+\\w+ed\\b", 
		"is\\s+\\w+en\\b",
		"being\\s+\\w+ed\\b", 
		"being\\s+\\w+en\\b",
		"was\\s+shot"

		];

        //this line will look for all <p> elements
		var htmlElements = ["p","li","td","h1"];
        for(var h = 0; h < htmlElements.length; h++) {
			var elements = document.getElementsByTagName(htmlElements[h])
			for(var i = 0; i < elements.length; i++) {
				var text = elements[i].innerHTML;
				for(var p = 0; p < passives.length; p++) {
					var re = eval( '/(' + passives[p] + ')/gi');
					text = text.replace(re, '<span class="passive">$1<\/span>') ;
				}
			elements[i].innerHTML = text;
           }
        }
		
    }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        //console.log('Popup script:')
        //console.log(results[0]);
    });
  }, false);
}, false);

