// SPDX-License-Identifier: MIT

pragma solidity 0.8.16;

contract TransactionDetailContract {
    struct TransactionDetail {
        string transactionCode;
        uint256 price;
        string token;
        uint createdAt;
    }

    // Array to store all transaction details
    TransactionDetail[] public transactionDetails;

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
        transactionDetails.push(
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

    // Function to get price from transaction detail by transaction code
    function getPriceFromTransactionDetailByTransactionCode(
        string memory _transactionCode
    ) public view returns (uint256) {
        for (uint i = 0; i < transactionDetails.length; i++) {
            if (
                compareStrings(
                    transactionDetails[i].transactionCode,
                    _transactionCode
                )
            ) {
                return transactionDetails[i].price;
            }
        }
        revert("Transaction code not found");
    }

    // Function to get count of transaction details by transaction code
    function getCountTransactionDetailByTransactionCode(
        string memory _transactionCode
    ) public view returns (uint) {
        uint count = 0;
        for (uint i = 0; i < transactionDetails.length; i++) {
            if (
                compareStrings(
                    transactionDetails[i].transactionCode,
                    _transactionCode
                )
            ) {
                count++;
            }
        }
        return count;
    }

    // Function to get all transaction details by transaction code
    function getTransactionDetailByTransactionCode(
        string memory _transactionCode
    ) public view returns (TransactionDetail[] memory) {
        uint count = getCountTransactionDetailByTransactionCode(
            _transactionCode
        );
        TransactionDetail[] memory results = new TransactionDetail[](count);
        uint index = 0;
        for (uint i = 0; i < transactionDetails.length; i++) {
            if (
                compareStrings(
                    transactionDetails[i].transactionCode,
                    _transactionCode
                )
            ) {
                results[index] = transactionDetails[i];
                index++;
            }
        }
        return results;
    }

    // Helper function to compare strings (case-sensitive)
    function compareStrings(
        string memory a,
        string memory b
    ) internal pure returns (bool) {
        return (keccak256(abi.encodePacked(a)) ==
            keccak256(abi.encodePacked(b)));
    }
}
