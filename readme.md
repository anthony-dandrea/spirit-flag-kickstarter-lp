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
- Normalize being wrapped into css bundle
- [Head info](https://github.com/joshbuchea/HEAD)

## Todo
- Share copy, url and image for sharing
- No way to share instagram but can follow
- Need favicon 32x32 pixels
- Need meta tag info: description, keywords, title
Optimizations if you want/care:
- Keys in discount code image to be broken out. Right now just a big image.
- Bottom "click here now" will need to be broken out into more layers unless you just want it a big image.
- Parallax is going to be really minimal unless there are layers to the people. Right now they are one flat layer.
