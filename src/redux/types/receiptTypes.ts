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
export type ReceiptActionTypes = ScanReceiptAction | SaveReceiptAction;

// State Type
export interface ReceiptState {
  receipts: any[];
  isLoading: boolean;
}
