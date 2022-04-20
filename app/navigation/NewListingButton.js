import React from 'react'
import { StyleSheet, View } from 'react-native'
import colors from '../config/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

function NewListingButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
        <MaterialCommunityIcons name='plus-circle' color={colors.white} size={40}/>
    </View>
    </TouchableOpacity>)

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 44,
        borderColor: colors.white,
        borderWidth: 2,
        height: 50,
        width: 80,
        bottom: 0,
        justifyContent: 'center'
    }
})

export default NewListingButton;