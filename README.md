# Website Starter

Sum of starter equipment and more in standard HTML-CSS projects. SASS was used as preprocessor for CSS and PUG was used as preprocessor for HTML.

Required explanations are made in the folder. Enjoy using.

## Installation
Run the following code in the project to copy the GitHub repository;
```
git clone https://github.com/arasekinciii/website-starter.git
```
*Remember to delete the hidden .git folder after downloading the files.*

To download project dependencies;
```
cd website-starter && yarn install
```

To run all tasks and to monitor files;
```
grunt
```

## Usage

It will create a directory named website-starter in the current folder.
In this directory it will create the first project structure and set up transitive dependencies:

```
  website-starter
  ├── README.md
  ├── .editorconfig
  ├── .gitignore
  ├── .gitignore
  ├── Gruntfile.js
  ├── package.json
  ├── node_modules
  ├── build
  │   ├── static
  │   │   ├── css
  │   │   └── js
  │   ├── index.html
  │   └── manifest.json
  ├── src
  │   ├── static
  │   │   ├── assets
  │   │   │   ├── css
  │   │   │   ├── fonts
  │   │   │   ├── images
  │   │   │   └── js
  │   │   └── includes
  │   └── index.pug
```

### Adding Pages

To add a new page, create a file with the extension .pug in `src`. Add the files to the pug task in the **Gruntfile.js** file.

```
pug: {
  main: {
    options: {
      pretty: true
    },
    files: {
      '<%= build %>/new-file.html': '<%= source %>/new-file.pug'
    }
  }
},
```

## License
[MIT](https://choosealicense.com/licenses/mit/)