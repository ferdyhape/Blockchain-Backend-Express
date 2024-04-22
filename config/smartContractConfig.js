import dotenv from "dotenv";
dotenv.config();

export const ABI_TRANSACTION = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "transactionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "paymentStatus",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
    ],
    name: "PaymentStatusUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "transactionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "transactionCode",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "buyer",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "buyerId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "sellerCompany",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "sellerId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sumOfProduct",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "totalPrice",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "paymentStatus",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "createdAt",
        type: "uint256",
      },
    ],
    name: "TransactionAdded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_transactionCode",
        type: "string",
      },
      {
        internalType: "string",
        name: "_buyer",
        type: "string",
      },
      {
        internalType: "string",
        name: "_buyerId",
        type: "string",
      },
      {
        internalType: "string",
        name: "_sellerCompany",
        type: "string",
      },
      {
        internalType: "string",
        name: "_sellerId",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_sumOfProduct",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_totalPrice",
        type: "string",
      },
      {
        internalType: "string",
        name: "_paymentStatus",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_createdAt",
        type: "uint256",
      },
    ],
    name: "addTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllTransaction",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "transactionId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "transactionCode",
            type: "string",
          },
          {
            internalType: "string",
            name: "buyer",
            type: "string",
          },
          {
            internalType: "string",
            name: "buyerId",
            type: "string",
          },
          {
            internalType: "string",
            name: "sellerCompany",
            type: "string",
          },
          {
            internalType: "string",
            name: "sellerId",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "sumOfProduct",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "totalPrice",
            type: "string",
          },
          {
            internalType: "string",
            name: "paymentStatus",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
        ],
        internalType: "struct TransactionContract.Transaction[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_transactionId",
        type: "uint256",
      },
    ],
    name: "getTransaction",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "transactionId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "transactionCode",
            type: "string",
          },
          {
            internalType: "string",
            name: "buyer",
            type: "string",
          },
          {
            internalType: "string",
            name: "buyerId",
            type: "string",
          },
          {
            internalType: "string",
            name: "sellerCompany",
            type: "string",
          },
          {
            internalType: "string",
            name: "sellerId",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "sumOfProduct",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "totalPrice",
            type: "string",
          },
          {
            internalType: "string",
            name: "paymentStatus",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
        ],
        internalType: "struct TransactionContract.Transaction",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_buyerId",
        type: "string",
      },
    ],
    name: "getTransactionByBuyerId",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "transactionId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "transactionCode",
            type: "string",
          },
          {
            internalType: "string",
            name: "buyer",
            type: "string",
          },
          {
            internalType: "string",
            name: "buyerId",
            type: "string",
          },
          {
            internalType: "string",
            name: "sellerCompany",
            type: "string",
          },
          {
            internalType: "string",
            name: "sellerId",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "sumOfProduct",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "totalPrice",
            type: "string",
          },
          {
            internalType: "string",
            name: "paymentStatus",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
        ],
        internalType: "struct TransactionContract.Transaction[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_sellerId",
        type: "string",
      },
    ],
    name: "getTransactionBySellerId",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "transactionId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "transactionCode",
            type: "string",
          },
          {
            internalType: "string",
            name: "buyer",
            type: "string",
          },
          {
            internalType: "string",
            name: "buyerId",
            type: "string",
          },
          {
            internalType: "string",
            name: "sellerCompany",
            type: "string",
          },
          {
            internalType: "string",
            name: "sellerId",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "sumOfProduct",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "totalPrice",
            type: "string",
          },
          {
            internalType: "string",
            name: "paymentStatus",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
        ],
        internalType: "struct TransactionContract.Transaction[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "transactionCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transactions",
    outputs: [
      {
        internalType: "uint256",
        name: "transactionId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "transactionCode",
        type: "string",
      },
      {
        internalType: "string",
        name: "buyer",
        type: "string",
      },
      {
        internalType: "string",
        name: "buyerId",
        type: "string",
      },
      {
        internalType: "string",
        name: "sellerCompany",
        type: "string",
      },
      {
        internalType: "string",
        name: "sellerId",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "sumOfProduct",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "totalPrice",
        type: "string",
      },
      {
        internalType: "string",
        name: "paymentStatus",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "createdAt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_transactionId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_paymentStatus",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_createdAt",
        type: "uint256",
      },
    ],
    name: "updatePaymentStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const ABI_TRANSACTION_DETAIL = [
  {
    inputs: [
      {
        internalType: "string[]",
        name: "_transactionCode",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "_productName",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "_productDescription",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "_tokenOfProduct",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "_price",
        type: "string[]",
      },
      {
        internalType: "uint256[]",
        name: "_createdAt",
        type: "uint256[]",
      },
    ],
    name: "addTransactionDetail",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllTransactionDetail",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "transactionCode",
            type: "string",
          },
          {
            internalType: "string",
            name: "productName",
            type: "string",
          },
          {
            internalType: "string",
            name: "productDescription",
            type: "string",
          },
          {
            internalType: "string",
            name: "tokenOfProduct",
            type: "string",
          },
          {
            internalType: "string",
            name: "price",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
        ],
        internalType: "struct TransactionDetailContract.TransactionDetail[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_transactionCode",
        type: "string",
      },
    ],
    name: "getTransactionDetailByTransactionCode",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "transactionCode",
            type: "string",
          },
          {
            internalType: "string",
            name: "productName",
            type: "string",
          },
          {
            internalType: "string",
            name: "productDescription",
            type: "string",
          },
          {
            internalType: "string",
            name: "tokenOfProduct",
            type: "string",
          },
          {
            internalType: "string",
            name: "price",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
        ],
        internalType: "struct TransactionDetailContract.TransactionDetail[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "transactionDetailCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transactionDetails",
    outputs: [
      {
        internalType: "string",
        name: "transactionCode",
        type: "string",
      },
      {
        internalType: "string",
        name: "productName",
        type: "string",
      },
      {
        internalType: "string",
        name: "productDescription",
        type: "string",
      },
      {
        internalType: "string",
        name: "tokenOfProduct",
        type: "string",
      },
      {
        internalType: "string",
        name: "price",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "createdAt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const CONTRACT_ADDRESS_TRANSACTION =
  process.env.CONTRACT_ADDRESS_TRANSACTION;

export const CONTRACT_ADDRESS_TRANSACTION_DETAIL =
  process.env.CONTRACT_ADDRESS_TRANSACTION_DETAIL;

export const PRIVATE_KEY = process.env.MY_WALLET_PRIVATE_KEY;

export const API_URL = process.env.API_URL;

export const WALLET_ADDRESS = process.env.MY_WALLET_ADDRESS;
