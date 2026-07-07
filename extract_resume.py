from pathlib import Path
import pypdf

path = Path('public/resume.pdf')
reader = pypdf.PdfReader(str(path))
text = '\n'.join(page.extract_text() or '' for page in reader.pages)
print(text[:20000])
