db.auth('usuario_mongo', 'password');

db = db.getSiblingDB('diplomado_full');

db.createUser({
  user: 'user_db',
  pwd: 'password_db',
  roles: [
    {
      role: 'readWrite',
      db: 'diplomado_db',
    },
  ],
});
