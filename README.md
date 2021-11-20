# [Star-wars-api](https://documenter.getpostman.com/view/9053858/UVCCdNoa#2e3395d8-0943-46da-9908-109cd77f8707)

## Introduction

[STAR WARS API](https://documenter.getpostman.com/view/9053858/UVCCdNoa#2e3395d8-0943-46da-9908-109cd77f8707) is a simple HTTP REST API for getting all star wars movies, getting all characters in a star wars movie and also allowing anonymous comments to movies from all over the web. This is an implementation on the [swapi.dev](https://swapi.dev).

## Overview

**What can you do with this API:**

- Get all star wars movies with their opening crawls and anonymous comment count.
- Get all star wars movie characters by the episode_id
  - This allows you to filter by gender [male, female or other]
  - It also allows sorting by [name, height, gender]
  - You can also order the sort in descending/ ascending [desc or asc] order
- Post an anonymous comment for a particular star wars movie by the movie_id.
- Get all comments by their movie_id

## [Documentation](https://documenter.getpostman.com/view/9053858/UVCCdNoa#2e3395d8-0943-46da-9908-109cd77f8707)

[Read more in the documentation.](https://documenter.getpostman.com/view/9053858/UVCCdNoa#2e3395d8-0943-46da-9908-109cd77f8707)

**NOTE:** API is still in the beta stage.

## Set Up Development

- Check that the latest version on nodejs is installed:

  ```
  node --version
  >> v14.4.0 or greater
  ```

- Clone the star-wars-api repo and cd into it:

  ```
  git clone https://github.com/Holajuwon/star-wars-api.git
  cd star-wars-api
  ```

- Install dependencies:

  ```
  npm install
  ```

- Make a copy of the `.env.example` file and rename it to `.env` and update the variables accordingly:

  ```
  # Genetal settings
  DATABASE_URL = <DATABASE_URL> Use a postgres database
  ```

- Create a `.env` file in the root folder and add all the configuration in the `.env.example` file to it. Make sure you replace the values with the right values.

- Run the application with the command:

  ```
  npm start
  ```
