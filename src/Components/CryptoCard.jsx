import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Styles } from '../../Styles';
import { Icon, Image } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addToFav, removeFromFav } from '../../Redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native';

const { Colors, Height, Width, style2, graidantLoaction, iconSizes_1 } =
  Styles();

const CryptoCard = ({ item }) => {
  const Dispatch = useDispatch();

  const navigation = useNavigation();

  const movies = useSelector(user => user.Favourite);

  const FilterMovies = movies.list.filter(mo => mo?.id === item?.id);


  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Details', item);
      }}
      style={[
        {
          ...styles.card,
        },
      ]}
    >
      <View style={[{ ...styles.starContainer }]}>
        {!FilterMovies[0] && (
          <Icon
            onPress={async () => {
              Dispatch(addToFav({ item: item }));
              await AsyncStorage.setItem('Fav', JSON.stringify(movies.list));
            }}
            name={'star-outline'}
            size={iconSizes_1}
            color={Colors.Color_Black}
          />
        )}
        {FilterMovies[0] && (
          <Icon
            onPress={async () => {
              Dispatch(removeFromFav({ id: item.id }));
              await AsyncStorage.setItem('Fav', JSON.stringify(movies.list));
            }}
            name={'star'}
            size={iconSizes_1}
            color={Colors.Color_Orang2}
          />
        )}
      </View>
      <Image
        source={{ uri: item.image }}
        style={[{ ...styles.image }]}
        resizeMode="cover"
        containerStyle={[]}
      />
      <View style={[{ ...styles.Details }]}>
        <Text style={[{ ...style2.title }, { ...styles.text }]}>
          {item.title.slice(0, 15)}...
        </Text>
        <Text style={[{ ...style2.text }, { ...styles.text }]}>
          price : {item?.price?.toString()}
        </Text>
        <Text
          style={[
            { ...style2.text },
            { ...styles.text },
            { color: Colors.Color_Brown },
          ]}
        >
          {item?.symbol} ( {item?.exchange})
        </Text>
      </View>
    </Pressable>
  );
};

export default CryptoCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: (Width / 100) * 4,
    borderColor: Colors.Color_lightGrey,
    borderStyle: 'solid',
    borderWidth: (Width / 100) * 0.5,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: (Width / 100) * 45,
    height: (Width / 100) * 78,
    marginBottom: (Height / 100) * 2,
    overflow: 'hidden',
  },
  image: {
    width: (Width / 100) * 45,
    height: (Width / 100) * 45,
    padding: 0,
    margin: 0,
  },
  text: { textAlign: 'center', fontSize: (Width / 100) * 4.5 },
  Details: {
    width: '100%',
    gap: (Height / 100) * 0.5,
    marginBottom: (Height / 100) * 2,
  },
  starContainer: {
    position: 'absolute',
    zIndex: 10,
    top: (Height / 100) * 0.5,
    right: (Width / 100) * 1.5,
  },
});
