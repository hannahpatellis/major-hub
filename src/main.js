const { app, Menu, ipcMain, BrowserWindow } = require('electron');
const path = require('path');
import BlueLinky from 'bluelinky';

import Config from './config.json';

const isDev = true;
const isMac = process.platform === 'darwin' ? true : false;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const client = new BlueLinky(Config.bluelink_config);

client.on('ready', async () => {
  const vehicle = client.getVehicle(Config.car_vin);
  try {
    const response = await vehicle.status({parsed:false,refresh:true});
    console.log(response);
  } catch (err) {
    console.log(err);
  }
});

client.on('error', async (err) => {
  console.log(err);
});

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 800,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
    icon: '../icons/icon.png'
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  if (isDev) {
    mainWindow.webContents.openDevTools()
  }
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow();

  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);
});

const menu = [
  ...(isMac ? [{ role: 'appMenu' }] : []),
  {
    role: 'fileMenu',
  },
  ...(isDev
    ? [
        {
          label: 'Developer',
          submenu: [
            { role: 'reload' },
            { role: 'forcereload' },
            { type: 'separator' },
            { role: 'toggledevtools' },
          ],
        },
      ]
    : [])
]

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
