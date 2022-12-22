# init - acronym finder

## Description:

A website where you can find the meaning of an acronym in different contexts.

## How to contribute?

You can contribute by adding your own acronyms!<br />
To contribute follow these instructions:<br />

1. Fork the repo
1. Clone the repo on your local machine and create a new branch: `git checkout -b <branch name>`
1. Go to the folder `res` and open `index.js`
1. You'll find 3 arrays of abjects that contain two `key/value` pairs.
1. You can add a new object to the array that contains the acronym as a `key`, and the meaning as a `value`
1. Example:

```js
const extended = [{ key: "WTF", value: "where's the food" }];
```

6. Keep in mind that the 3 arrays are different:

- `complicated`: contains cmoplicated meaning of an acronym
- `extended`: contains the more common meaning of an acronym
- `offensive`: this one exlpains itself :)

7. Commit your changes and push them to the remote repo.
8. Open a pull request and wait for the merge!

## Contributors:

- [Astroboy **author**](https://astrofolio.vercel.app)
