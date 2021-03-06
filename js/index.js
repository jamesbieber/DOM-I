const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


var temp;
var tempTexts;

// LOOP FOR SETTING NAV BAR
var nav = document.querySelector('nav');

var staff = document.createElement('a');
staff.setAttribute('href', '#');
staff.textContent = "Staff";
staff.style.color = "green";
nav.appendChild(staff);

var gallery = document.createElement('a');
gallery.setAttribute('href', '#');
gallery.textContent = "Gallery";
gallery.style.color = "green";
nav.appendChild(gallery);


nav = document.querySelectorAll('a');

for(let i = 0; i < 6; i++) {
  nav[i].textContent = siteContent["nav"]["nav-item-" + (i + 1)];
  nav[i].style.color = 'green';
}



// DOM IS AWESOME 
temp = document.querySelector('h1');
temp.textContent = siteContent["cta"]["h1"];
temp.setAttribute('h1', siteContent["cta"]["h1"]);

// BUTTON "GET STARTED"
temp = document.querySelector('button');
temp.textContent = siteContent["cta"]["button"];
temp.setAttribute('button', siteContent["cta"]["button"]);

// GREAT IDEA IMG
var img = document.getElementById("logo-img");
img.setAttribute('src', siteContent["nav"]["img-src"]);

// CIRCLE IMG
img = document.getElementById("cta-img");
img.setAttribute('src', siteContent["cta"]["img-src"]);

// FEATURES / HEADINGS
temp = document.querySelectorAll('h4');
temp[0].textContent = siteContent["main-content"]["features-h4"];
temp[1].textContent = siteContent["main-content"]["about-h4"];
temp[2].textContent = siteContent["main-content"]["services-h4"];
temp[3].textContent = siteContent["main-content"]["product-h4"];
temp[4].textContent = siteContent["main-content"]["vision-h4"];

// MIDDLE IMG
img = document.getElementById("middle-img");
img.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// TEXT CONTENTS
tempTexts = document.querySelectorAll('p');
tempTexts[0].textContent = siteContent["main-content"]["features-content"];
tempTexts[1].textContent = siteContent["main-content"]["about-content"];
tempTexts[2].textContent = siteContent["main-content"]["services-content"];
tempTexts[3].textContent = siteContent["main-content"]["product-content"];
tempTexts[4].textContent = siteContent["main-content"]["vision-content"];

// FOOTER/CONTACT
temp[5].textContent = siteContent["contact"]["contact-h4"];

tempTexts[5].textContent = siteContent["contact"]["address"];
tempTexts[6].textContent = siteContent["contact"]["phone"];
tempTexts[7].textContent = siteContent["contact"]["email"];

tempTexts[8].textContent = siteContent["footer"]["copyright"];


