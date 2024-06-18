import React, {useEffect} from 'react';
import {
  NavigationContainer,
  NavigationContainerRefWithCurrent,
  useNavigationContainerRef,
} from '@react-navigation/native';
import Navigator from './Navigator';
import MainNavigator from './MainNavigator';
import {observer} from 'mobx-react';
import LoadingIndicator from '../core/kit/LoadingIndicator';
import MainServices from '../core/services/Main';

const AppNavigator = () => {
  const navigationRef = useNavigationContainerRef();

  useEffect(() => {
    onRefChange(navigationRef);
  }, [navigationRef]);

  useEffect(() => {
    MainServices.init();
  }, []);

  const onRefChange = (
    ref: NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>,
  ) => {
    if (ref) {
      Navigator.setNavigtor = ref;
    }
  };

  if (MainServices.loading) {
    return <LoadingIndicator />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default observer(AppNavigator);
