import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomText from './CustomText'

const Dot = ({ color, text, textColor }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: 120,
        marginBottom: 8
      }}>
      <View
        style={{
          height: 14,
          width: 14,
          borderRadius: 4,
          backgroundColor: color,
          marginRight: 16,
        }}
      />
      <CustomText style={[styles.text, { color: textColor }]}>
        {text}
      </CustomText>
    </View>

  )
}

export default Dot

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: '400'
  }
})