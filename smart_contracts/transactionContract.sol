//SPDX-License-Identifier: MIT

pragma solidity 0.8.16;

contract TransactionContract {
    struct Transaction {
        uint transactionId; // unique transaction id
        string transactionCode; // unique transaction code
        string from; // buyer or seller name
        string fromId; // buyer or seller id
        string to; // seller or buyer name
        string toId; // buyer or seller id
        string orderType; // buy or sell
        string paymentStatus; // pending, paid, failed
        uint createdAt;
    }

    event TransactionAdded(
        uint indexed transactionId,
        string transactionCode,
        string from,
        string fromId,
        string to,
        string toId,
        string orderType,
        string paymentStatus,
        uint createdAt
    );

    event PaymentStatusUpdated(
        uint indexed transactionId,
        string paymentStatus,
        uint updatedAt
    );

    mapping(uint => Transaction) public transactions;
    uint public transactionCount;

    function addTransaction(
        string memory _transactionCode,
        string memory _from,
        string memory _fromId,
        string memory _to,
        string memory _toId,
        string memory _orderType,
        string memory _paymentStatus,
        uint _createdAt
    ) public {
        transactionCount++;
        transactions[transactionCount] = Transaction(
            transactionCount,
            _transactionCode,
            _from,
            _fromId,
            _to,
            _toId,
            _orderType,
            _paymentStatus,
            _createdAt
        );

        emit TransactionAdded(
            transactionCount,
            _transactionCode,
            _from,
            _fromId,
            _to,
            _toId,
            _orderType,
            _paymentStatus,
            _createdAt
        );
    }

    function getTransaction(
        uint _transactionId
    ) public view returns (Transaction memory) {
        return transactions[_transactionId];
    }

    function updatePaymentStatus(
        uint _transactionId,
        string memory _paymentStatus,
        uint _updatedAt
    ) public {
        require(
            _transactionId <= transactionCount,
            "Transaction does not exist"
        );

        Transaction storage transaction = transactions[_transactionId];
        transaction.paymentStatus = _paymentStatus;

        emit PaymentStatusUpdated(_transactionId, _paymentStatus, _updatedAt);
    }

    function getAllTransaction() public view returns (Transaction[] memory) {
        Transaction[] memory _transactions = new Transaction[](
            transactionCount
        );
        for (uint i = 1; i <= transactionCount; i++) {
            _transactions[i - 1] = transactions[i];
        }
        return _transactions;
    }

    function getTransactionByBuyerId(
        string memory _buyerId
    ) public view returns (Transaction[] memory) {
        uint count = 0;
        for (uint i = 1; i <= transactionCount; i++) {
            if (
                keccak256(abi.encodePacked(transactions[i].fromId)) ==
                keccak256(abi.encodePacked(_buyerId))
            ) {
                count++;
            }
        }
        Transaction[] memory _transactions = new Transaction[](count);
        uint j = 0;
        for (uint i = 1; i <= transactionCount; i++) {
            if (
                keccak256(abi.encodePacked(transactions[i].fromId)) ==
                keccak256(abi.encodePacked(_buyerId))
            ) {
                _transactions[j] = transactions[i];
                j++;
            }
        }
        return _transactions;
    }

    function getTransactionBySellerId(
        string memory _sellerId
    ) public view returns (Transaction[] memory) {
        uint count = 0;
        for (uint i = 1; i <= transactionCount; i++) {
            if (
                keccak256(abi.encodePacked(transactions[i].toId)) ==
                keccak256(abi.encodePacked(_sellerId))
            ) {
                count++;
            }
        }
        Transaction[] memory _transactions = new Transaction[](count);
        uint j = 0;
        for (uint i = 1; i <= transactionCount; i++) {
            if (
                keccak256(abi.encodePacked(transactions[i].toId)) ==
                keccak256(abi.encodePacked(_sellerId))
            ) {
                _transactions[j] = transactions[i];
                j++;
            }
        }
        return _transactions;
    }
}
