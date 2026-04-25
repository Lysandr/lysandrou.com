# Writing a New Math Post

## Quick start

```bash
node new-post.js <slug> "<title>" <date> "<description>" "<read-time>" "<tag1,tag2,...>"
```

**Example:**
```bash
node new-post.js lqg "The Linear Quadratic Gaussian" 2026-05-10 \
  "Combining LQR with a Kalman filter for optimal output-feedback control." \
  "~10 min read" "Control Theory,LQG,Kalman Filter"
```

Then open `blog/posts/lqg.html`, find `<!-- CONTENT -->`, and write the post body.

## What the script does

1. Creates `blog/posts/<slug>.html` from `blog/posts/_template.html` with all metadata filled in
2. Prepends the post card to `blog/index.html`
3. Replaces the preview card on the homepage (`index.html` `#notes` section) with the new post

## Arguments

| Argument | Example |
|---|---|
| `slug` | `lqg` — becomes the filename and URL |
| `title` | `"The Linear Quadratic Gaussian"` |
| `date` | `2026-05-10` — ISO format |
| `description` | Short excerpt shown in post listings |
| `read-time` | `"~10 min read"` |
| `tags` | `"Control Theory,LQG,Kalman Filter"` — comma-separated, no spaces around commas |

## Writing content

Post content goes inside the `<div class="article-body">` in the generated file, replacing the `<!-- CONTENT -->` comment.

### Available elements

**Section headings**
```html
<h2>Section Title</h2>
<h3>Subsection</h3>
```

**Inline and display math** (KaTeX, rendered automatically)
```html
<p>Inline: $x = Ax + Bu$</p>

<div class="math-block">$$\dot{x} = Ax + Bu$$</div>
```

**Code blocks**
```html
<pre><code># Python
P = solve_continuous_are(A, B, Q, R)</code></pre>
```

**Callout box** (for theorems, conditions, remarks)
```html
<div class="callout">
  <span class="callout-label">Label</span>
  Body text here.
</div>
```

**Definition/summary box**
```html
<div class="def-box">
  <span class="def-box-label">Summary — topic</span>
  <p>Content here. Math works inline: $K = R^{-1}B^TP$</p>
</div>
```

**Bullet list**
```html
<ul style="color: var(--text); line-height: 1.8; margin: 0 0 20px; padding-left: 1.4em;">
  <li><strong>Term.</strong> Explanation.</li>
</ul>
```

## Template and boilerplate

`blog/posts/_template.html` contains the full page shell (head, nav, footer, KaTeX setup). Edit it to change something that should apply to all future posts — but note it won't retroactively update existing posts.
