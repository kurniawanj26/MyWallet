import { StyleSheet, TextInput, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomHeader from '../Components/CustomHeader'
import CustomText from '../Components/CustomText'
import { Icons } from '../Assets'
import { Tabs, MaterialTabBar } from 'react-native-collapsible-tab-view'
import { dummyTransactions2 as data } from '../Data/Dummies'

const TransactionsScreen = ({ navigation }) => {

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={[styles.flatlistItemContainer, { marginTop: index === 0 ? 24 : 0 }]}>
        <Image source={item.avatar} style={{ height: 51, width: 51, marginRight: 22 }} />
        <View style={styles.flatlistTexts}>
          <View>
            <CustomText style={styles.textName}>{item.name}</CustomText>
            <CustomText style={styles.textGray}>{item.type_label}</CustomText>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <CustomText style={item.type === 'top_up_in' || item.type === 'transfer_in' ? styles.textAmountGreen : styles.textAmount}>{item.amount}</CustomText>
            <CustomText style={styles.textGray}>{item.time}</CustomText>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        title='Transactions'
        iconRight={Icons.filter}
        iconLeft={Icons.backArrow}
        navigation={navigation}
      />

      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder='Search here'
        />
        <Image style={styles.iconSearch} source={Icons.iconSearch} />
      </View>

      <Tabs.Container
        renderTabBar={
          props =>
            <MaterialTabBar {...props}
              contentContainerStyle={styles.materialTabContainer}
              indicatorStyle={{ height: 0 }}
              labelStyle={styles.tabLabel}
              activeColor='#363062'
              inactiveColor='#BDBDBD'
            />
        }
        headerContainerStyle={{ shadowColor: '#FFF' }}>
        <Tabs.Tab label={'All'} name='All'>
          <Tabs.FlatList
            contentContainerStyle={styles.flatlistContainer}
            data={data}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </Tabs.Tab>
        <Tabs.Tab label={'Expense'} name='Expense'>
          <Tabs.FlatList
            contentContainerStyle={styles.flatlistContainer}
            data={data}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </Tabs.Tab>
        <Tabs.Tab label={'Income'} name='Income'>
          <Tabs.FlatList
            contentContainerStyle={styles.flatlistContainer}
            data={data}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </Tabs.Tab>
      </Tabs.Container>
    </SafeAreaView>
  )
}

export default TransactionsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center'
  },
  searchBar: {
    borderColor: "gray",
    height: 57,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: '400',
    maxWidth: '90%',
    width: '90%'
  },
  searchBarContainer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#E2E2E2',
    width: '85%',
    height: 57,
    paddingHorizontal: 19,
  },
  iconSearch: {
    width: 24,
    height: 24
  },
  textAmount: {
    color: '#363062',
    fontSize: 16,
    fontWeight: '700'
  },
  textAmountGreen: {
    color: '#61C277',
    fontSize: 16,
    fontWeight: '700'
  },
  textName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000'
  },
  textGray: {
    color: '#6B6B6B',
    fontSize: 14,
    fontWeight: '400'
  },
  flatlistContainer: {
    paddingHorizontal: 28,
    paddingBottom: 80,
    backgroundColor: '#F8F6FF'
  },
  flatlistItemContainer: {
    backgroundColor: '#F3F0FB',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: 'row',
    marginBottom: 14
  },
  flatlistTexts: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1
  },
  materialTabContainer: {
    marginTop: 42,
    width: 'auto',
    marginLeft: 24,
    marginBottom: 12
  },
  tabLabel: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
  // tabStyle: {
  //   backgroundColor: 'rgba(54, 48, 98, 0.05)',
  //   borderRadius: 20,
  //   paddingHorizontal: 21,
  // }
})