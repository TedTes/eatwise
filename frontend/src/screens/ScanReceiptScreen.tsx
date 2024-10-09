import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  Alert,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Tesseract from "tesseract.js";
import * as FileSystem from "expo-file-system";
import axios from "axios";
import * as ImageManipulator from "expo-image-manipulator";

const OCR_SPACE_API_URL = "https://api.ocr.space/parse/image";
const API_KEY = "K86104429088957";

const ScanReceiptScreen = () => {
  const [receiptImage, setReceiptImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [scannedText, setScannedText] = useState<string>("");
  const resizeImage = async (imageUri: string) => {
    const manipResult = await ImageManipulator.manipulateAsync(
      imageUri,
      [{ resize: { width: 1024 } }],
      { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
    );
    return manipResult.uri;
  };
  const handleOCRSpaceAPI = async (base64Image: string) => {
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("base64Image", base64Image);
      formData.append("language", "eng"); // Set the language for OCR
      formData.append("isOverlayRequired", "false");

      //   const response = await axios.post(OCR_SPACE_API_URL, formData, {
      //     headers: {
      //       //   apikey: API_KEY, // Use the API key or leave blank for the free tier
      //       "Content-Type": "multipart/form-data",
      //     },
      //   });

      //   const parsedText = response.data.ParsedResults[0].ParsedText; // Extract the OCR text
      //   setScannedText(parsedText); // Set the extracted text from receipt
      const response = await fetch(OCR_SPACE_API_URL, {
        method: "POST",
        body: formData,
        headers: {
          apikey: API_KEY, // Use API key or leave blank for free tier
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("response");
      console.log(response);
      const result = await response.json();
      console.log("result");
      console.log(result);
      // Check for the OCR result and set the scanned text
      if (result.ParsedResults && result.ParsedResults[0].ParsedText) {
        const parsedText = result.ParsedResults[0].ParsedText;
        setScannedText(parsedText);
      } else {
        Alert.alert("OCR Error", "No text detected in the image.");
      }
    } catch (error) {
      console.error("OCR Error:", error);
      Alert.alert("OCR Error", "There was an error processing the image.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOCR = async (imageUri: string) => {
    setIsLoading(true); // Show loading indicator
    const base64Image = await FileSystem.readAsStringAsync(imageUri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    const imageAsBase64 = `data:image;base64,${base64Image}`;
    // console.log(imageAsBase64);
    // Tesseract.recognize(imageAsBase64, "eng", {
    //   logger: (m) => console.log(m), // Monitor OCR progress
    // })
    //   .then(({ data: { text } }) => {
    //     setScannedText(text); // Set the extracted text from receipt
    //     setIsLoading(false); // Hide loading indicator
    //   })
    //   .catch((error) => {
    //     console.error("OCR Error:", error);
    //     Alert.alert("OCR Error", "There was an error processing the image.");
    //     setIsLoading(false); // Hide loading indicator
    //   });
  };

  const handleImagePicker = async () => {
    // Request camera permissions
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Camera Permission",
        "We need camera access to scan receipts!"
      );
      return;
    }

    // Open the camera
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const selectedImage = result.assets[0].uri;
      const resizedImageUri = await resizeImage(selectedImage);
      setReceiptImage(resizedImageUri);

      //   handleOCR(selectedImage);
      const base64Image = await FileSystem.readAsStringAsync(resizedImageUri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      const extension = resizedImageUri.split(".").pop();
      const imageType = extension === "png" ? "image/png" : "image/jpg";
      console.log("image");
      console.log(imageType);
      const imageAsBase64 = `data:${imageType};base64,${base64Image}`;
      await handleOCRSpaceAPI(imageAsBase64);
    } else {
      console.log("Image capture was canceled or no image was selected.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan Your Receipt</Text>

      {/* Image Display */}
      {receiptImage ? (
        <Image source={{ uri: receiptImage }} style={styles.receiptImage} />
      ) : (
        <Text>No receipt scanned yet</Text>
      )}

      {/* Loading Indicator */}
      {isLoading && (
        <ActivityIndicator size="large" color="#f4511e" style={styles.loader} />
      )}

      {/* Button to open the camera */}
      <Button title="Open Camera to Scan Receipt" onPress={handleImagePicker} />

      {/* Display the scanned text */}
      {scannedText ? (
        <ScrollView style={styles.textContainer}>
          <Text style={styles.scannedText}>{scannedText}</Text>
        </ScrollView>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f7f7f7",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  receiptImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  loader: {
    marginVertical: 20,
  },
  textContainer: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    maxHeight: 200,
    width: "100%",
  },
  scannedText: {
    fontSize: 16,
    color: "#333",
  },
});

export default ScanReceiptScreen;
