# joshmanders

> Josh as a Dependency

I made this just for fun and to make sure my name as a package doesn't get taken.

This is inspired by Mike Hartington's [`mhartington`](https://github.com/mhartington/npm-mhartington).

## Usage

You can run it as a command:

```
$ npx joshmanders

  Josh Manders / @joshmanders

  Hire me: https://full.snack.dev/for-hire

     Work:  NiftyCo, App Metrics, Audience
  Twitter:  https://twitter.com/joshmanders
   GitHub:  https://github.com/joshmanders
  Website:  https://joshmanders.com

     Card:  npx joshmanders
```

Or you can use it programmatically:

```typescript
import josh from 'joshmanders';

console.log(josh.name); // Josh Manders
console.log(josh.work.map(({ name }) => name).join(', ')); // NiftyCo, App Metrics, Audience
```
