# CHANGE FOR THE BETTER: Fitness and Lifestyle App

Welcome to the project by CS472 Group 4. This application is designed to help users embark on a transformative journey towards improved fitness and lifestyle. By offering personalized digital workouts and easy-to-follow recipes, we aim to make healthy living accessible and engaging.

## Features

- **Personalized Digital Workouts**: Tailored exercise routines to meet individual fitness goals.
- **Easy-to-Follow Recipes**: Nutritious and delicious recipes to complement your fitness journey.
- **User-Friendly Interface**: Navigate through workouts, recipes, and gear recommendations with ease.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript

## Getting Started

To get a local copy up and running, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/cs272-s25/p4.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd p4
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Usage

- **Browse Workouts**: Explore a variety of workouts tailored to different fitness levels.
   - BMI Calculator: Input height and weight to compute your Body Mass Index, with color‑coded status.
   - Workout List: Browse workouts loaded dynamically from workouts.json.
   - Detail Pages: Click a workout image to view a dedicated detail page (e.g. running.html).
      - Including youtube video instructions.
   - My List Drawer: Add workouts to your personal list; view and delete saved items in a slide‑out panel.
      - Synchronize with tracker.
   - Daily Tracker: See a summary (daily.html) of sessions, total time, calories burned, and an itemized table.
      - Synchronized with workouts added in the list.
Star Ratings: Rate workouts on a 5‑star scale and persist your ratings across sessions.
- **Explore Recipes**: Find meals that suit your dietary preferences and fitness goals.
- **Gear Recommendations**: VBrowse the Gear page to discover hand-picked workout equipment. Click any item to view detailed information including its brand, price, rating, and benefits on the Product Details page.
- **Cart Drawer**: Add gear items to your cart using the blue “Add” button below each product card. In the slide-out drawer that appears, you can:
  - **Increase Quantity**: Click the `+` button to add more of the same item.
  - **Decrease Quantity**: Click the `−` button to remove one unit of the item. When quantity reaches 0, the item is automatically removed from the cart.
  - **Delete Item**: Use the red “Delete” button to remove an item entirely from the cart.
  - **View Total**: The cart dynamically calculates and displays the **total price** at the bottom.

## Contact

- **Group Members**:
  - Siqi Yang - [Email](syang687@wisc.edu)
  - Arthur Hu - [Email](bhu59@wisc.edu)
  - Enoch Moon - [Email](etmoon@wisc.edu)
  - Yang Chu - [Email](ychu88@wisc.edu)

Project Link: [https://cs272-s25.github.io/p4](https://cs272-s25.github.io/p4)
