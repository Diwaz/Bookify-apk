import { Platform, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { WebView } from "react-native-webview";

const PdfView = () => {
  //   const [pdfUrl, setPdfUrl] = useState(null);

  //   useEffect(() => {
  //     const fetchPdf = async () => {
  //       const response = await fetch(
  //         "https://www.gutenberg.org/files/42911/Bizet-Variations_Chromatiques_de_concert/Bizet-Variations_Chromatiques_de_concert_Theme_A4.pdf"
  //       );
  //       const pdf = await response.arrayBuffer();
  //       const pdfUrl = `data:application/pdf;base64,${btoa(pdf)}`;
  //       setPdfUrl(pdfUrl);
  //     };

  //     fetchPdf();
  //   }, []);

  return Platform.OS === "web" ? (
    <iframe
      src="https://www.gutenberg.org/files/42911/Bizet-Variations_Chromatiques_de_concert/Bizet-Variations_Chromatiques_de_concert_Theme_A4.pdf"
      height={"50%"}
      width={"100%"}
      style={{
        flex: 1,
      }}
    />
  ) : (
    <View style={{ flex: 1 }}>
      <WebView
        source={{
          uri: "https://www.gutenberg.org/files/42911/Bizet-Variations_Chromatiques_de_concert/Bizet-Variations_Chromatiques_de_concert_Theme_A4.pdf",
        }}
        style={{ marginTop: 22, flex: 1 }}
      />
    </View>
  );
};

export default PdfView;

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});
