import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import BinanceService from '../../../core/services/binance/Binance';
import {FlatList, StyleSheet, Text} from 'react-native';
import {observer} from 'mobx-react';
import LoadingIndicator from '../../../core/kit/LoadingIndicator';
import {debounce} from 'lodash';

type MarketDataItem = {
  e: string;
  p: string;
  s: string;
};

const binanceService = new BinanceService();

const MarketDataScreen: React.FC = () => {
  const [data, setData] = useState<MarketDataItem[]>([]);
  const dataRef = useRef<MarketDataItem[]>([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedUpdate = useCallback(
    debounce((newData: MarketDataItem[]) => {
      setData([...newData].slice(0, 100));
    }, 300),
    [],
  );

  const onLoad = () => {
    binanceService.subscribeToData((newItem: MarketDataItem) => {
      dataRef.current = [newItem, ...dataRef.current];
      debouncedUpdate(dataRef.current);
    });
  };

  useEffect(() => {
    onLoad();

    return () => {
      binanceService.unSubscribeToData();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = useCallback(
    ({item, index}: {item: MarketDataItem; index: number}) =>
      item.p ? (
        <Text key={index}>{`${item.e} | ${item.p} | ${item.s}`}</Text>
      ) : null,
    [],
  );

  const keyExtractor = useCallback(
    (item: MarketDataItem, arrayIndex: number) => `${item.p}-${arrayIndex}`,
    [],
  );

  if (binanceService.loading && data.length < 1) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <FlatList
        contentContainerStyle={styles.container}
        removeClippedSubviews
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={<Text>No data found</Text>}
      />
    </>
  );
};

export default memo(observer(MarketDataScreen));

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
