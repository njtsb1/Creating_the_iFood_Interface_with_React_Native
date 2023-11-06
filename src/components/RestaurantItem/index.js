
import React from 'react';

import { Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


import { RestaurantView, RestaurantPhoto, RestaurantInfo } from './style';

const RestaurantItem = ({ photo, name, key, note, category, distance, valueShipping, timeDelivery }) => {
    return (
        <RestaurantView key={key}>
            <RestaurantPhoto source={{
                uri: photo.trim(),
                width: 50,
                height: 50,
                resizeMode: 'cover'
            }} />
            <RestaurantInfo>
                <Text>{name}</Text>
                <Text><AntDesign name="star" size={12} color="#F9A825" /> {note} - {category} - {distance}</Text>
                <Text>{timeDelivery} • R$ {valueShipping}</Text>
                <Text></Text>
            </RestaurantInfo>
        </RestaurantView>
    );
}

export default RestaurantItem;