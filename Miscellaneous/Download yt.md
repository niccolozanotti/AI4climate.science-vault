---
title: 
aliases: 
date: 2024-10-06
tags: 
description:
draft: true
---

Python package to handle YouTube videos: [pytube](https://pytube.io/en/latest/)

```python
from pytube import YouTube
yt = YouTube('https://www.youtube.com/watch?v=mpE6yWb6l70')

yt.streams.filter(progressive=True, file_extension='mp4').order_by('resolution').desc().first().download()
```


```python
from pytube import YouTube
yt = YouTube(
        'https://www.youtube.com/watch?v=mpE6yWb6l70',
        on_progress_callback=progress_func,
        on_complete_callback=complete_func,
        proxies=my_proxies,
        use_oauth=False,
        allow_oauth_cache=True
    )
yt.streams.filter(file_extension='mp4')
```