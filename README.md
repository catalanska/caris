# Wedding Website Client

## Description
**Official description:** Small website created to share with our guests all the details of our wedding.

**Real description:** Perfect excuse for me to play around with some technologies that I was learning at that time

This project was developed using **AngularJs**, using **Grunt** to build it and **npm** as package manager.

At /photos section It connects to a [NodeJS server](https://github.com/catalanska/wedding-website-server) that provides with all the photos uploaded to Instagram with a specific hashtag.

## Installation guide

To run it locally:

- Make sure you have Node installed in your system.
- Run: `npm install` (this will install all the needed dependencies)
- To start the project run: `npm start` (This will start a server on localhost:8000)
- Open your browser and go to: http://localhost:8000

To generate the build

- `npm run build` : This will generate the processed assets under dist/ folder
