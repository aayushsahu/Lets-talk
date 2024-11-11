#!/bin/sh
# .husky/pre-commit

echo "Woof-woof by husky! Running pre-commit hook"
cd ./frontend/webapp/
npm run lint-staged:fix
npm run test
