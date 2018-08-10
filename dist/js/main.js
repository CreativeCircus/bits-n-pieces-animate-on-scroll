"use strict";

// OPTIONAL: If your page is already long because you have a lot of content, comment this out.
// If it's not, or if the experience is meant to be all contained in a single browser viewport area, then use this 
// to make the body taller. Couple it with all position: fixed elements so that while the user scrolls, they don't
// actually appear to be moving down the page.
// The taller the body is, the longer it will take to scroll all the way down.
// The longer it takes to scroll all the way down, the slower the animation will run
var VIEWPORTS_TALL = 4;
document.body.style.minHeight = VIEWPORTS_TALL * 100 + 100 + "vh";

// make a new TimelineMax timeline. All our tweens will go into this. 
// The code at the bottom of this file is what ties this timeline to the scroll position
var masterTimeline = new TimelineMax({ paused: true });

// if you want to organize things into child timelines, and then 
// add them to the master timeline, it looks like this
// var part1Timeline = new TimelineMax();
// part1Timeline.to('.example', 1, {left: 50})
// masterTimeline.add(part1Timeline);


// logo starts at left: 10%, top: 10%
// logo is position: fixed, so as we scroll, it goes with us
// move logo to top right
masterTimeline.to('.logo', 1, {
	top: "10%",
	left: "90%"
});
// move logo to bottom right
masterTimeline.to('.logo', 1, {
	top: "90%",
	left: "90%"
});
// add a pause by animating nothing for one second
masterTimeline.to({}, 1, {});
// move logo to bottom left
masterTimeline.to('.logo', 1, {
	top: "90%",
	left: "10%"
});
// move logo to top left
masterTimeline.to('.logo', 1, {
	top: "10%",
	left: "10%"
});

// this is the magic part.
// tweenmax's ticker is a super efficient "ticker" that runs at about 60 times a second on most computers,
// but will intelligently slow down on slower computers so they don't get choppyy 
TweenMax.ticker.addEventListener("tick", function () {
	// measure how far down the page we are, and jump the master timeline to the matching point
	masterTimeline.progress(window.scrollY / document.documentElement.clientHeight / VIEWPORTS_TALL);
});
//# sourceMappingURL=main.js.map
