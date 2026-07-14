import os

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Config
    content = content.replace("primary: '#5b4282'", "primary: '#a8bcfa'")
    content = content.replace("selection:text-white", "selection:text-gray-900")
    
    # Navbar & Footer colors
    content = content.replace('bg-primary text-white', 'bg-primary text-gray-900')
    content = content.replace('hover:text-white text-gray-300', 'hover:text-gray-900 text-gray-800')
    
    # Navbar links hover
    content = content.replace('hover:text-gray-200', 'hover:text-gray-600')
    content = content.replace('hover:text-gray-300', 'hover:text-gray-600')
    
    # Mobile menu
    content = content.replace('text-white text-2xl', 'text-gray-900 text-2xl') # Menu btn
    content = content.replace('text-xl text-white', 'text-xl text-gray-900') # Mobile links
    content = content.replace('bg-primary z-40', 'bg-primary text-gray-900 z-40') # Overlay
    
    # Footer specifically
    content = content.replace('text-sm text-gray-300', 'text-sm text-gray-800') # copyright

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

update_file('index.html')
update_file('project-detail.html')

# Update CSS
with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()
    
css = css.replace('rgba(91, 66, 130, 0.95)', 'rgba(168, 188, 250, 0.95)')
css = css.replace('#5b4282', '#a8bcfa')
# Custom scrollbar track for modal
css = css.replace('background: #cbd5e1', 'background: #93c5fd') 
css = css.replace('background: #94a3b8', 'background: #60a5fa')

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print('Done updating HTML and CSS files.')
