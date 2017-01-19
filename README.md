# BreezeJS - SystemJS Builder
Working and non-working build configs for BreezeJS and SystemJS Builder  

* breeze-client: 1.6.2  
* systemjs: 0.19.41  
* systemjs-builder: 0.15.34  

### Build & Run & Test

* Download node packages by saving `package.json` in Visual Studio
* Compile `typescript` files by saving any of the files in Visual Studio
* Open `Task Runner Explorer` and run the one of the tasks
* `build` task is the working version that uses `breeze.base.debug.js` and individual adapters
* `build-breeze.debug` task is the one that uses `breeze.debug.js` and get `Multiple anonymous defines` error

### Changelog

**1.0.1**

* Package and some minor updates

**1.0.0**

* Initial version
