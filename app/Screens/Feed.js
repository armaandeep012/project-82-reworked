import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import PostCard from "../../PostCard";

const Feed = () => {
  return (
    <View style={styles.container}>
      <View style={styles.appTitle}>
        <View style={styles.appIcon}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.IconImage}
          />
        </View>
        <Text style={styles.appTextTitle}>Spectagram</Text>
      </View>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <PostCard />
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E2E2E",
  },
  appTitle: {
    flex: 0.09,
    flexDirection: "row",
  },
  appTextTitle: {
    color: "white",
    fontWeight: "600",
    fontSize: RFValue(28),
    marginTop: 15,
  },
  appIcon: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  IconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
