import React from 'react'
import { LineChart } from "react-native-gifted-charts";

const Graph = ({ data }) => {
  return (
    <LineChart
      hideDataPoints
      isAnimated
      animationDuration={1200}
      data={data}
      hideAxesAndRules
      color='#009F5E'
      areaChart
      hideYAxisText
      yAxisLabelWidth={0}
      yAxisIndicesWidth={0}
      xAxisLabelTextStyle={{ color: '#BDBDBD', fontFamily: 'Poppins-Regular' }}
      startFillColor='rgba(0, 159, 94, 0.28)'
      endFillColor='rgba(0, 159, 94, 0.00)'
      startOpacity={0.28}
      endOpacity={0}
      gradientDirection='vertical'
    />
  )
}

export default Graph