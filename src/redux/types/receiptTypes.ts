// Action Types
export const SCAN_RECEIPT = "SCAN_RECEIPT";
export const SAVE_RECEIPT = "SAVE_RECEIPT";

// Action Interfaces
export interface ScanReceiptAction {
  type: typeof SCAN_RECEIPT;
  payload: { imageUri: string };
}

export interface SaveReceiptAction {
  type: typeof SAVE_RECEIPT;
  payload: { receiptData: any };
}

// Combine Action Types
export type ReceiptActionTypes =
  | ScanReceiptAction
  | SaveReceiptAction
  | SetNutritionDetailsAction;

// State Type
export interface ReceiptState {
  receipts: any[];
  isLoading: boolean;
}

export const SET_NUTRITION_DETAILS = "SET_NUTRITION_DETAILS";

export interface Receipt {
  id: string;
  imageUri: string;
  scannedText: string;
  nutritionDetails?: NutritionDetails;
}

export interface NutritionDetails {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

// export interface ReceiptState {
//   receipts: Receipt[];
// }

// interface ScanReceiptAction {
//   type: typeof SCAN_RECEIPT;
//   payload: Receipt;
// }

interface SetNutritionDetailsAction {
  type: typeof SET_NUTRITION_DETAILS;
  payload: {
    receiptId: string;
    nutritionDetails: NutritionDetails;
  };
}

// export type ReceiptActionTypes = ScanReceiptAction | SetNutritionDetailsAction;
