# Helladarion Codex 👹

<p align="center"><img src="src/assets/icon.png" alt="Tormenta20 Logo" width="60"></p>
<p align="center">&laquo;<b>A simplified monster sheet for Tormenta20 RPG system.</b>&raquo;</p>
<p align="center">Helladarion Codex is a virtual sheet that gets all the enemy data from an id and let you update it through an API that access a database.</p>
<br />
<br />

## Description

Helladarion Codex was created as an auxiliary tool for the Tormenta20 campaign I was playing with my friends. I used it to help me as a Dungeon Master and it works only with [Tormenta20 RPG System](https://tormentarpg.com.br/), a pretty cool Brazilian RPG System.
### What's that about?

As a Dungeon Master, you have to prepare a lot of enemies for your campaign. This project helps you by organizing the important data where you create and digitally update the enemy stats, removing the need to jumping from page to page on Tormenta20 book to check the enemy specifications.

Do you want to create a new enemy? Just type all its data on [Helladarion Form](https://helladarion-form.netlify.app/) and it'll render on Helladarion Codex the way you want. You use enemies already created on the book but you constantly customize them on a .txt file? This virtual sheet can update every data by editing the initial stats.

It gets the data through a GET method and according to a query string on URL (the enemy id). Then, with the information collected, the application will have editable components to update information and send them back to the API. With that, you can build and update Tormenta20 RPG System enemy sheets that persist information and you're ready to use it on your RPG campaign.

### Hella-what?

[Helladarion](https://tormenta.fandom.com/pt/wiki/Helladarion) is an artifact created by Tanna-Toh, god of knowledge from Tormenta20 RPG System. This artifact holds all the knowledge of Arton, the fantasy world of this system. The joke here is like you're some priest feeding the artifact knowledge by reporting the stats of new creatures.

## Layout

The initial layout that was made is [this design](https://www.figma.com/file/s1hRy78EXUJEpr5fLR2s85/Helladarion-Codex?node-id=0%3A1) I created on Figma. As development was happening, some things were added, others changed and you can check out the final version on [helladarion-codex.netlify.app](https://helladarion-codex.netlify.app/).

## Project

This project is part of three projects I developed to study things like Typescript and Node.js. It collects data from [Helladarion API](https://github.com/bolognini/helladarion) through the query string `id` to render all the enemy stats created on [Helladarion Form](https://github.com/bolognini/helladarion-form). It also collects data that the user types on editable elements and sends them back to the API, which will update the stored data at a Firebase database.

### Installing

To run the project on development mode, you just need an LTS Node version installed (v14 or higher recommended), and Yarn for managing the packages. If you haven't it yet, you can follow the [Yarn installation guide](https://classic.yarnpkg.com/pt-BR/docs/install/), on their official page.

With Node and Yarn installed, run the commands below. They will clone the project on the current folder, download all the project dependencies and, in a few minutes, the project will open on your default browser, on the port `:8000`.

```shell
git clone https://github.com/bolognini/helladarion-codex.git
cd helladarion-codex
yarn && yarn start
```

### Built With

* [Gatsby](https://www.gatsbyjs.com/) - A popular React Framework
* [Styled Components](https://styled-components.com/) - CSS in JS library
* [Axios](https://github.com/axios/axios) - For HTTP requests
* [Husky](https://github.com/typicode/husky) - Git Hooks lib
* [ESLint](https://eslint.org/) - JavaScript Linter
* [Stylelint](https://stylelint.io/) - CSS Linter
* [Netlify](https://www.netlify.com/) - For CI/CD and deployment
* [Flaticon](https://www.flaticon.com/) - For save, loot and notes icons

<hr />

Helladarion Codex is in its very first release version, which means it has a lot to improve. Since this is something really small and it's used as an auxiliary personal tool I decided to take it easy. That's why I didn't develop a responsive layout, for example.

If you use it and found some bug, have some suggestions to improve it, please feel free to open an issue or send a Pull Request. This is an open-source project! ✌️

I do not own the rights of anything related to the Tormenta20 RPG System. All the rights are reserved and owned by [Jambô Editora](https://jamboeditora.com.br/).
