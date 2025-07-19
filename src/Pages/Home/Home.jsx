import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomTab from '../../Components/BottomTab';
import Header from '../../Components/Header';
import { Movies } from '../../../Movies.json';
import MovieCard from '../../Components/MovieCard';
import { Styles } from '../../../Styles';

const { Colors, Height, Width, style2, graidantLoaction, iconSizes_1 } =
  Styles();

const Home = () => {
  return (
    <SafeAreaView style={[{ ...style2.container }]}>
      <FlatList
        columnWrapperStyle={[
          {
            ...styles.wrapper,
          },
        ]}
        data={Movies}
        numColumns={2}
        renderItem={({ item, key }) => {
          return <MovieCard item={item} />;
        }}
      />
      <BottomTab selected={1} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    width: (Width / 100) * 95,
    justifyContent: 'space-between',
  },
});
