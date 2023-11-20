// Get ELment From HTML 

let Bar2Card2 = document.getElementById("Bar2Card2")
let OptionThreeOne = document.getElementById("OptionThreeOne")
let OptionThreeTwo = document.getElementById("OptionThreeTwo")
let OptionThreeThree = document.getElementById("OptionThreeThree")
let OptionThreeFour = document.getElementById("OptionThreeFour")
let CardNum3 = document.getElementById("Card3")
let Bar = document.getElementById("Bar")
let CardNum2 = document.getElementById("Card2")
let CardNum1 = document.getElementById("Card1")
let optionNum = document.getElementById("OptionOne")
let Bar1 = document.getElementById("ArrowUpEffect")
let Color = document.querySelectorAll(".ColorRome span")
let darkMode = document.getElementById("Dark")
let Default = document.getElementById("Default")
let ImageWeb = document.getElementById("ImageWeb")
let EssintialImage = document.getElementById("ImageEnter")
let optionNumTwo = document.getElementById("OptionTwo")
let DisplayOpt = document.getElementById("DisplayOpt")
let BtnCLose = document.getElementById("BtnDisplayClose")
let Home = document.getElementById("Home")
let secondTweets = document.getElementById("Second")
let firstTweets = document.getElementById("Home2")
let moreList = document.getElementById("MoreList");
let buttMore = document.getElementById("MoreButt");


// -----------------------------------------

// LocalStorage Save

document.body.classList.add(localStorage.getItem("color"))


// ----------------------------------------------

//  Switch Before UnderLine Frome Fro you and Following

secondTweets.onclick = function () {
    secondTweets.classList.add("SecondHomeTweets")
    firstTweets.classList.remove("ForTweet")
}

firstTweets.onclick = function () {
    secondTweets.classList.remove("SecondHomeTweets")
    firstTweets.classList.add("ForTweet")
}

// --------------------------------------------------

// Display and Hide MoreList

buttMore.onclick = function () {
    moreList.classList.toggle("NoneDisplay")
}

// --------------------------------------------------

//  Display Options3

CardNum3.onclick = function () {
    OptionThreeOne.classList.toggle("NoneDisplay")
    OptionThreeThree.classList.toggle("NoneDisplay")
    OptionThreeTwo.classList.toggle("NoneDisplay")
    OptionThreeFour.classList.toggle("NoneDisplay")

    if (OptionThreeOne.classList.contains("NoneDisplay")) {
        Bar.innerHTML = `
        
        <i class="material-icons">expand_more</i>
        `
        
    }
    else {
        
        Bar.innerHTML = `
        
        <i class="material-icons">expand_less</i>
        `
    }
}

// Expand Less





OptionThreeThree.onclick = function () {
    DisplayOpt.classList.remove("NoneDisplay")
    Home.classList.add("BgBlackHov")
}
BtnCLose.onclick = function () {
    Home.classList.remove("BgBlackHov")
    DisplayOpt.classList.add("NoneDisplay")
}

CardNum2.onclick = function () {
    optionNumTwo.classList.toggle("NoneDisplay")

    if (optionNumTwo.classList.contains("NoneDisplay")) {
        Bar2Card2.innerHTML = `
        
        <i class="material-icons">expand_more</i>
        `
    }
    else {
        Bar2Card2.innerHTML = `
        
        <i class="material-icons">expand_less</i>
        `
        
    }
}





CardNum1.onclick = function () {
    optionNum.classList.toggle("NoneDisplay")
    if (optionNum.classList.contains("NoneDisplay")) {
        Bar1.innerHTML = `
        <i class="material-icons">expand_more</i>
        `
    }
    else {
        Bar1.innerHTML = `
        <i class="material-icons">expand_less</i>
        `
    }
}


Color.forEach((div) => {
    div.addEventListener("click", ((e) => {
        Color.forEach((div) => {
            div.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
    }))
})
// -----------------------------------------------------


// darkMode.onclick = function () {
//     document.body.classList.add("Dark-mode")
//     localStorage.setItem("Dark")
//     ImageWeb.innerHTML = `
//         <img src="Images/55547-112798-000-lead-X-splash-screen-xl.jpg" alt="" >
//         `
//     EssintialImage.innerHTML = `
//         <img src="Images/55547-112798-000-lead-X-splash-screen-xl.jpg" alt="" class="TwitterIcon">
        
//         `
// }


// function toggleDarkMode() {
//     const body = document.body;
//     body.classList.add('Dark-mode');
    
//     // Save the user's preference in localStorage
//     const isDarkMode = body.classList.contains('Dark-mode');
//     localStorage.setItem('darkMode', isDarkMode);
// }
// function toggleLightMode() {
//     const body = document.body;
//     body.classList.add('lightMode');
    
//     // Save the user's preference in localStorage

//     const isLightMode = body.classList.contains("lightMode")
//     localStorage.setItem('lightmode', isLightMode)
// }

// // Check the user's preference in localStorage and apply it on page load
// const savedDarkMode = localStorage.getItem('darkMode');
// const SavedLightMode = localStorage.getItem("lightmode")

// if (savedDarkMode === 'true') {
//     SavedLightMode === "false"
//     document.body.classList.add('Dark-mode');
// }

// if (SavedLightMode === 'true') {
//     savedDarkMode === "false"
//     document.body.classList.add('lightMode');
// }


const darkModeButton = document.getElementById('dark-mode-btn');
const lightModeButton = document.getElementById('light-mode-btn');
const body = document.body;

darkModeButton.addEventListener('click', () => {
  body.classList.add('Dark-mode');
//   body.classList.remove('lightMode');
  localStorage.setItem('mode', 'dark');
});

lightModeButton.addEventListener('click', () => {
  body.classList.remove('Dark-mode');
//   body.classList.add('lightMode');
  localStorage.setItem('mode', 'light');
});

// Check for previously selected mode from localStorage
const savedMode = localStorage.getItem('mode');

if (savedMode === 'dark') {
  body.classList.add('Dark-mode');
} else if (savedMode === 'light') {
  body.classList.add('lightMode');
}



// Hidden Lists smooth opening

const observe = new IntersectionObserver((observ) => {
    observ.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        }
        else {
            entry.target.classList.remove("show")
        }
    })
})
const heddinelements = document.querySelectorAll(".heddin");
heddinelements.forEach((el) => observe.observe(el));


// --------------------------



let classesCol = [];

for (i = 0; i <= Color.length; i++){
    classesCol.push(Color[i].getAttribute("data-Color"))
    Color[i].addEventListener("click", function () {
        
        document.body.classList.remove(...classesCol);
        document.body.classList.add(this.getAttribute("data-Color"))
        localStorage.setItem("color" , this.getAttribute("data-Color"))
    }, false)
    
}

// -----------------------------------------


let profileDots = document.getElementById("MoreProfileOptions");
let homeProfile = document.getElementById("HomeProfile");

profileDots.onclick = function () {
    homeProfile.classList.remove("NoneDisplay")
}