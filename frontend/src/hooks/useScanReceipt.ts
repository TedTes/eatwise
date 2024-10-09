import { useState } from "react";
import { scanReceipt } from "../services/ocrService";

export const useScanReceipt = () => {
  const [receiptData, setReceiptData] = useState<string | null>(null);

  const handleScanReceipt = async (imageUri: string) => {
    const result = await scanReceipt(imageUri);
    setReceiptData(result.text);
  };

  return { receiptData, handleScanReceipt };
};
