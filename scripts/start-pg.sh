IMAGE_EXISTS=$(docker images --filter reference=postgres:14-alpine | grep postgres)
if [[ $IMAGE_EXISTS != *'postgres'* ]]; then
    docker pull postgres:14-alpine
fi

CONTAINER=$(docker ps | grep LetsTalkPostgres)
if [[ $CONTAINER != *'LetsTalkPostgres'* ]]; then
    echo "Container already exists"
    docker start LetsTalkPostgres
fi

NO_CONTAINER=$(docker ps -a | grep LetsTalkPostgres)
if [[ $NO_CONTAINER != *'LetsTalkPostgres'* ]]; then
    echo "Container doesn't exists. Running the container"
    docker run --name LetsTalkPostgres \
        -p 5432:5432 \
        -e POSTGRES_USER=letstalkUSER \
        -e POSTGRES_PASSWORD=letstalkPASSWORD \
        -e POSTGRES_DB=letstalkDB \
        -v pgdata:/var/lib/postgresql/data \
        -d postgres:14-alpine
fi

sleep 10
if [ "$PSQL" = true ]; then
    docker exec -it LetsTalkPostgres psql -U letstalkUSER -d letstalkDB
fi
if [ "$BASH" = true ]; then
    docker exec -it LetsTalkPostgres bash
fi