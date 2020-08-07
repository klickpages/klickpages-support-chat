# klickpages-support-chat / Developer Guide

## First steps
- Fork repository:
```shell
git clone git@bitbucket.org:klicksite/klickpages-support-chat.git
```
- Access the folder klickpages-support-chat and Run:
  - `npm install` or `yarn` to install dependencies
  - `npm run serve` or `yarn serve` to run local server

## Running locally

Run the command `yarn serve` to start klickpages-support-chat only on localhost.

## Running locally with Klickpages attributes

First run the Klickpages containers, for that, access your welcome-to-klickpages folder and run the following command: `docker-compose up -d`

With Klickpages running, run the local support-chat lib server with the `yarn serve` command

Add the following line to your etc/hosts:
```shell
127.0.0.1    support_chat.klickpages.local
```

After performing both procedures, you can access the development address:
```url
http://sample.klickpages.local:8080/
```

## Deploy NPM

Before all steps, create an account at NPM and ask for an invitation to the organization.
After that, do you have to follow that steps:

Build application:
``` npm run build ```

You must have an account at NPM to run the following command and enter your credentials:
``` npm login ```

Just confirm that you are right:
``` npm whoami ```

Update the version in package.json and after, run:
``` npm publish --access public ```

Any questions, contact the team :)
