import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomTab from '../../Components/BottomTab';
import { Styles } from '../../../Styles';
import CryptoCard from '../../Components/CryptoCard';

const { Colors, Height, Width, style2, graidantLoaction, iconSizes_1 } =
  Styles();

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';

const Home = () => {
  const [slice, setSlice] = useState(10);
  const [Loading, setLoading] = useState(true);
  const [CryptoLists, setCryptoLists] = useState([]);
  const [SliceList, setSliceList] = useState([]); //// render list on end ////
  const [refershing, setRefershing] = useState(false);

  const FetchCryptoList = async () => {
    setRefershing(true);
    try {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      const res = await fetch(url, { headers: myHeaders, method: 'Get' });
      const data = await res.json();
      console.log(data, 'data');
      setCryptoLists(
        data.map(coin => {
          return {
            title: coin.name,
            image: coin.image,
            price: coin.price_change_percentage_24h,
            symbol: coin.symbol,
            exchange: coin.ath_change_percentage,
            id: coin.id,
            market_cap: coin.market_cap,
            total_volume: coin.total_volume,
            price_change_24h: coin.price_change_24h,
          };
        }),
        setLoading(false),
        setRefershing(false),
      );
    } catch (error) {
      setRefershing(false),
        setLoading(false),
        Alert.alert('Something Went Wrong');
    }
  };

  useEffect(() => {
    FetchCryptoList();
  }, []);

  useEffect(() => {
    setSliceList(CryptoLists.slice(0, slice));
    setLoading(false);
  }, [slice, CryptoLists]);

  return (
    <SafeAreaView style={[{ ...style2.container }]}>
      <FlatList
        refreshing={refershing}
        onRefresh={() => {
          FetchCryptoList();
        }}
        columnWrapperStyle={[
          {
            ...styles.wrapper,
          },
        ]}
        keyExtractor={item => item.id}
        data={SliceList}
        numColumns={2}
        renderItem={({ item, key }) => {
          return <CryptoCard item={item} />;
        }}
        onScrollEndDrag={e => {
          console.log('end');
          setLoading(true);
          setSlice(slice + 10);
        }}
      />

      {Loading && <ActivityIndicator size="large" />}

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
