from fastapi import FastAPI

app = FastAPI(
    title="Industrial Compliance Intelligence API",
    version="0.1.0"
)


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
