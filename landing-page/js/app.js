/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const fragment = document.createDocumentFragment();
const unorderedList = document.getElementById("navbar__list");
const sectionNumbers = document.querySelectorAll("section");
const links = document.getElementsByTagName("a");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * start Main Functions
 * Begin Events
 *
 */

//build Landing Home Button and also we can use it as logo for the website
//Scroll to top button
// Extra By following suggestions
function home() {
  const home = document.createElement("a");
  const homeText = document.createTextNode("Logo");
  home.appendChild(homeText);
  home.setAttribute("class", "home menu_link");
  home.setAttribute("href", "#");

  fragment.appendChild(home);
}

// build the navMenu Function
function navMenu() {
  //add home bottom

  // Build menu
  for (const section of sectionNumbers) {
    //creating list <li>
    const list = document.createElement("li");

    //creating anchor <a>
    const anchor = document.createElement("a");
    //set class to the anchor
    anchor.setAttribute("class", "menu__link");

    //get the text from section
    const secText = section.getAttribute("data-nav");

    // Scroll to section on link click
    anchor.addEventListener("click", function (event) {
      event.preventDefault();

      //Scroll to anchor ID using scrollTO event  smooth
      section.scrollIntoView({ behavior: "smooth" });
    });

    //creating textNode

    const anchorText = document.createTextNode(secText);

    //appending to the document
    // build the nav

    anchor.appendChild(anchorText);
    list.appendChild(anchor);
    fragment.appendChild(list);
  }
}

// document scrooling event  ,using Arrow function syntax , active section and active link in the same time
const scrolling = () => {
  // when the document scroll
  document.addEventListener("scroll", function (event) {
    event.preventDefault();

    for (let section of sectionNumbers) {
      for (let link of links) {
        // get every section position top , buttom ,left , right , ........ by using getBoundingClientRect()
        const position = section.getBoundingClientRect();
        let nav = section.getAttribute("data-nav");

        //checking the top for every section

        if (nav == link.textContent)
          if (position.top >= 0 && position.top <= 300) {
            //adding active class  to link
            link.classList.add("active");

            //adding active class to section
            section.classList.add("your-active-class");
          } else {
            //removing active class from the previous link
            link.classList.remove("active");
            //removing active class from the previous section
            section.classList.remove("your-active-class");
          }
      }
    }
  });
};

// Make sections collapsible.
// Extra By following suggestions
function collapsible() {
  for (const sec of sectionNumbers) {
    //get the section name using refering to data-nav
    const secText = sec.getAttribute("data-nav");
    // Btn HTML
    const btn = `<button type=button class= collapsible> Collapsible ${secText} </button>`;
    //adjacentHtml before begin every section
    sec.insertAdjacentHTML("beforebegin", btn);
  }
  //get all button that i declered in the previous loop
  let collapsibles = document.getElementsByClassName("collapsible");

  for (const collapsible of collapsibles) {
    collapsible.addEventListener("click", function () {
      //When i cliked to the button add active class to it
      collapsible.classList.add("active");
      //returns the element immediately following the specified one in its parent's children list
      let nextElement = collapsible.nextElementSibling;
      if (nextElement.style.display === "block") {
        nextElement.style.display = "none";
      } else {
        nextElement.style.display = "block";
      }
    });
  }
}

//Function to set time out
// Extra By following suggestions
function time() {
  //Scrolling variables
  let isScrolling;

  // Listen for scroll events
  window.addEventListener(
    "scroll",
    function (event) {
      // and Clear time out when we clicked ok
      window.clearTimeout(isScrolling);

      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(function () {
        //alert to the widow
        window.alert("You Stopped Too Long");

        //after 15 sec
      }, 15000);
      // false to don't dispaly to the alert message to the screen when we run the window
    },
    false
  );
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// calling the main functions  Home Button , navegation Menu , Scrolling document action with adding active class to current section ,collapsible section,set time function
home();
navMenu();
scrolling();
collapsible();
time();

// appending the <ul> to fragement for best performance
unorderedList.appendChild(fragment);

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
