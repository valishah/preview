
# Preview [![javascript style guide][standard-image]][standard-url]
This repo has the API for fetching preview information of a specific url. Which includes the meta information required to represent in social media platforms like twitter, facebook etc.

[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

## Tech Stack

- NodeJS
- Express
- GCP(Google Cloud Platform)

## Install Depedencies

### Install Gcloud
gcloud sdk is required for deploying application to google cloud, to install gcloud visit https://cloud.google.com/sdk/downloads


### Install App Dependencies
Before running make sure you install the required dependencies by running command,
```node
npm install
```

## Running the app
To run the application in local, run command
```node
npm start
```
which will start the local server in Demon mode with NODE_ENV variable set as development

## Running test cases
To run test cases, run command
```node
npm test
```
