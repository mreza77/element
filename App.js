
import React from 'react';
import CustomButton from './app/element/CustomButton';
import CustomAvatar from './app/element/CustomAvatar';
import CustomBadge from './app/element/CustomBadge';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomBottomSheet from './app/element/CustomBottomSheet';
import CustomCheckBox from './app/element/CustomCheckBox';
import CustomFab from './app/element/CustomFab';
import CustomHeader from './app/element/CustomHeader';
import CustomIcon from './app/element/CustomIcon';
import CustomInput from './app/element/CustomInput';
import CustomListItem from './app/element/CustomListItem';
import CustomSpeedDial from './app/element/CustomSpeedDial';
import CustomTabs from './app/element/CustomTabs';


export default function App() {
  return (
    <SafeAreaProvider>
      <CustomTabs></CustomTabs>
    </SafeAreaProvider>
  );
}

