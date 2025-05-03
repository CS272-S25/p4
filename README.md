# CHANGE FOR THE BETTER: Fitness and Lifestyle App

Welcome to the project by CS472 Group 4. This application is designed to help users embark on a transformative journey towards improved fitness and lifestyle. By offering personalized digital workouts and easy-to-follow recipes, we aim to make healthy living accessible and engaging.

## Features

- **Personalized Digital Workouts**: Tailored exercise routines to meet individual fitness goals.
- **Easy-to-Follow Recipes**: Nutritious and delicious recipes to complement your fitness journey.
- **Fitness Gears**: Fitness related equipments with price.
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

## Website Overview

- **Browse Workouts**: Explore a variety of workouts tailored to different fitness levels.
   - BMI Calculator: Input height and weight to compute your Body Mass Index, with color‑coded status.
     ![image](https://github.com/user-attachments/assets/39fc6150-2076-4211-8ccd-09de78719774)

   - Workout List: Browse workouts loaded dynamically from workouts.json.
     ![image](https://github.com/user-attachments/assets/6dcf0628-4c51-4d95-add6-7841457fe38e)
   - Detail Pages: Click a workout image to view a dedicated detail page (e.g. running.html).
      - Including youtube video instructions.
        ![image](https://github.com/user-attachments/assets/8f2923ff-38c8-4f9c-b48f-14aeb141d3f9)
   - My List Drawer: Add workouts to your personal list; view and delete saved items in a slide‑out panel.
      - Synchronize with tracker.
        ![image](https://github.com/user-attachments/assets/0199f88c-2f56-4473-909d-ce5c28fccea8)
   - Daily Tracker: See a summary (daily.html) of sessions, total time, calories burned, and an itemized table.
      - Synchronized with workouts added in the list.
        ![image](https://github.com/user-attachments/assets/261ce863-e012-4dee-8f7b-a35426f32ccc)
   - Star Ratings: Rate workouts on a 5‑star scale and persist your ratings across sessions.
     ![image](https://github.com/user-attachments/assets/df3a6e09-7ef4-461e-80e0-ba7dab3cd698)
     
- **Explore Recipes**: Find meals that suit your dietary preferences and fitness goals.
  ![image](https://github.com/user-attachments/assets/b268636c-ce12-4f23-b448-c1af26bdcf9d)
  - Single card with types of food.
  - Instructions of cooking.
  - Nutrition Information Checking.
    
    ![image](https://github.com/user-attachments/assets/04f607b9-8e9a-48c6-aaf6-c2cdff4ab655)
    
- **Gear Recommendations**: VBrowse the Gear page to discover hand-picked workout equipment. Click any item to view detailed information including its brand, price, rating, and benefits on the Product Details page.
  ![image](https://github.com/user-attachments/assets/79b94a9f-1dfa-4947-9a4f-090b51ab371b)
  ![image](https://github.com/user-attachments/assets/4455b71b-9a4a-40da-96ee-414580472797)
- **Cart Drawer**: Add gear items to your cart using the blue “Add” button below each product card. In the slide-out drawer that appears, you can:
  - **Increase Quantity**: Click the `+` button to add more of the same item.
  - **Decrease Quantity**: Click the `−` button to remove one unit of the item. When quantity reaches 0, the item is automatically removed from the cart.
  - **Delete Item**: Use the red “Delete” button to remove an item entirely from the cart.
  - **View Total**: The cart dynamically calculates and displays the **total price** at the bottom.
    ![image](https://github.com/user-attachments/assets/3c9cabac-a3ec-4cf6-8f2b-a71ed85a9d68)


## Contact

- **Group Members**:
  - Siqi Yang - [Email](syang687@wisc.edu)
  - Arthur Hu - [Email](bhu59@wisc.edu)
  - Enoch Moon - [Email](etmoon@wisc.edu)
  - Yang Chu - [Email](ychu88@wisc.edu)

Project Link: [https://cs272-s25.github.io/p4](https://cs272-s25.github.io/p4)
