import { Text } from "react-native"

export default props => <Text {...props} style={[{ fontFamily: 'Poppins-Regular' }, props.style]}>{props.children}</Text>