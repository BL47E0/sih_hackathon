from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text
from sqlalchemy.orm import Session
from fastapi import Depends

from app.db.database import get_db
from app.api.routes.projects import router as projects_router
from app.api.routes.approvals import router as approvals_router

app = FastAPI(
    title="Industrial Compliance Intelligence API",
    version="0.1.0"
)

# Allow the Next.js frontend to communicate with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(projects_router)
app.include_router(approvals_router)

@app.get("/")
def root():
    return {
        "message": "Industrial Compliance Intelligence API is running"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }

@app.get("/db-test")
def database_test(db: Session = Depends(get_db)):
    result = db.execute(text("SELECT 1"))
    
    return {
        "status": "connected",
        "database": "Neon PostgreSQL",
        "result": result.scalar(),
    }