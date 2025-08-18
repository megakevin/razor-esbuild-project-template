import * as esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';

// SCSS
const scssFiles = [
  { entry: './Stylesheets/site.scss', outfile: './wwwroot/css/site.css' },
  // Add other stylesheet files here.
];

scssFiles.forEach(async file => {
  await esbuild.build({
    entryPoints: [file.entry],
    bundle: true,
    sourcemap: true,
    loader: { '.woff': 'file', '.woff2': 'file' },
    outfile: file.outfile,
    plugins: [sassPlugin()]
  });
});


// JavaScript
const jsFiles = [
  { entry: './JavaScript/site.js', outfile: './wwwroot/js/site.js' },
  // Add other JavaScript files here.
];

jsFiles.forEach(async file => {
  await esbuild.build({
    entryPoints: [file.entry],
    bundle: true,
    sourcemap: true,
    outfile: file.outfile,
  })
});

// Raw files
const rawFiles = [
  // Add library files here.
];

rawFiles.forEach(async file => {
  await esbuild.build({
    entryPoints: [file.entry],
    bundle: false,
    sourcemap: false,
    loader: { ".*": 'copy' },
    outfile: file.outfile
  });
});
