# Mondrian Color Mapping

<div style="width: 100%; display: block;">
<img src="https://outfit-v2-exports-production.s3.ap-southeast-2.amazonaws.com/media_library_items/314f027c7eca051b1dfb147c73d1f079/Jan-15-2021%2006-53-31.gif" style="max-width: 500px !important; display: block; margin: auto; border-radius: 6px;">
</div>

I built this to test out the capabilities of make.cm's ability to handle RGB > CMYK color mapping in PDF generations, while at the same time playing around with Generative Artistry's Mondrian Grid.

This project has no practical application, but then again what personal project does haha?

## Structure

Yarn workspaces was used to handle the package management for both the application and PDF template repositories (both of which are React apps).

```
/packages
  /app // The application code
  /template // The template imported into Make.cm for PDF generation
```

## Built with

- [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/): To handle all the package management for both React applications.
- [React (create-react-app)](https://create-react-app.dev/): To create both the template and the application.
- [Generative Artistry's Mondrian Grid](https://generativeartistry.com/tutorials/piet-mondrian/): Used to create the generative grid.
- [Make.cm](https://make.cm/): Used to generate and manipulate the PDF result.
- [Netlify](https://www.netlify.com/): Hosting and deployment of the application.

## Installation & Scripts

### Install

```
git clone git@github.com:jamesrplee/mondrian-monorepo.git
cd mondrian-monorepo
yarn
```

### Running the server

Depending on the React app you want to run (the template or the application) you can do the following from the root directory `/`.

```
yarn --cwd packages/app start
```

```
yarn --cwd packages/template start
```

Or you can navigate directly to each React app and run `yarn start` if you'd prefer.

Both are configured to load at `localhost:3000`.


### Building the template for Make.cm

Make.cm requires the built assets to be available before importing. This has been enabled by removing the `/build` directory from the `.gitignore`.

When importing into Make set the root directory to `/packages/template/build`.
