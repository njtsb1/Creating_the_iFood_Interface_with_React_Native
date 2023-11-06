import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView, Image, View, ButtonContainer } from './style';


import banner from '../../assets/img/banner.png';
import Button from '../../components/Button';

export default function Home({ navigation }) {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Ordering food has never been easier</Text>
          <Image source={banner} />
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Allow Location</Text>
          <Text>To discover restaurants that deliver in your area</Text>
        </View>
        <ButtonContainer>
          <Button text="JUMP" onPress={() => navigation.navigate('Main')} />
          <Button text="ENTER" theme="primary" />
        </ButtonContainer>
      </SafeAreaView>
    </>
  );
}
