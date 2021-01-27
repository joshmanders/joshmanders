#!/usr/bin/env node
import * as colors from 'colorette';
import josh from './';

process.stdout.write(
  colors.white(`
  ${josh.name} / ${colors.green(`@${josh.handle}`)}

  ${colors.bold('Website:')}  ${colors.cyan(josh.website)}
  ${colors.bold('Twitter:')}  ${colors.cyan(josh.twitter)}
   ${colors.bold('GitHub:')}  ${colors.cyan(josh.github)}

     ${colors.bold('Work:')}
       ${josh.work
         .map(
           ({ name, title, description, website }) => `
      ${colors.dim('Title:')} ${title}
      ${colors.dim('Company:')} ${name}
      ${colors.dim('Description:')} ${description}
      ${colors.dim('Website:')} ${colors.cyan(website)}`
         )
         .join('\n')}

`)
);
