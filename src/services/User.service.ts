import {db} from './database/database';

export const getUserInfo = (
  id: number,
): Promise<{id: number; username: string; email: string} | null> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT id, username, email FROM users WHERE id = ?',
        [id],
        (_, {rows}) => {
          if (rows.length > 0) {
            resolve(rows.item(0));
          } else {
            resolve(null);
          }
        },
        (_, error) => {
          console.log('Error fetching user info:', error);
          reject(error);
        },
      );
    });
  });
};
