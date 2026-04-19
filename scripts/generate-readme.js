const fs = require('fs');
const path = require('path');

function htmlToMd(html) {
    // Basic conversion for this specific project structure
    let md = html
        .replace(/<!DOCTYPE html>[\s\S]*?<body>/i, '') // Remove head and start of body
        .replace(/<\/body>[\s\S]*?<\/html>/i, '') // Remove end of body and html
        .replace(/<nav>[\s\S]*?<\/nav>/g, '') // Remove navigation
        .replace(/<h1>(.*?)<\/h1>/g, '# $1\n') // h1 to #
        .replace(/<h2>(.*?)<\/h2>/g, '## $1\n') // h2 to ##
        .replace(/<p>([\s\S]*?)<\/p>/g, (match, p1) => `${p1.trim()}\n`) // p to text
        .replace(/<q>([\s\S]*?)<\/q>/gs, (match, p1) => `> ${p1.trim().replace(/\s+/g, ' ')}\n`) // q to blockquote
        .replace(/<hr>/g, '---\n') // hr to ---
        .replace(/<article>/g, '') // remove article tags
        .replace(/<\/article>/g, '\n')
        .replace(/<br>/g, '\n')
        // More robust link conversion
        .replace(/<a\s+(?:[^>]*?\s+)?href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (match, href, text) => {
            return `[${text.trim().replace(/\s+/g, ' ')}](${href})`;
        })
        .replace(/\[\s+/g, '[') // clean up spaces in links
        .replace(/\s+\]/g, ']')
        .replace(/^[ \t]+/gm, '') // Remove leading spaces from each line
        .replace(/\n{3,}/g, '\n\n'); // collapse multiple newlines

    return md.trim();
}

const indexPath = path.join(__dirname, '../build/index.html');
const pubsPath = path.join(__dirname, '../build/publications.html');
const readmePath = path.join(__dirname, '../README.md');

let readmeContent = '# [cacilie.github.io](https://cacilie.github.io)\n\n';

if (fs.existsSync(indexPath)) {
    const indexHtml = fs.readFileSync(indexPath, 'utf8');
    readmeContent += htmlToMd(indexHtml) + '\n\n';
}

if (fs.existsSync(pubsPath)) {
    const pubsHtml = fs.readFileSync(pubsPath, 'utf8');
    readmeContent += htmlToMd(pubsHtml) + '\n';
}

fs.writeFileSync(readmePath, readmeContent.trim() + '\n');
console.log('README.md generated successfully!');
