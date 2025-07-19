import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Styles } from '../../Styles';
import { Icon, Image } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { removeFromFav } from '../../Redux';

const { Colors, Height, Width, style2, graidantLoaction, iconSizes_1 } =
  Styles();

const FavCard = ({ movie }) => {
  const Dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View
      onPress={() => {
        navigation.navigate('Details', movie);
      }}
      style={[{ ...style2.Border, ...style2.key_Card, ...styles.card }]}
    >
      <Icon
        onPress={() => {
          Dispatch(removeFromFav({ id: movie.id }));
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
          source={{ uri: movie.poster }}
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
          {movie.title}
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
