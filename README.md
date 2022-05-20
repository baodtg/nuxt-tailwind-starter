# Nuxt 3 + TailwindCSS starter project

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## Deploy step to google cloud using cloud run

```bash
# Build app
$ docker build . -t <IMAGE_NAME:TAG>
# Try running app locally
$ docker run -d -p 8080:8080 --name <CONTAINER_NAME> <IMAGE_ID>
# Push image to google container registry
$ docker tag [IMAGE_ID] asia.gcr.io/<YOUR_GOOGLE_CLOUD_PROJECT_ID>/my-nuxt-app-name:1.0.0
$ docker push asia.gcr.io/<YOUR_GOOGLE_CLOUD_PROJECT_ID>/my-nuxt-app-name:1.0.0
```

## Deploy step to google cloud using cloud build and cloud run

```bash
# Enabling Cloud Build
$ gcloud services enable cloudbuild.googleapis.com
# Enabling Cloud Run
$ gcloud services enable run.googleapis.com

# Build container and upload to google container registry
$ gcloud builds submit --tag asia.gcr.io/<YOUR_GOOGLE_CLOUD_PROJECT_ID>/my-nuxt-app-name:1.0.0
# Deploy app
$ gcloud run deploy <SERVICE-NAME> --image=asia.gcr.io/<YOUR_GOOGLE_CLOUD_PROJECT_ID>/my-nuxt-app-name:1.0.0 --revision-suffix=<REVISION_SUFFIX>
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
