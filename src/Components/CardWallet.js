import { StyleSheet, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import CustomText from './CustomText';

const CardWallet = ({ item }) => {

  return (
    <TouchableOpacity>
      <LinearGradient
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
        colors={item.bg_color} style={styles.cardContainer}
        useAngle
        angle={258}
      >
        <ImageBackground
          source={item.card_bg}
          style={styles.imageBackground}
        >
          <View>
            <CustomText style={styles.cardName}>{item.name}</CustomText>
            <CustomText style={styles.cardAmount}>{item.amount}</CustomText>
          </View>

          <View style={styles.cardItemWithLogo}>
            <CustomText style={styles.cardNumber}>{item.card_number}</CustomText>
            <Image source={item.logo} />
          </View>
        </ImageBackground>
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default CardWallet

const styles = StyleSheet.create({
  cardContainer: {
    width: 319,
    height: 170,
    marginBottom: 24,
    borderRadius: 11
  },
  imageBackground: {
    paddingVertical: 34,
    paddingHorizontal: 25,
    width: 319,
    height: 170,
    justifyContent: 'space-between',
  },
  cardItemWithLogo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardName: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.60)'
  },
  cardAmount: {
    fontSize: 28,
    fontWeight: '600',
    color: '#FFF'
  },
  cardNumber: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 2.8,
    color: '#FFEF60'
  }


})