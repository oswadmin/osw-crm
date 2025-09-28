export interface Deal {
    name: string;
    slug: string;
    activeDeal: boolean;
    description: string;
}

export const dealsConfig = {
    Deals: [
        {
            name: "Fall Cleanup Special",
            slug: "fall-cleanup-special",
            activeDeal: true,
            description: "10% off all gutter and roof cleaning services."
        },
        // ... other deals
    ]
} as const;