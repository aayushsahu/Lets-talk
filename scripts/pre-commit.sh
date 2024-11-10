#!/bin/sh
# .husky/pre-commit

echo "Woof-woof by husky! Running pre-commit hook"
cd ./frontend/webapp/
npm run lint:fix
npm run format
npm run test
