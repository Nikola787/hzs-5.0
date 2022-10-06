import React from 'react'
import { Helmet } from "react-helmet"
import './animacija.css'

const animacija = () => {

    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js";
    script.async = true;
    document.body.appendChild(script);


const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

//END SECTION
const section = document.querySelector('section');
const end = document.querySelector('h1');

//SCROLL MAGIC
const controller = new ScrollMagic.Controller();

//Scenes
const scene = new ScrollMagic.Scene({
    duration: 40000,
    triggerElement: intro,
    triggerHook: 0

})
    .addIndicators()
    .setPin(intro)
    .addTo(controller);

//Video animation
let accelAmount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 400;
    console.log(e);
});

setInterval(() => {
    delay += (scrollpos - delay) * accelAmount;
    console.log(scrollpos, delay);

    video.currentTime = scrollpos;
}, 29)


  return (
    <div class="intro">
          <video src="animO.mp4"></video>

    <Helmet>
        <script 
            src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js" 
            integrity="sha512-8E3KZoPoZCD+1dgfqhPbejQBnQfBXe8FuwL4z/c8sTrgeDMFEnoyTlH3obB4/fV+6Sg0a0XF+L/6xS4Xx1fUEg==" 
            crossorigin="anonymous" 
            referrerpolicy="no-referrer"></script>

        <script 
            src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.js" 
            integrity="sha512-judXDFLnOTJsUwd55lhbrX3uSoSQSOZR6vNrsll+4ViUFv+XOIr/xaIK96soMj6s5jVszd7I97a0H+WhgFwTEg==" 
            crossorigin="anonymous" 
            referrerpolicy="no-referrer"></script>

        <script 
            src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/debug.addIndicators.js" 
            integrity="sha512-mq6TSOBEH8eoYFBvyDQOQf63xgTeAk7ps+MHGLWZ6Byz0BqQzrP+3GIgYL+KvLaWgpL8XgDVbIRYQeLa3Vqu6A==" 
            crossorigin="anonymous" 
            referrerpolicy="no-referrer"></script>

        <script 
            src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js" 
            integrity="sha512-8Wy4KH0O+AuzjMm1w5QfZ5j5/y8Q/kcUktK9mPUVaUoBvh3QPUZB822W/vy7ULqri3yR8daH3F58+Y8Z08qzeg==" 
            crossorigin="anonymous" 
            referrerpolicy="no-referrer"></script>
    </Helmet>
    </div>
  )
}

export default animacija