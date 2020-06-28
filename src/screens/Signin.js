import React, {useState, useContext} from 'react';
import {Icon} from 'react-native-elements';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';

const Signin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {state, signin} = useContext(AuthContext);

  return (
    <View style={styles.master}>
      <Text style={styles.header}>Auth Demo</Text>
      <Input
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        leftIcon={<Icon name="envelope" type="font-awesome" size={24} />}
      />
      <Input
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        leftIcon={<Icon name="key" type="font-awesome" size={24} />}
        secureTextEntry
      />
      <Button
        title="Login"
        type="clear"
        onPress={() => {
          signin({email, password});
        }}
      />
      <View style={styles.link}>
        <Text style={styles.text}>Dont have an account? </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.text}>Sign up Here.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  master: {
    padding: 16,
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  header: {
    fontSize: 32,
    marginBottom: 18,
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    marginTop: 16,
  },
  link: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Signin;
