var titles = document.querySelectorAll("h1");
var sidebarLinks = document.querySelectorAll('main .d-flex.flex-column.flex-shrink-0.p-3.bg-body-tertiary ul li a');

var minLength = Math.min(titles.length, sidebarLinks.length);

for (var i = 0; i < minLength; i++) {
    titles[i].setAttribute("id", i);
    sidebarLinks[i].setAttribute("href", "#" + i);
}



// Get all <h1> elements
const h1Elements = document.querySelectorAll('h1');

// Iterate through each <h1> element
h1Elements.forEach((h1Element, index) => {
  // Assuming you want to set the href to something like "#section1", "#section2", etc.
  const hrefValue = `#`;

  // Create a new <a> element
  const anchorElement = document.createElement('a');

  // Set the href attribute for the <a> element
  anchorElement.setAttribute('href', hrefValue);

  // Append the <a> element to the <h1> element
  h1Element.parentNode.replaceChild(anchorElement, h1Element);
  anchorElement.appendChild(h1Element);
});
