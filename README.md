<div align="center" style="margin: 20px; text-align: center">

MMKV - AutoComplete SignIn

</div>

<div align="center" style="margin: 20px; text-align: center">



[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](https://github.com/BinaryLeo/react_native_mmkv_app/blob/main/LICENSE)
![GitHub last commit](https://img.shields.io/github/last-commit/BinaryLeo/react_native_mmkv_app?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/BinaryLeo/react_native_mmkv_app?style=flat-square)
![Warning badge](https://img.shields.io/badge/we%27re%20working%20here-wait-red?style=flat-square&logo=warning)
[![BinaryLeo badge](https://img.shields.io/badge/A%20project%20by%20BinaryLeo-2A2D34?style=flat-square&logo=Font-Awesome)](https://github.com/BinaryLeo)



</div>

<table>
  <tr>
    <td>Video</td>
    <td>MMKV</td>
  
  </tr>
  <tr>
   <td><video src='https://user-images.githubusercontent.com/72607039/234549107-e7d651ce-0220-4500-bb28-beb93d7de073.mp4' width=150/></td>
    <td><img src="https://user-images.githubusercontent.com/72607039/234550235-e5f7fed8-2737-4e45-9c3c-65bf8e30a832.png" width=300></td>
    
    




  </tr>
</table>


This is a project that demonstrates the use of [MMKV](https://github.com/mrousavy/react-native-mmkv), a key-value storage framework for React Native applications. With MMKV, in this project we easily store and retrieve user information to  pre-populate their credentials in a sign-in form. This is achieved through the "allow auto-signIn" option, which automatically provides the user's stored credentials to the input  "username" and "password" fields.

One of the major advantages of MMKV over other storage solutions like AsyncStorage is its support for synchronous operations. This allows for greater flexibility in managing data storage needs, especially in cases where data needs to be immediately persisted before proceeding to the next step in a process. MMKV's efficient C++ implementation ensures that performance is not compromised even with synchronous operations, making it a great option for React Native developers. According to the official documentation, MMKV is around 30 times faster than AsyncStorage.
#### Dependencies and command line options

```bash
expo install react-native-mkv
yarn add react-native-paper
yarn add react-native-safe-area-context
yarn add react-native-vector-icons
```

```bash
expo prebuild
npx expo run:android
```
