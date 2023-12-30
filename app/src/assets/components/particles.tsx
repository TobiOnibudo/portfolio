import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import type { Container, Engine } from "tsparticles-engine"
import { useCallback } from "react"
import { loadSlim } from "tsparticles-slim"

type givenStyle = {
    givenWidth : string;
}


function particles( {givenWidth}: givenStyle ){
  
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
    
        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);
    
    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    
  return (
    
      
    <Particles 
      className="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
          background: {
              color: {
                  value: "none",
              },
              
          },
          fpsLimit: 70,
          "clear": true,
          "defaultThemes": {},
          "delay": 0,
          "fullScreen": {
            "enable": false,
            "zIndex": -1
          },
          style :
          {
            width:  givenWidth,
            
          }
          ,
          interactivity: {
              events: {
                  onClick: {
                      enable: true,
                      mode: "push",
                  },
                  onHover: {
                      enable: true,
                      mode: "repulse",
                  },
                  resize: true,
              },
              modes: {
                  push: {
                      quantity: 100,
                  },
                  repulse: {
                      distance: 200,
                      duration: 0.4,
                  },
              },
          },
          particles: {
              color: {
                  value: "rgb(0, 129, 251)",
              },
              links: {
                  color: "rgb(0, 129, 251)",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
              },
              move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                      default: "bounce",
                  },
                  random: false,
                  speed: 3,
                  straight: false,
              },
              number: {
                  density: {
                      enable: true,
                      area: 800,
                  },
                  value: 100,
              },
              opacity: {
                  value: 0.5,
              },
              shape: {
                  type: "circle",
              },
              size: {
                  value: { min: 1, max: 5 },
              },
                },
                detectRetina: true,
            }}
        />
 
  )
};

export default particles;
