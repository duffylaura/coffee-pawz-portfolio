import React from 'react';
import Container from 'react-bootstrap/Container';
import About from '../components/about';
import Project from '../components/project';
import ContactForm from '../components/contactForm';
import Skills from '../components/skills';
import Pdf from '../components/pdf';

const proj = [
  {id: 1, 
  title: 'Music Social Media Site', 
  about: 'Did you listen to a song today that made you feel a certain way, but want to express it in a new and fun way? Do you want to join a community of like-minded music lovers? If yes, Then Purple wAIve is perfect for you! Purple wAIve is a webpage built for audiophiles, artists, writers or really anyone who likes music and artistic expression. Purple wAIve uses DALLE2s artificial intelligence system to generate pictures based on user input.The AI generated images offer an expansion of the scope of artistic expression since most humans would not think to create an image/picture the same as an AI system that has millions and millions of pictures/images to reference all at a moments notice.',
  repo: 'https://github.com/duffylaura/purple_wAIve',
  deploy: 'https://purple-waive.herokuapp.com/',
  img: 'music',
  },
  {id: 2, 
    title: 'Social Network API', 
    about: 'This project is an API for a social network application where users can share their thoughts, react to thoughts, and create a friend list. Express.js was used for routing, MongoDB was used for the database, and Mongoose was used for the ODM. The developer also used the dayjs npm package to format timestamps on thoughts and reactions. This application focuses on the backend for a social network and therefore has not been deployed. It can be installed following the instructions in the README.',
    repo: 'https://github.com/duffylaura/social-network-API',
    img: 'fox-hacker',
  },
  {id: 3, 
    title: 'Particle Problems', 
    about: 'Particle Problems is a reliable, easy-to-use app that tells the user the pollen count and the air quality in any location they choose to search. Particle Problems makes use of the Breeze-O-Meter and Open Weather Map APIs as well as the Bulma, Leaflet, jQuery, and jQuery widgets libraries. <br/> Our application will provide a solution to those with Particle Problems in one click, instead of several Googles per day.',
    repo: 'https://github.com/duffylaura/Particle-Problems',
    deploy: 'https://duffylaura.github.io/Particle-Problems/',
    img: 'allergy-2',
  },
  {id: 4, 
    title: 'Coffee Pawz Note Taker App', 
    about: 'Do you ever have an amazing coffee thought!? That feeling when you are spacing out while sipping on a cup of coffee and then think "Oh! I should write that down!” BUT WHERE!? The Note Take app offers the perfect solution! The Note Taker application can be used to write and save notes. Using an Express.js back end, this app will save and retrieve your stored notes (each having a unique ID!) from a JSON file. The application has been deployed using Heroku.',
    repo: 'https://github.com/duffylaura/note-taker-app',
    deploy: 'https://coffee-pawz-note-taker-app.herokuapp.com/',
    img: 'note-taker',
  },
  {id: 5, 
    title: 'Weather Tracker App', 
    about: 'Get ready to be BLOWN away! (And for some weather puns!) This weather web application uses the third party API, OpenWeather, to retrieve weather data for a city input by the user. After inputting their chosen city and clicking the search button, the user will see the current weather temperature, humidity, windspeed and an descriptive icon. They will also see the temperature, humidity, windspeed, and icon for the next five days. The weather app runs in the browser and features dynamically updated HTML and CSS. This application also uses local storage to store each city a user searches for. The application takes each searched city and adds it to an array stored in local storage. The storage is displayed in the form of dynamically generated, clickable buttons on the page.',
    repo: 'https://github.com/duffylaura/weather-challenge',
    deploy: 'https://duffylaura.github.io/weather-challenge/',
    img: 'weather',
  },

  {id: 6, 
    title: 'Daily Planner', 
    about: 'This web application was designed for people with busy schedules! It allows the user to add events to a daily planner so that they can manage their schedule for the day effectively. While working on this project, the coder developed skills in using the Moment.js library to work with date and time, Bootstrap, and local storage.',
    repo: 'https://github.com/duffylaura/daily-planner',
    deploy: 'https://duffylaura.github.io/daily-planner/ ',
    img: 'planner',
  },
];

function Homepage() {
  return (
  <Container id="Home">

    <Container id="About">
      <About />
    </Container>

    <Container id="Portfolio">
      <h1> Portfolio. </h1>
      <Project proj = {proj} />
    </Container>

    <Container id="Resume">
      <h1> Resume. </h1>
      <Pdf />
      <Skills />
    </Container> <br/><br/><br/>

    <Container id="Contact"> 
      <h1> Contact. </h1>
      <ContactForm />
    </Container>

  </Container>
  );
}

export default Homepage;


