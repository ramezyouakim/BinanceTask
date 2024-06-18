import React, {memo} from 'react';
import IPInfo from '../../../components/IPInfo/IPInfo';
import {Image as RImage, Text} from 'react-native';
import {styled} from 'styled-components/native';

const ProfileScreen = ({route}) => {
  return (
    <>
      {route?.params?.image ? (
        <Image source={route?.params?.image} />
      ) : (
        <Text>PLease select image fromt the homepage image silder</Text>
      )}
      <IPInfo />
    </>
  );
};

export default memo(ProfileScreen);

const Image = styled(RImage)({
  width: '100%',
  height: 200,
});
