---
title: GraphQL + FastAPI + Strawberry
aliases: 
date: 2024-12-29
tags: 
description: > 
  Containerized GraphQL API for deploying a (weather) forecasting ML-model as a fastAPI using Strawberry. 
---

> Containerized GraphQL API for deploying a (weather) forecasting ML-model as a fastAPI using Strawberry. 

`structure.txt`:
```
 Directory structure:
 └── app/
     ├── Dockerfile
     ├── requirements.txt
     ├── main.py
     ├── schema.py
     └── model/
         └── weather_model.py
```
`requirements.txt`:
```
fastapi==0.104.1
uvicorn==0.24.0
strawberry-graphql==0.216.1
numpy==1.24.3
pydantic==2.4.2
python-multipart==0.0.6
```
`main.py`:
```python
from fastapi import FastAPI
from strawberry.fastapi import GraphQLRouter
import strawberry
from schema import Query, WeatherPrediction
from model.weather_model import WeatherModel

# Initialize FastAPI and load model
app = FastAPI(title="Weather Forecast Emulator API")
weather_model = WeatherModel()

# Create GraphQL schema and router
schema = strawberry.Schema(query=Query)
graphql_app = GraphQLRouter(schema)

# Add GraphQL endpoint to FastAPI
app.include_router(graphql_app, prefix="/graphql")
```
`schema.py`:
```python
import strawberry
from typing import List, Optional
from datetime import datetime
from model.weather_model import WeatherModel

@strawberry.type
class WeatherPrediction:
    temperature: float
    humidity: float
    pressure: float
    wind_speed: float
    precipitation: float
    timestamp: datetime

@strawberry.type
class Query:
    @strawberry.field
    def forecast(
        self, 
        latitude: float, 
        longitude: float, 
        hours_ahead: int = 24
    ) -> List[WeatherPrediction]:
        # Get predictions from model
        model = WeatherModel()
        predictions = model.predict(latitude, longitude, hours_ahead)
        return predictions
```
```python
# model/weather_model.py
from datetime import datetime, timedelta
import numpy as np

class WeatherModel:
    def __init__(self):
        # Load your trained model here
        # self.model = load_model("path_to_model")
        pass

    def predict(self, latitude: float, longitude: float, hours_ahead: int) -> list:
        # This is where you'd implement your actual model inference
        # For now, returning dummy data
        predictions = []
        base_time = datetime.now()
        
        for hour in range(hours_ahead):
            predictions.append({
                "temperature": float(np.random.normal(20, 5)),
                "humidity": float(np.random.uniform(40, 80)),
                "pressure": float(np.random.normal(1013, 5)),
                "wind_speed": float(np.random.uniform(0, 20)),
                "precipitation": float(np.random.uniform(0, 10)),
                "timestamp": base_time + timedelta(hours=hour)
            })
        return predictions
```
`Dockerfile`:
```Dockerfile
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

```

Components explanation:

1. Application Structure:
   - The API is organized into separate modules for clarity and maintainability
   - GraphQL schema is defined separately from the main application code
   - Model inference is encapsulated in its own class

2. GraphQL Implementation:
   - Uses Strawberry, which provides excellent type safety and integration with FastAPI
   - Defines a WeatherPrediction type that includes common weather variables
   - Query interface allows requesting forecasts by latitude, longitude, and time range

3. Model Integration:
   - The WeatherModel class is where you'll integrate your actual trained model
   - Currently contains placeholder code that you'll replace with your model loading and inference
   - Structured to handle batched predictions for multiple timesteps

4. Containerization:
   - Uses a lightweight Python base image to minimize container size
   - Includes all necessary dependencies in requirements.txt
   - Configured for production deployment with uvicorn server

To deploy this solution:

```bash
# Build the Docker image
docker build -t weather-forecast-api .

# Run the container
docker run -p 8000:8000 weather-forecast-api
```

You can then access the GraphQL playground at `http://localhost:8000/graphql` and make queries like:

```graphql
query {
  forecast(latitude: 40.7128, longitude: -74.0060, hoursAhead: 24) {
    temperature
    humidity
    pressure
    windSpeed
    precipitation
    timestamp
  }
}
```

To extend this further, you might want to consider:

1. Adding authentication and rate limiting
2. Implementing caching for frequent predictions
3. Adding input validation for coordinate ranges
4. Implementing batch prediction endpoints
5. Adding monitoring and logging
6. Setting up health checks


### Heroku deployment

Heroku Github Student Developer pack: 13$/month worth of heroku credits per 12 months. See [here](https://blog.heroku.com/github-student-developer-program).