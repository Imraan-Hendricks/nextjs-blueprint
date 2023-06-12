# Next.js Blueprint

Next.js Blueprint is a foundational project template for rapidly developing web applications using Next.js and TypeScript. It provides a robust infrastructure, standardized structure, and integrated tools to streamline your development process and deliver high-quality Next.js applications.

<br />

### Key Technologies:

#### Design:

- FramerMotion: An open source, production-ready motion library for React on the web.
- Storybook: A frontend workshop for building UI components and pages in isolation.
- TailwindCSS: A utility-first CSS framework.

#### Development:

- Next.js: An open-source React front-end development web framework.
- Mongoose: MongoDB object modeling for Node.js.
- React Query: Performant and powerful data synchronization for React.
- TypeScript: A strongly typed programming language that builds on JavaScript.
- Zod: TypeScript-first schema validation with static type inference.

#### Testing:

- Cypress: Front end testing tool for web applications.
- Jest: A Javsacript testing framework built on top of Jasmine.
- React Testing Library: A very light-weight solution for testing React components.
- SuperTest: A high-level abstraction for testing HTTP.

<br />

### NPM Scripts:

In the root directory, you can run:

- `npm run build` - builds the application for production.
- `npm run dev` - starts the application in development mode.
- `npm run start` - starts the application in production mode.
- `npm run test:cypress-component` - launches component tests in headless mode.
- `npm run test:cypress-e2e` - launches end-to-end tests in headless mode.
- `npm run test:cypress-open` - opens the cypress launchpad.
- `npm run test:jest-ci` - launches unit tests in CI mode.
- `npm run test:jest-watch` - launches unit tests in interactive mode.
- `npm run storybook:start` - start Storybook locally and output the address.
- `npm run storybook:build` - compiles Storybook instance so it can be deployed.

<br />

## Getting Started

### Prerequisites

Make sure you have the following installed on your development machine:

- Node.js (v16.8.0 or higher)
- npm (v7 or higher)

### Environment Variables

To set up the required environment variables:

1&nbsp;) Create a .env.development.local file and a .env.test.local file in the root directory of the project. Sample files are provided in the expected location for reference. In a production environment, make sure to configure the environment variables on the host server.

2&nbsp;) For executing end-to-end tests with Cypress, create a cypress.env.json file in the root directory and include the necessary variables. A sample file is provided for reference. The presence of this file is mandatory for running end-to-end tests with Cypress.

### Installation

1&nbsp;) Clone this repository:

```shell
git clone https://github.com/your-username/nextjs-blueprint.git
```

2&nbsp;) Navigate to the project directory:

```shell
cd nextjs-blueprint
```

3&nbsp;) Install the dependencies:

```shell
npm ci
```

### Development

To run the application in development mode:

```shell
npm run dev
```

Open your browser and visit http://localhost:3000 to view the application.

### Production Build

To build the application for production:

```shell
npm run build
```

After the build is complete, start the application in production mode with the following command:

```shell
npm start
```

Remember to configure your production environment accordingly before starting the application.

<br />

For more detailed information, advanced usage, and customization options, please refer to the [documentation](https://github.com/Imraan-Hendricks/nextjs-blueprint).

### Contributing

Contributions are always welcome! If you encounter any issues, have suggestions, or want to contribute improvements, please open an issue or submit a pull request in the [Github repository](https://github.com/Imraan-Hendricks/nextjs-blueprint).

### Support

If you have any questions, issues, or need assistance, please feel free to reach out to our support team at support@imraanhendricks.com. We are here to help and will get back to you as soon as possible.

### License

This project is licensed under the [MIT License](https://github.com/Imraan-Hendricks/nextjs-blueprint/blob/main/LICENSE).
