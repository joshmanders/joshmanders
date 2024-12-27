#!/usr/bin/env node
import * as colors from 'colorette';
import josh from './';

process.stdout.write(
  colors.white(`
  ${colors.bold(josh.name)} / ${colors.magentaBright(`@${josh.handle}`)}
  ${josh.intro}
  
   ${colors.dim('Website:')}  ${colors.cyan(josh.website)}
     ${colors.dim('X.com:')}  ${colors.cyan(josh.xdotcom)}
    ${colors.dim('GitHub:')}  ${colors.cyan(josh.github)}

  ${colors.bold('Projects:')}
       ${josh.projects
         .map(
           ({ name, tagline, website }) => `
       ${colors.dim('Name:')} ${name}
    ${colors.dim('Tagline:')} ${tagline}
    ${colors.dim('Website:')} ${colors.cyan(website)}`
         )
         .join('\n')}

`)
);
