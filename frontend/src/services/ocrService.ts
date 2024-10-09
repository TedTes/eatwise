import axios from "axios";

const OCR_API_URL = "https://example.com/ocr";

interface OcrResponse {
  text: string;
}

export const scanReceipt = async (imageUri: string): Promise<OcrResponse> => {
  const formData = new FormData();
  formData.append("file", {
    uri: imageUri,
    type: "image/jpeg",
    name: "receipt.jpg",
  });

  const response = await axios.post<OcrResponse>(OCR_API_URL, formData);
  return response.data;
};
