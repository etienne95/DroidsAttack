# DroidsAttack
API to control the droids scan to attack them

## Prerequisites

- `node`
- `npm`

## Tests API locally

1. Clone the git repository
    ```
    git clone https://github.com/etienne95/DroidsAttack.git
    ```
2. Navigate to the repository root
    ```
    cd DroidsAttack
    ```
3. Install the dependencies
    ```
    npm i
    ```
4. Add a `.env` file to the project root
    ```
    PORT=8888
    ```
5. Build and run
    ```
    tsc
    npm run start
    ```
    In the console, will be appear the ext log

    ```
    {"level":30,"time":1628685279252,"pid":146066,"hostname":<HOST_NAME>,"msg":"Server listening at http://127.0.0.1:8888"}
Server started successfully in port: 8888

## Unit tests
```
    npm t
```

## Documentation
This API use Swagger to documentation, in the *http://localhost:8888/documentation/static/index.html#/default/post_radar*

## Some debts:
- Coverage reporting
- More unit tests
- CI/CD
- Authentication JWT
- Integration tests