import SQLite from 'react-native-sqlite-storage';

// creates the database
export const db = SQLite.openDatabase(
  {
    name: 'UserDatabase.db',
    location: 'default',
  },
  () => console.log('Database opened successfully'),
  error => console.log('Database error:', error),
);

// Initialize the users table
export const initializeDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        email TEXT UNIQUE,
        password TEXT
      );`,
      [],
      () => console.log('Users table created'),
      error => console.log('Error creating users table:', error),
    );
  });
};
