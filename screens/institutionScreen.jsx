import { View, Text, SafeAreaView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { CollegeModal, Dashboard, Header } from "../components";
import InfoModal from "../components/infoModal";
import UpperComponent from "../components/UpperComponent";
import MidComponent from "../components/midComponent";
import BottomComponent from "../components/bottomComponent";
import { useSelector } from "react-redux";
import actions from "../redux/actions";
import { InstituteBoard } from "../components/InstituteComponent";

const InstitutionScreen = ({ route }) => {
  const { collegeName, bookImg, id, address } = route.params;
  console.log("Institute Id", id);

  const cartData = useSelector((state) => state.workflow.cartData);

  return (
    <SafeAreaView>
      <UpperComponent>
        <Header />
      </UpperComponent>
      <MidComponent>
        <InstituteBoard />
        {/* <Dashboard
          details
          //Always USE this displayP otherwise the app will crash
          displayP={"flex"}
          CollegeInfo
          id={id}
          collegeName={collegeName}
          bookImg={bookImg}
          address={address}
        /> */}
      </MidComponent>
      <BottomComponent>
        <CollegeModal departmentData={id} />
      </BottomComponent>
    </SafeAreaView>
  );
};

export default InstitutionScreen;
