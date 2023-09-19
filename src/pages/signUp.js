import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setcpf] = useState('');
  const [email, setEmail] = useState('');
  const [curso, setCurso] = useState('');

  const navigation = useNavigation();

  const handleBack = () => {
    navigation.navigate('login');
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
      <Text style={{color: '#000'}}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu Nome"
        placeholderTextColor={'#000'}
        value={nome}
        onChangeText={setNome}
      />
      <Text style={{color: '#000'}}>Telefone</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu Telefone"
        placeholderTextColor={'#000'}
        value={telefone}
        onChangeText={setTelefone}
      />
      <Text style={{color: '#000'}}>CPF</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu CPF"
        placeholderTextColor={'#000'}
        value={cpf}
        onChangeText={setcpf}
      />
      <Text style={{color: '#000'}}>Curso</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu Curso"
        placeholderTextColor={'#000'}
        value={curso}
        onChangeText={setCurso}
      />
      <TouchableOpacity style={styles.button} onPress={handleBack}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.outlineButton} onPress={handleBack}>
        <Text style={styles.outlineButtonText}>Voltar</Text>
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

export default SignUp;
