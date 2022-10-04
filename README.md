### Hi, I'm Josh 👋

Currently I am building [**NiftyCo**](https://aniftyco.com 'NiftyCo - Design & develop simple solutions to complex problems') a SaaS holding company where I design & develop simple solutions to complex problems.

You can find me on [**Makerlog**](https://getmakerlog.com/users/joshmanders) or [**Twitter**](https://twitter.com/joshmanders 'Me on Twitter').

Or check out [**my setup**](https://joshmanders.com/uses 'My setup') and what I am [**currently doing**](https://joshmanders.com/now 'What I am currently doing').

#### Josh as a Dependency

As a command:

```
$ npx joshmanders

  Josh Manders / @joshmanders
  Founder @ NiftyCo, designing & developing simple solutions to complex problems.

   Website:  https://joshmanders.com
   Twitter:  https://twitter.com/joshmanders
    GitHub:  https://github.com/joshmanders

  Projects:

       Name: Makerlog
    Tagline: The public to-do list that keeps you creating daily.
    Website: https://getmakerlog.com
    
       Name: Prevalidate
    Tagline: Your product's success starts here.
    Website: https://prevalidate.com
    
       Name: BugFeedr
    Tagline: Collect Customer Feedback.
    Website: https://bugfeedr.com
    
       Name: Primcloud
    Tagline: Deploy, manage and scale your apps.
    Website: https://primcloud.com
```

Or you can use it programmatically:

```typescript
import josh from 'joshmanders';

console.log(josh.name);
console.log(josh.projects.map(({ name }) => name).join(', '));
```
