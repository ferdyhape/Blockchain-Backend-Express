// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

contract TransactionDetailContract {
    struct TransactionDetail {
        string transactionCode;
        uint256 price;
        string token;
        uint createdAt;
    }

    // Mapping to store transaction details
    mapping(string => TransactionDetail[]) private transactionDetails;

    event TransactionDetailAdded(
        string transactionCode,
        uint256 price,
        string token,
        uint createdAt
    );

    // Function to add transaction detail
    function addTransactionDetail(
        string memory _transactionCode,
        uint256 _price,
        string memory _token,
        uint _createdAt
    ) public {
        transactionDetails[_transactionCode].push(
            TransactionDetail({
                transactionCode: _transactionCode,
                price: _price,
                token: _token,
                createdAt: _createdAt
            })
        );

        emit TransactionDetailAdded(
            _transactionCode,
            _price,
            _token,
            _createdAt
        );
    }

    // Function to get count of transaction details by transaction code
    function getCountTransactionDetailByTransactionCode(
        string memory _transactionCode
    ) public view returns (uint) {
        return transactionDetails[_transactionCode].length;
    }

    // Function to get all transaction details by transaction code
    function getTransactionDetailByTransactionCode(
        string memory _transactionCode
    ) public view returns (TransactionDetail[] memory) {
        return transactionDetails[_transactionCode];
    }

    // Function to get price from transaction detail by transaction code
    function getPriceFromTransactionDetailByTransactionCode(
        string memory _transactionCode
    ) public view returns (uint256) {
        require(
            transactionDetails[_transactionCode].length > 0,
            "Transaction code not found"
        );
        return transactionDetails[_transactionCode][0].price;
    }
}
