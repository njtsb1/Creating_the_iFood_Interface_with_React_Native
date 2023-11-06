import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, Alert, ActivityIndicator } from 'react-native';
import {
  SafeAreaView,
  ViewActivity,
  CategorieView,
  BannerView,
  ViewPrincipal,
  ViewRestaurants,
  TitleRestaurants,
  ButtonTypeSelect,
  TextTypeSelect,
  SelectType
} from './style';



import CategorieItem from '../../components/CategorieItem'
import BannerItem from '../../components/BannerItem'
import RestaurantItem from '../../components/RestaurantItem'


export default function Principal() {


  const [banners, setBanners] = useState([])
  const [categories, setCategories] = useState([])
  const [restaurants, setRestaurants] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [type, setType] = useState('Delivery');


  useEffect(() => {


    async function searchData() {

      try {

        const response = await fetch('http://my-json-server.typicode.com/pablohdev/app-ifood-clone/db');

        const data = await response.json();


        setLoaded(true)


        setBanners(data.banner_Principal);
        setCategories(data.categories);
        setRestaurants(data.restaurants);


      } catch (e) {

        Alert.alert('Error consulted' + e);

      }

    }

    searchData()


  }, [])



  const ViewHome = (props) => {
    return (
      <ViewPrincipal>
        <SelectType>
          <ButtonTypeSelect onPress={() => setType('Delivery')}><TextTypeSelect selected={type == 'Delivery'}>Delivery</TextTypeSelect></ButtonTypeSelect>
          <ButtonTypeSelect onPress={() => setType('Withdrawal')}><TextTypeSelect selected={type == 'Withdrawal'}>Withdrawal</TextTypeSelect></ButtonTypeSelect>
        </SelectType>
        <CategorieView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categories.map(categorie => (
            <CategorieItem key={categorie.id} photo={categorie.img_url} texto={categorie.name} />
          ))}
        </CategorieView>
        <BannerView horizontal={true} showsHorizontalScrollIndicator={false}>
          {banners.map(banner => (
            <BannerItem key={banner.id} photo={banner.banner_img_url} />
          ))}
        </BannerView>
        <TitleRestaurants>Restaurants</TitleRestaurants>
        <ViewRestaurants>
          {restaurants.map(restaurant => (
            <>
              <RestaurantItem
                key={restaurant.id}
                photo={restaurant.url_img}
                name={restaurant.name}
                note={restaurant.note}
                categorie={restaurant.categorie}
                distance={restaurant.distance}
                valueShipping={restaurant.value_Shipping}
                timeDelivery={restaurant.time_Delivery}
              />
            </>
          ))}
        </ViewRestaurants>
      </ViewPrincipal>
    )
  }

  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        {loaded
          ?
          (
            <ViewHome />
          )
          :
          (
            <ViewActivity >
              <ActivityIndicator color="#F0001A" size="large" />
              <Text>Loading data please wait...{loaded}</Text>
            </ViewActivity>
          )}
      </SafeAreaView>
    </>
  );
}