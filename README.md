# Bloodbath Website

## Quick start

1.  **Install Gatsby**

    ```shell
    yarn global add gatsby-cli
    ```

2.  **Install Dependencies**

    ```shell
    yarn
    ```

3.  **Start developing.**

    Navigate into the site’s directory and start it up.

    ```shell
    cd website
    npm run develop
    ```

## Troubleshooting

### Trouble deploying on DigitalOcean Apps**

Change the commands for the build to those to reset from scratch without cache

```
rm -rf ./node_modules
yarn
yarn clean
yarn build
```