## Introduction
Hello There! My name is [Sophat](https://github.com/pphatDev), I'am a front-end develop. I'm from Cambodia. This package is use for web development Modal. also this my testing modal plugin. 
  
  
## Installation
This is the way how to install this package please follow these commands blow: 
 
```ruby
npm i -D nc-modal 
```
then for your inside your js file directory, example this is my file dir [`src/js/index.js`]
 
```js
import ncModal from "nc-modal/src/index"
```
 
## Usage
This is the way how to use this package that I name it `ncModal`
 
### HTML 
```html
<!-- This is the button for click -->
<button onclick="clickkk()" class="py-2 px-4 rounded-md focus:outline-none ...">Click ME</button>


<!-- this tag use for backdrop  -->
<nc-modal id="ncModal" hidden>
  
   <!-- this is modal content but hidden // you can customize the style here -->
    <div>
      
        <!-- This Button use for close and clear backdrop-->
        <button class="ncModalRemove"> remove </button>
      
    </div>
</nc-modal>
```
### Javascript 
This is option function that we need 

```js
NCModal({
    // This ID is By defualt You can change what ever you want
    id          : "ncModal",        
    // This button that you can customize 
    removeBTN   : "ncModalRemove"   
}); 
```
 
 
 
## Option Control
this option control is not working well yet, You can use by defualt like exmaple blow:
 
```js
NCModal({
    // This ID is By defualt You can change what ever you want
    id          : "ncModal", 
    // You can customize this if you're not yet custome on content modal    
    className   : "flex h-full min-h-[95vh] overflow-y-auto max-w-[500px] mx-auto w-full p-5 rounded-md shadow-md ....", 
    // Better not change this option
    animateIn   : true,       
    // Better not change this option  
    clickAway   : false,  
    // This button that you can customize      
    removeBTN   : "ncModalRemove"
});
```
