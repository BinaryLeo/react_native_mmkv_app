import React, { useEffect, useState } from "react";
import { View, Button, Text, Alert, KeyboardAvoidingView } from "react-native";
import { Checkbox, Provider, Switch, TextInput } from "react-native-paper";
import { styles } from "./styles";
import { MMKV, useMMKVBoolean, useMMKVString } from "react-native-mmkv";

const storage = new MMKV({ id: "mmkv_basics" });

type User = {
  name: string;
  password: string;
  autoComplete: boolean;
};

export default function App() {
  const [name, setName] = useMMKVString("user.name");
  const [password, setPassword] = useMMKVString("user.password");
  const [autoComplete, setAutoComplete] = useMMKVBoolean("user.autoComplete");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    fetchUser();
  }, []);

  function fetchUser() {
    const data = storage.getString("user");
    const user = data ? JSON.parse(data) : undefined;
    setUser(user);
    if (user) {
      setAutoComplete(user.autoComplete);
      setName(user.name);
      setPassword(user.password);
    }
  }

  useEffect(() => {
    if (autoComplete) {
      setName(user?.name ?? "");
      setPassword(user?.password ?? "");
    } else {
      setName("");
      setPassword("");
    }
  }, [autoComplete, user]);

  function handleSave() {
    try {
      storage.set(
        "user",
        JSON.stringify({
          name,
          password,
          autoComplete,
        })
      );
      Alert.alert("SignIn", "Data saved successfully into database");
      setName("");
      setPassword("");
      fetchUser();
    } catch {
      Alert.alert("something went wrong");
    }
  }

  const autoCompleteStatus = user?.autoComplete ? "Enabled" : "Disabled";
  const userInfo = user
    ? `Name: ${user.name}\nPassword: ${user.password}\nAuto complete: ${autoCompleteStatus}`
    : "-";

  return (
    <Provider>
      <View style={styles.container}>
        <KeyboardAvoidingView>
          <View
            style={{
              flexDirection: "row",
              gap: 15,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Text>Auto-fill</Text>
            <Switch value={autoComplete} onValueChange={setAutoComplete} />
            <Text>{secureTextEntry ? "Show Password" : "Hide Password"}</Text>
            <Checkbox
              status={secureTextEntry ? "unchecked" : "checked"}
              onPress={() => setSecureTextEntry(!secureTextEntry)}
            />
          </View>

          <TextInput
            placeholder="Name"
            style={styles.input}
            onChangeText={setName}
            value={name}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={secureTextEntry}
          />

          <Button title="SigIn" onPress={handleSave} />
          <Text style={{ marginTop: 30, fontSize: 12 }}>RETRIEVED DATA:</Text>
          <View
            style={{
              borderColor: "#eaeaea",
              borderRadius: 10,
              borderWidth: 2,
              padding: 15,
              marginTop: 10,
            }}
          >
            <Text>{userInfo}</Text>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Provider>
  );
}
