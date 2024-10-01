start-app:
	cd frontend/webapp && npm start

start-backend:
	cd backend && npm start


start: start-app start-backend

db-start:
	bash ./scripts/start-pg.sh
db-start-psql:
	PSQL=true bash ./scripts/start-pg.sh
db-start-bash:
	PSQL=true bash ./scripts/start-pg.sh
db-remove:
	REMOVE=true bash ./scripts/stop-pg.sh
db-stop:
	bash ./scripts/stop-pg.sh