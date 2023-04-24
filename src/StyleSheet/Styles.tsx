import {Dimensions, FlexAlignType, StyleSheet} from 'react-native';
const device = Dimensions.get('window');
export const deviceWidth = device.width;
export const deviceHeight = device.height;

export default StyleSheet.create({
  //ImageBackground style
  BackgroundStyle: {
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: '#4f6af0',
  },
  headerView: {
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    padding: 5,
    marginTop: '10%',
    display: 'flex',
    marginBottom: '6%',
  },
  menuLogoView: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: '30%',
    marginLeft: '2%',
  },

  layoutMainView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 10,
  },
  layoutMainViewMaster: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // paddingTop: 10,
  },
  layoutView: {
    width: 400,
    height: 300,
    resizeMode: 'contain',
    justifyContent: 'center',
    marginBottom: 15,
    marginTop: 25,
  },

  layoutViewMaster: {
    width: 400,
    height: 300,
    resizeMode: 'contain',
    justifyContent: 'center',
    marginBottom: '15%',
    // marginTop: 20,
  },
  //logoutButton
  mainLogo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  ButtonStyle: {
    width: '60%',
    marginTop: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 20,
    backgroundColor: '#EFECEC',
    borderRadius: 20,
    marginBottom: 5,
  },
  ButtonText: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'normal',
    textAlign: 'center',
  },

  TitleText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'normal',
    textAlign: 'left',
    paddingLeft: 15,
    marginBottom: '10%',
    marginTop: 20,
  },

  cardView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
  },

  card: {
    width: '100%',
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#EFECEC',
    paddingLeft: 25,
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  text1: {
    width: '40%',
    fontSize: 18,
    color: '#000',
  },
  colon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
    marginRight: 25,
    marginLeft: 25,
  },
  text2: {
    fontSize: 18,
    width: '37%',
    color: '#000',
  },
});
