
## Intro
Technical Challenge React Native
Please contact me if there is any issues running the project
Please note that there is no icons added to the bottom tab bar (so it's not a bug)

Please note since this a task and no atomic commits was used more about [atomic commits](https://en.wikipedia.org/wiki/Atomic_commit#:~:text=In%20the%20field%20of%20computer,is%20said%20to%20have%20succeeded.)
# Before You run

1- make sure you have the [environment setup](https://reactnative.dev/docs/environment-setup)

2- for Android add your SDK path inside `android/local.properties` for exmaple `sdk.dir=YOUR_ANDROID_SDK_PATH` and make sure that the JDK 17 is installed and configured on your machine

## Run Locally

Clone the project

```bash
  git clone https://github.com/ramezyouakim/BinanceTask.git
```

Go to the project directory

```bash
  cd BinanceTask
```

Install dependencies

```bash
  yarn install
```

IOS 

```bash
  cd ios
  pod install
  cd ..
  npx react-native run-ios
```
or
```bash
  1- cd ios
  2- pod install
  3- run using Xcode
  4- open blogapp.xcworkspace using Xcode 
  5- click on the play button 
```

Android 

```bash
  cd android
  ./graldew clean
  cd ..
  npx react-native run-android
```

Start the server

```bash
 npx react-native start --reset-cache
```


# APK

You can download an apk form here [download](https://drive.google.com/file/d/18fx6oacwvw4SNenrOrZ0z63odkzfExWz/view?usp=sharing)

# Troubleshooting

###  Running the app:
Failed to connect to debugger
[![App Screenshot](https://github.com/ramezyouakim/BinanceTask/assets/18330434/02b082f5-e9e0-4543-90d8-06a676fe9811)

```bash
1- Open React Native Dev Menu
2- Go to Dev settings > Debug server host & port for device
3- Set YOUR_MACHINE_IP:8081
4- npm start --reset-cache
5- reload the app
```

# third-party libraries
1- [mobx](https://www.npmjs.com/package/mobx)
2- [mobx-react](https://www.npmjs.com/package/mobx-react)

