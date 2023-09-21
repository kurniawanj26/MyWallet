import { SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../Components/CustomHeader'
import { Icons } from '../Assets'
import LinearGradient from 'react-native-linear-gradient'
import CustomText from '../Components/CustomText'
import { TextInput } from 'react-native-paper';
import { cardSkin } from '../Data/Dummies'

const AddWalletScreen = ({ navigation }) => {

  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [gradient, setGradient] = useState(cardSkin[0].color)
  const [selectedSkin, setSelectedSkin] = useState(cardSkin[0].key)

  const onChangeCardName = text => setCardName(text);

  const onChangeCardNumber = text => {
    var len = text.length;
    if ((len === 4 || len === 9 || len === 14) && len > cardNumber.length) {
      text = text + "-"
    }
    if (text.length !== 20) {
      setCardNumber(text)
    }
    if (text.length === 20) {
      // let textStars = text.substring(10) + '*' + text.substring(18)
      // setCardNumberStars(textStars)
    }
  }

  const handleChangeSkin = (item) => {
    setGradient(item.color)
    setSelectedSkin(item.key)
  }

  const hideNumber = number => {
    let removedDash = number.replace(/-/gi, ' ')
    let stars = textStars(removedDash)
    return stars
    // return removedDash.substring(0, 10) + '*' + removedDash.substring(18)
  }

  const textStars = number => {
    let removedDash = number.replace(/-/gi, ' ')

    if (removedDash.length === 19) {
      let arr = removedDash.split('')
      let stars = arr.splice(10, 18, '**** ****')
      removedDash = arr.join('')
      console.log(arr)
      return arr
    }

  }

  const Card = () => {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
        colors={gradient}
        style={styles.cardContainer}
        useAngle
        angle={258}
      >
        <View>
          <CustomText style={styles.cardName}>{cardName}</CustomText>
          <CustomText style={styles.cardNumber}>{textStars(cardNumber)}</CustomText>
        </View>
        <View style={styles.cardItemWithLogo}>
          <CustomText style={styles.cardUserName}>David Kowalski</CustomText>
          <Image source={Icons.cardLogo1} />
        </View>
      </LinearGradient>
    )
  }

  const Skins = () => {
    return (
      <View style={styles.changeSkinContainer}>
        <CustomText style={styles.textChangeSkin}>Change skin</CustomText>
        <View style={{ flexDirection: 'row', marginBottom: 46 }}>
          {cardSkin.map((item) => {
            return (
              <TouchableOpacity onPress={() => handleChangeSkin(item)} key={item.key}>
                <LinearGradient
                  start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                  colors={item.color}
                  style={styles.cardSkinItem}
                  useAngle
                  angle={258}
                >
                  {item.key === selectedSkin && <Image style={styles.iconCheck} source={Icons.iconCheck} />}
                </LinearGradient>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
    )
  }

  const Button = () => {
    return (
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <CustomText style={styles.textButton}>SAVE</CustomText>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        title='Add Wallet'
        iconLeft={Icons.backArrow}
        navigation={navigation}
      />
      <KeyboardAvoidingView
        style={{ flex: 1, alignItems: 'center' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <Card />
          <Skins />
          <TextInput
            label="Card Name"
            mode='outlined'
            outlineColor='#C4C4C4'
            onChangeText={onChangeCardName}
            value={cardName}
            right={<TextInput.Icon icon='credit-card' color={'grey'} />}
            style={styles.textInput}
            autoCorrect={false}
            returnKeyType='next'
            maxLength={20}
          />
          <TextInput
            label="Card Number"
            mode='outlined'
            onChangeText={onChangeCardNumber}
            value={cardNumber}
            style={styles.textInput}
            keyboardType='numbers-and-punctuation'
            returnKeyType='next'
            maxLength={20}
          />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextInput
              label="Expire Date"
              mode='outlined'
              style={[styles.textInput, { width: 150 }]}
              returnKeyType='next'
              maxLength={5}
            />
            <TextInput
              label="CVV"
              mode='outlined'
              style={[styles.textInput, { width: 150 }]}
              returnKeyType='done'
            />
          </View>
          <Button />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default AddWalletScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center'
  },
  textInput: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 33,
  },
  scrollView: {
    paddingTop: 33,
    flex: 1
  },
  changeSkinContainer: {
    flexDirection: 'row',
    marginTop: 34,
    justifyContent: 'space-between'
  },
  cardSkinItem: {
    width: 41,
    height: 27,
    borderRadius: 4,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: {
    width: 319,
    height: 170,
    borderRadius: 11,
    paddingVertical: 34,
    paddingHorizontal: 25,
  },
  cardItemWithLogo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  cardName: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.63)'
  },
  cardAmount: {
    fontSize: 28,
    fontWeight: '600',
    color: '#FFF'
  },
  cardNumber: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFF',
    marginTop: 4
  },
  cardUserName: {
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: '600',
    letterSpacing: 2.4,
    color: '#FFF'
  },
  textChangeSkin: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    color: '#6B6B6B'
  },
  iconCheck: {
    width: 18,
    height: 18
  },
  button: {
    width: '100%',
    height: 60,
    backgroundColor: '#363062',
    borderRadius: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 54
  },
  textButton: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
    color: '#FFF'
  }
})