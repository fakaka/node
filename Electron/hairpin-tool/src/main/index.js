import { app, BrowserWindow, ipcMain, Menu } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
    global.__static = require('path')
        .join(__dirname, '/static')
        .replace(/\\/g, '\\\\')
}

let mainWindow
const winURL =
    process.env.NODE_ENV === 'development'
        ? `http://localhost:9081`
        : `file://${__dirname}/index.html`

function createWindow() {
    /**
     * Initial window options
     */
    mainWindow = new BrowserWindow({
        frame: false,
        useContentSize: true,
        skipTaskbar: false,
        transparent: false,
        autoHideMenuBar: true,
        titleBarStyle: 'hidden',
        resizable: true,
        width: 1020,
        height: 671,
        minWidth: 1020,
        minHeight: 671,
        // transparent: true,
        opacity: 0.98,
        hasShadow: true,
        title: '发 卡'
    })

    mainWindow.loadURL(winURL)

    mainWindow.on('closed', () => {
        mainWindow = null
    })

    if (process.platform == 'darwin') {
        const dockMenu = Menu.buildFromTemplate([
            {
                label: '播放 / 暂停'
            },
            {
                type: 'separator'
            },
            {
                label: '上一首',
                click() {
                    console.log('New Window')
                }
            },
            { label: '下一首' }
            // {
            //     label: 'New Window with Settings',
            //     submenu: [{ label: 'Basic' }, { label: 'Pro' }]
            // },
        ])

        app.dock.setMenu(dockMenu)
    }
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})

ipcMain.on('close', e => {
    mainWindow.close()
})
ipcMain.on('minimize', e => {
    mainWindow.minimize()
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
