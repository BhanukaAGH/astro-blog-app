# Astro Blog App

This is a simple blog app created by Astro framework and integrated with Keystatic CMS for efficient content management. It offers a streamlined experience for creating, managing blog posts.

## Features

- Create new blog posts effortlessly using the intuitive interface.
- Manage and edit existing posts conveniently through Keystatic CMS integration.
- Customize the blog app further to suit your preferences and needs.

## Prerequisites

Before getting started, ensure you have the following prerequisites installed on your machine:

- Node.js
- pnpm (If you don't have pnpm installed, you can install it by running `npm install -g pnpm`)

## Setup

To set up this blog app locally, follow these steps:

1. Clone this repository to your local machine:

 ```bash
git clone https://github.com/BhanukaAGH/astro-blog-app.git
```

2. Navigate to the project directory:

 ```bash
cd astro-blog-app
```

3. Install dependencies:

 ```bash
pnpm install
```

4. Set up Keystatic CMS integration:

Open keystatic.config.ts file.
Update the repoOwner and repoName fields with your GitHub username and the name of your repository, respectively.

5. Start the development server:

 ```bash
pnpm dev
```

Access the blog app in your browser at `http://localhost:4321`.

## Managing Posts

After setting up the blog app locally, you can manage posts by accessing the Keystatic Admin UI. Here's how:

1. Ensure your local development server is running. If not, start it by running:

    ```bash
    pnpm dev
    ```

2. Open your browser and navigate to `http://localhost:4321/keystatic`.

3. You'll be directed to the Keystatic Admin UI, where you can create, edit, and manage your blog posts with ease.

Feel free to create new posts, edit existing ones, or organize your content as needed directly through the Keystatic CMS integration.
