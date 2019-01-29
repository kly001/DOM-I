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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// let navItem = document.querySelectorAll('nav a');
// console.log(navItem)

const ctaText = document.querySelector('.cta h1');
ctaText.textContent = 'DOM Is Awesome';


const ctaBtn = document.querySelector('button');
ctaBtn.textContent = siteContent['cta']['button'];


const ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src'])

// ---------------------------------------------------------


const mainCont1 = document.getElementsByTagName('h4')[0];
mainCont1.textContent = siteContent['main-content']['features-h4'];
const mainCont1a = document.getElementsByTagName('p')[0];
mainCont1a.textContent = siteContent['main-content']['features-content']

const mainCont2 = document.getElementsByTagName('h4')[1];
mainCont2.textContent = siteContent['main-content']['about-h4'];
const mainCont2a = document.getElementsByTagName('p')[1];
mainCont2a.textContent = siteContent['main-content']['about-content']

const mainCont3 = document.getElementsByTagName('h4')[2];
mainCont3.textContent = siteContent['main-content']['services-h4'];
const mainCont3a = document.getElementsByTagName('p')[2];
mainCont3a.textContent = siteContent['main-content']['services-content']

const mainCont4 = document.getElementsByTagName('h4')[3];
mainCont4.textContent = siteContent['main-content']['product-h4'];
const mainCont4a = document.getElementsByTagName('p')[3];
mainCont4a.textContent = siteContent['main-content']['product-content']

const mainCont5 = document.getElementsByTagName('h4')[4];
mainCont5.textContent = siteContent['main-content']['vision-h4'];
const mainCont5a = document.getElementsByTagName('p')[4];
mainCont5a.textContent = siteContent['main-content']['vision-content']




const middleImage = document.getElementById('middle-img')
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src'])


// --------------------------------------------------------
const contactH4 = document.getElementsByTagName('h4')[5]
contactH4.textContent = siteContent['contact']['contact-h4']

const contactAddress = document.getElementsByTagName('p')[5]
contactAddress.textContent = siteContent['contact']['address']

const contactPhone = document.getElementsByTagName('p')[6]
contactPhone.textContent = siteContent['contact']['phone']


const contactEmail = document.getElementsByTagName('p')[7]
contactEmail.textContent = siteContent['contact']['email']


let footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright']
