# ExposéMoi: Uncovering the Politics of Today's Most Passive News Story (or Is It Just Bad Writing?)
Heidi Rennert & Rachelle Ann Tan

Contact: [hrennert@uvic.ca](mailto:hrennert@uvic.ca) and [rptan@uvic.ca](mailto:rptan@uvic.ca)

Project Link: https://github.com/heidre/projectDesign/

<br>

## What is ExposéMoi?
ExposéMoi is a web browser plug-in that (1) scans through journal and news articles and websites, (2) identifies the uses of the passive voice, and (3) assesses how the passive voice correlates to a journal’s political alignment. The plug-in (4) produces a score of the frequency of passive voice at the sentence level.

See our statement [here](https://github.com/heidre/projectDesign/blob/master/statements/index.md).

<br>

## Why use ExposéMoi?
Recent media and news articles tend to use the passive voice to avoid blame or allocate responsibility, hide the agent, tone down intensity, complicate readability, and add verbiage and jargon to mask or distort the meaning of the text. Ultimately, the use of the passive voice is a technique for wilfully concealing the truth.

<br>

## Who is ExposéMoi for?
While journalists, news readers, and the general public are our primary audience, our project could also be a pedagogical tool for use in teaching composition. Teachers could use this plugin as a tool to teach elements of clear and effective writing, rhetorical analysis, paraphrasing, summarizing, and revision.

Notes on accessibility [here](https://github.com/heidre/projectDesign/blob/master/audience/index.md).

<br>

## Files and Specifications 

All relevant files for use are stored under the file name "[extension.zip"](https://github.com/heidre/projectDesign/blob/master/extension.zip)":
- icon.png
- manifest.json
- passive2.js
- popup.html
- score.js
- styles.css

Total file size is 8 KB.

Notes on storage [here](https://github.com/heidre/projectDesign/blob/master/storage/index.md) and on metadata [here](https://github.com/heidre/projectDesign/blob/master/metadata/index.md).

<br>

## Instructions 
<b>Installing</b>
1. Download [extension.zip](https://github.com/heidre/projectDesign/blob/master/extension.zip).
2. Open chrome://extensions in Google Chrome.
3. Toggle on "Developer Mode" on top right of page.
4. Click "Load Unpacked Extension" and upload unzipped folder.

<br><b>Using ExposéMoi</b>
1. Open a text-heavy page on the browser for best results.
2. Open the extension by clicking the pop-up on the top right-hand corner of the browser toolbar. 
3. Click the "ExposéMoi" button and wait for the page to load results. This action will highlight the passive phrases in the webpage and list the total instances in the pop-up menu after "total."
4. The extension will automatically output a percentage for passive occurrences per sencentence in the article. (i.e., seven instances within seven sentences will produce a 100% rating, etc)
5. Finally, click "Tweet Score" to share score in a pre-generated tweet. This action will embedd the URL of the webpage with a score.

A few notes:
* The extension will only work if the steps are followed in the listed order.
* As there is no "Reset" button, the page must be refreshed in order to begin again. 
* If the pop-up is closed before completing all the steps, re-opening it and continuing to the next step will not work. You must refresh the page and begin from the first step again.

<br>

## Dependencies
The current version of ExposéMoi operates as a Google Chrome extension exclusively. Extending it to other platforms like Explorer and Firefox is being planned.

Tested on a Windows 10 Home operating system using the Google Chrome web browser.

<br>

## Process Documentation: ExposéMoi in Action!
See our design process [here](https://github.com/heidre/projectDesign/blob/master/discards/index.md).

We used ExposéMoi on Wikipedia's "English Passive Voice" article ![here](https://raw.githubusercontent.com/heidre/projectDesign/documentation/ExposeMoi.png).

We used ExposéMoi on Wikipedia's "1967 Detroit Riot" article ![here](https://raw.githubusercontent.com/heidre/projectDesign/master/documentation/ExposeMoi2.png)

<br>

## Disclaimer
ExposéMoi is made available for public use by the developers for educational purposes only, as well as to give general information and to promote a general understanding of the passive voice construction, and not for the purposes of discrediting anyone or making a political statement. By using this extension, you understand these aforementioned terms, and you should not use it in any way libelous or defamatory.

<br>

## License 
MIT and Creative Commons.

<br>

## Acknowledgments
Acknowledgements to the following:
- Google Chrome developers for script resources on building Google Chrome extensions
- TwitterDev for script on embedding tweets

Special thanks to:
- Norbert Rennert
- Dr. Stephen Ross

<br>

## Jokes and Humour 
ExposéMoi's feature of counting sentences still requires fine-tuning. Using ExposéMoi on some webpages and Wikipedia articles may interfere with the page's script, although the extension will not affect the page's overall readability. We do, however, encourage you to take the results with a grain of salt.

<br>

## Bibliography 
Ditigal projects that inspired our project:
- [Jailbreak the Patriarchy](https://chrome.google.com/webstore/detail/jailbreak-the-patriarchy/fiidcfoaaciclafodoficaofidfencgd?hl=en-US&gl=US)
- [HemingwayApp](http://www.hemingwayapp.com/)
- [WebAIM: Accessibility in Mind](www.webaim.org)

Further Reading:
- [McSweeney’s article](https://www.mcsweeneys.net/articles/an-interactive-guide-to-ambiguous-grammar)
- [Poems about police violence](https://policeviolence.files.wordpress.com/2010/11/poetryaboutpoliceviolencefinal.pdf)
- Sidler, Michelle, Richard Morris, and Elizabeth Overman Smith. <i>Computers in the Composition Classroom: A Critical Sourcebook.</i> Bedford/St. Martin's, 2008.

<br>

## FAQ
<b>What is the passive voice?</b>
<br>
The passive voice is a grammatical construction that makes the object of a sentence function as its subject. The passive voice usually requires an auxillary verb and its past participle (i.e. is gotten). In the passive construction, the subject of a sentence's verb or action is not always apparent.<br><br>

<b>Why does ExposéMoi mess up the page's code?</b>
<br>
The extension's script is still not entirely compatible with all webpages, although we're working on debugging it.<br><br>

<b>ExposéMoi missed some words!</b>
<br>
ExposéMoi does not guarantee 100% accuracy in its results. The extension's algorithim uses the most common pattern of the passive construction (object + auxillary verb + past participle). Curretly, we found this to be the best algorithim for identifying most cases. The goal of ExposéMoi is to promote critical and active readers and serve as a starting point for more critical engagement and larger discussions.<br><br>

<b>Why can't ExposéMoi do ______?</b>
<br>
We designed ExposéMoi to be architecturally and functionally minimalist. This means that its few functions facilitate a greater amount of possibile outcomes and responses. Furthermore, ExposeMoi's concern with accessibility and transparency also informed its design. We welcome your feedback and suggestions!<br><br>

<b>Any further developments?</b>
<br>
Yes! See our five-year plan [here](https://github.com/heidre/projectDesign/blob/master/5%20Year%20Plan/index.md).

<br>

## Testimonials
"I immediately thought that I could use this as a teaching tool when teaching composition." -Lindsey S., PhD candidate

More feedback [here](https://github.com/heidre/projectDesign/blob/master/feedback/index.md).

<br>

## Change Log 
Version 1.0 - Added the highlight passive construction feature.

Version 1.1 - Added the count passive construction feature.

Version 1.2 - Added the "Tweet Score" feature.

Version 1.3 - Combined the higlighting with the counting feature.

Version 1.4 - Changed the style of the interface's layout.

Version 1.5 - Changed the ExposéMoi icon.
