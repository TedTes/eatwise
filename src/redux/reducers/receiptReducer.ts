// src/redux/reducers/receiptReducer.ts

import {
  SCAN_RECEIPT,
  SET_NUTRITION_DETAILS,
  ReceiptState,
  ReceiptActionTypes,
} from "../types/receiptTypes";

const initialState: ReceiptState = {
  receipts: [],
  isLoading: true,
};

const receiptReducer = (
  state = initialState,
  action: ReceiptActionTypes
): ReceiptState => {
  switch (action.type) {
    case SCAN_RECEIPT:
      return {
        ...state,
        receipts: [...state.receipts, action.payload],
      };

    case SET_NUTRITION_DETAILS:
      return {
        ...state,
        receipts: state.receipts.map((receipt) =>
          receipt.id === action.payload.receiptId
            ? { ...receipt, nutritionDetails: action.payload.nutritionDetails }
            : receipt
        ),
      };

    default:
      return state;
  }
};

export default receiptReducer;
