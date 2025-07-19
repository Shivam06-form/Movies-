import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../Components/Header';
import { useNavigation } from '@react-navigation/native';
import { Styles } from '../../../Styles';
import { useSelector } from 'react-redux';
import BottomTab from '../../Components/BottomTab';
import FavCard from '../../Components/FavCard';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { Colors, Height, Width, style2, graidantLoaction, iconSizes_1 } =
  Styles();

const Favourite = () => {
  const navigation = useNavigation();
  const { list } = useSelector(user => user.Favourite);

  return (
    <SafeAreaView style={[{ ...style2.container }]}>
      <View style={[{ ...style2.innerContainer }]}>
        <Header
          title={'Favourite Movies'}
          Function={() => {
            navigation.goBack();
          }}
        />
        {list.length == 0 && (
          <Text style={[{ ...style2.title }, { ...styles.empty }]}>
            No Favourites Marked
          </Text>
        )}
        <FlatList
          showsVerticalScrollIndicator={false}
          data={list}
          renderItem={({ item, key }) => {
            return <FavCard movie={item} />;
          }}
        />
      </View>
      <BottomTab selected={2} />
    </SafeAreaView>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  empty: { color: Colors.Color_Brown, marginTop: (Height / 100) * 25},
});
