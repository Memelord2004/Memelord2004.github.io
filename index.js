function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let html = "";
const count = document.getElementById("count");
const render = () => {
    count.innerHTML = html;
    count.scroll({left: 0, top: count.scrollHeight});
};

let num = 1000;
const step = 7;

window.addEventListener("DOMContentLoaded", async () => {
    while (1) {
        if (num - step < 0) {
            html+="<div>Я Гуль!</div>";
            render();
            break;
        }

        const template = `<div>${num} - ${step} = ${num-step}</div>`;

        num-=step;

        html+=template;

        render();

        await sleep(32);
    }
});
