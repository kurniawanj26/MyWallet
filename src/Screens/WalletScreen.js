import { StyleSheet, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import { Icons } from '../Assets'
import CustomHeader from '../Components/CustomHeader'
import { dummyCardWallet } from '../Data/Dummies'
import CardWallet from '../Components/CardWallet'


const WalletScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return <CardWallet item={item} />
  }

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        title='Wallet'
        iconRight={Icons.iconNotification}
        userAvatar={Icons.userAvatar}
        destination='AddWalletScreen'
        navigation={navigation}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={dummyCardWallet}
        renderItem={renderItem}
        style={{ marginTop: 37 }}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </SafeAreaView>
  )
}

export default WalletScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  cardContainer: {
    width: 319,
    height: 170,
    marginBottom: 24,
    borderRadius: 11
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