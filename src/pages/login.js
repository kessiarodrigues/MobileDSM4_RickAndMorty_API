import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {
    if (email === '' && password === '') {
      navigation.navigate('main');
    } else {
      alert('E-mail ou senha inválidos!');
    }
  };
  const handleSignUp = () => {
    navigation.navigate('signUp');
  };
  return (
    <View style={styles.container}>
      <Text style={{color: '#000'}}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu E-mail"
        placeholderTextColor={'#000'}
        value={email}
        onChangeText={setEmail}
      />
      <Text style={{color: '#000'}}>Senha</Text>

      <TextInput
        placeholderTextColor={'#000'}
        style={styles.input}
        placeholder="Digite sua Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.outlineButton} onPress={handleSignUp}>
        <Text style={styles.outlineButtonText}>Cadastrar Usuário</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#3498db',
    marginVertical: 5,
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  outlineButton: {
    borderWidth: 1,
    marginVertical: 5,

    borderColor: '#3498db',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  outlineButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Login;
