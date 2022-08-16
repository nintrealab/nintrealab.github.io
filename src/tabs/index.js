/**
 * @function    DataTab 
 * @description ///
 * @version     0.0.1
 * @author      <Leat Sophat> ? [https://leatsophat.me]
 * @requires    tabs.css for styling
 * 
 * 
 * @example
 * 
 * @TabButtons
 *  <nc-tab class="border-b flex justify-start w-full items-center">
 *      <button data-tab-target="#content1" class="currentTab">Heart ❤️</button>
 *      <button data-tab-target="#content2">Piggy 🐷</button>
 *      <button data-tab-target="#content3">World 🌍</button>
 *  </nc-tab>
 * 
 * @TabsContent
 * <nc-content class="tab-content flex justify-start p-5 py-10">
 *      <div id="content1" data-nc-content-tab class="currentTab">Content ❤️</div>
 *      <div id="content2" data-nc-content-tab>Content 🐷</div>
 *      <div id="content3" data-nc-content-tab>Content 🌍</div>
 * </nc-content>
 * 
**/

const dataTabs      = document.querySelectorAll('[data-tab-target]');
const tabContents   = document.querySelectorAll('[data-nc-content-tab]');

dataTabs.forEach(tab => 
{
    tab.addEventListener('click', () => 
    {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => 
        {
            tabContent.classList.remove('currentTab');
        });
        dataTabs.forEach(tab => 
        {
            tab.classList.remove('currentTab');
        });

        tab.classList.add('currentTab');
        target.classList.add('currentTab');
    });
});