import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Dimensions, Animated } from "react-native";

const screenWidth = Dimensions.get("window").width;
const cardWidth = screenWidth * 0.95;

export default function ItemCardSkeleton({ height, marginBottom }) {
  const shimmerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerAnim, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [shimmerAnim]);

  const shimmerStyle = {
    opacity: shimmerAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0.2, 0.5],
    }),
  };

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Animated.View style={[styles.imagePlaceholder, shimmerStyle]} />
        <Animated.View style={[styles.textPlaceholder, shimmerStyle]} />
        <Animated.View style={[styles.textPlaceholder, shimmerStyle]} />
        <Animated.View style={[styles.textPlaceholder, shimmerStyle]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    alignItems: "center",
    flex: 1,
  },
  container: {
    backgroundColor: "rgba(255, 255, 255)", // Semi-transparent background color for glassmorphic effect
    width: "95%",
    borderRadius: 24,
    overflow: "hidden",
    padding: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.4)",
  },
  imagePlaceholder: {
    backgroundColor: "#f4f4f4",
    width: "100%",
    height: 220,
    borderRadius: 13,
    marginBottom: 25,
  },
  textPlaceholder: {
    height: 20,
    backgroundColor: "#f4f4f4",
    borderRadius: 5,
    marginBottom:8
  },
});
