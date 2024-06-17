import dotenv from "dotenv";
dotenv.config();

export const ABI_TRANSACTION = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_transactionCode",
        type: "string",
      },
      {
        internalType: "string",
        name: "_campaignId",
        type: "string",
      },
      {
        internalType: "string",
        name: "_fromToUserId",
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
        internalType: "string",
        name: "_status",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_quantity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_totalPrice",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_paymentMethodDetailId",
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
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "newPaymentProof",
        type: "string",
      },
    ],
    name: "PaymentProofUpdated",
    type: "event",
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
        name: "newPaymentStatus",
        type: "string",
      },
    ],
    name: "PaymentStatusUpdated",
    type: "event",
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
        name: "newStatus",
        type: "string",
      },
    ],
    name: "StatusUpdated",
    type: "event",
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
        name: "campaignId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "fromToUserId",
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
        internalType: "string",
        name: "status",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "paymentMethodDetailId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "paymentProof",
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
        name: "_newPaymentProof",
        type: "string",
      },
    ],
    name: "updatePaymentProof",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
        name: "_newPaymentStatus",
        type: "string",
      },
    ],
    name: "updatePaymentStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
        name: "_newStatus",
        type: "string",
      },
    ],
    name: "updateStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllTransactions",
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
            name: "campaignId",
            type: "string",
          },
          {
            internalType: "string",
            name: "fromToUserId",
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
            internalType: "string",
            name: "status",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalPrice",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "paymentMethodDetailId",
            type: "string",
          },
          {
            internalType: "string",
            name: "paymentProof",
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
    name: "getCountTransaction",
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
        internalType: "string",
        name: "_campaignId",
        type: "string",
      },
    ],
    name: "getTransactionByCampaignId",
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
            name: "campaignId",
            type: "string",
          },
          {
            internalType: "string",
            name: "fromToUserId",
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
            internalType: "string",
            name: "status",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalPrice",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "paymentMethodDetailId",
            type: "string",
          },
          {
            internalType: "string",
            name: "paymentProof",
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
        name: "_transactionCode",
        type: "string",
      },
    ],
    name: "getTransactionByCode",
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
            name: "campaignId",
            type: "string",
          },
          {
            internalType: "string",
            name: "fromToUserId",
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
            internalType: "string",
            name: "status",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalPrice",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "paymentMethodDetailId",
            type: "string",
          },
          {
            internalType: "string",
            name: "paymentProof",
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
        name: "_fromToUserId",
        type: "string",
      },
    ],
    name: "getTransactionByFromToUserId",
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
            name: "campaignId",
            type: "string",
          },
          {
            internalType: "string",
            name: "fromToUserId",
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
            internalType: "string",
            name: "status",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalPrice",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "paymentMethodDetailId",
            type: "string",
          },
          {
            internalType: "string",
            name: "paymentProof",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "transactionCodes",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "transactions",
    outputs: [
      {
        internalType: "string",
        name: "transactionCode",
        type: "string",
      },
      {
        internalType: "string",
        name: "campaignId",
        type: "string",
      },
      {
        internalType: "string",
        name: "fromToUserId",
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
        internalType: "string",
        name: "status",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalPrice",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "paymentMethodDetailId",
        type: "string",
      },
      {
        internalType: "string",
        name: "paymentProof",
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
