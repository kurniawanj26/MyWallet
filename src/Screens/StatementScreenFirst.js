import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native'
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


const StatementScreen = ({ navigation }) => {

  const RenderMiniDonuts = () => {
    return (
      <View style={{ paddingHorizontal: 28, marginTop: 34 }}>
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
          destination={'StatementScreenSecond'}
          color='#FFF'
        />
      </SafeAreaView>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 25, backgroundColor: '#363062' }}>
          <View style={styles.yearContainer}>
            <CustomText style={styles.textYear}>{2020}</CustomText>
            <View style={styles.textRowContainer}>
              <CustomText style={styles.textMonth}>September</CustomText>
              <CustomText style={styles.textMonth}>$54.500,5</CustomText>
            </View>
            <Divider bold style={{ backgroundColor: '#4C4582' }} />
          </View>
          <DonutChart legendWithDot={true} centerColor={'#363062'} legendTextColor={'#FFF'} />
        </View>

        <View style={
          {
            backgroundColor: '#FFF',
            width: '100%',
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            marginTop: 30
          }
        }>
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
    marginBottom: 46
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
    flex: 1,
    alignItems: 'center',
  },
})