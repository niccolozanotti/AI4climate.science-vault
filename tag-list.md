---
title: >
  List of #tags
aliases: 
date: 2024-08-13
tags: 
description: List of all tags in the vault with relative count
---

>[!warning]- Table Last updated: 2024-08-28.
> Since [DataView](https://blacksmithgu.github.io/obsidian-dataview/) queries are not run in the website, I have to manually copy the output of the query into a new table.

| Tag              | Notes Count |
| ---------------- | ----------- |
| course           | 14          |
| todo             | 12          |
| python           | 3           |
| script           | 1           |
| shell            | 1           |
| sea-ice          | 1           |
| sea-ice-dynamics | 1           |
| project          | 1           |
| numpy            | 1           |
| lecture          | 1           |

---

```dataview
table length(rows) as "Notes Count"
from ""
flatten file.tags as tag
group by tag
sort length(rows) desc
```


```dataviewjs
let tagCounts = {};

// Loop through each file in the vault
for (let page of dv.pages()) {
    if (page.file.tags) {
        for (let tag of page.file.tags) {
            // Remove the leading '#' from the tag
            let cleanedTag = tag.replace(/^#/, '');
            // Increment the count for each tag
            if (tagCounts[cleanedTag]) {
                tagCounts[cleanedTag] += 1;
            } else {
                tagCounts[cleanedTag] = 1;
            }
        }
    }
}

// Convert the tags to a sorted array of [tag, count] pairs
let sortedTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1]); // Sort by count in descending order

// Output the tags and their counts in a markdown table
let table = `| Tag | Notes Count |\n|-----|-------|\n`;
for (let [tag, count] of sortedTags) {
    table += `| ${tag} | ${count} |\n`;
}
dv.paragraph(table);
```

