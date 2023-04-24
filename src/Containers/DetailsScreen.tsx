import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from '../StyleSheet/Styles';

const DetailsScreen = ({navigation}: any) => {
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
        <Text style={style.TitleText}>Layout Details</Text>
      </View>

      <View style={style.cardView}>
        <View style={style.card}>
          <View style={style.container}>
            <Text style={style.text1}>Developer </Text>
            <Text style={style.colon}>:</Text>
            <Text style={style.text2}> VG</Text>
          </View>
          <View style={style.container}>
            <Text style={style.text1}>Approving Authority</Text>
            <Text style={style.colon}>:</Text>
            <Text style={style.text2}> BIDA</Text>
          </View>
          <View style={style.container}>
            <Text style={style.text1}>Approving Year </Text>
            <Text style={style.colon}>:</Text>
            <Text style={style.text2}> 2021</Text>
          </View>
          <View style={style.container}>
            <Text style={style.text1}>Commencement Year </Text>
            <Text style={style.colon}>:</Text>
            <Text style={style.text2}> 2021</Text>
          </View>
          <View style={style.container}>
            <Text style={style.text1}>Hand Over Year </Text>
            <Text style={style.colon}>:</Text>
            <Text style={style.text2}> 2021</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export {DetailsScreen};
