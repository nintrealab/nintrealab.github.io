## Introduction
Hello There! My name is [Sophat](https://github.com/pphatDev), I'am a front-end develop. I'm from Cambodia. This package is use for web development Modal. also this my testing modal plugin. 
  
  
## Installation
This is the way how to install this package please follow these commands blow: 
 
```ruby
npm i -D nc-modal 
```
then for your inside your js file directory, example this is my file dir [`src/js/index.js`]
 
```js
import ncModal from "nc-modal/src/modal/index"

// or

import "nc-modal/src/modal/index"

```
 
## Usage
This is the way how to use this package that I name it `ncModal`
 
### HTML 
```html

<!-- This is the button for click -->
<button onclick="clickMe()" class="py-2 px-4 rounded-md focus:outline-none ...">Click ME</button>

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
function clickMe(){
    NCModal(
        {
            id          : "ncModal",
            removeBTN   : "ncModalRemove",
            clickAway   : true
        }
    );
}
```
 
 ### Full Example

```html
<div class="p-10 text-center flex items-center justify-center min-h-screen">
    <button onclick="clickMe()" class="py-1.5 px-2 animateSlideInUp bg-red-500 rounded-md text-white shadow-md focus:outline-none">Click ME</button>
    <nc-modal id="ncModal" hidden>
        <div class="max-w-xl mx-auto p-5 flex h-full items-center justify-center">
    
            <div class="w-full bg-white rounded-lg shadow-xl -mt-10 relative animateSlideInDown">
                <div class="flex justify-between items-center px-4 py-3 border-b">
                    <label for=""> Modal Title </label>
                    <button class="ncModalRemove transition-all duration-300 hover:bg-orange-200 rounded-lg">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.16998 14.83L14.83 9.17004" stroke="#FF4949" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.83 14.83L9.16998 9.17004" stroke="#FF4949" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#FF4949" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>


                <div class="p-5 border-b">
                    <div>
                        Here Is Modal Content
                    </div>
                </div>
                
                <div class="w-full flex justify-end gap-2 items-center px-4 py-3">
                    <button class="ncModalRemove px-2 py-1.5 rounded-md text-slate-500 bg-slate-200">Cancel</button>
                    <button class="ncModalRemove px-2 py-1.5 rounded-md text-white bg-orange-500">Save Change</button>
                </div>
            </div>

        </div>
    </nc-modal>
</div>
<script>
    function clickMe(){
        NCModal(
            {
                id          : "ncModal",
                removeBTN   : "ncModalRemove",
                clickAway   : true
            }
        );
    }
</script>
```

 
 
## Option Control
this option control is not working well yet, You can use by defualt like exmaple blow:
 
```js
NCModal({
    // This ID is By defualt You can change what ever you want
    id : "ncModal", 
    // You can customize this if you're not yet custome on content modal    
    className : "flex h-full ....", 
    // Better not change this option
    animateIn : true,       
    // Better not change this option  
    clickAway : false,  
    // This button that you can customize      
    removeBTN : "ncModalRemove"
});
```
