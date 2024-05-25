import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Dimensions, Animated } from "react-native";
import Colors from "../Utils/Colors";

const screenWidth = Dimensions.get("window").width;
const cardWidth = screenWidth * 0.95;

export default function NewsCardSkeleton({ height, marginBottom }) {
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
    <View style={[styles.container, { marginBottom: marginBottom }]}>
      <View style={[styles.gradient, { height: height }]}>
        <Animated.View style={[styles.tagPlaceholder, shimmerStyle]} />
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Animated.View style={[styles.newsPlaceholder, shimmerStyle]} />
          <Animated.View style={[styles.newsPlaceholder, shimmerStyle]} />
          <Animated.View style={[styles.newsPlaceholder, shimmerStyle]} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  gradient: {
    width: cardWidth,
    padding: 20,
    backgroundColor: 'rgba(244, 244, 244, 0.2)',
    borderRadius: 24,
  },
  tagPlaceholder: {
    width: "30%",
    height: 20,
    backgroundColor: "#f4f4f4",
    borderRadius: 4,
    marginTop: 15,
  },
  newsPlaceholder: {
    height: 20,
    backgroundColor: "#f4f4f4",
    borderRadius: 4,
    marginBottom: 10,
  },
});
