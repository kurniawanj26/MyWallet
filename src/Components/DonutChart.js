import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PieChart } from "react-native-gifted-charts";
import { pieData } from '../Data/Dummies';
import Dot from './Dot';

const DonutChart = ({ legendWithDot, centerColor, legendTextColor }) => {

  const RenderLegendComponent = () => {
    return (
      <View style={{ marginTop: 39 }}>
        <View style={styles.legendContainer}>
          <Dot textColor={legendTextColor} color='#3C8AFF' text='Food' />
          <Dot textColor={legendTextColor} color='#FF5166' text='Rent' />
        </View>
        <View style={styles.legendContainer}>
          <Dot textColor={legendTextColor} color='#ED3DD1' text='Transport' />
          <Dot textColor={legendTextColor} color='#2BC844' text='Installment' />
        </View>
        <View style={styles.legendContainer}>
          <Dot textColor={legendTextColor} color='#FFEE54' text='Investment' />
          <View style={{ flexDirection: 'row', alignItems: 'center', width: 120 }}></View>
        </View>
      </View>
    )
  }

  return (
    <View>
      <View style={{ alignItems: 'center' }}>
        <PieChart
          data={pieData}
          donut
          showText
          radius={80}
          innerRadius={40}
          innerCircleColor={centerColor}
        />
      </View>
      {legendWithDot && <RenderLegendComponent />}
    </View>
  )
}

export default DonutChart

const styles = StyleSheet.create({
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
})