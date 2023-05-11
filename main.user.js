// ==UserScript==
// @name         juliaBuilder
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       You
// @match        https://rivalregions.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rivalregions.com
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    const buildHF = async (amount) => {
        const request = await fetch(`https://rivalregions.com/info/regions/4092`)
        const page = await request.text()
        const dom = (new DOMParser).parseFromString(page, 'text/html')
        const regions = Array.from(dom.links).map(link => link.href.split('/').at(-1))
        for (const region of regions) {
            await fetch(`https://rivalregions.com/parliament/donew/build_9/${amount}/${region}`, {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                method: 'POST',
                body: `tmp_gov=1&c=${window.c_html}`
        }).then(async () => await new Promise(resolve => setTimeout(resolve, 10000)))
            const request = await fetch(`https://rivalregions.com/parliament`)
            await new Promise(resolve => setTimeout(resolve, 3000))
            const page = await request.text()
            const dom = (new DOMParser).parseFromString(page, 'text/html')
            const law = dom.querySelectorAll(`div[style="margin-bottom: 0px;background-image: url(//static.rivalregions.com/static/images/icons/white/parliament_laws_3.png);"]`)[0]
            if (law) {
                console.log(region)
                const action = law.getAttribute('action').replace('law', 'votelaw')+'/pro'
                const vote = await fetch(action, {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    method: 'POST',
                    body: `c=${window.c_html}`
            }).then(async () => await new Promise(resolve => setTimeout(resolve, 10000)))
                }
        }
    }
    if (!unsafeWindow.buildHF) unsafeWindow.buildHF = buildHF
})();
