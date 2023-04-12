

A simple implementation of [MMKV](https://github.com/mrousavy/react-native-mmkv) (Key-value storage) framework.
In this project, we will be using MMKV to store and retrieve user information, and to pre-populate the user's credentials in the sign-in form
When the user presses the 'username' or 'password' input fields, they will be automatically provided with their stored credentials, thanks to our 'allow auto-signIn' option
 



Note from the offical documentation:
React-native-mmkv is a library that allows you to easily use MMKV inside your React Native applications. It provides fast and direct bindings to the native C++ library which are accessible through a simple JS API.
~30x faster than AsyncStorage.


#### Dependencies and command line options

```bash
expo install react-native-mkv
yarn add react-native-paper
yarn add react-native-safe-area-context
yarn add react-native-vector-icons
```

```bash
expo prebuild
expo run:android
```
