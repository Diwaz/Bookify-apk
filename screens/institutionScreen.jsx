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
  const [isLoading, setIsLoading] = useState(true);
  const [deptData, setDeptData] = useState({});
  const appHit = async () => {
    const res = await actions.auth.getContactById(id);
    console.log("api res institute Contact us==<<<<", res.data);
    setIsLoading(false);
    setDeptData(res.data);
  };
  useEffect(() => {
    appHit();
  }, []);

  const cartData = useSelector((state) => state.workflow.cartData);
  if (!deptData) {
    return (
      <SafeAreaView>
        <UpperComponent>
          <Header />
        </UpperComponent>
        <MidComponent>
          {!isLoading ? (
            <InstituteBoard
              id={id}
              collegeName={collegeName}
              collegeImg={bookImg}
              address={"Patan Dhoka,Lalitpur"}
              rating={3}
            />
          ) : (
            /* <Dashboard
          details
          //Always USE this displayP otherwise the app will crash
          displayP={"flex"}
          CollegeInfo
          id={id}
          collegeName={collegeName}
          bookImg={bookImg}
          address={address}
        /> */
            <ActivityIndicator />
          )}
        </MidComponent>
        <BottomComponent>
          <CollegeModal departmentData={id} />
        </BottomComponent>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <UpperComponent>
        <Header />
      </UpperComponent>
      <MidComponent>
        {!isLoading ? (
          <InstituteBoard
            id={id}
            collegeName={collegeName}
            collegeImg={bookImg}
            address={deptData.address}
          />
        ) : (
          /* <Dashboard
          details
          //Always USE this displayP otherwise the app will crash
          displayP={"flex"}
          CollegeInfo
          id={id}
          collegeName={collegeName}
          bookImg={bookImg}
          address={address}
        /> */
          <ActivityIndicator />
        )}
      </MidComponent>
      <BottomComponent>
        <CollegeModal departmentData={id} />
      </BottomComponent>
    </SafeAreaView>
  );
};

export default InstitutionScreen;
