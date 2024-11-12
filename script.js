// A function that adds and remove the class "active" on the section you click on.
// function toggle(e) {
//     const element = e.target;
//     element.classList.toggle("active");
// }


// Selects and HTML element, and calls a function which will be executed when the element is clicked.
// const section1Element = document.getElementById("section1");
// section1Element.addEventListener("click", toggle);


// function show_hidden_desc(button) {
//     const description = button.nextElementSibling; 
// console.log(description);
//     if (description.classList.contains("hidden")) {
//         description.classList.remove("hidden");
//         description.classList.add("show");
//         button.setAttribute("aria-expanded", "true");
//     } else {
//         description.classList.remove("show");
//         description.classList.add("hidden");
//         button.setAttribute("aria-expanded", "false");
//     }
// }
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        const accordion = document.querySelector('.accordion');
        data.forEach((item, index) => {

            // Adding button element
            const button = document.createElement('button');
            button.classList.add('expander');
            button.setAttribute('aria-expanded', 'false');
            button.onclick = () => show_hidden_desc(button);

            // Add the title to the button
            const titleDiv = document.createElement('div');
            titleDiv.classList.add('expander-title');
            const title = document.createElement('h3');
            title.classList.add('title');
            title.textContent = item.title;
            titleDiv.appendChild(title);

            // Add icon div for the expand/collapse
            const iconDiv = document.createElement('div');
            iconDiv.classList.add('expander-icon');
            iconDiv.innerHTML = `
                <svg class="icon" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m17 9.5-5 5-5-5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>`;
            button.appendChild(titleDiv);
            button.appendChild(iconDiv);

            // Add the description
            const description = document.createElement('div');
            description.classList.add('description', 'hidden');
            description.textContent = item.body;

            accordion.appendChild(button);
            accordion.appendChild(description);
        });
    })
    .catch(error => console.error('Error...', error));

// Function to show/hide description and rotate icon

function show_hidden_desc(button) {
    const description = button.nextElementSibling;
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", !isExpanded);

    description.classList.toggle("hidden");
    description.classList.toggle("show");

    const icon = button.querySelector(".icon");
    icon.classList.toggle("rotated");
}