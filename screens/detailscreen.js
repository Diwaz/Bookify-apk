import { View, Text, SafeAreaView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { Dashboard, Header } from "../components";
import InfoModal from "../components/infoModal";
import UpperComponent from "../components/UpperComponent";
import MidComponent from "../components/midComponent";
import BottomComponent from "../components/bottomComponent";
import { useSelector } from "react-redux";
import actions from "../redux/actions";

const Detailscreen = ({ route }) => {
  const { bookName, bookImg, bookAuth, price, uptime, views, id } =
    route.params;
  console.log("bookId", id);

  const cartData = useSelector((state) => state.workflow.cartData);

  //const isCarted = cartData.some(item => item.id === id);
  //const isAvailable = !!isCarted;

  function findObject(arr, id) {
    const element = arr.find((value) => {
      return value.id === id;
    });
    return typeof element === "undefined" ? false : true;
  }

  return (
    <SafeAreaView>
      <UpperComponent>
        <Header />
      </UpperComponent>
      <MidComponent>
        <Dashboard
          details
          //Always USE this displayP otherwise the app will crash
          displayP={"flex"}
          BookInfo
          id={id}
          bookName={bookName}
          bookAuth={bookAuth}
          bookImg={bookImg}
          price={price}
          views={views}
          uptime={uptime}
          iscarted={findObject(cartData, id)}
        />
      </MidComponent>
      <BottomComponent>
        <InfoModal />
      </BottomComponent>
    </SafeAreaView>
  );
};

export default Detailscreen;
