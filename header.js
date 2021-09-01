var start_time = new Date ("August 17, 2021 23:59:00").getTime();

var now = new Date().getTime();

function getheader() {
    const header_tag = document.getElementById('header');

    if ((start_time - now) > 0) {
        header_tag.innerText = "New Zealand is going into level 4 at midnight tonight";
    } else {
        header_tag.innerHTML = "Auckland is at level 4.<br> Stay at home for at least another:";
    }
}