import React from "react";
import { View, StyleSheet,Text } from "react-native";

const ViewStyleProps = () => {
    return (
      <View style={styles.container}>
        <Text> hello Mike</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    padding:50
  },
  
});

export default ViewStyleProps;