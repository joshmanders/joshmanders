#!/usr/bin/env node
import * as colors from 'colorette';
import josh from './';

process.stdout.write(
  colors.white(`
  ${josh.name} / ${colors.cyan(`@${josh.handle}`)}
  ${josh.forHire && colors.green(`\n  ${colors.bold('Hire me:')}  ${josh.forHire}`)}

     ${colors.bold('Work:')}  ${colors.blue(josh.work.map(({ name }) => name).join(', '))}
  ${colors.bold('Twitter:')}  ${colors.cyan(josh.twitter)}
   ${colors.bold('GitHub:')}  ${colors.cyan(josh.github)}
  ${colors.bold('Website:')}  ${colors.cyan(josh.website)}

     ${colors.bold('Card:')}  npx ${josh.handle}

`)
);
