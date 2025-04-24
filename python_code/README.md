# 🐍 Python Code for Coffee Shop Chatbot

This folder contains the Python code and Jupyter notebooks required to build and deploy the chatbot system for the coffee shop app. It’s the backbone of the backend—handling everything from agent logic to database construction and recommendation modeling.

---

## 📂 Directory Structure

<pre><code>|   ├── python_code
│   ├── API/               # Chatbot API for agent-based system
│   ├── dataset/           # Dataset for training recommendation engine    
│   ├── products/          # Product data (names, prices, descriptions, images)   
│   ├── build_vector_database.ipynb             # Builds vector database for RAG model   
│   ├── firebase_uploader.ipynb                 # Uploads products to Firebase    
│   ├── recommendation_engine_training.ipynb    # Trains recommendation engine 
</pre></code>

---

## 📚 Components Overview

### `API/`
Contains the backend logic that powers the chatbot’s agent-based system. It connects the front-end (React Native app) with AI models and data sources.

### `dataset/`
Houses a training dataset (e.g., from Kaggle) used to train the recommendation engine.

### `products/`
Contains product metadata such as names, prices, descriptions, and images—used for chatbot responses and app display.

### `build_vector_database.ipynb`
Builds the vector database for the Retrieval-Augmented Generation (RAG) system. This enables the chatbot to pull relevant product and menu info using semantic search.

### `firebase_uploader.ipynb`
Uploads product data to Firebase, enabling real-time syncing and access by the mobile app.

### `recommendation_engine_training.ipynb`
Trains the recommendation model using market basket analysis to suggest personalized product combinations.

---

## 🚀 Getting Started

You can follow along with my full setup in this YouTube tutorial (📺 *link coming soon!*), or follow the manual steps below:

---

### 1. 📦 Install Requirements
<pre><code>pip install -r requirements.txt
</code></pre>

### 2. 🤗 Set Up Hugging Face
- Create an account: [Hugging Face](https://huggingface.co/)
- Choose and accept access to your model of choice. For this project, I used [LLaMA 3](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct).
- Generate an access token: Hugging Face Access Tokens

### 3. ⚙️ Create .env File
- Create a .env file in the python_code/ directory and populate it like so:
<pre><code>MODEL_NAME=meta-llama/Meta-Llama-3-8B-Instruct
  HUGGINGFACE_TOKEN=`<your_huggingface_token>`
</code></pre>

### 4. 🚀 Set Up RunPod
- Sign up: [RunPod](https://www.runpod.io/)
- Create:
  - A Chatbot endpoint (for LLM inference)
  - An Embedding endpoint (for vector DB)
- Then add to .env:
<pre><code>RUNPOD_TOKEN=`<your_runpod_token>`
RUNPOD_CHATBOT_URL=`<your_chatbot_endpoint>`
RUNPOD_EMBEDDING_URL=`<your_embedding_endpoint>`
</code></pre>

### 5. 🌲 Set Up Pinecone
- Sign up: [Pinecone](https://www.pinecone.io/)

- Add to .env:
<pre><code>`PINECONE_API_KEY=<your_pinecone_api_key>`
  PINECONE_INDEX_NAME=`<your_index_name>`
</code></pre>

### 6. 🔥 Set Up Firebase
- Sign up: [Firebase](https://firebase.google.com/)
- Create a project and download the credentials file.
- Save the credentials JSON file and load it in your scripts
- Or paste key fields into your .env (for lightweight storage)

### 7. 📓 Run the Jupyter Notebooks
Now you’re ready to go!
- build_vector_database.ipynb → Build your semantic search DB
- recommendation_engine_training.ipynb → Train the product recommendation model
- firebase_uploader.ipynb → Upload products to Firebase
  
Just open and execute each cell in your favorite Jupyter environment.


