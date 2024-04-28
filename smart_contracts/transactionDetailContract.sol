//SPDX-License-Identifier: MIT

pragma solidity 0.8.16;

contract TransactionDetailContract {
    struct TransactionDetail {
        string transactionCode;
        string productName;
        string productDescription;
        string tokenOfProduct;
        string productId;
        string price;
        uint createdAt;
    }

    event TransactionDetailAdded(
        string transactionCode,
        string productName,
        string productDescription,
        string tokenOfProduct,
        string productId,
        string price,
        uint createdAt
    );

    mapping(uint => TransactionDetail) public transactionDetails;
    uint public transactionDetailCount;

    function addTransactionDetail(
        string[] memory _transactionCode,
        string[] memory _productName,
        string[] memory _productDescription,
        string[] memory _tokenOfProduct,
        string[] memory _productId,
        string[] memory _price,
        uint[] memory _createdAt
    ) public {
        require(
            _transactionCode.length == _productName.length &&
                _productName.length == _productDescription.length &&
                _productDescription.length == _tokenOfProduct.length &&
                _tokenOfProduct.length == _productId.length &&
                _productId.length == _price.length &&
                _price.length == _createdAt.length,
            "Lengths of input arrays do not match"
        );

        for (uint i = 0; i < _transactionCode.length; i++) {
            transactionDetailCount++;
            transactionDetails[transactionDetailCount] = TransactionDetail(
                _transactionCode[i],
                _productName[i],
                _productDescription[i],
                _tokenOfProduct[i],
                _productId[i],
                _price[i],
                _createdAt[i]
            );

            emit TransactionDetailAdded(
                _transactionCode[i],
                _productName[i],
                _productDescription[i],
                _tokenOfProduct[i],
                _productId[i],
                _price[i],
                _createdAt[i]
            );
        }
    }

    function getAllTransactionDetail()
        public
        view
        returns (TransactionDetail[] memory)
    {
        TransactionDetail[] memory result = new TransactionDetail[](
            transactionDetailCount
        );
        for (uint i = 1; i <= transactionDetailCount; i++) {
            result[i - 1] = transactionDetails[i];
        }
        return result;
    }

    function getTransactionDetailByTransactionCode(
        string memory _transactionCode
    ) public view returns (TransactionDetail[] memory) {
        uint count = 0;
        for (uint i = 1; i <= transactionDetailCount; i++) {
            if (
                keccak256(
                    abi.encodePacked(transactionDetails[i].transactionCode)
                ) == keccak256(abi.encodePacked(_transactionCode))
            ) {
                count++;
            }
        }

        TransactionDetail[] memory result = new TransactionDetail[](count);
        uint index = 0;
        for (uint i = 1; i <= transactionDetailCount; i++) {
            if (
                keccak256(
                    abi.encodePacked(transactionDetails[i].transactionCode)
                ) == keccak256(abi.encodePacked(_transactionCode))
            ) {
                result[index] = transactionDetails[i];
                index++;
            }
        }
        return result;
    }
}
