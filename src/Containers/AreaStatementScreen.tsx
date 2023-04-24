import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from '../StyleSheet/Styles';

const AreaStatementScreen = ({navigation}: any) => {
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
        <Text style={style.TitleText}>Area Statement</Text>
      </View>

      <View style={style.cardView}>
        <View style={style.card}>
          <View style={style.container}>
            <Text style={style.text1}>Total Area</Text>
            <Text style={style.colon}>:</Text>
            <Text style={style.text2}> 1234sqft</Text>
          </View>
          <View style={style.container}>
            <Text style={style.text1}>Ploted Area </Text>
            <Text style={style.colon}>:</Text>
            <Text style={style.text2}> BIDA</Text>
          </View>
          <View style={style.container}>
            <Text style={style.text1}>Roads</Text>
            <Text style={style.colon}>:</Text>
            <Text style={style.text2}> 2021</Text>
          </View>
          <View style={style.container}>
            <Text style={style.text1}>Parks </Text>
            <Text style={style.colon}>:</Text>
            <Text style={style.text2}> 2021</Text>
          </View>
          <View style={style.container}>
            <Text style={style.text1}>Civic Aminities </Text>
            <Text style={style.colon}>:</Text>
            <Text style={style.text2}> 2021</Text>
          </View>
          <View style={style.container}>
            <Text style={style.text1}>Water Body </Text>
            <Text style={style.colon}>:</Text>
            <Text style={style.text2}> 2021</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export {AreaStatementScreen};
