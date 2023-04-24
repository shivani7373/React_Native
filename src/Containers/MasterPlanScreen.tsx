import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from '../StyleSheet/Styles';

const MasterPlanScreen = ({navigation}: any) => {
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
      <View>
        <Text style={style.TitleText}>Master Plan</Text>
      </View>
      <View style={style.layoutMainViewMaster}>
        <Image
          source={require('../Assets/vglogo.jpg')}
          style={style.layoutViewMaster}
        />
        <Image
          source={require('../Assets/vglogo.jpg')}
          style={style.layoutViewMaster}
        />
      </View>
    </View>
  );
};

export {MasterPlanScreen};
