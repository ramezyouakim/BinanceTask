import React, {memo, useMemo, useState} from 'react';

import {observer} from 'mobx-react';
import IPInfoService from '../../../core/services/IPInfo/IPInfoService';
import LoadingIndicator from '../../../core/kit/LoadingIndicator';
import IPInfo from '../../../components/IPInfo/IPInfo';
import styled from 'styled-components/native';
import SearchBar from '../../../core/kit/SearchBar';
import ImageSlider from '../../../core/kit/ImageSilder';

import image1 from '../../../assets/p1.jpeg';
import image2 from '../../../assets/p2.jpeg';
import image3 from '../../../assets/p3.jpeg';
import Navigator from '../../../routes/Navigator';
import {routes} from '../../../routes/routes';

const HomeScreen = () => {
  const {ip, ISP, location, timezone} = IPInfoService.data;
  const [search, setSearch] = useState('');

  const setInputs = (setter: any) => (value: any) => {
    setter(value);
  };

  const searchHandler = () => {
    IPInfoService.getInfoByIp(search);
  };

  const handleOnImagePress = (image: any) => {
    Navigator.navigateTo({
      routeName: routes.main.userProfile,
      routeParams: {image, ip, ISP, location, timezone},
    });
  };

  const imagesData = useMemo(
    () => [
      {id: '1', source: image1, onPress: () => handleOnImagePress(image1)},
      {id: '2', source: image2, onPress: () => handleOnImagePress(image2)},
      {id: '3', source: image3, onPress: () => handleOnImagePress(image3)},
    ],
    [],
  );

  if (IPInfoService.loading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <HeaderContainer>
        <Header>IP tracker</Header>
        <SearchContainer>
          <SearchBarView
            placeholder="Search for any IP address"
            onTextChange={setInputs(setSearch)}
          />
          <SearchBTN onPress={searchHandler}>
            <SearchBTNText>{'>'}</SearchBTNText>
          </SearchBTN>
        </SearchContainer>
      </HeaderContainer>
      <IPInfo />

      <ImageSlider images={imagesData} />
    </>
  );
};

export default memo(observer(HomeScreen));

const HeaderContainer = styled.View(({theme}) => ({
  paddingVertical: theme.rems.x12,
  backgroundColor: theme.colors.blue,
}));

const Header = styled.Text(({theme}) => ({
  fontSize: theme.fonts.header2,
  color: theme.colors.white,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: theme.rems.x5,
}));

const SearchContainer = styled.View({
  flexDirection: 'row',
});

const SearchBarView = styled(SearchBar).attrs(({theme}) => ({
  containerProps: {
    style: {
      flex: 1,
      paddingVertical: theme.rems.x1,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      marginRight: 0,
      marginHorizontal: theme.rems.x6,
      backgroundColor: theme.colors.white,
    },
  },
}))({});

const SearchBTN = styled.TouchableOpacity(({theme}) => ({
  width: 40,
  borderTopRightRadius: 10,
  borderBottomRightRadius: 10,
  marginRight: theme.rems.x7,
  backgroundColor: theme.colors.secondaryColor,
  justifyContent: 'center',
  alignItems: 'center',
}));

const SearchBTNText = styled.Text(({theme}) => ({
  color: theme.colors.white,
}));
