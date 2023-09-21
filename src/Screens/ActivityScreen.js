import { StyleSheet, Image, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../Components/CustomHeader'
import CustomText from '../Components/CustomText'
import { Icons } from '../Assets'
import Graph from '../Components/Graph'
import { Tabs, MaterialTabBar } from 'react-native-collapsible-tab-view'
import { dummyTransactions, monthlyData, weeklyData, yearlyData } from '../Data/Dummies'

const ActivityScreen = ({ navigation }) => {

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={[styles.itemContainer, { marginTop: index === 0 ? 29 : 0, }]}>
        <Image source={item.avatar} style={styles.itemImage} />
        <View style={styles.itemTextContainer}>
          <View>
            <CustomText style={styles.textName}>{item.name}</CustomText>
            <CustomText style={styles.textGray}>{item.type}</CustomText>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <CustomText style={styles.textAmount}>{item.amount}</CustomText>
            <CustomText style={styles.textGray}>{item.time}</CustomText>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  const TabGraphs = () => {
    return (
      <Tabs.Container
        // tabBarHeight={10}
        renderTabBar={
          props =>
            <MaterialTabBar {...props}
              contentContainerStyle={styles.materialContainerGraphs}
              indicatorStyle={{ height: 0 }}
              labelStyle={styles.labelStyle}
              activeColor='#363062'
              inactiveColor='#BDBDBD'
              tabStyle={{ paddingLeft: 0 }}
            />
        }
        headerContainerStyle={styles.headerContainer}
      >
        <Tabs.Tab label={'Week'} name='Week'>
          <Graph data={weeklyData} />
        </Tabs.Tab>
        <Tabs.Tab label={'Month'} name='Month'>
          <Graph data={monthlyData} />
        </Tabs.Tab>
        <Tabs.Tab label={'Year'} name='Year'>
          <Graph data={yearlyData} />
        </Tabs.Tab>
      </Tabs.Container>
    )
  }

  const Tab = () => {
    return (
      <Tabs.Container
        containerStyle={{ bottom: 84 }}
        renderTabBar={
          props =>
            <MaterialTabBar {...props}
              contentContainerStyle={styles.materialContainer}
              indicatorStyle={{ height: 0 }}
              labelStyle={styles.labelStyle}
              activeColor='#363062'
              inactiveColor='#BDBDBD'
              tabStyle={{ paddingLeft: 0 }}
            />
        }
        headerContainerStyle={styles.headerContainer}>
        <Tabs.Tab label={'All'} name='All'>
          <Tabs.FlatList
            contentContainerStyle={styles.flatlistContainer}
            data={dummyTransactions}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </Tabs.Tab>
        <Tabs.Tab label={'Expense'} name='Expense'>
          <Tabs.FlatList
            contentContainerStyle={styles.flatlistContainer}
            data={dummyTransactions}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </Tabs.Tab>
        <Tabs.Tab label={'Income'} name='Income'>
          <Tabs.FlatList
            contentContainerStyle={styles.flatlistContainer}
            data={dummyTransactions}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </Tabs.Tab>
      </Tabs.Container>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        title='Activity'
        iconRight={Icons.iconNotification}
        userAvatar={Icons.userAvatar}
        destination='StatementScreenFirst'
        navigation={navigation}
      />
      <TabGraphs />
      <Tab />
    </SafeAreaView>
  )
}

export default ActivityScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center'
  },
  headerContainer: {
    borderWidth: 0,
    shadowColor: '#FFF'
  },
  itemContainer: {
    paddingBottom: 20,
    flexDirection: 'row'
  },
  itemTextContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1
  },
  graphContainer: {
    alignItems: 'center',
  },
  textAmount: {
    color: '#363062',
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
  itemImage: {
    height: 51,
    width: 51,
    marginRight: 22
  },
  materialContainer: {
    width: 'auto',
    marginLeft: 24,
  },
  materialContainerGraphs: {
    width: 'auto',
    marginLeft: 24,
  },
  labelStyle: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
  flatlistContainer: {
    paddingHorizontal: 28,
    paddingBottom: 80
  }

})