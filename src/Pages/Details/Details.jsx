import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Styles } from '../../../Styles';
import { useNavigation } from '@react-navigation/native';
import { Icon, Image } from '@rneui/themed';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToFav, removeFromFav } from '../../../Redux';
import BottomTab from '../../Components/BottomTab';
import Header from '../../Components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { Colors, Height, Width, style2, graidantLoaction, iconSizes_1 } =
  Styles();

const Details = ({ route }) => {
  const {
    title,
    image,
    market_cap,
    price_change_24h,
    symbol,
    id,
    total_volume,
  } = route.params;
  const navigation = useNavigation();
  const Dispatch = useDispatch();
  const crytpList = useSelector(user => user.Favourite);

  const FilterMovies = crytpList.list.filter(mo => mo.id === id);

  console.log(route.params, 'params');
  const movies = useSelector(user => user.Favourite);

  return (
    <SafeAreaView style={[{ ...style2.container }]}>
      <View style={[{ ...style2.innerContainer }]}>
        <Header
          title={title}
          Function={() => {
            navigation.goBack();
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={{ uri: image }}
            style={[{ ...styles.image }]}
            resizeMode="cover"
          />
          {/* 
          <View style={[{ ...style2.flexBox }]}>
            {genres.map(gn => {
              return (
                <Text
                  key={gn}
                  style={[
                    { ...style2.title_2 },
                    {
                      color: Colors.Color_Brown,
                      fontSize: (Width / 100) * 4.5,
                    },
                  ]}
                >
                  {gn}
                </Text>
              );
            })}
          </View> */}
          <View style={[{ ...styles.details }]}>
            <View style={[{ ...style2.flexBox }]}>
              <Text
                style={[{ ...style2.title_2 }, { width: (Width / 100) * 75 }]}
              >
                {title}
              </Text>
              {!FilterMovies[0]?.id && (
                <Icon
                  onPress={async () => {
                    Dispatch(addToFav({ item: route.params }));
                    await AsyncStorage.setItem(
                      'Fav',
                      JSON.stringify(movies.list),
                    );
                  }}
                  name={'star-outline'}
                  size={iconSizes_1}
                  color={Colors.Color_Black}
                />
              )}
              {FilterMovies[0]?.id && (
                <Icon
                  onPress={async () => {
                    Dispatch(removeFromFav({ id: id }));
                    await AsyncStorage.setItem(
                      'Fav',
                      JSON.stringify(movies.list),
                    );
                  }}
                  name={'star'}
                  size={iconSizes_1}
                  color={Colors.Color_Orang2}
                />
              )}
            </View>
            <Text style={[{ ...style2.text }]}>Symbol : {symbol}</Text>
            <Text style={[{ ...style2.text }]}>
              Price Change 24h : {Math.floor(price_change_24h)}
            </Text>
            <Text style={[{ ...style2.text }]}>Volume : {total_volume}</Text>
            <Text style={[{ ...style2.text }]}>Market Cap : {market_cap}</Text>
          </View>
        </ScrollView>
      </View>
      <BottomTab />
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  image: {
    width: (Width / 100) * 95,
    height: (Height / 100) * 47.5,
    marginTop: (Height / 100) * 2,
  },
  details: {
    gap: (Height / 100) * 0.8,
    marginBottom: 100,
    marginTop: (Height / 100) * 2,
  },
});
