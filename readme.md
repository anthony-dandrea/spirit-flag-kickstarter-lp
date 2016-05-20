# Spirit Flag Kickstarter Landing Page

## Setting Up Dev Repo
Following directions assume you're on [OSX](http://brew.sh/) with Homebrew installed.
1. Install [node.js](https://nodejs.org/en/) `brew install node`
2. Install node version 5.8.0 with your favorite node version manager (I use [n](https://www.npmjs.com/package/n))
3. Install the [Gulp](http://gulpjs.com/) CLI globally `npm i -g gulp-cli`
4. Install node packages.json dependencies `npm i`
5. Run `gulp` to start a server and compile assets. Run `gulp build` to just build assets with no server.

## Notes
- Vanilla JS (no JQuery)
- [Parallax!](https://github.com/wagerfield/parallax)
- Normalize being wrapped into css bundle
- [Head info](https://github.com/joshbuchea/HEAD)
- To push to [gh-pages](http://anthony-dandrea.github.io/spirit-flag-kickstarter-lp/) `git subtree push --prefix dist origin gh-pages`

## Todo
- Share copy, url and image for sharing
- No way to share instagram but can follow
- Need favicon 32x32 pixels
- Need meta tag info: description, keywords, title

## Feedback
Here is a rundown of how things should work:
X1. Nothing is parallax besides the background
2. Look through the photoshop file to see the different messages for social media sharing. I have made progress change the text and font color.
X3. Hovering over the Kickstarter Button should give it a white glow
4. I will make the canned messages for all of the sharing and add it separately as a word doc.
5. The green play button and "SpiritFlags" in the middle should go away after the video starts.
X6. If you add any additional "finesse", try to make the progress bar do something cool.
