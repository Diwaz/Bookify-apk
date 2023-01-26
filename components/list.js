import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const { width, height } = Dimensions.get("window");

const List = ({ category, book, title, college }) => {
  const bookData = useSelector((state) => state.workflow.initialBookData);
  console.log("api books", bookData);
  const navigation = useNavigation();
  const categoryData = [
    {
      id: 1,
      category: "College Notes",
      icon: "school",
      files: "27 files",
    },
    {
      id: 2,
      category: "Reference Notes",
      icon: "library",
      files: "245 files",
    },
    {
      id: 3,
      category: "Exam-Oriented",
      icon: "ribbon",
      files: "107 files",
    },
    {
      id: 4,
      category: "Entertainment",
      icon: "game-controller",
      files: "7 files",
    },
  ];
  // const bookData = [
  //   {
  //     id: 1,
  //     bookName: "Data Structure & Algorithms",
  //     image: require("../assets/Cover/cover1.jpeg"),
  //     author: "Hari Bdr Neupane",
  //     views: 4567,
  //     upDate: "7 days",
  //     price: 675,
  //   },
  //   {
  //     id: 2,
  //     bookName: "The King of Drugs",
  //     image: require("../assets/Cover/cover2.jpg"),
  //     author: "Nora Barret",
  //     views: 567,
  //     upDate: "1 day",
  //     price: 1000,
  //   },
  //   {
  //     id: 3,
  //     bookName: "Creative Business",
  //     image: require("../assets/Cover/cover3.jpg"),
  //     author: "Allan Watts",
  //     views: 64567,
  //     upDate: "3 months",
  //     price: 6750,
  //   },
  //   {
  //     id: 4,
  //     bookName: "Creative Ideas",
  //     image: require("../assets/Cover/cover4.jpg"),
  //     author: "Andrew Schulz",
  //     views: 40567,
  //     upDate: "7 days",
  //     price: 300,
  //   },
  //   {
  //     id: 5,
  //     bookName: "Creative Brain",
  //     image: require("../assets/Cover/cover5.jpg"),
  //     author: "George R. R. Martin",
  //     views: 91345,
  //     upDate: "21 days",
  //     price: 2000,
  //   },
  // ];
  const collegeData = [
    {
      id: 1,
      collegeName: "SXC",
      image: require("../assets/Cover/sxc.png"),
      address: "Maitighar,Ktm.",
      level: "+2/BE/CSIT",
    },
    {
      id: 2,
      collegeName: "APEX College",
      image: require("../assets/Cover/islington.png"),
      address: "DevkotaSadak,Ktm.",
      level: "BBA/BBS",
    },
    {
      id: 3,
      collegeName: "Islington College",
      image: require("../assets/Cover/islington.png"),
      address: "Kamal Marg, Ktm.",
      level: "BIT/BSCsit/BE",
    },
    {
      id: 4,
      collegeName: "IIMS",
      image: require("../assets/Cover/sxc.png"),
      address: "Tinkune, Ktm.",
      level: "BE/BIT/IT",
    },
    {
      id: 5,
      collegeName: "DAV college",
      image: require("../assets/Cover/islington.png"),
      address: "Jawalakhel,Lalitpur",
      level: "+2/BE",
    },
    {
      id: 6,
      collegeName: "NCTTM",
      image: require("../assets/Cover/sxc.png"),
      address: "Uttardhoka,Ktm.",
      level: "+2/BE",
    },
  ];
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={style.flatlistwrapper}
      onPress={() => {
        /* 1. Navigate to the Details route with params */
        navigation.navigate("Details", {
          id: item._id,
          bookName: item.name,
          bookImg: item.image,
          bookAuth: item.author,
          views: item.views,
          uptime: item.upDate,
          price: item.price,
          description: item.description,
        });
      }}
    >
      <View>
        {book && (
          <Image
            style={style.bookLogo}
            source={{
              uri: `https://shineducation.com${item.image}`,
            }}
          />
        )}
      </View>
      {/* For category  */}
      <View>
        {book && (
          <Text
            style={{
              fontFamily: "RudaB",
              color: "#1C2363",
              marginBottom: 5,
              textAlign: "center",
            }}
          >
            {" "}
            {item.name}
          </Text>
        )}
      </View>
      <View>
        {book && (
          <Text
            style={{
              fontFamily: "RudaR",
              color: "#666666",
            }}
          >
            {item.author}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
  const renderCollege = ({ item }) => (
    <TouchableOpacity
      style={style.flatlistwrapper}
      onPress={() => {
        /* 1. Navigate to the Details route with params */
        navigation.navigate("InstitutionDetails", {
          id: item.id,
          collegeName: item.collegeName,
          bookImg: item.image,
          address: item.address,
          seats: item.seats,
        });
      }}
    >
      <View>
        {college && (
          <Image
            style={{
              width: 63,
              height: 74,
              marginBottom: 10,
            }}
            source={`${item.image}`}
          />
        )}
      </View>
      {/* For category  */}
      <View>
        {college && (
          <Text
            style={{
              fontFamily: "RudaB",
              color: "#1C2363",
              marginBottom: 5,
              textAlign: "center",
            }}
          >
            {" "}
            {item.collegeName}
          </Text>
        )}
      </View>
      <View>
        {college && (
          <Text
            style={{
              fontFamily: "RudaR",
              color: "#666666",
            }}
          >
            {item.address}
          </Text>
        )}
        {college && (
          <Text
            style={{
              textAlign: "center",
            }}
          >
            {item.level}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
  const renderCate = ({ item }) => (
    <TouchableOpacity
      style={style.flatlistwrapper}
      onPress={() => {
        console.log(JSON.stringify(item.bookName));
        /* 1. Navigate to the Details route with params */
        navigation.navigate("CategoryDetails", {
          category: item.category,
        });
      }}
    >
      {category && (
        <View
          style={{
            borderRadius: 50,
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            width: 74,
            height: 74,
            marginBottom: 17,
          }}
        >
          <Text>
            <Ionicons name={`${item.icon}`} size={35} color={"#1C2363"} />
          </Text>
        </View>
      )}

      {/* For category  */}
      <View>
        {category && (
          <Text
            style={{
              fontFamily: "RudaB",
              color: "#1C2363",
              marginBottom: 5,
            }}
          >
            {" "}
            {item.category}
          </Text>
        )}
      </View>
      <View>
        {category && (
          <Text
            style={{
              fontFamily: "RudaR",
              color: "#666666",
            }}
          >
            {item.files}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={style.flatcategory}>
      <View style={style.upperdeck}>
        <Text
          style={{
            fontFamily: "RudaB",
            fontSize: 18,
            color: "#1C2363",
          }}
        >
          {" "}
          {title}
        </Text>
        <TouchableOpacity>
          <Text>
            <Ionicons name="funnel" size={22} color={"#1C2363"} />
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        {category && (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categoryData}
            renderItem={renderCate}
          />
        )}
        {book && (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={bookData}
            renderItem={renderItem}
          />
        )}
        {college && (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={collegeData}
            renderItem={renderCollege}
          />
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  flatcategory: {
    display: "flex",
  },
  mainwrapper: {
    display: "flex",
  },
  upperdeck: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 10,
  },
  flatlistwrapper: {
    height: 188,
    backgroundColor: "#1C23631A",
    display: "flex",
    alignItems: "center",
    //justifyContent:'space-around',
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    width: 154,
    paddingTop: 24,
    margin: 6,
  },
  bookLogo: {
    width: 53,
    height: 84,
    marginBottom: 10,
  },
});

export default List;
