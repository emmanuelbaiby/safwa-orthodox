var titles = document.querySelectorAll("h1");
var sidebarLinks = document.querySelectorAll('main .d-flex.flex-column.flex-shrink-0.p-3.bg-body-tertiary ul li a');

var minLength = Math.min(titles.length, sidebarLinks.length);

for (var i = 0; i < minLength; i++) {
    titles[i].setAttribute("id", i);
    sidebarLinks[i].setAttribute("href", "#" + i);
}