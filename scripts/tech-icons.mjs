// Copies the tech logos used in the Skills section from the devicon package
// into public/tech/<name>.svg. Run after changing the list: node scripts/tech-icons.mjs
import { copyFile, mkdir } from 'node:fs/promises';

const icons = {
  python: 'python/python-original.svg',
  typescript: 'typescript/typescript-original.svg',
  javascript: 'javascript/javascript-original.svg',
  java: 'java/java-original.svg',
  csharp: 'csharp/csharp-original.svg',
  dotnet: 'dotnetcore/dotnetcore-original.svg',
  swift: 'swift/swift-original.svg',
  kotlin: 'kotlin/kotlin-original.svg',
  react: 'react/react-original.svg',
  nextjs: 'nextjs/nextjs-original.svg',
  tailwind: 'tailwindcss/tailwindcss-original.svg',
  vite: 'vitejs/vitejs-original.svg',
  nodejs: 'nodejs/nodejs-original.svg',
  express: 'express/express-original.svg',
  fastapi: 'fastapi/fastapi-original.svg',
  django: 'django/django-plain.svg',
  graphql: 'graphql/graphql-plain.svg',
  pytorch: 'pytorch/pytorch-original.svg',
  tensorflow: 'tensorflow/tensorflow-original.svg',
  android: 'android/android-original.svg',
  apple: 'apple/apple-original.svg',
  xcode: 'xcode/xcode-original.svg',
  postgresql: 'postgresql/postgresql-original.svg',
  mongodb: 'mongodb/mongodb-original.svg',
  redis: 'redis/redis-original.svg',
  mysql: 'mysql/mysql-original.svg',
  sqlserver: 'microsoftsqlserver/microsoftsqlserver-original.svg',
  firebase: 'firebase/firebase-original.svg',
  aws: 'amazonwebservices/amazonwebservices-original-wordmark.svg',
  gcp: 'googlecloud/googlecloud-original.svg',
  azure: 'azure/azure-original.svg',
  docker: 'docker/docker-original.svg',
  githubactions: 'githubactions/githubactions-original.svg',
  cloudflare: 'cloudflare/cloudflare-original.svg',
  linux: 'linux/linux-original.svg',
};

const root = new URL('..', import.meta.url);
await mkdir(new URL('public/tech/', root), { recursive: true });
for (const [name, file] of Object.entries(icons)) {
  await copyFile(new URL(`node_modules/devicon/icons/${file}`, root), new URL(`public/tech/${name}.svg`, root));
}
console.log(`Copied ${Object.keys(icons).length} logos`);
