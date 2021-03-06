/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 15,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#5affd4", "#97a4ec"],
      },
      "shape": {
        "type": ["image", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "circle"],
        // "type": 'circle',
        "stroke": {
          "width": 0,
          "color": "#000"
        },
        "polygon": {
          "nb_sides": 50
        },
         "image": {
          "src": "./images/hp.png"
         }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 30,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 2,
          "size_min": 40,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 1872,
        "color": "#000",
        "opacity": 1,
        "width": .1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 2
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 10
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

);