import os

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Colors
    content = content.replace('#8CC0EB', '#9B8EC7')
    content = content.replace('#B5BAFF', '#9B8EC7') # just in case
    
    # Contrast fixes
    content = content.replace('selection:text-gray-900', 'selection:text-white')
    content = content.replace('bg-primary text-gray-900', 'bg-primary text-white')
    content = content.replace('text-gray-900 text-2xl', 'text-white text-2xl') # Mobile menu btn
    content = content.replace('text-xl text-gray-900', 'text-xl text-white') # Mobile menu links
    content = content.replace('bg-primary text-gray-900 z-40', 'bg-primary text-white z-40') # Mobile menu overlay
    
    # Hover states
    content = content.replace('hover:text-gray-600', 'hover:text-gray-200')
    content = content.replace('hover:text-gray-900 text-gray-700', 'hover:text-white text-gray-200') # Footer links
    content = content.replace('text-sm text-gray-800', 'text-sm text-gray-200') # Footer text

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

replace_in_file('index.html')
replace_in_file('project-detail.html')
replace_in_file('generate_projects.js')
replace_in_file('script.js')

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

css = css.replace('#8CC0EB', '#9B8EC7')
css = css.replace('#B5BAFF', '#9B8EC7')
css = css.replace('rgba(181, 186, 255, 0.95)', 'rgba(155, 142, 199, 0.95)') # new rgba for #9B8EC7
css = css.replace('background: #9BA0F5', 'background: #8075a3') # hover thumb

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print('Updated theme successfully.')
