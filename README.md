# ExposéMoi: Uncovering the Politics of Today's Most Passive News Story (or Is It Just Bad Writing?)

Heidi Rennert and Rachelle Ann Tan

Link: https://github.com/heidre/projectDesign/


## What is ExposéMoi?

ExposéMoi is a web browser plug-in that (1) scans through journal and news articles and websites, (2) identifies the uses of the passive voice, and (3) assesses how the passive voice correlates to a journal’s political alignment. The plug-in (4) produces a score of the frequency of passive voice at the sentence level. 


## Why use ExposéMoi?

Recent media and news articles tend to use the passive voice to avoid blame or allocate responsibility, hide the agent, tone down intensity, complicate readability, and add verbiage and jargon to mask or distort the meaning of the text. Ultimately, the use of the passive voice is a technique for wilfully concealing the truth.


## Files and Specifications 

any comments about the code, data, metadata, markup, digitized materials; also a file manifest/recipe and list of relevant technical details 


## Instructions 

1. Install extension through chrome
2. Open the extension by clicking the pop-up on the top right-hand corner of the browser toolbar. 
3. Click "ExposeMoi" and wait for the page to load results. This will highlight the passive phrases in the webpage and list the total instances in the pop-up menu after "total".
4. Next, click "Score Page." This will highlight all the sentence endings in the webpage and calculate the occurance of the "total" score with sentence count to produce an overall percentage. This percentage serves as a "rating" for passive occurances per sencentence. 7 instances within 7 sentences will produce a %100 rating, and so forth.
5. Finally, click "Tweet Score." This button will redirect you to a separate tab with a pregenerated tweet that lists the score and url of the page you have just rated. 

A few notes:
1. The extension will only work if the steps are followed in this given order.
2. As there is no "reset" button, the page must be refreshed in order to begin again. 
3. If the pop-up is closed before completing all the steps, re-opening it and continuing on to the next step will not work. You must refresh the page and begin from the first step again. 


## Dependencies 

what else your project needs to work (e.g., Python libraries); you could also mention on what machines your project was tested (software, OS, versions, browsers) 


## ExposéMoi in Action!

We ran our plugin on Wikipedia's "English Passive Voice" article.

![ExposéMoi in Action!](https://github.com/heidre/projectDesign/documentation/ExposeMoi.png)


## Audience 

While journalists, news readers, and the general public are our primary audience, our project could also be a pedagogical tool for use in teaching composition. Teachers could use this plugin as a tool to teach elements of clear and effective writing, rhetorical analysis, paraphrasing, summarizing, and revision. 


## Process Documentation 

any remarks about process documentation (recordings, notes, screen grabs, bug reports, feature requests) you've included 


## History 

any remarks about the project's history or the history of the materials/files, including matters of provenance 


## Disclaimer

about use or context 


## License 

MIT and Creative Commons.


## Acknowledgments

Acknowledgements to the following:
- Chrome Developers for script resources on building chrome extensions
- TwitterDev for script on embedding tweets

Special Thanks to:
- Norbert Rennert


## Jokes and Humour 

remarks about what didn't work ("known bugs"), what's an experiment, possible/actual surprises, what could be improved


## Bibliography 

relevant reading and similar projects; also, source material


## FAQ

if you'd like to include one for your audience 


## Change Log 

Version 1.0 - Added the highlight passive construction feature.

Version 1.1 - Added the count passive construction feature.

Version 1.2 - Added the "Tweet Score" feature.

Version 1.3 - Combined the higlighting with the counting feature.

Version 1.4 - Changed the style of the interface's layout.
