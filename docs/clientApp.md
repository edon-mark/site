---
sidebar_position: 3
---

# Client App

The generated project follows a modular structure:

- **`/Provider.{tsx,jsx}`**  
  The main Provider file for handling global context, theming, and application-wide configuration.

- **`/resolvers.js`**  
  Contains logic and helper functions to resolve data.

  You can **customize this file** according to your **UI kit or custom components** to fit your specific project needs.

  By default, this file is preconfigured for **Tamagui**, but you can adapt it for any other UI library or design system.

  :::info
  ⚠️ **Important:** The names of the functions in the `export` must remain unchanged; only their internal implementation should be customized.  
  :::

- **`/pagesName.json`**  
  A JSON file that stores the names of all the pages associated with them.

- **`/pages/`**  
  The root folder for all application pages.

  - **`/pages/{pageId}/`**  
     A dedicated folder for each page, identified by a unique `pageId`.

    - **`index.{tsx,jsx}`**  
      The main React component for this specific page.

    - **`layers.json`**  
      This file stores the layout structure and layers of the page.

      The data inside `layers.json` is processed by the  
      **[`@edon/generator`](https://www.npmjs.com/@edon/generator)** library  
      to generate the final page output and render the UI.

      In other words, it acts as a **data source for building the UI**, containing details about layers, their order, and configuration.

  - **`/propsId/{id}.{ts,js}`**  
    This file belongs to each **layer** in a page, with a unique **ID** assigned to every layer.

    You can add your **custom JavaScript logic** or scripts specifically for that layer inside this file.

    When the page is rendered, the script from this file will automatically be integrated into **`{pageId}/index`**.

    If your script requires any **external module or library**, simply `import` it in the **`{pageId}/index`** file for that page, and it will be available for the corresponding layer.

This structure ensures each page is fully self-contained, including its **component code, layout definition, and props configuration**.
