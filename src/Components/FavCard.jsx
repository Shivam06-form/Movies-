import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Styles } from '../../Styles';
import { Icon, Image } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFav } from '../../Redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { Colors, Height, Width, style2, graidantLoaction, iconSizes_1 } =
  Styles();

const FavCard = ({ coin }) => {
  const movies = useSelector(user => user.Favourite);

  const Dispatch = useDispatch();
  const navigation = useNavigation();

  // console.log(movies.list, 'coin');

  return (
    <View
      onPress={() => {
        navigation.navigate('Details', coin);
      }}
      style={[{ ...style2.Border, ...style2.key_Card, ...styles.card }]}
    >
      <Icon
        onPress={async () => {
          Dispatch(removeFromFav({ id: coin.id }));
          await AsyncStorage.setItem('Fav', JSON.stringify(movies.list));
        }}
        name="close"
        size={(Width / 100) * 6}
        color={Colors.Color_Black}
        containerStyle={[
          { marginBottom: (Height / 100) * -4, marginLeft: 'auto' },
        ]}
      />
      <Pressable style={[{ ...style2.flexBox }]}>
        <Image
          source={{ uri: coin.image }}
          style={[{ ...styles.image }]}
          resizeMode="cover"
        />
        <Text
          style={[
            { ...style2.text },
            {
              width: (Width / 100) * 60,
              textAlign: 'right',
            },
          ]}
        >
          {coin.title}
        </Text>
      </Pressable>
    </View>
  );
};

export default FavCard;

const styles = StyleSheet.create({
  card: {
    width: (Width / 100) * 95,
    elevation: 10,
    marginTop: (Height / 100) * 1,
    marginBottom: (Height / 100) * 1,
    height: (Height / 100) * 15,
  },

  image: {
    width: (Width / 100) * 25,
    height: (Width / 100) * 25,
  },
});
