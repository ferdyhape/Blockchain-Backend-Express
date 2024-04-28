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
        name: "from",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "fromId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "to",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "toId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "orderType",
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
        name: "_from",
        type: "string",
      },
      {
        internalType: "string",
        name: "_fromId",
        type: "string",
      },
      {
        internalType: "string",
        name: "_to",
        type: "string",
      },
      {
        internalType: "string",
        name: "_toId",
        type: "string",
      },
      {
        internalType: "string",
        name: "_orderType",
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
            name: "from",
            type: "string",
          },
          {
            internalType: "string",
            name: "fromId",
            type: "string",
          },
          {
            internalType: "string",
            name: "to",
            type: "string",
          },
          {
            internalType: "string",
            name: "toId",
            type: "string",
          },
          {
            internalType: "string",
            name: "orderType",
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
            name: "from",
            type: "string",
          },
          {
            internalType: "string",
            name: "fromId",
            type: "string",
          },
          {
            internalType: "string",
            name: "to",
            type: "string",
          },
          {
            internalType: "string",
            name: "toId",
            type: "string",
          },
          {
            internalType: "string",
            name: "orderType",
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
            name: "from",
            type: "string",
          },
          {
            internalType: "string",
            name: "fromId",
            type: "string",
          },
          {
            internalType: "string",
            name: "to",
            type: "string",
          },
          {
            internalType: "string",
            name: "toId",
            type: "string",
          },
          {
            internalType: "string",
            name: "orderType",
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
            name: "from",
            type: "string",
          },
          {
            internalType: "string",
            name: "fromId",
            type: "string",
          },
          {
            internalType: "string",
            name: "to",
            type: "string",
          },
          {
            internalType: "string",
            name: "toId",
            type: "string",
          },
          {
            internalType: "string",
            name: "orderType",
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
        name: "from",
        type: "string",
      },
      {
        internalType: "string",
        name: "fromId",
        type: "string",
      },
      {
        internalType: "string",
        name: "to",
        type: "string",
      },
      {
        internalType: "string",
        name: "toId",
        type: "string",
      },
      {
        internalType: "string",
        name: "orderType",
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
        name: "_updatedAt",
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
        name: "_productId",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "transactionCode",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "productName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "productDescription",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "tokenOfProduct",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "productId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "price",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "createdAt",
        type: "uint256",
      },
    ],
    name: "TransactionDetailAdded",
    type: "event",
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
            name: "productId",
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
            name: "productId",
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
        name: "productId",
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
