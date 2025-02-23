import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

interface FabProps {
  //props
  label: string;
  position?: "left" | "right";

  //actions
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function Fab({
  label,
  onLongPress,
  onPress,
  position = "right",
}: FabProps) {
  return (
    <Pressable
      style={
        (styles.floatingButton,
        position == "right" ? styles.positionRight : styles.positionLeft)
      }
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{ color: "white", fontSize: 20 }}>{label}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 50,
    backgroundColor: "#65558f",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    elevation: 3,
  },
  positionRight: {
    right: 20,
  },
  positionLeft: {
    left: 20,
  },
});
