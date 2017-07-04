# Failures & Process of Change 

### Verbs
Our script for highlighting the passive voice underwent several changes before we settled for a code that seemed to cover most grammatical cases, including exceptions, of the passive voice. Initially, we had created a single variable in our script with an array of auxilary verbs that shared a specific pattern. We wrote this array using regular expressions, as follows:<br><br>
    "were\\s+ed",<br>
    "were\\s+en",<br>
    "was\\s+en",<br>
    "was\\s+ed",<br><br>
We listed each auxilary verb twice, followed by a space and a verb with a "ed" or "en" ending, to cover the most common pattern of the passive voice. However, this array would not address irregular passive verbs, such as "was shot" or "is put," which do not share the same ending pattern. We then created another varriable with an array of irregular verbs. To avoid overlap, we changed our first array to include only auxilary verbs without an "ed" or "en" verb ending:<br><br>
    "was",<br>
    "is",<br>
    "being",<br>
    "is\\s+being",<br>
    "has\\s+been",<br>
    "had\\s+been"<br><br>
Our second variable, then, contained all regular verb endings and irregular verbs:<br><br>
    "\\w+en\\b",<br>
    "\\w+ed\\b",<br>
    "put",<br>
    "thrown"<br><br>
We combined both arrays into a new variable which could then be processed through our highlighting function. Although fairly comprehensive, this code still fails to identify certain forms of the passive voice, such as past participles and adjectival or adverbal phrases. For instance, our code could not identify the passive voice in a sentence with the following grammatical structure:<br><br>
    He had his car cleaned by him.<br><br>
The noun phrase "his car" separates "had" and "cleaned," a word pairing that our script could otherwise identify if they were not separated. We have not yet been able to formulate a regular expression that could include these kinds of grammatical exceptions.<br><br>

### Sentences and Scoring
Currently, our rating system calculates the instances of passive voice on the sentence level. For instance, seven instances of the passive voice within seven sentences of a given text results in a "100% Passified" rating; ten instances in seven sentences results in "125% Passified." We are still working on creating a regular expression that accurately identifies sentences and thus produce a more accurate score. Currently, our script idenifies abbreviations or title, such as "Mr." or "i.e.", as sentences. <br><br>

### Tweeting
Because our code operates within a browser pop-up window, TwitterDev's official code for embedding a share-to-Twitter function in a webpage does not entirely translate to our extension. Consequently, we have had to adapt the code for our extension.
<br><br>

### Simplify, Simplify, Simplify
Our minimalist design values consistently challenged us to simplify our code. One significant change was reducing the number of button options in our pop-up browser. Initially, we had individual buttons for highlighting the passive voice and scoring the page. We combined both functions into one button, so that the extension both highlights and scores together. While part of the impetus to this decision was simplifying the code, we also wanted to make the scoring feature more explicit. By combining the highlighting and scoring feature, users are now confronted automatically with explicit data that they must respond to. This explicitness intentionally counteracts the forms of passivitiy our extension is exposing. <br><br>Other simplifications included eliminating redundancy in our code, reducing the number of scripts in our extension, and maintaining a straightforward interface.
