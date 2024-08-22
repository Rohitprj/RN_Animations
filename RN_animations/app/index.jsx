import { View, Text, Animated, Button } from "react-native";
import React, { useRef } from "react";

export default function index() {
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const timeAnim = Animated.timing(opacityAnim, {
    toValue: 1,
    duration: 4000,
    useNativeDriver: true,
  });
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Animated.View style={{ opacity: opacityAnim, }}>
        <View style={{ backgroundColor: "orange", height: 60, width: 280 }} />
        <View style={{ backgroundColor: "white", height: 60, width: 280 }} />
        <View style={{ backgroundColor: "green", height: 60, width: 280 }} />
        <View style={{ backgroundColor: "black", height: 160, width: 20 }} />
      </Animated.View>
      <Button title="Fade start" onPress={() => timeAnim.start()} />
      <Button title="Fade reset" onPress={() => timeAnim.reset()} />
      <Button title="Fade stop" onPress={() => timeAnim.stop()} />
    </View>
  );
}
