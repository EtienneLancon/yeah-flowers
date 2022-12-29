# yeah-flowers

This Vue app is base on the free https://trefle.io/ API. Thanks to them.
You'll have to register on their website to get your own token.

## Project Setup

```sh
npm install
```

## Get browser intended Trefle API Token

Rename .env.dist file in .env and modify it to your needs (don't forget to .gitignore it (you're welcome)), then execute

```sh
./getJsToken.sh
```
For windows, well i cant solve all misery in the world

The browser token is only valid for something like 24 hours (Trefle documentation has to be more accurate - I guess)

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
# yeah-flowers
