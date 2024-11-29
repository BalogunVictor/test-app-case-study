import {db} from './database/database';

// Register a new user and return their details
export const registerUser = (
  username: string,
  email: string,
  password: string,
): Promise<{id: number; username: string; email: string}> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
        [username, email, password],
        (_, result) => {
          // Retrieve the newly inserted user
          tx.executeSql(
            'SELECT id, username, email FROM users WHERE id = last_insert_rowid()',
            [],
            (_, {rows}: any) => {
              resolve(rows.item(0));
            },
            (_, error: any) => {
              console.log('Fetch inserted user error:', error);
              reject(error);
            },
          );
        },
        (_, error: any) => {
          console.log('Registration error:', error);
          reject(error);
        },
      );
    });
  });
};

// Login an existing user and return their details
export const loginUser = (
  email: string,
  password: string,
): Promise<{id: number; username: string; email: string} | null> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT id, username, email FROM users WHERE email = ? AND password = ?',
        [email, password],
        (_, {rows}: any) => {
          if (rows.length > 0) {
            resolve(rows.item(0));
          } else {
            resolve(null);
          }
        },
        (_, error: any) => {
          console.log('Login error:', error);
          reject(error);
        },
      );
    });
  });
};
