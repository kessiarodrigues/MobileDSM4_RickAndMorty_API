import React, {Component} from 'react';
import api from '../services/api';
import {
  Container,
  Header,
  Avatarperfil,
  Nameperfil,
  Characterperfil,
  LabelText,
  InfoText,
} from './style';
import {View} from 'react-native';

export default class Character extends Component {
  render() {
    const {route} = this.props;
    const {character} = route.params;

    return (
      <Container>
        <Header>
          <Avatarperfil source={{uri: character.image}} />
          <Nameperfil>{character.name}</Nameperfil>
          <Characterperfil>{character.status}</Characterperfil>
          <Characterperfil>{character.gender}</Characterperfil>
        </Header>
        <View>
          <LabelText>Origem</LabelText>
          <InfoText>{character.origin.name}</InfoText>
          <LabelText>Última localização</LabelText>
          <InfoText>{character.lastLocation}</InfoText>
          <LabelText>Primeiro episódio</LabelText>
          <InfoText>{character.firstEpisode}</InfoText>
        </View>
      </Container>
    );
  }
}
