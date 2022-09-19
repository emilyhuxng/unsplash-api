# Unsplash Search

Unsplash Search is a web application where users can search for images utilizing the Unsplash API.

## Installation

Clone the project into a folder of your choice.

```bash
git clone https://github.com/emilyhuxng/unsplash-api.git
```

Navigate into the `unsplash-api` folder.
Run `npm install`.

Now you need to create an Unsplash account [here](https://unsplash.com/developers). After logging in, create a new application. Once you have created a new application, you should click into that application and scroll down, seeing an "Access Key" and a "Secret Key".

In the root directory (the same level as the `.env_example` file), create a file called `.env` and copy and paste the contents of `.env_example` but replace `YOUR_API_KEY_HERE` with your Access Key.

## Usage

Run `npm start`. This should open up a tab in your default browser. 

Search using the search bar. Clicking the color icons will sort by that color. Clicking the like button will save the images to your liked tab. You can click on the "Liked" button in the top right to view your liked photos and "Home" to navigate back to the home page.
