import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import actions from "../redux/actions";

const { width, height } = Dimensions.get("window");
const SearchBook = ({ params }) => {
  const navigation = useNavigation();
  const [state, setState] = useState({
    isLoading: false,
    data: [],
  });

  const [filterData, setFilterData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search, setSearch] = useState("");

  const appHit = async () => {
    const res = await actions.auth.getBooks();
    console.log("api res==<<<<", res[1].title);
    updateState({
      data: [...data, ...res],
      isLoading: true,
    });
    setFilterData(res);
    setmasterData(res);
  };

  const updateState = (data) => setState((state) => ({ ...state, ...data }));

  useEffect(() => {
    appHit();
  }, []);

  useEffect(() => {
    if (params) {
      const newData = masterData.filter((item) => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = params.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
    } else {
      setFilterData(masterData);
    }
  }, [params]);
  console.log(params);
  const { isLoading, data } = state;

  const itemView = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Search", {
            bookName: item.title,
          });
        }}
      >
        <View style={style.searchText}>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <View style={style.searchWrapper}>
        <View>
          <Text
            style={{
              fontFamily: "RudaB",
              fontSize: 18,
              color: "#1C2363",
            }}
          >
            Showing Results for {params}
          </Text>
        </View>
        <FlatList
          data={filterData}
          renderItem={itemView}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  searchWrapper: {
    display: "flex",
    //flexDirection: "",
    marginTop: 75,

    height: height,
  },
  searchText: {
    //backgroundColor:'red',
    margin: 5,
    borderBottomWidth: 1,
    padding: 10,
    borderBottomColor: "gray",
  },
});

export default SearchBook;
