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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let navItem = document.querySelectorAll('nav a');
console.log(navItem)

let ctaText = document.querySelector('h1');
ctaText.textContent = "DOM is Awesome";
// console.log(h1)

let ctaBtn = document.querySelector('button');
ctaBtn.textContent = siteContent['cta']['button'];
// console.log(ctaBtn)

let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src'])
// console.log(ctaImage);

let middleImage = document.getElementById('middle-img')
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src'])


const contactH4 = document.getElementsByTagName("h4")[5]
contactH4.textContent = siteContent["contact"]["contact-h4"]

const contactAddress = document.getElementsByTagName("p")[5]
contactAddress.textContent = siteContent["contact"]["address"]

const contactPhone = document.getElementsByTagName("p")[6]
contactPhone.textContent = siteContent["contact"]["phone"]


const contactEmail = document.getElementsByTagName("p")[7]
contactEmail.textContent = siteContent["contact"]["email"]


let footer = document.querySelector('.footer');
console.log(footer)