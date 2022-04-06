import { View, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants'

const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode='contain'
        style={{ height: 24, width: 24 }}
      />
    </TouchableOpacity>
  )
}

const RectButton = ({ handlePress, fontSize, minWidth, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        minWidth: minWidth,
        padding: SIZES.small,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: 'center',
        }}
      >
        Place a Bid
      </Text>
    </TouchableOpacity>
  )
}

export { CircleButton, RectButton }
