## cycle.travel translations

Enjoy cycle.travel in your language! This repository lets you supply translations for cycle.travel's map page.

Each language has a separate file (e.g. `fr.js` for French). By editing the file, you can alter the text that's shown to users in your language. You'll need to be logged into Github to edit the file.

The file has two halves. In the top half, you'll see the English-language phrases and their translation. For example:

    "Total length:": "Distance totale:",

Simply overwrite the text in the __second pair of quotes__ with the appropriate translation for your language.

The second half has the phrases used for turn-by-turn instructions. These are formatted slightly differently, typically:

    "Suivre ", // Follow

The translation is between the __first pair of quotes__ here. (The English text after the // isn't actually used but is provided to help you translate.) In this section, you'll see the individual turn instructions (e.g. "turn left"); linking prepositions for each instruction in turn (e.g. "turn left _onto_ High Street"); descriptions for road/path types; and descriptions for the route summary. 

### Improving an existing translation

Find the file for your language, and click the pencil icon at the top right. Make the changes.

When you've finished, add a quick summary of your changes under "Commit changes" at the bottom, and click "Propose file change". Then, on the next screen, click "Create pull request". You don't need to do anything else - I'll check the file and then incorporate the translations into cycle.travel.

### Creating a new translation

**If you're confident with systems like Github:** Find an existing translation file (e.g. `fr.js`). Copy all the translation text into your clipboard. (You might find this easier by clicking "Raw", which strips off all the stuff around the edge.)

Go back to the main page (here), and click "Create new file". Where it says "Name your file", type the two-letter abbreviation for your language, then '.js'. For example, `es.js` for Spanish. Then, in the big box underneath that, paste the translation text you copied earlier. Go through that and overwrite the translations with those for your language.

Add a quick summary of your changes under "Commit changes" at the bottom, and click "Propose file change". Then, on the next screen, click "Create pull request".

**If this all sounds a bit technical:** No problem! Leave me a message and I'll set it up for you.

### Problems?

I'm happy to help! You can either send me an email at [info@cycle.travel](mailto:info@cycle.travel), or create an "issue" here. You can do the latter by clicking "Issues" at the top, then "New issue".

🚴 🚴 Happy cycling! 🚴 🚴

Richard Fairhurst, cycle.travel
