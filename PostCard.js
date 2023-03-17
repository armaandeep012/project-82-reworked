import * as React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Directions } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function PostCard() {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={s.v1}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#aec9b9",
            borderRadius: 40,
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={s.profileImageContainer}>
              <Image
                style={s.profileImage}
                source={require("./assets/profile_img.png")}
              />
            </Text>
          </View>
          <View style={s.profileTextContainer}>
            <Text style={s.profileText}>Williams Sheksphere</Text>
          </View>
        </View>
        <View style={{ flex: 4, backgroundColor: "#aec9b9", borderRadius: 40 }}>
          <View style={s.imageContainer}>
            <Image style={s.Image} source={require("./assets/post.jpeg")} />
            <View style={s.ImageTextView}>
              <Text style={s.ImageText}>
                William Shakespeare was an English playwright, poet and actor.
                He is widely regarded as the greatest writer in the English
                language and the world's pre-eminent dramatist. He is often
                called England's national poet and the "Bard of Avon".
              </Text>
            </View>
          </View>
          <View style={s.actionContainer}>
            <View style={s.visitButtonView}>
              <TouchableOpacity>
                <View style={s.visitButton}>
                  <Text
                    style={{
                      alignSelf: "center",
                      fontSize: 20,
                      fontWeight: "bold",
                      marginLeft: "35%",
                    }}
                  >
                    Visit
                  </Text>
                  <Ionicons
                    style={{ marginLeft: "10%", marginBottom: "2%" }}
                    name="arrow-redo-outline"
                    size={30}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={s.likeButtonView}>
              <TouchableOpacity>
                <View style={s.likeButton}>
                  <Text
                    style={{
                      alignSelf: "center",
                      fontSize: 20,
                      fontWeight: "bold",
                      marginLeft: "35%",
                    }}
                  >
                    Like
                  </Text>
                  <Ionicons
                    style={{ marginLeft: "10%", marginBottom: "2%" }}
                    name="heart-outline"
                    size={30}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={s.shareButtonView}>
              <TouchableOpacity>
                <View style={s.shareButton}>
                  <Text
                    style={{
                      alignSelf: "center",
                      fontSize: 20,
                      fontWeight: "bold",
                      marginLeft: "35%",
                    }}
                  >
                    Share
                  </Text>
                  <Ionicons
                    style={{ marginLeft: "10%", marginBottom: "2%" }}
                    name="ios-share-outline"
                    size={30}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={s.v2}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#aec9b9",
            borderRadius: 40,
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={s.profileImageContainer}>
              <Image
                style={s.profileImage}
                source={require("./assets/profile_img.png")}
              />
            </Text>
          </View>
          <View style={s.profileTextContainer}>
            <Text style={s.profileText}>Fyodor Dostoevsky</Text>
          </View>
        </View>
        <View style={{ flex: 4, backgroundColor: "#aec9b9", borderRadius: 40 }}>
          <View style={s.imageContainer}>
            <Image style={s.Image} source={require("./assets/post.jpeg")} />
            <View style={s.ImageTextView}>
              <Text style={s.ImageText}>
                Fyodor Dostoevsky is a Russian novelist who created masterpieces
                of psychological realism, such as Crime and Punishment, The
                Brothers Karamazov, and Notes from Underground.
              </Text>
            </View>
          </View>
          <View style={s.actionContainer}>
            <View style={s.visitButtonView}>
              <TouchableOpacity>
                <View style={s.visitButton}>
                  <Text
                    style={{
                      alignSelf: "center",
                      fontSize: 20,
                      fontWeight: "bold",
                      marginLeft: "35%",
                    }}
                  >
                    Visit
                  </Text>
                  <Ionicons
                    style={{ marginLeft: "10%", marginBottom: "2%" }}
                    name="arrow-redo-outline"
                    size={30}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={s.likeButtonView}>
              <TouchableOpacity>
                <View style={s.likeButton}>
                  <Text
                    style={{
                      alignSelf: "center",
                      fontSize: 20,
                      fontWeight: "bold",
                      marginLeft: "35%",
                    }}
                  >
                    Like
                  </Text>
                  <Ionicons
                    style={{ marginLeft: "10%", marginBottom: "2%" }}
                    name="heart-outline"
                    size={30}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={s.shareButtonView}>
              <TouchableOpacity>
                <View style={s.shareButton}>
                  <Text
                    style={{
                      alignSelf: "center",
                      fontSize: 20,
                      fontWeight: "bold",
                      marginLeft: "35%",
                    }}
                  >
                    Share
                  </Text>
                  <Ionicons
                    style={{ marginLeft: "10%", marginBottom: "2%" }}
                    name="ios-share-outline"
                    size={30}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  v1: {
    borderWidth: 5,
    borderColor: "white",
    backgroundColor: "#aec9b9",
    flex: 1,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    borderRadius: 40,
    marginBottom: 30,
    flexDirection: "column",
  },
  v2: {
    borderWidth: 5,
    borderColor: "white",
    backgroundColor: "#aec9b9",
    flex: 1,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20,
    borderRadius: 40,
    marginBottom: 30,
  },
  profileImageContainer: {
    marginLeft: "25%",
    marginTop: "8%",
    backgroundColor: "#aec9b9",
    width: "60%",
    height: "80%",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  profileTextContainer: {
    flex: 5,
    marginTop: "2%",
    backgroundColor: "#006b5c",
    marginBottom: "2%",
    marginRight: "1%",
    borderRadius: 40,
  },
  profileText: {
    color: "white",
    marginLeft: "3%",
    marginTop: "2%",
    fontSize: 30,
  },
  imageContainer: {
    flex: 2,
    backgroundColor: "#173e35",
    borderRadius: 40,
    marginLeft: "1%",
    marginRight: "1%",
    flexDirection: "row",
  },

  Image: {
    width: "40%",
    height: "95%",
    marginLeft: "1%",
    marginTop: "1%",
    borderRadius: 40,
    borderColor: "#7d9c91",
    borderWidth: 3,
  },
  ImageTextView: {
    backgroundColor: "#aec9b9",
    flex: 1,
    borderRadius: 40,
    margin: 20,
  },
  ImageText: {
    alignSelf: "center",
    margin: "5%",
    fontSize: 20,
    color: "#2e2e2e",
    fontWeight: "bold",
  },
  actionContainer: {
    flex: 1,
    backgroundColor: "#006b5c",
    borderRadius: 40,
    width: "90%",
    height: 10,
    marginTop: "1%",
    marginBottom: "1%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  visitButtonView: {
    backgroundColor: "#173e35",
    flex: 1,
    borderRadius: 40,
    margin: "1%",
  },
  visitButton: {
    backgroundColor: "skyblue",
    padding: 5,
    margin: 30,
    borderRadius: 40,
    flexDirection: "row",
  },
  likeButtonView: {
    backgroundColor: "#173e35",
    flex: 1,
    borderRadius: 40,
    marginTop: "1%",
    marginBottom: "1%",
    marginRight: "1%",
  },
  likeButton: {
    backgroundColor: "#e14a4a",
    padding: 5,
    margin: 30,
    borderRadius: 40,
    flexDirection: "row",
  },

  shareButtonView: {
    backgroundColor: "#173e35",
    flex: 1,
    borderRadius: 40,
    marginTop: "1%",
    marginBottom: "1%",
    marginRight: "1%",
  },
  shareButton: {
    backgroundColor: "#dde5e4",
    padding: 5,
    margin: 30,
    borderRadius: 40,
    flexDirection: "row",
  },
});
