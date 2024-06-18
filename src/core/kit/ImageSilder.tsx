import React, {useCallback, useRef} from 'react';
import {
  FlatList,
  Image as RImage,
  Dimensions,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import {styled} from 'styled-components/native';

const {width} = Dimensions.get('window');

type ImageSliderProps = {
  images: Array<{
    id: string;
    source: ImageSourcePropType | undefined;
    onPress: () => void;
  }>;
};

const ImageSlider = ({images}: ImageSliderProps) => {
  const flatListRef = useRef(null);

  const renderItem = useCallback(
    ({item}: any) => (
      <TouchableOpacity onPress={item.onPress}>
        <ImageContainer>
          <Image source={item.source} />
        </ImageContainer>
      </TouchableOpacity>
    ),
    [],
  );

  return (
    <Container>
      <FlatList
        data={images}
        ref={flatListRef}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        snapToInterval={width}
        decelerationRate="fast"
        renderItem={renderItem}
      />
    </Container>
  );
};

const Container = styled.View({
  flex: 1,
});

const ImageContainer = styled.View({
  width,
  padding: 20,
  justifyContent: 'center',
  alignItems: 'center',
});

const Image = styled(RImage)({
  width: '100%',
  height: 200,
});

export default ImageSlider;
