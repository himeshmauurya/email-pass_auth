// AuthComponent.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

const AuthComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleSignUp = async () => {
    try {
        auth().createUserWithEmailAndPassword(email, password).then((user)=>{
            console.log(auth().currentUser)
        });
        console.log('User signed up successfully!');
      } catch (error) {
        console.error('Error signing up:', error)
      }
    
  };

  const handleSignIn = async () => {
    try {
        auth().signInWithEmailAndPassword(email, password).then((user)=>{
            console.log(user)
        });
        console.log('User signed in successfully!');
      } catch (error) {
        console.error('Error signing in:', error);
      }
   
  };

  return (
    <View>
      <Text>Authentication</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button title="Sign In" onPress={handleSignIn} />
      <Button title="Signout" onPress={() => auth().signOut()} />
    </View>
  );
};

export default AuthComponent;
