# The F2E WEEK1 - Landing Page

## Design Concept

### 整體網站視覺

利用 3D 圖標、霓虹效果保留原來活動網站的「遊戲」設計主題，也加上一些比較酷炫的跑馬燈讓整體視覺更吸睛。

### 資訊呈現

資訊主要以卡片呈現，同時也利用標題和顏色凸顯重要資訊，協助瀏覽者快速抓到重點。

> 配色的選用非常重要，對比度不夠，
> 不僅是讓色盲用戶無法判讀，對於一般人類的視覺聚焦都是非常困難的。

### 網站互動性

為了增加瀏覽者與網頁的互動，在部分卡片上有設計 hover 效果，協助瀏覽者 highlight 正在閱讀的資訊，同時也添趣味性。

另外部分區塊有包含遊戲互動設計，例如「關卡資訊」區塊將三個關卡資訊設計成三個闖關的關卡卡片，透過動態效果帶給瀏覽者驚喜感。在「獎項設計」區塊展現賽車比賽的動效，提供瀏覽者一個有趣的小體驗。

### CTA 按鈕設計

CTA 按鈕擺放於頂部 Banner 區塊以及常見問題區塊，以利瀏覽者找到報名入口。

頂部 Banner 區塊 CTA 按鈕目標受眾：
已知道/已了解活動，且想在進入活動網頁後立即報名的用戶

常見問題區塊 CTA 按鈕受眾：
首次瀏覽活動資訊，閱讀完整體資訊想要報名的用戶

## What's in the stack

- [Fly app deployment](https://fly.io) with [Docker](https://www.docker.com/)

- Healthcheck endpoint for [Fly backups region fallbacks](https://fly.io/docs/reference/configuration/#services-http_checks)

- [GitHub Actions](https://github.com/features/actions) for deploy on merge to production and staging environments

- Styling with [Tailwind](https://tailwindcss.com/)

- End-to-end testing with [Cypress](https://cypress.io)

- Local third party request mocking with [MSW](https://mswjs.io)

- Unit testing with [Vitest](https://vitest.dev) and [Testing Library](https://testing-library.com)

- Code formatting with [Prettier](https://prettier.io)

- Linting with [ESLint](https://eslint.org)

- Static Types with [TypeScript](https://typescriptlang.org)

- Animation with [Framer Motion](https://www.framer.com/motion/)

- A practical functional library with [Ramda](https://ramdajs.com/)

## Development

- This step only applies if you've opted out of having the CLI install dependencies for you:

```bash
npx remix init
```

- Initial setup: If you just generated this project, this step has been done for you.

```bash
npm run setup
```

- Start dev server:

```bash
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.


## Deployment

This Remix Stack comes with two GitHub Actions that handle automatically deploying your app to production and staging environments.

Now that everything is set up you can commit and push your changes to your repo.

Every commit to your `main` branch will trigger a deployment to your production environment,
and every commit to your `dev` branch will trigger a deployment to your staging environment.


## GitHub Actions

We use GitHub Actions for continuous integration and deployment.
Anything that gets into the `main` branch will be deployed to production after running tests/build/etc.
Anything in the `dev` branch will be deployed to staging.

## Testing

### Cypress

We use Cypress for our End-to-End tests in this project. You'll find those in the `cypress` directory.
As you make changes, add to an existing file or create a new file in the `cypress/e2e` directory to test your changes.

We use [`@testing-library/cypress`](https://testing-library.com/cypress) for selecting elements on the page semantically.

To run these tests in development, run `npm run test:e2e:dev` which will start the dev server for the app as well as the Cypress client. Make sure the database is running in docker as described above.

### Vitest

For lower level tests of utilities and individual components, we use `vitest`.
We have DOM-specific assertion helpers via [`@testing-library/jest-dom`](https://testing-library.com/jest-dom).

### Type Checking

This project uses TypeScript.
It's recommended to get TypeScript set up for your editor to get a really great in-editor experience with type checking and auto-complete. To run type checking across the whole project, run `npm run typecheck`.

### Linting

This project uses ESLint for linting. That is configured in `.eslintrc.js`.

### Formatting

We use [Prettier](https://prettier.io/) for auto-formatting in this project.
It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save. There's also a `npm run format` script you can run to format all files in the project.


