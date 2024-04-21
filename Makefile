start-app:
	cd frontend/webapp && npm start

start-backend:
	cd backend && npm start


start: start-app start-backend