document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("checkPage").addEventListener('click', () => {

    function modifyDOM() {
        //You can play with your DOM here or check URL against your regex
        //return document.body.innerHTML;
		var results = {};

		var verbs = [//verbs
		"\\w+en\\b",
		"\\w+ed\\b",
		"put",
		"thrown",
		"shot",
		"said",
		"made",
		"built",
		"read",
		"told"
		];

		var auxilary = [//auxilary_verbs
		"got", 
		"gets",
		"get",
		"were",
		"was",
		"is",
		"being",
		"is\\s+being",
		"has\\s+been",
		"had\\s+been",
		"have\\s+been",
		"having\\s+been",
		"been",
		"be",
		"to\\s+be",
		"are",
		"are\\s+being",
		];
		
		var by = [
		"\\w+ed\\b\\s+by",
		"\\w+en\\b\\s+by"
		];
		
		var combinedArray = [];
		for(var j = 0; j < verbs.length; j++) {
			for(var k = 0; k < auxilary.length; k++) {
				combinedArray.push(auxilary[k] + ' ' + verbs[j]);
			}
		}
        //this line will look for all <p> elements
		var htmlElements = ["p","li","td","h1"];
		//tagging passive instances
        for(var h = 0; h < htmlElements.length; h++) {
			var elements = document.getElementsByTagName(htmlElements[h])
			for(var i = 0; i < elements.length; i++) {
				for(var p = 0; p < combinedArray.length; p++) {
					var text = elements[i].innerHTML;
					var newText = '';
						var re = eval( '/(' + combinedArray[p] + ')/gim');
						newText = text.replace(re, '<span class="passives">$1<\/span>') ;
					if (newText !== text) {
						elements[i].innerHTML = newText;
					}
				}
			}
        }
		var sentences = [
		//"(\\w+)([.!?][^a-z\\d\_\&\<\>\"\']?)"
		"(\\w+)([.!?][^a-z\\d\_\&\<\>\"\']?)"
		];
		var exceptions = [
		"Mrs.",
		"Mr.",
		"Dr.",
		"Jr.",
		"Sr.",
		"e.g.",
		"i.e.",
		"e.x."
		];
		
        //this line will look for all <p> elements
		var htmlElements = ["p","li","hi","td"];
		//tagging total sentences
        for(var h = 0; h < htmlElements.length; h++) {
			var elements = document.getElementsByTagName(htmlElements[h])
			for(var i = 0; i < elements.length; i++) {
			for(var p = 0; p < sentences.length; p++) {
				var text = elements[i].innerHTML;
					var newText = '';
						var re = eval( '/' + sentences[p] + '/g');
						newText = text.replace(re, '$1<span class="sentences">$2<\/span>') ;
					if (newText !== text) {
						elements[i].innerHTML = newText;
					}
				}
			}
        }
		
	results.passiveCount = document.getElementsByClassName('passives').length;
	results.sentenceCount = document.getElementsByClassName('sentences').length;
	results.url = window.location.href;
	return results;
	}
    //We have permission to access the activeTab (the webpage), so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
		//this accesses the popup.html
		document.getElementById("pageResults").innerHTML = results[0].passiveCount;
		if (results[0].passiveCount !== 0 && results[0].sentenceCount !== 0) {
		var finalScore = (results[0].passiveCount/results[0].sentenceCount).toFixed(4)*100 + "%";
			document.getElementById("scoreResults").innerHTML = finalScore;
			document.getElementById("link1").href = "https://twitter.com/intent/tweet?text=" + encodeURI(finalScore) + '%20Passified:%20' + results[0].url;	
		}
    });
  }, false);
}, false);


