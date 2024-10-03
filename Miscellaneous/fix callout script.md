---
draft: true
---

Script to place multiple lines text into a callout.

```python
def fix_callout(file_path):
    # Read the file content
    with open(file_path, 'r') as file:
        lines = file.readlines()

    # Process each line
    fixed_lines = []
    for line in lines:
        if line.startswith(">") or line.strip() == "":  # Preserve lines that already start with '>' or are empty
            fixed_lines.append(line)
        else:
            fixed_lines.append(f"> {line}")  # Add '>' at the beginning of the line

    # Write the fixed content back to the file
    with open(file_path, 'w') as file:
        file.writelines(fixed_lines)

if __name__ == "__main__":
    # Provide the path to the markdown file
    file_path = "/Users/niccolozanotti/Documents/GitHub/obsidian-vault/tmp/callout-to-fix.md"
    fix_callout(file_path)
    print('callout format fixed')
```


