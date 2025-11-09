
# Laptop Price Predictor

> An AI-powered laptop price prediction web app built using Machine Learning, FastAPI, and HTML/CSS/JS. Deployed fully on Render (backend) and Netlify (frontend).

---

## About the Project

**Laptop Price Predictor** is a complete end-to-end machine learning project that allows users to predict the price of a laptop based on its specifications like brand, processor, RAM, GPU, and screen features.

This project includes:
- Data preprocessing,feature engineering & Exploraratory Data Analysis (EDA) in a Jupyter Notebook
- A trained ML model (`pipe.pkl`) deployed using FastAPI
- A clean HTML/CSS frontend using dropdowns for all laptop options
- Fully responsive UI deployed via Netlify

---

## Features at a Glance

| Feature | Description |
|--------|-------------|
| **Model Training** | Random Forest Regressor trained on cleaned laptop dataset |
| **Frontend UI** | HTML/CSS/JS responsive form with background image |
| **FastAPI Backend** | Predict prices using deployed `.pkl` model |
| **Dynamic Dropdowns** | Populated live from data using `/options` endpoint |
| **Full Deployment** | Frontend on Netlify, Backend on Render |

---

## ML Workflow – Jupyter Notebook Steps

### Data Preprocessing & Model Training

```python
import numpy as np
import pandas as pd
import seaborn as sns
from sklearn.metrics import r2_score
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler
import matplotlib.pyplot as plt
```

```python
df = pd.read_csv('laptop_data.csv')
df.duplicated().sum()
df.isnull().sum()
```

```python
# Feature Engineering & Encoding
# Model: RandomForestRegressor
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
from sklearn.ensemble import RandomForestRegressor
```

```python
# Save the model
import pickle
pickle.dump(pipeline, open('pipe.pkl', 'wb'))
```

> Full notebook: [`laptop price prediction.ipynb`](./laptop%20price%20prediction.ipynb)

---

## Project Structure

```
Laptop-Price-Predictor/
├── backend/
│   ├── main.py               # FastAPI backend
│   ├── pipe.pkl              # Trained ML model
│   ├── df.pkl                # Cleaned dataset for dropdowns
│   ├── requirements.txt      # Backend dependencies
│   └── render.yaml           # Render deployment config
├── frontend/
│   ├── index.html            # UI form
│   ├── style.css             # Responsive design with background
│   ├── app.js                # JS to connect to API
│   └── bg.jpg                # Background image
├── laptop price prediction.ipynb  # Jupyter Notebook
└── README.md                 # Project documentation
```

---

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript (Vanilla)
- **Backend:** FastAPI (Python)
- **Model:** RandomForestRegressor (scikit-learn)
- **Deployment:** Render (API), Netlify (UI)

---

## How to Run the Project Locally

### 1. Clone the repository
```bash
git clone https://github.com/farhannaushad08/Laptop-Price-Predictor.git
cd Laptop-Price-Predictor
```

### 2. Start Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### 3. Start Frontend
```bash
cd ../frontend
Open index.html in your browser (or use Live Server)
```

---

## Deployment

### Render (Backend)
- Live URL: [https://laptop-price-predictor-1-37nu.onrender.com](https://laptop-price-predictor-1-37nu.onrender.com)

### Netlify (Frontend)
- Live UI: [https://laptop-price-prediction-08.netlify.app](https://laptop-price-prediction-08.netlify.app)

---

## 🙌 Final Note

This project is a full-stack AI product simulation: built, trained, deployed, and connected entirely using open tools. It’s an excellent real-world example of how machine learning models are turned into usable applications for end-users.

---

