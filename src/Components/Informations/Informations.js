import React from 'react';
import './Informations.css';
import BrandContainer from '../BrandContainer/BrandContainer';

const Informations = () => {
  return (
    <div className="informations-container">
        <img src="./img/me.png" alt="logo" className="my-photo"/>
        <h1>Hello!</h1>
        <p>Probably you came here to see some informations about <img className="mini-logo" src="./img/blood-drop.png" alt="logo"/>dailyMeasure, but first let me introduce myself.</p>
        <p>My name is Mateusz Wandzel, I'm living in Gliwice and I'm 26 years old. I'm working as Senior 3D Printing Specialist in  
            <svg xmlns="http://www.w3.org/2000/svg" width="137" height="33.704" viewBox="0 0 137 33.704">
                <g id="Group_1028" data-name="Group 1028" transform="translate(-49.699 -8.6)">
                    <g id="red" transform="translate(49.7 8.6)">
                    <g id="Group_781" data-name="Group 781" transform="translate(0 0)">
                        <path id="Path_265" data-name="Path 265" d="M33.26,23.49,27.1,19.943l-14.662-8.47c-.168-.107-.26-.2-.26-.29s.122-.2.352-.229L19.317,9.73a.9.9,0,0,1,.994.612l1.743,5.6,2.523,1.452-2.721-8.76a.994.994,0,0,0-.382-.52L10.144.221a.994.994,0,0,0-1.559.81V25.064c0,.428-.229.5-.5.183L3.632,19.989a.9.9,0,0,1,.031-1.162L7.637,14.5V11.6L1.4,18.322a.994.994,0,0,0-.26.6L-.022,32.678a.994.994,0,0,0,.306.81l.153.107a.978.978,0,0,0,1.024.015L22.283,21.594c.367-.214.55-.061.413.352l-2.339,6.5a.917.917,0,0,1-1.024.566l-5.733-1.3-2.523,1.452,8.944,2.033a.978.978,0,0,0,.642-.061l12.506-5.871a.963.963,0,0,0,.566-.856A.948.948,0,0,0,33.26,23.49ZM7.805,27.679l-5.015,2.9a.612.612,0,0,1-.29.092c-.214,0-.352-.168-.321-.474l.734-8.638c.031-.428.29-.5.566-.183L7.973,26.7a.657.657,0,0,1,.168.428.642.642,0,0,1-.336.55ZM10.557,3.707c0-.428.29-.581.642-.336l7.109,4.953q.229.161.229.321c0,.107-.122.229-.352.275l-6.849,1.223a.627.627,0,0,1-.764-.642ZM21.488,19.775,11.245,25.691c-.367.214-.673.046-.673-.4V13.46c0-.428.306-.612.673-.4L21.5,18.995a.414.414,0,0,1,0,.78Zm8.424,4.816-7.843,3.684a.642.642,0,0,1-.26.076c-.2,0-.275-.168-.168-.474L24,21.319a.627.627,0,0,1,.948-.336l5.015,2.9a.428.428,0,0,1,.275.367C30.218,24.376,30.126,24.5,29.912,24.59Z" transform="translate(0.026 -0.044)" fill="#c8001a"/>
                        <path id="Path_266" data-name="Path 266" d="M285.283,52.023h-2.634c-2.5,0-4.165,1.666-4.165,3.535V64.72c0,1.869,1.666,3.535,4.165,3.535h2.612a3.733,3.733,0,0,0,4.03-3.535V62.9h-2.116v1.418a2.017,2.017,0,0,1-2.139,2.026h-2.274a2.005,2.005,0,0,1-2.139-2.026v-8.33a2.017,2.017,0,0,1,2.139-2.026h2.274a2.017,2.017,0,0,1,2.139,2.026v1.328h2.116V55.557A3.7,3.7,0,0,0,285.283,52.023Zm-41.808,0h-2.9c-2.5,0-4.165,1.666-4.165,3.535V64.72c0,1.869,1.666,3.535,4.165,3.535h2.9a3.754,3.754,0,0,0,4.053-3.535V59.835h-5.674v1.914h3.557v2.544a2.012,2.012,0,0,1-2.161,2.026h-2.567a2.005,2.005,0,0,1-2.139-2.026v-8.33a2.017,2.017,0,0,1,2.139-2.026h2.544a2.012,2.012,0,0,1,2.161,2.026v1.328H247.5V55.557C247.527,53.689,245.906,52.023,243.475,52.023Zm-26.634,7.79a2.837,2.837,0,0,0,1.081-2.139V55.49c0-1.8-1.6-3.49-4.21-3.49h-1.126c-2.724,0-4.368,1.689-4.368,3.49v1.058h2.927V56.12a1.46,1.46,0,0,1,1.6-1.486h.608a1.478,1.478,0,0,1,1.621,1.486v1.036a1.513,1.513,0,0,1-1.689,1.486h-1.216v2.612h1.508a1.645,1.645,0,0,1,1.846,1.6v1.126a1.631,1.631,0,0,1-1.756,1.666h-1.261a1.592,1.592,0,0,1-1.756-1.6v-.473H207.7v1.081c0,1.869,1.734,3.6,4.525,3.6H214c2.724,0,4.345-1.756,4.345-3.647V62.2A2.773,2.773,0,0,0,216.841,59.812Zm43.542,6.371h-7.362V60.825h6.507V58.912h-6.507V54.049h7.137V52.135h-9.276V68.12h9.5Zm5.471-10.131,6.822,12.068h2.161V52.135h-2.116v12.09l-6.844-12.09h-2.161V68.12h2.139Zm28.931,10.131V60.825h6.484V58.912h-6.461V54.049h7.137V52.135h-9.3V68.12h9.5V66.184ZM228.706,52.158h-7.2V68.12h7.2c2.7,0,4.345-1.734,4.345-3.6v-8.78C233.051,53.869,231.407,52.158,228.706,52.158Zm1.418,11.73a1.592,1.592,0,0,1-1.756,1.6h-3.895V54.769h3.895a1.58,1.58,0,0,1,1.756,1.6Z" transform="translate(-165.147 -44.057)" fill="#5d5c5c"/>
                    </g>
                    </g>
                </g>
            </svg>
             I'm looking for my first job as Junior Frontend Dveloper.
        </p>
        <br />
        <p>I'm really keen on about Web Development becouse of you can create from nothing something unique that can also helps people.</p>
        <br />
        <p>
        I get an idea to create <img className="mini-logo" src="./img/blood-drop.png" alt="logo"/>dailyMeasure
        when my fiance get ill and she had to save somewhere results of measurement of blood pressure. <br />I deceided to code this app and develop it
        for people who have the same problem, so they can save their results anywhere they are.
        </p>
        <BrandContainer />
    </div>
  );
}

export default Informations;