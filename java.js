

function mkbr() {
    let p = document.createElement("br");
    return p
}


function color(wrd, clr) {
    let span = document.createElement("span");
    let x = "color:" + clr + ";";
    span.setAttribute("style", x);
    span.textContent = wrd;
    return span
}

const download = (path, filename) => {
    // Create a new link
    const anchor = document.createElement('a');
    anchor.href = path;
    anchor.download = filename;

    // Append to the DOM
    document.body.appendChild(anchor);

    // Trigger `click` event
    anchor.click();

    // Remove element from DOM
    document.body.removeChild(anchor);
};

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                return (allText);
            }
        }
    }
    rawFile.send(null);
}

function Console_Login() {
    let log = document.getElementById('Console_Log');
    let console = document.getElementById('Console');
    let userid = document.getElementById('Console_UserID');
    let lastcmd = "123";

    let p = document.createElement("br");

    log.append(mkbr(), ' ______   ______   ______   ______   ______   ______    ', mkbr());
    log.append('|______| |______| |______| |______| |______| |______|   ', mkbr());
    log.append('___  ___           _      _   __               _        ', mkbr());
    log.append('|  \\/  |          | |    | | / /              | |       ', mkbr());
    log.append('| .  . | __ _ _ __| | __ | |/ / _ __ ___   ___| |_ ____ ', mkbr());
    log.append('| |\\/| |/ _` | \'__| |/ / |    \\| \'_ ` _ \\ / _ \\ __|_  / ', mkbr());
    log.append('| |  | | (_| | |  |   <  | |\\  \\ | | | | |  __/ |_ / /  ', mkbr());
    log.append('\\_|  |_/\\__,_|_|  |_|\\_\\ \\_| \\_/_| |_| |_|\\___|\\__/___| ', mkbr());
    log.append('__      __      __      __      __      __      __      ', mkbr());
    log.append(' ______   ______   ______   ______   ______   ______    ', mkbr());
    log.append('|______| |______| |______| |______| |______| |______|   ', mkbr());

    log.append(mkbr(), 'This is an interactive portfolio! yeet');
    log.append(mkbr(), "Type in ", color("/help", "yellow"), " for commands");


    setTimeout(function () {
        document.getElementById('terminal').style.visibility = "visible"
        console.focus();
        console.select();
    }, 1000);

}



function handle(e) {
    if (e.keyCode === 13) {
        e.preventDefault(); // Ensure it is only this code that runs
        let p = mkbr();
        let log = document.getElementById('Console_Log');
        let console = document.getElementById('Console');
        let userid = document.getElementById('Console_UserID');
        log.append(p, userid.textContent + console.value);


        if (console.value == "/help") {
            log.append(mkbr());
            log.append(mkbr(), "=======================================");
            log.append(mkbr(), "enter ", color("/help", "yellow"), " to bring up this help menu.");
            //log.append(mkbr(),"enter ls to view folders.");
            //log.append(mkbr(),"enter cd + folder name to change folder.");
            log.append(mkbr(), "enter /clear to clear console log.");
            log.append(mkbr(), "enter ", color("/email", "pink"), " to open up a new email with me.");
            log.append(mkbr(), "enter ", color("/about", "blue"), " to learn about me.");
            log.append(mkbr(), "enter ", color("/resume", "green"), " to download a resume.");
            log.append(mkbr(), "       Resume options: --txt --pdf --docx (default pdf)");
            log.append(mkbr(), "Example.. type in /resume --pdf");



        } else if (console.value == "whoami") {
            log.append(mkbr(), "You are my future potential employer!");
        }
        else if (console.value == "/resume") {
            //download resume
            download('Mark_Kmetz.docx', 'Mark_Kmetz.docx');
        } else if (console.value == "/about") {
            readTextFile("file:////aboutme.txt");
        } else if (console.value == "/clear") {
            log.textContent = "";
        } else if (console.value == "/email") {
            var addresses = "mark@kmetzenterprises.com";
            var body = "";
            var subject = "Your portfolio";
            var href = "mailto:" + addresses + "?"
                + "subject=" + subject + "&"
                + "body=" + body;
            var wndMail;
            wndMail = window.open(href, "_blank", "scrollbars=yes,resizable=yes,width=10,height=10");
            if (wndMail) {
                wndMail.close();
            }
        } else {
            log.append(mkbr(), "Sorry, command not found");
        }
        lastcmd = console.value;
        console.value = "";
        window.scrollTo(0, document.body.scrollHeight);
    } else if (e.keyCode == 38) {
        let log = document.getElementById('Console_Log');
        let console = document.getElementById('Console');
        console.textContent = lastcmd;
    }

    function clickBody() {
        let console = document.getElementById('Console');

        console.focus();
        console.select();
    }
    document.body.addEventListener("click", clickBody)

}