import React, { useEffect, useState } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";
import { styles } from "./styles";
import { MMKV, useMMKVBoolean, useMMKVString } from "react-native-mmkv";
import { Provider, Switch } from "react-native-paper";
const storage = new MMKV({ id: "mmkv_basics" }); //* A new instance of mmkv sys
type User = {
  name: string;
  email: string;
  autoComplete: boolean;
};
export default function App() {
  const [name, setName] = useMMKVString("user.name");
  const [email, setEmail] = useMMKVString("user.email");
  const [autoComplete, setAutoComplete] = useMMKVBoolean("user.autoComplete");
  const [user, setUser] = useState<User>();
  const handleSave = () => {
    try {
      storage.set(
        "user",
        JSON.stringify({
          //*Create our Collection
          name,
          email,
          autoComplete,
        })
      );
      Alert.alert("Data saved successfully");
    } catch {
      Alert.alert("something went wrong");
    }
  };
  function fetchUser() {
    const data = storage.getString("user"); //* get our collection
    setUser(data ? JSON.parse(data) : undefined);
  }
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <Provider>
      <View style={styles.container}>
        <View
          style={{ flexDirection: "row", gap: 15, justifyContent: "flex-end" }}
        >
          <Text>Auto SignIn</Text>
          <Switch
            value={autoComplete}
            onValueChange={(value) => {
              setAutoComplete(value);
              storage.set("user.autoComplete", value);
            }}
          />
        </View>

        <TextInput
          placeholder="Name"
          style={styles.input}
          onChangeText={setName}
          value={autoComplete ? name : ""}
        />
        <TextInput
          placeholder="E-mail"
          style={styles.input}
          onChangeText={setEmail}
          value={autoComplete ? email : ""}
        />
        <Button title="Save" onPress={handleSave} />
        <Text style={{ marginTop: 30, fontSize: 12 }}>RETRIEVED DATA:</Text>
        <View
          style={{
            borderColor: "#eaeaea",
            borderRadius: 10,
            borderWidth: 2,
            padding: 15,
          }}
        >
          <Text>
            {user
              ? `Name: ${user.name}\nEmail: ${user.email}\nAuto complete: ${
                  autoComplete ? "Enabled" : "Disabled"
                } `
              : "-"}
          </Text>
        </View>
      </View>
    </Provider>
  );
}
