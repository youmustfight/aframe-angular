# aframe-angular
Wanted to try wrapping A-Frame.io in some basic angular components such as ng-switch, element and attribute directives, and passing data around

### Getting Started
1. Clone the Repo
2. Go to the directory via terminal
3. Enter ```python -m SimpleHTTPServer``` to get it going!

### Lessons Learned
As of A-Frame 0.1, putting DOM elements that aren't ```<a-___>``` in the ```<a-scene>``` causes problems. However, this can be stepped around with angular by putting controllers around the ```<a-scene>``` or as attributes, using ng-switches to modularize, and directives that replace themselves with their contents once formed. 

This means, if we want to have multiple scenes we're switching in and out of, we have to rely on multiple levels of ng-switches and less-so directives. For this reason, although I'm not very familiar with it, I think React's way of manipulating the DOM may work better for A-Frame applications. Perhaps will be smoother with Angular 2. Though I must say, there are probably some smarter ways to set up controllers and attribute directives to get a lot more flexibility.

#### Update
Turns out it might be better to wrap the ```<a-entity>``` in an angular directive since it's a basic building block for A-Frame.
