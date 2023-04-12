import React, { useEffect, useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { styles } from "./styles";
import { MMKV, useMMKVString } from "react-native-mmkv";
const storage = new MMKV({ id: "mmkv_basics" }); // A new instance of mmkv sys

type User = {
  name: string;
  email: string;
};
export default function App() {
  const [name, setName] = useMMKVString("user.name");
  const [email, setEmail] = useMMKVString("user.email");

  const [user, setUser] = useState<User>();
  const handleSave = () => {
    storage.set(
      "user",
      JSON.stringify({
        //Create our Collection
        name,
        email,
      })
    );
  };
  function fetchUser() {
    const data = storage.getString("user"); // get our collection
    setUser(data ? JSON.parse(data) : undefined);
  }
  useEffect(() => {
    const Listner = storage.addOnValueChangedListener((changedKey) => {
      const newValue = storage.getString(changedKey);
      console.log("New value: ", newValue);
      fetchUser();
    });
    return () => {
      Listner.remove();
    };
  }, []);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        style={styles.input}
        onChangeText={setName}
        value={name}
      />
      <TextInput
        placeholder="E-mail"
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />
      <Button title="Save" onPress={handleSave} />
      <Text>{user ? `Name: ${user.name}\nEmail: ${user.email}` : "-"}</Text>
    </View>
  );
}
