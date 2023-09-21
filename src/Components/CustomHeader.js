import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomText from './CustomText'

const CustomHeader = ({
  title,
  iconRight,
  userAvatar,
  iconLeft,
  navigation,
  destination,
  color
}) => {
  return (
    <View style={styles.headerContainer}>
      {iconLeft &&

        <TouchableOpacity style={{ paddingVertical: 10 }} onPress={() => navigation.goBack()}>
          <Image style={[styles.iconBack, { tintColor: color }]} source={iconLeft} />
        </TouchableOpacity>
      }

      <View style={styles.titleContainer}>
        <CustomText style={[styles.title, { color: color }]}>{title}</CustomText>
      </View>

      <View style={styles.headerRight}>
        <TouchableOpacity onPress={destination ? () => navigation.navigate(destination) : null}>
          <Image style={[styles.iconRight, { tintColor: color }]} source={iconRight} />
        </TouchableOpacity>
        {userAvatar &&
          <TouchableOpacity onPress={() => navigation?.navigate(destination)}>
            <Image style={styles.userAvatar} source={userAvatar} />
          </TouchableOpacity>
        }
      </View>
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 28,
    marginTop: 21
  },
  title: {
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '600'
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconRight: {
    width: 24,
    height: 24,
  },
  userAvatar: {
    width: 40,
    height: 40,
    marginLeft: 23
  },
  iconBack: {
    width: 24,
    height: 12
  }
})