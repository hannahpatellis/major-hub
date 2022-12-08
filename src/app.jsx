import * as React from 'react';
import * as ReactDOM from 'react-dom';
import BlueLinky from 'bluelinky';

import AssetEmblem from './img/emblem-white.svg';
import AssetCar from './img/car.png';

import Config from './config.json';
import Options from './options.json';

let details = {
  "milage": "999,999"
};

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

// const client = new BlueLinky(Config.bluelink_config);

// client.on('ready', async () => {
//   const vehicle = client.getVehicle(Config.car_vin);
//   const response = await vehicle.lock();
//   console.log(response);
// });

function getCarDetails() {

}

const home = (
    <main>
      <img id='emblem' src={AssetEmblem} />
      <section>
        <button>Thing</button>
        <button>Thing</button>
        <button>Thing</button>
        <button>Thing</button>
        <button>Thing</button>
        <button>Thing</button>
      </section>
      <img id='car' src={AssetCar} />
      <footer>
        <div id='car_name'>{Config.car_name}</div>
        <div id='car_details_milage'>{details.milage} {Config.units}</div>
      </footer>
    </main>
);

root.render(home);