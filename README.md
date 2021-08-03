# qeoqeo-be-lar

## Local development (Sail)

### ENV configuration

1. Update the **Local port** in `.env`.

2. Enable XDebug.

-   Set `SAIL_XDEBUG=true`
-   Run `sail build --no-cache`
-   Check `sail php -v`

### Expose the URL to Internet

1. Just need **HTTP**: `sail share` (30 mins).

2. **HTTPS**: use `ngrok http --region=ap 81` (120 mins and [ngrok](https://ngrok.com) makes life much easier).

### Command line

1. Open `.zshrc`, add `alias sail="./vendor/bin/sail"`.

2. Replace `php` by `sail`, eg: `sail artisan queue:work`.

3. Running in local: `sail up -d`

## Production (ECS)

1. Create an IAM user with Policy:

-   AmazonEC2ContainerRegistryFullAccess
-   AmazonECS_FullAccess

2. Add `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` into Github repository > Settings > Secrets.

3. Create a bucket via AWS console and upload your production .env file.

    **NOTE:** file name must be `your-app-name.env`, eg: `qeoqeo-be-lar.env`.

4. Copy `cfn_parameters.example.json` to `cfn_parameters.json`. Update your own parameters in `cfn_parameters.json` then create stack from `cloudformation.yml`.

    **NOTE:** keep `ServiceTaskDesiredCount = 0` as initial.

    ```
    aws cloudformation create-stack \
    --stack-name qeoqeo-be-lar \
    --template-body file://cloudformation/cloudformation.yml \
    --parameters file://cloudformation/cfn_parameters.json \
    --capabilities CAPABILITY_NAMED_IAM
    ```

5. Push your code to branch `main`.

6. Change `ServiceTaskDesiredCount = 0` into `ServiceTaskDesiredCount = 1` in file `cfn_parameters.json`.

7. Run this command to `update-stack` on CloudFormation.

    ```
    aws cloudformation update-stack \
    --stack-name qeoqeo-be-lar \
    --template-body file://cloudformation/cloudformation.yml \
    --parameters file://cloudformation/cfn_parameters.json \
    --capabilities CAPABILITY_NAMED_IAM
    ```
