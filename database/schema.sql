CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(200) NOT NULL,
    industry VARCHAR(100) NOT NULL,
    business_type VARCHAR(50),
    location VARCHAR(100) NOT NULL,
    investment_amount NUMERIC(15,2),
    project_stage VARCHAR(50) NOT NULL,
    capacity VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE approvals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(200) NOT NULL,
    department VARCHAR(200) NOT NULL,
    description TEXT,
    official_url TEXT,
    approval_stage VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE project_approvals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID NOT NULL
        REFERENCES projects(id)
        ON DELETE CASCADE,
    approval_id UUID NOT NULL
        REFERENCES approvals(id)
        ON DELETE CASCADE,
    status VARCHAR(30) NOT NULL DEFAULT 'not_started',
    is_applicable BOOLEAN NOT NULL DEFAULT TRUE,
    notes TEXT,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (project_id, approval_id)
);

CREATE TABLE requirements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    approval_id UUID NOT NULL
        REFERENCES approvals(id)
        ON DELETE CASCADE,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    required BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE project_requirements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID NOT NULL
        REFERENCES projects(id)
        ON DELETE CASCADE,
    requirement_id UUID NOT NULL
        REFERENCES requirements(id)
        ON DELETE CASCADE,
    status VARCHAR(30) NOT NULL DEFAULT 'not_started',
    notes TEXT,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (project_id, requirement_id)
);

CREATE TABLE schemes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(200) NOT NULL,
    department VARCHAR(200),
    description TEXT,
    official_url TEXT,
    eligibility_industry VARCHAR(100),
    eligibility_location VARCHAR(100),
    min_investment NUMERIC(15,2),
    max_investment NUMERIC(15,2),
    project_stages VARCHAR(200)
);

CREATE TABLE dependencies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    from_approval_id UUID NOT NULL
        REFERENCES approvals(id)
        ON DELETE CASCADE,
    to_approval_id UUID NOT NULL
        REFERENCES approvals(id)
        ON DELETE CASCADE,
    dependency_type VARCHAR(50) NOT NULL,
    description TEXT
);