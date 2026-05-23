# VectorShift Frontend Technical Assessment

## Overview

This project is a workflow automation pipeline builder built using React Flow and FastAPI.

The application supports:
- Drag-and-drop workflow creation
- Custom workflow nodes
- Dynamic text variable parsing
- DAG (Directed Acyclic Graph) validation
- Frontend-backend pipeline parsing

---

## Features Implemented

### BaseNode Abstraction
Created a reusable `BaseNode` component to reduce duplication and support scalable node architecture.

### Additional Nodes
Added 5 new workflow nodes:
- API Node
- Delay Node
- Filter Node
- Email Node
- Math Node

### Dynamic Text Variables
The Text Node dynamically detects variables using syntax like:

{{name}}

and automatically generates input handles.

### DAG Validation
Implemented backend DAG validation using Kahn’s Algorithm.

### Pipeline Parsing
Backend returns:
- Number of nodes
- Number of edges
- DAG validation status

---

## Tech Stack

### Frontend
- React
- React Flow
- Zustand

### Backend
- FastAPI
- Python

---

## Setup Instructions

### Backend

```bash
cd backend
python -m venv venv
.\venv\Scripts\Activate
pip install -r requirements.txt
uvicorn main:app --reload