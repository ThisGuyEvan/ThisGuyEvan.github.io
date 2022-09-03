
// hamburger 
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

// rem to px
function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
    menu.classList.remove("active");
    navLinks.classList.remove("active");
}));


// transitioning
rem = convertRemToPixels(5);
const colorNav = document.querySelector('.navbar');
window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= rem || document.documentElement.scrollTop >= rem) {
        colorNav.classList.add("nav-scrolled");
        colorNav.classList.remove("nav-default");

        navLinks.classList.add("nav-links-scrolled");
    } else {
        colorNav.classList.add("nav-default");
        colorNav.classList.remove("nav-scrolled");
        navLinks.classList.remove("nav-links-scrolled");
    }
};


// smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    });
});


// device checking for terminal usr
function deviceCheck() {
    let check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check ? "mobile" + "@evanh" : "desktop" + "@evanh";
};

document.getElementById("devices").innerHTML = deviceCheck();




/////////////////////////////
/* User input for terminal */
/////////////////////////////


let userInput, terminalOutput, terminal;
window.userInput = document.getElementById("userInput");
terminalOutput = document.getElementById("terminalOutput");
terminal = document.getElementById("terminal-line");

// Running input commands
const execute = function executeCommand(input) {
    input = input.toLowerCase();
    let output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;

    if (input.length === 0) {
        terminalOutput.innerHTML += `<div class="terminal-line"><span class="success">➜</span></div>`;
        terminal.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start'
        });
        return;
    }

    if (!COMMANDS.hasOwnProperty(input)) {
        output += `<div class="terminal-line">no such command: <span class="output">"${input}"</span></div>`;
    } else {
        output += `<div class="output"> ${COMMANDS[input]} </div>`;
    }

    terminalOutput.innerHTML += `<div class="terminal-line">${output}</div>`;
    terminal.scrollTop = terminal.scrollheight;
    terminal.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
    });
};


let arrKeyCnt = 0;
// key inputs
const key = function keyEvent(e) {
    userInput = document.getElementById("userInput");
    const input = window.userInput.innerHTML;

    // Add more key events later
    if (input.substr(0,2) === "cd ") console.log("works");

    if (e.key === "Enter") {
        execute(input);
        userInput = document.getElementById("userInput").innerHTML = "";
        if (input != '') cmdHistory.push(input);
        console.log(cmdHistory);
        return;
    }



    userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
    if (e.keyCode !== 8 && e.keyCode !== 46) {
        return;
    }
    userInput.innerHTML = userInput.innerHTML.slice(
        0,
        userInput.innerHTML.length - 1
    );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
if (document.readyState !== "loading") {
    app();
}


// implement directory and other terminal functionality  support after
const COMMANDS = {
    ls: `<p>about&emsp; resume&emsp; projects&emsp; blog&emsp; updates&emsp; clear</p>`,
    about: 'Hi, I’m Evan Huang, a Daedalus Scholar at Hunter College, concentrating in computer science. I enjoy reading articles (especially TechCrunch), watching sitcoms, dramas, and anime, cooking, and bodybuilding. Regardless, please feel free to contact me about any inquiries regarding academics, internships, or CS-related opportunities.',
    resume: `<a href ="info/Resume 9_1_22.pdf" target="_blank">Resume</a>`,
    clear: clearTerminal(),
    projects: '<ul><li class="projects"><a href="">- PuzzleMe!</a></li><li class="projects"><a href="">- Port2020</a></li><li class="projects"><a href="">- TBA</a></li></ul>',
    updates: '<p>test</p>'

};


const cmdHistory = [];

function clearTerminal() {
    const height = document.getElementById('terminal').offsetHeight;
    let lines = height / 10;
    let s = ' ';
    for (let i = 0; i < lines; i++) s += '<br>';
    return s;
}




