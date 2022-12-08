import * as React from 'react';
import * as ReactDOM from 'react-dom';

import AssetEmblem from './img/emblem-white.svg';
import AssetCarRefresh from './img/arrow.clockwise.circle.fill.svg';
import AssetCarTank from './img/fuelpump.fill.svg';
import AssetCarKey from './img/key.radiowaves.forward.fill.svg';
import AssetCarWheelKey from './img/steeringwheel.and.key.svg';
import AssetCar from './img/car.png';

import Config from './config.json';
import Options from './options.json';

let details = {
  "milage": "999,999"
};

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const home = (
  <main id='springboard'>
    <img id='emblem' src={AssetEmblem} />
    <header>
      <div id='refresh-action'><img src={AssetCarRefresh} /> <div>Refresh</div></div>
      <div id='fuel-avail'><img src={AssetCarTank} /> <div>190 {Config.units}</div></div>
    </header>
    <section>
      <button id='status-dashboard'>Last update: Today</button>
      <button className='action-button'>
        <img src={AssetCarKey} />
        <div>UNLOCK</div>
      </button>
      <button className='action-button'>
        <img src={AssetCarWheelKey} />
        <div>START</div>
      </button>
    </section>
    <img id='car' src={AssetCar} />
    <footer>
      <div id='car_name'>{Config.car_name}</div>
      <div id='car_details_milage'>{details.milage} {Config.units}</div>
    </footer>
  </main>
);

root.render(home);