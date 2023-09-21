import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PieChart } from "react-native-gifted-charts";
import CustomText from './CustomText';
import { Divider } from 'react-native-paper';

const MiniDonutChart = ({ data }) => {

  return (
    <>
      <View style={
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 15,
          paddingVertical: 12,
        }}>
        <View style={
          {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',

          }}>
          <PieChart
            data={data}
            donut
            sectionAutoFocus
            radius={30}
            innerRadius={20}
            innerCircleColor={'#FFF'}
          />
          <View style={{ marginLeft: 24 }}>
            <CustomText style={styles.textTitle}>Food</CustomText>
            <CustomText style={styles.textPercentage}>25%</CustomText>
          </View>
        </View>
        <View>
          <CustomText>$4,499</CustomText>
        </View>
      </View>
      <Divider />
    </>
  )
}

export default MiniDonutChart

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 14,
    fontWeight: '400'
  },
  textPercentage: {
    fontSize: 14,
    fontWeight: '600'
  },
  textAmount: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000'
  }
})