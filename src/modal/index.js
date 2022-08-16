/**
 * @function    NCModal
 * @description Modals offer an easy way to build custom, accessible modal componnet
 * @version     0.0.2
 * @author      <Leat Sophat> ? [https://leatsophat.me]
 * @requires    TailwindCss
 *
 *
 * @Usage Example
 *      
 * @Button
 *  <button onclick="NCModal()">
 *      Click ME
 *  </button>
 * 
 * @Modal
 *  <nc-modal id="ncModal" hidden>
 *      <div>
 *          <div class="flex justify-between items-center px-4 py-3 border-b">
 *              <label for=""> Modal Title </label>
 *              <button class="ncModalRemove">
 *                  Close Button
 *              </button>
 *          </div>
 *
 *
 *          <div class="p-5 border-b">
 *              Content
 *          </div>
 * 
 *          <div class="w-full flex justify-end gap-2 items-center px-4 py-3">
 *              Footer
 *          </div>
 *      </div>
 *  </nc-modal>
 *
 * 
 * @Script
 *  NCModal({
 *     id       : "ncModal", 
 *     removeBTN: "ncModalRemove"
 *  });
**/

window.NCModal = (optionControl) => 
{
    const randomNumber = Math.ceil(Math.random() * 13579);
    const backDropID   = "backDrop-" + randomNumber;

    function __create() 
    {
        __applyUserOptions();
        __createBackDrop();
    }

    function __applyUserOptions() 
    {
        ncOptions = {
            id          : optionControl?.id         ?? "ncModal",
            backDrop    : optionControl?.backDrop   ?? "bg-black/20 absolute top-0 bottom-0 w-full min-h-screen z-[998]",
            className   : optionControl?.className  ?? null,
            animateIn   : optionControl?.animateIn  ?? true,
            clickAway   : optionControl?.clickAway  ?? false,
            removeBTN   : optionControl?.removeBTN  ?? "ncModalRemove",
        };
    }

    function __createBackDrop() 
    {
        const backDrop              = window.document.body;
        const backDropContainer     = document.createElement('nc-backdrop-modal');
        backDropContainer.id        = backDropID;
        backDropContainer.className = ncOptions.backDrop;
        backDrop.appendChild(backDropContainer);

        function __createModalCard()
        {
            if(typeof ncOptions.id !== "undefined")
            {
                const modalId   = document.getElementById(ncOptions.id)
                const clone     = modalId.cloneNode(true);
                clone.removeAttribute('hidden');
                clone.id        = "ncModal-" + randomNumber;
                clone.className = "animateSlideInUp " + ncOptions.className ?? modalId.children[0].className;
                const cloneTo   = document.getElementById(backDropID);
                cloneTo.appendChild(clone)
            } 
        }
        __createModalCard();

        function __removeModal() 
        {
            if(typeof ncOptions.clickAway !== 'undefined') 
            {

                function __clickedOnclose()
                {
                    const removeBTN = document.getElementsByClassName(ncOptions.removeBTN);
                    for(i=0; i<removeBTN.length; i++)
                    {
                        const buttonID = removeBTN[i];
                        buttonID.addEventListener('click',()=>{
                            backDropContainer.remove()
                        })
                    }
                }

                function __clickedAway()
                {
                    const clickAway = document.getElementById(backDropID)
                    clickAway.addEventListener('click',()=>{
                        backDropContainer.remove();
                    })
                }

                if(ncOptions.clickAway == true)
                {
                    __clickedAway();
                    __clickedOnclose();
                }
                if(ncOptions.clickAway == false)
                {
                    __clickedOnclose();
                }
            }
        }
        __removeModal();
    }
    __create();
};