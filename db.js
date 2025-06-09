const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('feedback.db');

function initDB() {
    db.run(`
    CREATE TABLE IF NOT EXISTS pins (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      x INTEGER,
      y INTEGER,
      feedback TEXT
    )
  `);
}

function getAllPins() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM pins', [], (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

function addPin(x, y, feedback) {
    return new Promise((resolve, reject) => {
        db.run(
            'INSERT INTO pins (x, y, feedback) VALUES (?, ?, ?)',
            [x, y, feedback],
            function (err) {
                if (err) reject(err);
                else resolve(this.lastID);
            }
        );
    });
}

function updatePin(id, feedback) {
    return new Promise((resolve, reject) => {
        db.run('UPDATE pins SET feedback = ? WHERE id = ?', [feedback, id], function (err) {
            if (err) reject(err);
            else resolve();
        });
    });
}

function deletePin(id) {
    return new Promise((resolve, reject) => {
        db.run('DELETE FROM pins WHERE id = ?', [id], function (err) {
            console.log(id);
            if (err) reject(err);
            else resolve();
        });
    });
}

module.exports = { initDB, getAllPins, addPin, updatePin, deletePin };
