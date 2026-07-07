from pathlib import Path
import fitz

path = Path('public/resume.pdf')
doc = fitz.open(str(path))
print('pages', doc.page_count)
for i, page in enumerate(doc):
    text = page.get_text()
    print(f'--- PAGE {i+1} ---')
    print(text[:4000])
    if i >= 2:
        break
