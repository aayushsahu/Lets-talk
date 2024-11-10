## Husky and lint-staged

```bash
$ git --version
git version 2.9.0.windows.1

$ npm install --save-dev husky

$ npx husky init

$ git config core.hooksPath .husky

$ git config core.hooksPath
.frontend/webapp/.husky/_

$ git config --unset core.hooksPath


"prepare": "cd ./../.. && husky frontend/webapp/.husky"



pwd
echo HELLO WORLDS
cd frontend/webapp
npm run test

```
