import { Text, TouchableOpacity } from "react-native";

import { styles } from "./style";

export default function Button(props) {
    return (
        <TouchableOpacity>
        <Text style={styles.button}>
        {props.children}
        </Text>
      </TouchableOpacity>
    )
}