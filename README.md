
## To run POSTGRES in docker
![alt text](image.png)
```bash
docker pull postgres:14-alpine

docker start LetsTalkPostgres

docker exec -it LetsTalkPostgres bash
psql -U letstalkUSER

# Other additional commands
passwd postgres
passwd <username>

su - postgres
su - <username>

whoami

cat /etc/passwd


psql -h 127.0.0.1 -p 5432 -U letstalkUSER -d letstalkDB

```

## To run knex commands
Important link for [Knex](https://devhints.io/knex)
```bash
cd db-script
knex migrate:make <users>
knex migrate:latest --migrations-directory ./migrations/ --knexfile ./knexfile.js

```
UP:
//for running FE
make start-app

//for data setup
make db-start
cd db-script 
npm run build
knex migrate:latest --migrations-directory ./migrations/ --knexfile ./knexfile.js

//for running backend
make start-backend


DOWN:
//for removing database and data
make db-remove
docker volume rm pgdata
