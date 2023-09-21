import { StyleSheet, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomHeader from '../Components/CustomHeader'
import { Icons } from '../Assets'
import CustomText from '../Components/CustomText'
import { Divider } from 'react-native-paper';
import DonutChart from '../Components/DonutChart'
import MiniDonutChart from '../Components/MiniDonutChart'
import {
  miniDonutData1,
  miniDonutData2,
  miniDonutData3,
  miniDonutData4,
  miniDonutData5
} from '../Data/Dummies'
import Dot from '../Components/Dot'
import IconCalendar from 'react-native-vector-icons/MaterialCommunityIcons'
import IconArrowDown from 'react-native-vector-icons/SimpleLineIcons'


const StatementScreen = ({ navigation }) => {

  const RenderMiniDonuts = () => {
    return (
      <View style={{ marginTop: 34 }}>
        <MiniDonutChart data={miniDonutData1} />
        <MiniDonutChart data={miniDonutData2} />
        <MiniDonutChart data={miniDonutData3} />
        <MiniDonutChart data={miniDonutData4} />
        <MiniDonutChart data={miniDonutData5} />
      </View>
    )
  }

  return (
    <>
      <SafeAreaView style={styles.container} >
        <CustomHeader
          title='Statement'
          iconLeft={Icons.backArrow}
          iconRight={Icons.iconMenu}
          navigation={navigation}
          color='#FFF'
        />
      </SafeAreaView>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 28, backgroundColor: '#363062' }}>

          <View style={styles.yearContainer}>
            <TouchableOpacity style={{
              flexDirection: 'row',
              backgroundColor: '#938CC6',
              width: 59,
              height: 59,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8
            }}>

              <IconCalendar color={'#C4C4C4'} size={30} name='calendar-month-outline' />

            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 39, flex: 1 }}>
              <View style={{ marginLeft: 23 }}>
                <CustomText style={styles.textYear}>{2020}</CustomText>
                <CustomText style={styles.textMonth}>September</CustomText>
              </View>
              <TouchableOpacity style={{ padding: 10 }}>
                <IconArrowDown color={'#C4C4C4'} name='arrow-down' />
              </TouchableOpacity>
            </View>
          </View>

        </View>

        <View style={styles.bottomSheetContainer}>
          <View style={{ marginTop: 20 }}>
            <View style={styles.bottomSheetTopContainer}>
              <View style={styles.textTopContainer}>
                <CustomText style={styles.textTitle}>Spent</CustomText>
                <CustomText style={styles.textAmount}>$ 1.250</CustomText>
              </View>
              <Divider style={{ width: 1, height: '100%' }} />
              <View style={styles.textTopContainer}>
                <CustomText style={styles.textTitle}>Earned</CustomText>
                <CustomText style={styles.textAmount}>$ 54.500</CustomText>
              </View>
            </View>
            <View>
              <CustomText style={styles.textBudget}>Budget so far</CustomText>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <DonutChart centerColor='#FFF' legendTextColor='#000' />
                <View>
                  <Dot color='#80B2FF' text='Food' />
                  <Dot color='#FF80EB' text='Transport' />
                  <Dot color='#FFCC80' text='Investment' />
                  <Dot color='#FF808F' text='Rent' />
                  <Dot color='#80FF94' text='Installment' />
                </View>
              </View>
            </View>
          </View>

          <RenderMiniDonuts />
        </View>


      </ScrollView>
    </>
  )
}

export default StatementScreen

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#363062',
    alignItems: 'center',
  },
  bottomSheetTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14
  },
  textTitle: {
    color: '#595959'
  },
  textAmount: {
    color: '#363062',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 22,
    marginTop: 5
  },
  textTopContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  textYear: {
    fontSize: 14,
    fontWeight: '400',
    color: '#FFF'
  },
  textMonth: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFF'
  },
  yearContainer: {
    width: '100%',
    marginTop: 27,
    flexDirection: 'row'
  },
  textBudget: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 28,
    marginBottom: 22
  },
  scrollView: {
    width: '100%',
    flex: 1,
    // backgroundColor: '#FFF'
    backgroundColor: '#363062'
  },
  textRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  bottomSheetContainer: {
    backgroundColor: '#FFF',
    width: '100%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 28
  }
})