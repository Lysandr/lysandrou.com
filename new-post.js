#!/usr/bin/env node
/**
 * Usage:
 *   node new-post.js <slug> <title> <date> <description> <read-time> <tag1,tag2,...>
 *
 * Example:
 *   node new-post.js lqg "The Linear Quadratic Gaussian" 2026-05-10 \
 *     "Combining LQR with a Kalman filter to get the optimal output-feedback controller." \
 *     "~10 min read" "Control Theory,LQG,Kalman Filter"
 *
 * What it does:
 *   1. Creates blog/posts/<slug>.html from the template
 *   2. Prepends the post card to blog/index.html
 *   3. Replaces the preview card in the homepage #notes section
 */

const fs   = require('fs');
const path = require('path');

const ROOT = __dirname;

const [,, slug, title, date, description, readTime, tagsArg] = process.argv;

if (!slug || !title || !date || !description || !readTime || !tagsArg) {
  console.error('Usage: node new-post.js <slug> <title> <date> <description> <read-time> <tag1,tag2,...>');
  process.exit(1);
}

const tags = tagsArg.split(',').map(t => t.trim());

// ── 1. Create post file ────────────────────────────────────────────────────

const templatePath = path.join(ROOT, 'blog/posts/_template.html');
const postPath     = path.join(ROOT, `blog/posts/${slug}.html`);

if (fs.existsSync(postPath)) {
  console.error(`Error: blog/posts/${slug}.html already exists.`);
  process.exit(1);
}

const tagsHtml = tags.map(t => `<span class="post-tag">${t}</span>`).join('\n                ');

let post = fs.readFileSync(templatePath, 'utf8');
post = post
  .replace(/\{\{TITLE\}\}/g,       title)
  .replace(/\{\{DATE\}\}/g,        date)
  .replace(/\{\{DESCRIPTION\}\}/g, description)
  .replace(/\{\{READ_TIME\}\}/g,   readTime)
  .replace(/\{\{TAGS_HTML\}\}/g,   tagsHtml);

fs.writeFileSync(postPath, post, 'utf8');
console.log(`✓ Created blog/posts/${slug}.html`);

// ── 2. Prepend card to blog/index.html ────────────────────────────────────

const blogIndexPath = path.join(ROOT, 'blog/index.html');

const postTagsHtml = tags.slice(0, 2).map(t => `<span class="post-tag">${t}</span>`).join('\n              ');

const blogCard = `
          <a href="posts/${slug}.html" class="blog-post-link">
            <div class="post-meta-row">
              <span class="post-date">${date}</span>
              ${postTagsHtml}
            </div>
            <h2 class="post-title">${title}</h2>
            <p class="post-excerpt">
              ${description}
            </p>
          </a>
`;

let blogIndex = fs.readFileSync(blogIndexPath, 'utf8');
const blogListMarker = '<div class="blog-list" data-animate>';
if (!blogIndex.includes(blogListMarker)) {
  console.error('Error: could not find blog-list marker in blog/index.html');
  process.exit(1);
}
blogIndex = blogIndex.replace(blogListMarker, blogListMarker + blogCard);
fs.writeFileSync(blogIndexPath, blogIndex, 'utf8');
console.log('✓ Prepended card to blog/index.html');

// ── 3. Replace homepage preview card ──────────────────────────────────────

const homePath = path.join(ROOT, 'index.html');

const homeCard = `          <a href="blog/posts/${slug}.html" class="notes-preview-card">
            <div class="notes-preview-meta">
              <span class="notes-preview-date">${date}</span>
              <span class="tag">${tags[0]}</span>
            </div>
            <h3 class="notes-preview-title">${title}</h3>
            <p class="notes-preview-excerpt">${description}</p>
          </a>`;

let home = fs.readFileSync(homePath, 'utf8');
// Replace everything between the data-animate div and its closing tag in the notes section
home = home.replace(
  /(<div data-animate>\s*)(<a href="blog\/posts\/[^"]+\.html" class="notes-preview-card">[\s\S]*?<\/a>)(\s*<\/div>)/,
  `$1${homeCard}$3`
);
fs.writeFileSync(homePath, home, 'utf8');
console.log('✓ Updated homepage notes preview');

console.log(`\nDone! Open blog/posts/${slug}.html and fill in the <!-- CONTENT --> section.`);
