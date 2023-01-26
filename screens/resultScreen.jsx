import { View, Text, SafeAreaView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { Dashboard, Header } from "../components";
import InfoModal from "../components/infoModal";
import UpperComponent from "../components/UpperComponent";
import MidComponent from "../components/midComponent";
import BottomComponent from "../components/bottomComponent";
import { useSelector } from "react-redux";
import actions from "../redux/actions";

const Resultscreen = ({ route }) => {
  const { bookName, bookImg, bookAuth, price, uptime, views, id, title } =
    route.params;
  console.log("bookId", id);

  const [bookData, setBookData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const appHit = async () => {
    const res = await actions.auth.getBooks();
    console.log("api res==<<<<", res.data[1].name);

    setBookData(res.data);
  };

  useEffect(() => {
    appHit();
  }, []);

  const selectedCourse = bookData.filter((el) => {
    return bookName === el.name;
  });

  setTimeout(() => {
    if (!!selectedCourse) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, 2000);
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
        {isLoading ? (
          <Dashboard
            details
            //Always USE this displayP otherwise the app will crash
            displayP={"flex"}
            BookInfo
            id={id}
            bookName={bookName}
            bookAuth={selectedCourse[0].author}
            bookImg={selectedCourse[0].image}
            price={selectedCourse[0].price}
            views={444}
            uptime={"11 Jan"}
            iscarted={findObject(cartData, id)}
          />
        ) : (
          <ActivityIndicator size="large" color="#1C2363" />
        )}
      </MidComponent>
      <BottomComponent>
        {isLoading ? (
          <InfoModal />
        ) : (
          <ActivityIndicator size="large" color="#1C2363" />
        )}
      </BottomComponent>
    </SafeAreaView>
  );
};

export default Resultscreen;
