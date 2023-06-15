/* ===========================================================
    Toggle Navbar Links
==========================================================*/
let toggleBtn = document.querySelector(".toggle");
let toggleIcon = document.querySelector(".toggle i");
let navLinks = document.querySelector(".links-mobile");
let nav = document.querySelector(".nav");

toggleBtn.onclick = function () {
  toggleIcon.classList.toggle("fa-bars");
  toggleIcon.classList.toggle("fa-times");
  navLinks.classList.toggle("collapse");
};

/* ===========================================================
change background nav when scroll
==========================================================*/
let navbar = document.querySelector(".nav");
let logo = document.getElementById("logo");
let excludedNav = ["about", "investor", "requester", "jobs", "terms"];
let body = document.querySelector("body");

console.log(body.id);

window.onscroll = () => {
  if (window.scrollY > 50) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
  if (!excludedNav.includes(body.id)) {
    if (window.scrollY > 50) {
      logo.setAttribute("src", "assets/images/logo.png");
    } else {
      logo.setAttribute("src", "assets/images/sanad-logo.png");
    }
  }
};

// ========================== Tabs ============================
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab__content");
const tabGroups = document.querySelectorAll(".tabs__group");

tabGroups.forEach((tabGroup) => {
  const tabs = tabGroup.querySelectorAll(".tab");

  tabs.forEach((tab, index) => {
    let activeTabIndex;
    if (tab.classList.contains("active")) {
      activeTabIndex = index;
      tabContents.forEach((content) =>
        content.classList.remove("active", "fade-in")
      );
      tabContents[activeTabIndex].classList.add("active", "fade-in");
    }

    tab.addEventListener("click", () => {
      // Remove active class from all tabs and tab contents
      tabs.forEach((tab) => tab.classList.remove("active"));
      tabContents.forEach((content) =>
        content.classList.remove("active", "fade-in")
      );

      // Add active class to the clicked tab and corresponding tab content
      tab.classList.add("active");
      tabContents[index].classList.add("active", "fade-in");
    });
  });
});

// ========================== Animate on Scroll ============================
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.add("show-step");
      entry.target.classList.add("show-svg");
      entry.target.classList.add("show-text");
      entry.target.classList.add("show-card");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
const hiddenSteps = document.querySelectorAll(".hidden-step");
const hiddenSvgs = document.querySelectorAll(".hidden-svg");
const hiddenTexts = document.querySelectorAll(".hidden-text");
const hiddenCards = document.querySelectorAll(".hidden-card");

hiddenElements.forEach((el) => observer.observe(el));
hiddenSteps.forEach((el) => observer.observe(el));
hiddenSvgs.forEach((el) => observer.observe(el));
hiddenTexts.forEach((el) => observer.observe(el));
hiddenCards.forEach((el) => observer.observe(el));

// ========================== Invest cards controller ============================
const prevBtn = document.querySelector(".secondary-arrow-btn");
const nextBtn = document.querySelector(".primary-arrow-btn");
const cardListContent = document.querySelector(".invest-cards ul");
const cardListContainer = document.querySelector(".cards-container");
const cards = document.querySelectorAll(".card");

let cardIndex = 0;
const cardWidth = cards[0].offsetWidth;
const cardMargin = 20;
const cardListContentWidth =
  cardWidth * cards.length + cardMargin * (cards.length - 1);
cardListContent.style.width = `${cardListContentWidth}px`;

prevBtn.addEventListener("click", () => {
  if (cardIndex > 0) {
    cardIndex--;
    cardListContainer.style.transform = `translateX(${
      cardIndex * (cardWidth + cardMargin)
    }px)`;
  }
});

nextBtn.addEventListener("click", () => {
  if (cardIndex < cards.length - 1) {
    cardIndex++;
    cardListContainer.style.transform = `translateX(${
      cardIndex * (cardWidth + cardMargin)
    }px)`;
  }
});

let currentCardIndex = 0;
let currentCardLeft = 0;

function updateCardPosition() {
  currentCardLeft = cards[currentCardIndex].offsetLeft;
  cardList.scrollTo({
    left: currentCardLeft,
    behavior: "smooth",
  });
}

function showPrevCard() {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    updateCardPosition();
  }
}

function showNextCard() {
  if (currentCardIndex < cards.length - 1) {
    currentCardIndex++;
    updateCardPosition();
  }
}
