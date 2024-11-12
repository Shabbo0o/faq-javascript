# Animated Accordion with Dynamic Data Loading

This project is a responsive accordion component that fetches and displays content dynamically from an API. Each accordion item expands and collapses with smooth animations, providing a user-friendly way to display large sets of data in a compact space.

## Features

- **Dynamic Data Loading:** Fetches data from an external API (`jsonplaceholder.typicode.com`) to populate the accordion content.
- **Animated Expand/Collapse:** Each accordion item smoothly expands or collapses with animation.
- **Hover Effects:** Visual feedback when hovering over accordion headers.
- **Rotating Icon:** The expand/collapse icon rotates based on the state (open or closed) of each item.
- **Accessible:** Implements `aria-expanded` attributes for improved accessibility.

## Demo

Here’s a quick overview of the features:

- When you load the page, data is fetched and displayed in collapsible accordion items.
- Each item displays a title and a collapsible description section.
- Click on an item to expand or collapse the description with a smooth animation.

## Technologies Used

- HTML
- CSS (for styling and animations)
- JavaScript (for functionality and data fetching)

## Code Structure
The project contains:

- **HTML Structure:** Contains a root container for the accordion.
- **CSS Styling:** Styles the accordion, expander buttons, hover effects, and animations.
- **JavaScript Logic:** Handles data fetching, event listeners for expanding/collapsing, and icon rotation.

## Key Code Sections
- Dynamic Data Fetching: The accordion fetches data from an API and creates new accordion items based on this data.

- Show/Hide Animation: The show_hidden_desc function handles expanding and collapsing animations.

## Customization
- Transition Timing: You can adjust the animation duration by modifying the transition property in .description and .icon.
- Color Themes: Modify background colors in CSS to suit your theme.

## Known Issues
- When closing, there may be a slight delay due to the animation’s transition time.
