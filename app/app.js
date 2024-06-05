// app.js
document.getElementById('hashingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const keysInput = document.getElementById('keys').value.split(',').map(Number);
    const tableSize = parseInt(document.getElementById('tableSize').value);
    const method = document.getElementById('method').value;

    let hashTable = new Array(tableSize).fill(null);

    function hash(key) {
        return key % tableSize;
    }

    function hash2(key) {
        return 1 + (key % (tableSize - 1));
    }

    function insertChaining(key) {
        const index = hash(key);
        if (!hashTable[index]) {
            hashTable[index] = [];
        }
        hashTable[index].push(key);
    }

    function insertLinearProbing(key) {
        let index = hash(key);
        while (hashTable[index] !== null) {
            index = (index + 1) % tableSize;
        }
        hashTable[index] = key;
    }

    function insertQuadraticProbing(key) {
        const index = hash(key);
        let i = 1;
        while (hashTable[(index + i ** 2) % tableSize] !== null) {
            i++;
        }
        hashTable[(index + i ** 2) % tableSize] = key;
    }

    function insertDoubleHashing(key) {
        let index = hash(key);
        const interval = hash2(key);
        while (hashTable[index] !== null) {
            index = (index + interval) % tableSize;
        }
        hashTable[index] = key;
    }

    hashTable = new Array(tableSize).fill(null);

    switch (method) {
        case 'chaining':
            keysInput.forEach(insertChaining);
            break;
        case 'linearProbing':
            keysInput.forEach(insertLinearProbing);
            break;
        case 'quadraticProbing':
            keysInput.forEach(insertQuadraticProbing);
            break;
        case 'doubleHashing':
            keysInput.forEach(insertDoubleHashing);
            break;
    }

    renderTable(hashTable);
});

function renderTable(hashTable) {
    const table = document.getElementById('hashTable');
    table.innerHTML = '<tr style="color:black"><th>Index</th><th>Values</th></tr>';
    hashTable.forEach((value, index) => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = index;
        if (Array.isArray(value)) {
            cell2.textContent = value.join(' -> ');
        } else {
            cell2.textContent = value !== null ? value : '';
        }
    });
}
document.addEventListener('DOMContentLoaded', (event) => {
    // Handle form submission
    document.getElementById('hashingForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // Hashing logic here
    });

    // Handle reset button click
    document.getElementById('resetButton').addEventListener('click', function() {
        if (confirm('Are you sure you want to reset the form?')) {
            document.getElementById('keys').value = '';
            document.getElementById('tableSize').value = '';
            document.getElementById('method').selectedIndex = 0;
        }
    });

    // Handle logout button click
    document.getElementById('logoutButton').addEventListener('click', function() {
        if (confirm('Are you sure you want to log out?')) {
            // Redirect to index.html
            window.location.href = '../index.html';
        }
    });
});