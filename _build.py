#!/usr/bin/env python3
"""
KEYPORT — Build script
Copies Tilda-exported HTML pages to clean names, injects assets, fixes links.
"""

import os
import re
import shutil

BASE = os.path.dirname(os.path.abspath(__file__))

# Map: source filename -> output filename
PAGE_MAP = {
    'page128884996.html': 'index.html',
    'page128897006.html': 'developer.html',
    'page128905966.html': 'products.html',
    'page128911756.html': 'services.html',
    'page129904656.html': 'privacypolicy.html',
    'page134705436.html': 'about.html',
    'page134705606.html': 'cases.html',
    'page134705816.html': 'theeconomyofspace.html',
    'page134705926.html': 'experience.html',
    'page134706166.html': 'brandphilosophy.html',
    'page134706296.html': 'contacts.html',
    'page134706476.html': 'feedback.html',
    'page136068006.html': 'blog.html',
}

# Injection snippet (for non-index pages)
INJECT = (
    '<link rel="stylesheet" href="css/keyport-wow.css">\n'
    '<script src="js/keyport-pages.js" defer charset="utf-8"></script>\n'
)

# Link replacement rules: (pattern, replacement)
# Order matters — more specific patterns first to avoid partial matches.
LINK_REPLACEMENTS = [
    # Exact href="/" — use word boundary / end of attr
    (r'href="/"', 'href="index.html"'),
    (r"href='/'", "href='index.html'"),

    (r'href="/about"', 'href="about.html"'),
    (r"href='/about'", "href='about.html'"),

    (r'href="/developer"', 'href="developer.html"'),
    (r"href='/developer'", "href='developer.html'"),

    (r'href="/products"', 'href="products.html"'),
    (r"href='/products'", "href='products.html'"),

    (r'href="/services"', 'href="services.html"'),
    (r"href='/services'", "href='services.html'"),

    (r'href="/cases"', 'href="cases.html"'),
    (r"href='/cases'", "href='cases.html'"),

    (r'href="/theeconomyofspace"', 'href="theeconomyofspace.html"'),
    (r"href='/theeconomyofspace'", "href='theeconomyofspace.html'"),

    (r'href="/experience"', 'href="experience.html"'),
    (r"href='/experience'", "href='experience.html'"),

    (r'href="/brandphilosophy"', 'href="brandphilosophy.html"'),
    (r"href='/brandphilosophy'", "href='brandphilosophy.html'"),

    (r'href="/contacts"', 'href="contacts.html"'),
    (r"href='/contacts'", "href='contacts.html'"),

    (r'href="/feedback"', 'href="feedback.html"'),
    (r"href='/feedback'", "href='feedback.html'"),

    (r'href="/privacypolicy"', 'href="privacypolicy.html"'),
    (r"href='/privacypolicy'", "href='privacypolicy.html'"),

    (r'href="/blog"', 'href="blog.html"'),
    (r"href='/blog'", "href='blog.html'"),
]


def fix_links(html: str) -> str:
    for pattern, replacement in LINK_REPLACEMENTS:
        html = re.sub(pattern, replacement, html)
    return html


def process_page(src_name: str, dst_name: str):
    src_path = os.path.join(BASE, src_name)
    dst_path = os.path.join(BASE, dst_name)

    if not os.path.exists(src_path):
        print(f'  SKIP (not found): {src_name}')
        return

    with open(src_path, 'r', encoding='utf-8', errors='replace') as f:
        html = f.read()

    # Fix internal links
    html = fix_links(html)

    # Inject assets into non-index pages
    if dst_name != 'index.html':
        if '</body>' in html:
            html = html.replace('</body>', INJECT + '</body>', 1)
            injected = True
        else:
            # Fallback: append before </html>
            if '</html>' in html:
                html = html.replace('</html>', INJECT + '</html>', 1)
            else:
                html += '\n' + INJECT
            injected = True
    else:
        injected = False

    with open(dst_path, 'w', encoding='utf-8') as f:
        f.write(html)

    action = 'copied+injected' if injected else 'copied'
    print(f'  OK [{action}]: {src_name} -> {dst_name}')


def main():
    print('=== KEYPORT Build ===')
    print(f'Base directory: {BASE}')
    print()

    print('Processing pages:')
    for src, dst in PAGE_MAP.items():
        process_page(src, dst)

    # Also fix links in already-generated output for 404.html if present
    for extra in ['404.html']:
        extra_path = os.path.join(BASE, extra)
        if os.path.exists(extra_path):
            with open(extra_path, 'r', encoding='utf-8', errors='replace') as f:
                html = f.read()
            html = fix_links(html)
            with open(extra_path, 'w', encoding='utf-8') as f:
                f.write(html)
            print(f'  OK [links fixed]: {extra}')

    print()
    print('=== Build complete ===')
    print(f'Output pages: {list(PAGE_MAP.values())}')


if __name__ == '__main__':
    main()
