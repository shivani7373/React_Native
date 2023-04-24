import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from '../StyleSheet/Styles';

const MainScreen = ({navigation}: any) => {
  const DetailsScreenNavigation = () => {
    navigation.navigate('DetailsScreen');
  };
  const AreaStatementScreenNavigation = () => {
    navigation.navigate('DetailsScreen');
  };
  const MasterplanNavigation = () => {
    navigation.navigate('DetailsScreen');
  };
  return (
    <View style={style.BackgroundStyle}>
      <View style={style.headerView}>
        <Image
          source={require('../Assets/vglogo.jpg')}
          style={style.menuLogoView}
        />
        <Image
          source={require('../Assets/vglogo.jpg')}
          style={style.mainLogo}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DetailsScreen');
        }}
        style={style.ButtonStyle}>
        <Text style={style.ButtonText}>Details</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AreaStatementScreen');
        }}
        style={style.ButtonStyle}>
        <Text style={style.ButtonText}>Area Statement</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MasterPlanScreen');
        }}
        style={style.ButtonStyle}>
        <Text style={style.ButtonText}>Master Plan</Text>
      </TouchableOpacity>
      <View style={style.layoutMainView}>
        <Image
          source={require('../Assets/vglogo.jpg')}
          style={style.layoutView}
        />
        <Image
          source={require('../Assets/vglogo.jpg')}
          style={style.layoutView}
        />
      </View>
    </View>
  );
};

export {MainScreen};
