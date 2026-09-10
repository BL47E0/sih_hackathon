-- Demo Project
INSERT INTO projects (
    id,
    name,
    industry,
    location,
    investment_amount,
    project_stage
)
VALUES (
    'd7b244af-6264-41dd-80b6-79e0528159b7',
    'Maharashtra Food Processing Unit',
    'food_processing',
    'Maharashtra',
    150000000,
    'pre_establishment'
);


-- Approvals
INSERT INTO approvals (
    id,
    name,
    department,
    description,
    official_url,
    approval_stage
)
VALUES
(
    'cdb10e55-a774-4f0a-83ed-787f0618d745',
    'MPCB Consent to Establish',
    'Maharashtra Pollution Control Board',
    'Consent required before establishing an applicable industrial project.',
    'https://www.mpcb.gov.in/en/consentmgt/water-and-air-act',
    'pre_establishment'
),
(
    '67498ff0-f4cc-4014-89b8-828833c75c62',
    'Fire Approval',
    'Maharashtra Fire & Emergency Services',
    'Fire safety approval applicable to projects based on their characteristics and requirements.',
    'https://mahafireservice.gov.in/e-fire.php',
    'pre_establishment'
),
(
    '15d6a26e-02ee-4ef2-8dc6-45f3fea489a9',
    'MPCB Consent to Operate',
    'Maharashtra Pollution Control Board',
    'Consent required before commencing production for an applicable industrial project.',
    'https://www.mpcb.gov.in/en/consentmgt/water-and-air-act',
    'post_establishment'
);


-- Project → Approvals
INSERT INTO project_approvals (
    project_id,
    approval_id,
    status,
    is_applicable
)
VALUES
(
    'd7b244af-6264-41dd-80b6-79e0528159b7',
    'cdb10e55-a774-4f0a-83ed-787f0618d745',
    'not_started',
    TRUE
),
(
    'd7b244af-6264-41dd-80b6-79e0528159b7',
    '67498ff0-f4cc-4014-89b8-828833c75c62',
    'not_started',
    TRUE
),
(
    'd7b244af-6264-41dd-80b6-79e0528159b7',
    '15d6a26e-02ee-4ef2-8dc6-45f3fea489a9',
    'not_started',
    TRUE
);


-- Requirements
INSERT INTO requirements (
    id,
    approval_id,
    name,
    description,
    required
)
VALUES
(
    '10000000-0000-0000-0000-000000000001',
    'cdb10e55-a774-4f0a-83ed-787f0618d745',
    'Project and site details',
    'Basic information about the industrial project and proposed site.',
    TRUE
),
(
    '10000000-0000-0000-0000-000000000002',
    'cdb10e55-a774-4f0a-83ed-787f0618d745',
    'Pollution control information',
    'Information about pollution sources and proposed pollution control measures.',
    TRUE
),
(
    '10000000-0000-0000-0000-000000000003',
    '67498ff0-f4cc-4014-89b8-828833c75c62',
    'Building and site details',
    'Details required for assessment of fire safety requirements.',
    TRUE
),
(
    '10000000-0000-0000-0000-000000000004',
    '67498ff0-f4cc-4014-89b8-828833c75c62',
    'Fire safety information',
    'Information about fire safety measures and systems proposed for the project.',
    TRUE
),
(
    '10000000-0000-0000-0000-000000000005',
    '15d6a26e-02ee-4ef2-8dc6-45f3fea489a9',
    'Pollution control systems',
    'Required pollution control systems should be in place before commencing production.',
    TRUE
);


-- Project → Requirements
INSERT INTO project_requirements (
    project_id,
    requirement_id,
    status
)
VALUES
(
    'd7b244af-6264-41dd-80b6-79e0528159b7',
    '10000000-0000-0000-0000-000000000001',
    'not_started'
),
(
    'd7b244af-6264-41dd-80b6-79e0528159b7',
    '10000000-0000-0000-0000-000000000002',
    'not_started'
),
(
    'd7b244af-6264-41dd-80b6-79e0528159b7',
    '10000000-0000-0000-0000-000000000003',
    'not_started'
),
(
    'd7b244af-6264-41dd-80b6-79e0528159b7',
    '10000000-0000-0000-0000-000000000004',
    'not_started'
),
(
    'd7b244af-6264-41dd-80b6-79e0528159b7',
    '10000000-0000-0000-0000-000000000005',
    'not_started'
);


-- Demo Schemes
INSERT INTO schemes (
    id,
    name,
    department,
    description,
    official_url,
    eligibility_industry,
    eligibility_location,
    min_investment,
    max_investment,
    project_stages
)
VALUES
(
    '20000000-0000-0000-0000-000000000001',
    'Maharashtra Industrial Investment Support Scheme',
    'Government of Maharashtra',
    'Example industrial support scheme for eligible investments and industrial activities in Maharashtra.',
    'https://industry.maharashtra.gov.in/',
    'manufacturing',
    'Maharashtra',
    10000000,
    NULL,
    'pre_establishment,establishment'
),
(
    '20000000-0000-0000-0000-000000000002',
    'Food Processing Industry Support Scheme',
    'Ministry of Food Processing Industries',
    'Example support scheme for eligible food processing projects and investments.',
    'https://www.mofpi.gov.in/',
    'food_processing',
    NULL,
    5000000,
    NULL,
    'pre_establishment,establishment'
),
(
    '20000000-0000-0000-0000-000000000003',
    'MSME Investment Support Scheme',
    'Government of Maharashtra',
    'Example support scheme for eligible MSME industrial projects in Maharashtra.',
    'https://industry.maharashtra.gov.in/',
    'manufacturing',
    'Maharashtra',
    5000000,
    NULL,
    'pre_establishment'
);


-- Approval Dependency
INSERT INTO dependencies (
    id,
    from_approval_id,
    to_approval_id,
    dependency_type,
    description
)
VALUES (
    '30000000-0000-0000-0000-000000000001',
    'cdb10e55-a774-4f0a-83ed-787f0618d745',
    '15d6a26e-02ee-4ef2-8dc6-45f3fea489a9',
    'prerequisite',
    'Consent to Establish must be completed before Consent to Operate.'
);