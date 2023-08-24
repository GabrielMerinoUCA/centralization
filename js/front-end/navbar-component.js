let body = document.getElementsByTagName("body")[0];
let main = body.getElementsByTagName("main")[0];

// Creating "nav" element 
let nav = document.createElement("nav");
nav.className = "navbar";

// Creating the flex-box for navbar content 
let flexDiv = document.createElement("div");
flexDiv.className = "flex-container";

// Creating nav bar header 
let flexHeader = document.createElement("div");
flexHeader.className = "navbar-flex-items flex-header";
flexHeader.innerHTML = 'TUTORIALS &nbsp;<i class="fa-solid fa-arrow-left" style="color: rgb(206, 206, 206);"></i>';

// Creating Javascript menu (Pending: tutorials and ddl system)
let javascriptMenu = document.createElement("div");
javascriptMenu.className = "navbar-flex-items"
javascriptMenu.innerHTML = '<i class="fa-brands fa-square-js fa-2xl" style="color: rgb(206, 206, 206)"></i>&nbsp; Javascript';




// Adding flex items to flex box
flexDiv.appendChild(flexHeader);
flexDiv.appendChild(javascriptMenu);

// Well more to go in future ...


// Adding the flex box to the nav element
nav.appendChild(flexDiv);

// Adding nav element to the body
body.insertBefore(nav, main);

/* 

    // HTML REPRESENTATION \\ 

    <nav class="navbar">
        <div class="flex-container">
            <div class="navbar-flex-items flex-header">
                TUTORIALS &nbsp;<i class="fa-solid fa-arrow-left" style="color: rgb(206, 206, 206);"></i>
            </div>
            <div class="navbar-flex-items">
                <i class="fa-brands fa-square-js fa-2xl" style="color: rgb(206, 206, 206)"></i>&nbsp; Javascript
            </div>
        </div>
    </nav>
*/