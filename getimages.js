const arr = [];

(() => {
    const total = 50;
    async function getImage(i) {
        if(i > total) return;

        
        const img = document.querySelector('.media img').src.replace(/(\/revision.*)/gm, '');
        const a = document.createElement("a");
        a.href = img;
        a.target = "_blank"
        arr.push(a);
        document.querySelector('.next').click();
        setTimeout(() => getImage(i + 1), 1000);
    }

    getImage(0);
})()

function show() {
    arr.forEach(a => {
        document.body.appendChild(a);
        a.click();
    });
}