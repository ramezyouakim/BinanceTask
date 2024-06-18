import {observer} from 'mobx-react';
import React from 'react';
import {memo} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import IPInfoService from '../../core/services/IPInfo/IPInfoService';

const IPInfo = () => {
  return (
    <View>
      <Container>
        <Item>
          <ItemTitle>IP Address</ItemTitle>
          <ItemText>{IPInfoService.data.ip}</ItemText>
        </Item>
        <Item>
          <ItemTitle>Location</ItemTitle>
          <ItemText>{IPInfoService.data.location}</ItemText>
        </Item>
        <Item>
          <ItemTitle>Timezone</ItemTitle>
          <ItemText>UTC {IPInfoService.data.timezone}</ItemText>
        </Item>
        <Item>
          <ItemTitle>ISP</ItemTitle>
          <ItemText>{IPInfoService.data.ISP}</ItemText>
        </Item>
      </Container>
    </View>
  );
};

export default memo(observer(IPInfo));

const Container = styled.View(({theme}) => ({
  paddingVertical: theme.rems.x8,
  backgroundColor: theme.colors.secondaryColor,
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'row',
  paddingHorizontal: theme.rems.x3,
}));

const Item = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const ItemTitle = styled.Text(({theme}) => ({
  fontSize: theme.fonts.normal2,
  color: theme.colors.white,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: theme.rems.x2,
}));

const ItemText = styled.Text(({theme}) => ({
  fontSize: theme.fonts.normal2 / 1.2,
  color: theme.colors.gray,
  textAlign: 'center',
}));
