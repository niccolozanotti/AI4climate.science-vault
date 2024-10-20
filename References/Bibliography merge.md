---
title: Bibliographies merge
aliases: 
date: 2024-09-23
tags: 
description: >
  Simple python script to merge different bibliographies exported from multiple Zotero collections into a unique file.
---

### Merge multiple exported collections from Zotero into a single one

>[!info]
> The following python script merges  [biblatex](https://ctan.org/pkg/biblatex?lang=en) bibliographies named `library{i-th}.bib` into a unique file `library.bib` then loaded by Obsidian Citations [Plugin](http://www.foldl.me/obsidian-citation-plugin/) using bibtexparser [package](https://bibtexparser.readthedocs.io/en/main/).


```python
import os
import bibtexparser

def load_bib_file(file_path):
    """Load a .bib file and return its entries."""
    with open(file_path, 'r', encoding='utf-8') as bib_file:
        bib_database = bibtexparser.load(bib_file)
    return bib_database

def merge_bib_databases(bib_db1, bib_db2):
    """Merge two bib databases, avoiding duplicates."""
    merged_entries = bib_db1.entries.copy()  # Start with all entries from the first file
    existing_keys = {entry['ID'] for entry in bib_db1.entries}  # Keep track of IDs to avoid duplicates

    for entry in bib_db2.entries:
        if entry['ID'] not in existing_keys:
            merged_entries.append(entry)  # Only add entries not already in the merged list
            existing_keys.add(entry['ID'])  # Track new IDs
    
    return merged_entries

def save_merged_bib(merged_entries, output_file):
    """Save the merged entries to a .bib file."""
    merged_bib_db = bibtexparser.bibdatabase.BibDatabase()
    merged_bib_db.entries = merged_entries
    
    with open(output_file, 'w', encoding='utf-8') as bib_file:
        bibtexparser.dump(merged_bib_db, bib_file)

def merge_multiple_bib_files(repo_path, output_file):
    """Merge all .bib files in the repository path."""
    # Get all files in the directory that match libraryN.bib pattern
    bib_files = sorted([f for f in os.listdir(repo_path) if f.startswith('library') and f.endswith('.bib') and f != os.path.basename(output_file)])

    if not bib_files:
        print(f'No .bib files found in {repo_path}')
        return

    # Start by loading the first .bib file
    merged_bib_db = load_bib_file(os.path.join(repo_path, bib_files[0]))

    # Loop through the rest of the files and merge them
    for bib_file in bib_files[1:]:
        current_bib_db = load_bib_file(os.path.join(repo_path, bib_file))
        merged_entries = merge_bib_databases(merged_bib_db, current_bib_db)
        merged_bib_db.entries = merged_entries  # Update the merged bib database

    # Save the merged database to the output file
    save_merged_bib(merged_bib_db.entries, output_file)
    print(f'Merged {len(bib_files)} .bib files and saved to {output_file}')

if __name__ == "__main__":
   repo_path = '/Users/niccolozanotti/Documents/GitHub/AI4climate.science-vault/References'
   output_file = f'{repo_path}/library.bib'
   merge_multiple_bib_files(repo_path, output_file)
```

Bibliographies:

- `library1.bib` : AI
- `library2.bib` : Climate modeling
- `library3.bib` : Data Assimilation
- `library4.bib` : Climate story-line

---

### Print full list of references from the merged library 

```python
import bibtexparser

def load_bib_file(file_path):
    """Load a .bib file and return its entries."""
    with open(file_path, 'r', encoding='utf-8') as bib_file:
        bib_database = bibtexparser.load(bib_file)
    return bib_database.entries

def format_bib_entry(entry):
    """Format a single bib entry into markdown format."""
    authors = entry.get('author', 'Unknown Author')
    title = entry.get('title', 'No Title').replace('{', '').replace('}', '')
    
    # Try to get the year, fallback to date if available
    year = entry.get('year', entry.get('date', 'n.d.'))
    
    journal = entry.get('journal', '') if 'journal' in entry else ''
    publisher = entry.get('publisher', '') if 'publisher' in entry else ''
    doi = entry.get('doi', '') if 'doi' in entry else ''
    
    # Format in markdown style, e.g., Author (Year). Title. Journal/Publisher, DOI.
    formatted_entry = f"- **{authors}** ({year}). *{title}*."
    
    if journal:
        formatted_entry += f" _{journal}_."
    elif publisher:
        formatted_entry += f" {publisher}."
    
    if doi:
        formatted_entry += f" [DOI: {doi}](https://doi.org/{doi})"
    
    return formatted_entry

def print_markdown_references(bib_entries):
    """Print the formatted list of references in markdown."""
    for entry in bib_entries:
        print(format_bib_entry(entry))
      #  print() 

def markdown_references_from_bib(file_path):
    """Load a .bib file and print markdown references."""
    bib_entries = load_bib_file(file_path)
    print_markdown_references(bib_entries)

# Example usage
if __name__ == "__main__":
    repo_path = '/Users/niccolozanotti/Documents/GitHub/obsidian-vault/References'
    bib_file = f'{repo_path}/library.bib'
    markdown_references_from_bib(bib_file)
```
