# Failures & Process of Change 

<b> Verbs </b>
<br>
We had to rewrite the script for highlighting instances of the passive voice several times before finding a code that seemed best able to account for most grammatical cases, including exceptions. Initially, we had created a single variable with an array of auxilary verbs using regular expressions, as follows:<br>
    "were\\s+ed",<br>
    "were\\s+en",<br>
		"was\\s+en",<br>
    "was\\s+ed",<br>
We listed each auxilary verb twice followed by a space and a verb with a "ed" or "en" ending to cover the most common form of the passive voice. However, this arary would not address irregular passive verbs, such as "was shot" or "is put." We created another varriable with an array of irregular verbs. To avoid overlap, we changed our first array to include only auxilary verbs without an "ed" or "en" verb ending:<br>
    "was",<br>
		"is",<br>
		"being",<br>
		"is\\s+being",<br>
		"has\\s+been",<br>
		"had\\s+been"<br>
Our second variable, then, contained all regular verb endings and irregular verbs:<br>
    "\\w+en\\b",<br>
		"\\w+ed\\b",<br>
		"put",<br>
		"thrown"<br>
We combined both arrays into a new variable which could then be processed through our highlighting function. <br>

Although fairly comprehensive, this code still fails to identify certain forms of the passive voice, such as past participles and adjectival or adverbal phrases. For instance, our code could not identify the passive voice in a sentence with the following grammatical structure:<br>
    He had his car cleaned by him.<br>
The noun phrase "his car" separates "had" and "cleaned," which our code is not able to identify. We have not yet been able to formulate a regular expression that could include this kind of grammatical structure.<br>

<b> Sentences and Scoring </b>
<br>
Currently, our rating system calculates the instances of passive voice on a sentence level. Seven instances of the passive voice within seven sentences calculates as a text having a "100% Passified" rating, ten instances in seven sentences calculates as "125% Passified", etc.<br>
We are still working on creating a regular expression that accurately identifies sentences. The biggest difficulty is including exceptions in our variable, such as "Mr." or "i.e.". Other challenges have included avoiding urls in a webpage. <br>

<b>Tweeting</b><br>

Because our code operates within a browser pop-up window, TwitterDev's code for embedding a "share" function does not work properly. Consequently, we have had to adapt the code for our extension, although we are still working on sharing and embedding the webpage's url in a pregenerated tweet.

