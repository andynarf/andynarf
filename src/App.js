import React from 'react';
import './App.css';
import Particles from "react-tsparticles";
import TypeIt from "typeit-react";


function App() {
  return (
    <div className='container'>
    <Particles
    id="tsparticles"
    options={{
      background: {
        color: {
          value: "#fff",
        },
      },
      fpsLimit: 60,
      interactivity: {
        detectsOn: "canvas",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          // onHover: {
          //   enable: true,
          //   mode: "repulse",
          // },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#000",
        },
        links: {
          color: "#636C66",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 60,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: true,
          value: 5,
        },
      },
      detectRetina: true,
    }}
  >
/>;

    </Particles>
    <TypeIt id='typing'

            // options={{ loop: true }} 
            getBeforeInit={instance => {
              instance
                .type("     Hey there ! I'm Andres ")
                .pause(750)
                .break()
                .break()
                .type("I am reliable")
                .pause(750)
                .delete(8, {speed: 400})
                .pause(500)
                .type("motivated")
                .pause(750)
                .delete(9, {speed: 400})
                .pause(500)
                .type("creative")
                .pause(750)
                .delete(12, {speed: 400})
                .pause(500)
                .type("'m a Full Stack Developer", {speed: 70})

    // Remember to return it!
            return instance;
            }}
/>;
  <TypeIt id='typing2'
    getBeforeInit={instance => {
    instance
      .type("")
      .pause(15000)
      .type("React/Redux | Ruby on Rails | HTML5/CSS3 | PostgreSQL", {speed:50})
      return(instance)
    }
  }
  />
    </div>
  );
};

export default App;
