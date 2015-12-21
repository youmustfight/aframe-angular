# aframe-angular
Wanted to try wrapping A-Frame.io in some basic angular components such as ng-switch, element and attribute directives, and passing data around

### Getting Started
1. Clone the Repo
2. Go to the directory via terminal
3. Enter ```python -m SimpleHTTPServer``` to get it going!

### Lessons Learned
As of A-Frame 0.1,putting anything that isn't one of their elements in the <a-scene> causees problems. However, this can be stepped around with angular by putting controllers around the <a-scene>, using ng-switches which rebuild based on comments left behind, and directives that replace themselves with their contents once built. 

This means, if we want to have multiple scenes we're switching in and out of, we have to rely on multiple levels of ng-switches and that the way we pass around data is a bit restrained. For this reason, although I'm not very familiar with it, I think React's way of manipulating the DOM may work better for A-Frame applications. Will be interesting to try with Angular 2 as well.
