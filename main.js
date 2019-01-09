const { app, BrowserWindow, Tray } = require('electron')

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({ width: 800, height: 600 })

  // and load the index.html of the app.
  win.loadFile('index.html');

  win.on('closed', () => {
    console.log('Electron window is closed')  
    win = null
  })
}

app.on('ready', createWindow)

let tray = null

app.on('ready', () => {
  tray = new Tray('build/icon_4.ico')
  tray.setToolTip('Cloud uploader.')
})

app.on('window-all-closed', () => {
    console.log('process name is ', process.platform);
    if(process.platform != 'darwin'){
        app.quit()
    }
})

app.on('active', () => {
    createWindow()
})