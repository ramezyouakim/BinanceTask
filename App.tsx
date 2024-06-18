import * as React from 'react';

import ErrorBoundary from './src/core/modules/ErrorBoundary';
import ManageThemeProvider from './src/core/styles/theme/ThemeProvider';
import FallbackScreen from './src/core/modules/FallbackScreen';
import AppNavigator from './src/routes/AppNavigator';
import {observer} from 'mobx-react';

function App() {
  return (
    <ManageThemeProvider>
      <ErrorBoundary fallback={<FallbackScreen />}>
        <AppNavigator />
      </ErrorBoundary>
    </ManageThemeProvider>
  );
}

export default observer(App);
