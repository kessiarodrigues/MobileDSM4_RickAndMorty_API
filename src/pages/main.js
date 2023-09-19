import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Keyboard, ActivityIndicator, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../services/api';
import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  Character,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
  CharacterButton,
  CharacterButtonText,
  Status,
  LabelText,
  InfoText,
} from './style';

export default class Main extends Component {
  state = {
    newCharacter: '',
    characters: [],
    loading: false,
  };

  async componentDidMount() {
    const characters = await AsyncStorage.getItem('characters');

    if (characters) {
      this.setState({characters: JSON.parse(characters)});
    }
  }

  async componentDidUpdate(_, prevState) {
    const {characters} = this.state;

    if (prevState.characters !== characters) {
      await AsyncStorage.setItem('characters', JSON.stringify(characters));
    }
  }

  handleAddCharacter = async () => {
    try {
      const {characters, newCharacter} = this.state;

      this.setState({loading: true});

      const response = await api.get(`/character/?name=${newCharacter}`);
      const data = response.data.results[0];
      const firstEpisodeResponse = await api.get(data.episode[0]);

      const mappedData = {
        id: data.id,
        name: data.name,
        status: data.status,
        species: data.species,
        lastLocation: data.location.name,
        firstEpisode: firstEpisodeResponse.data.name,
        gender: data.gender,
        origin: data.origin,
        image: data.image,
      };
      this.setState({
        characters: [...characters, mappedData],
        newCharacter: '',
        loading: false,
      });

      Keyboard.dismiss();
    } catch (error) {
      console.log(error);
      alert('Personagem não encontrado!');
      this.setState({loading: false});
    }
  };

  render() {
    const {characters, newCharacter, loading} = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar Personagem"
            value={newCharacter}
            onChangeText={text => this.setState({newCharacter: text})}
            returnKeyType="send"
            onSubmitEditing={this.handleAddCharacter}
          />
          <SubmitButton loading={loading} onPress={this.handleAddCharacter}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="add" size={20} color="#fff" />
            )}
          </SubmitButton>
        </Form>

        <List
          showsVerticalScrollIndicator={false}
          data={characters}
          keyExtractor={character => character.id}
          renderItem={({item}) => (
            <Character>
              <Avatar source={{uri: item.image}} />
              <Name>{item.name}</Name>
              <Status>
                {item.status} - {item.species}
              </Status>
              <LabelText>Última localização</LabelText>
              <InfoText>{item.lastLocation}</InfoText>
              <LabelText>Primeiro episódio</LabelText>
              <InfoText>{item.firstEpisode}</InfoText>
              <CharacterButton
                onPress={() => {
                  this.props.navigation.navigate('character', {
                    character: item,
                  });
                }}>
                <CharacterButtonText>Ver Detalhes</CharacterButtonText>
              </CharacterButton>
              <CharacterButton
                onPress={() => {
                  this.setState({
                    characters: this.state.characters.filter(
                      character => character.id !== item.id,
                    ),
                  });
                }}
                style={{backgroundColor: '#FFC0CB', borderRadius: 10}}>
                <CharacterButtonText>Excluir</CharacterButtonText>
              </CharacterButton>
            </Character>
          )}
        />
      </Container>
    );
  }
}
