const btn_google = document.getElementById('btn-google');
const button = document.getElementById('btn-com-loading');
const button_longo = document.getElementById('btn-com-loading-longo');

function handleClick(){
    btn_google.classList.add('loading');

    setTimeout(() => {
        btn_google.classList.remove('loading');
    }, 6000)
}

function handClick(){
    button.classList.add('loading');

    setTimeout(() => {
        button.classList.remove('loading');
    }, 5000)
}

function handeClick(){
    button_longo.classList.add('loading');

    setTimeout(() => {
        button_longo.classList.remove('loading');
    }, 10000)
}

