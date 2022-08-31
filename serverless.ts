import type { AWS } from '@serverless/typescript';

import login from '@functions/login';
import verifyToken from '@functions/verify-token';
import createUser from '@functions/create-user';

const serverlessConfiguration: AWS = {
  service: 'auth',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-offline'],
  useDotenv: true,
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      DATABASE_URL: "mysql://admin:msauth123@ms-auth.cythfknuyjvl.us-east-1.rds.amazonaws.com:3306/auth",
      JWT_SECRET: "5ebe2294ecd0e0f08eab7690d2a6ee69"
    },
  },
  // import the function via paths
  functions: { login, verifyToken, createUser },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
