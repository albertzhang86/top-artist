echo "Building ui Image from Dockerfile"
docker build -t ta-ui ./top-artist-ui

echo "Building api image from Dockerfile"
docker build -t ta-api ./top-artist-api
