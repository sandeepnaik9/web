const {app, BrowserWindow, ipcMain} = require("electron")
const path = require('path')
require('@electron/remote/main').initialize()


function createWindow(){
    const win = new BrowserWindow(
        {
            fullscreen:true,
            webPreferences:{
                enableRemoteModule: true,
                nodeIntegration: true,

            }
        }
    )
    
    win.loadURL('http://localhost:3000')
    win.webContents.openDevTools()
    win.once("ready-to-show",()=>{win.show()})
    var sqlite3 = require("sqlite3").verbose()
    console.log(path)
    var db = new sqlite3.Database("test.db")
    db.serialize(function(){
        db.each("SELECT UCODE FROM pricelist;", function(err,row){
            console.log(row,err,"test tables")
        })
    })
}

app.on('ready',createWindow)


app.on('window-all-closed',function(){
    if(process.platform != 'darwin'){
        app.quit()
    }
})


app.on('activate',function(){
if(BrowserWindow.getAllWindows().length===0) createWindow()
})